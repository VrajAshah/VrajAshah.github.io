import { test, expect } from '@playwright/test';

const motionButton = page => page.locator('button[data-motion]');
const animationName = page => page.locator('.orbit-one').evaluate(el => getComputedStyle(el).animationName);

test('an explicit motion choice overrides reduced motion and survives navigation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(motionButton(page)).toHaveAttribute('aria-pressed', 'false');
  expect(await animationName(page)).toBe('none');

  await motionButton(page).click();
  await expect(motionButton(page)).toHaveText('Motion on');
  await expect.poll(() => animationName(page)).not.toBe('none');
  await page.locator('.orbital').scrollIntoViewIfNeeded();
  const start = await page.locator('.orbit-one').evaluate(el => getComputedStyle(el).transform);
  await expect.poll(() => page.locator('.orbit-one').evaluate(el => getComputedStyle(el).transform)).not.toBe(start);

  await page.reload();
  await expect(motionButton(page)).toHaveAttribute('aria-pressed', 'true');
  expect(await animationName(page)).not.toBe('none');
  await page.goto('/projects/reposense/');
  await expect(motionButton(page)).toHaveAttribute('aria-pressed', 'true');
  await motionButton(page).click();
  await page.goto('/');
  await expect(motionButton(page)).toHaveText('Motion off');
  expect(await animationName(page)).toBe('none');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await expect(motionButton(page)).toHaveAttribute('aria-pressed', 'false');
});

test('system preference supplies the default until the visitor chooses', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  await expect(motionButton(page)).toHaveAttribute('aria-pressed', 'true');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(motionButton(page)).toHaveAttribute('aria-pressed', 'false');
  expect(await animationName(page)).toBe('none');
  await motionButton(page).click();
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(motionButton(page)).toHaveAttribute('aria-pressed', 'true');
  expect(await animationName(page)).not.toBe('none');
});

test('motion controls still work when browser storage is unavailable', async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(window, 'localStorage', {
    get() { throw new DOMException('Storage unavailable', 'SecurityError'); },
  }));
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await motionButton(page).click();
  await expect(motionButton(page)).toHaveAttribute('aria-pressed', 'true');
  expect(await animationName(page)).not.toBe('none');
});

test('mobile icons are visible vectors and navigation fits the viewport', async ({ page }, testInfo) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/');
  expect(await page.locator('body').innerText()).not.toMatch(/[\u2197\u2198\u2733\u25c9]/);
  for (const selector of ['.hero-actions .button', '.personal-stamp', '.contact-email', '.socials a']) {
    const svg = page.locator(selector).first().locator('svg').first();
    await expect(svg).toBeVisible();
    const size = await svg.boundingBox();
    expect(size.width).toBeGreaterThan(5);
    expect(size.height).toBeGreaterThan(5);
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.locator('[data-menu]').click();
  await page.locator('#navigation a').filter({ hasText: 'Work' }).click();
  await expect(page.locator('[data-menu]')).toHaveAttribute('aria-expanded', 'false');
  await page.screenshot({ path: testInfo.outputPath('home.png'), fullPage: true });
  await page.locator('.project-card').first().click();
  await expect(page).toHaveURL(/\/projects\/reposense\/$/);
  expect(await page.locator('body').innerText()).not.toMatch(/[\u2197\u2198\u2733]/);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  expect(errors).toEqual([]);
});

test('reduced motion remains respected without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: 'reduce', viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4175/');
  expect(await animationName(page)).toBe('none');
  await expect(page.locator('#navigation')).toBeVisible();
  await context.close();
});
