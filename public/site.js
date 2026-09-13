const root = document.documentElement;
root.dataset.js = 'true';
const motionButton = document.querySelector('button[data-motion]');
const preference = matchMedia('(prefers-reduced-motion: reduce)');
let stored;
try { stored = localStorage.getItem('vraj-motion'); } catch {}
let motion = stored ? stored === 'on' : !preference.matches;
function updateMotion() {
  root.dataset.motion = motion ? 'on' : 'off';
  motionButton.setAttribute('aria-pressed', String(motion));
  motionButton.textContent = `Motion ${motion ? 'on' : 'off'} ${motion ? '◉' : '○'}`;
}
updateMotion();
motionButton.addEventListener('click', () => { motion = !motion; updateMotion(); try { localStorage.setItem('vraj-motion', motion ? 'on' : 'off'); } catch {} });
preference.addEventListener('change', e => { motion = !e.matches; updateMotion(); });
const menu = document.querySelector('[data-menu]');
const nav = document.querySelector('#navigation');
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(expanded));
  nav.classList.toggle('is-open', expanded);
});
function closeMenu() { nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); }
nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { closeMenu(); menu.focus(); } });
const copy = document.querySelector('[data-copy]');
copy?.addEventListener('click', async () => {
  const status = document.querySelector('[data-copy-status]');
  try { await navigator.clipboard.writeText(copy.dataset.copy); status.textContent = 'Email copied to clipboard.'; }
  catch { status.textContent = 'Copy unavailable. Use the email link to get in touch.'; }
  setTimeout(() => { status.textContent = ''; }, 4000);
});
