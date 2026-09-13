const root = document.documentElement;
root.dataset.js = 'true';
const motionButton = document.querySelector('button[data-motion]');
const motionLabel = motionButton.querySelector('[data-motion-label]');
const preference = matchMedia('(prefers-reduced-motion: reduce)');
let stored = null;
try { stored = localStorage.getItem('vraj-motion'); } catch {}
if (stored !== 'on' && stored !== 'off') stored = null;
let motion = stored !== null ? stored === 'on' : !preference.matches;
function updateMotion() {
  root.dataset.motion = motion ? 'on' : 'off';
  motionButton.setAttribute('aria-pressed', String(motion));
  motionLabel.textContent = `Motion ${motion ? 'on' : 'off'}`;
}
updateMotion();
motionButton.addEventListener('click', () => {
  motion = !motion;
  stored = motion ? 'on' : 'off';
  updateMotion();
  try { localStorage.setItem('vraj-motion', stored); } catch {}
});
function followSystemPreference(event) {
  // The OS supplies the default; an explicit site preference takes precedence.
  if (stored === null) { motion = !event.matches; updateMotion(); }
}
if (preference.addEventListener) preference.addEventListener('change', followSystemPreference);
else preference.addListener(followSystemPreference);
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
