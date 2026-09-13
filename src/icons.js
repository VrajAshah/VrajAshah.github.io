// Inline vector icons keep their shape and color on platforms with emoji fonts.
const paths = {
  'arrow-up-right': '<path d="M6 18 18 6M6 6h12v12"/>',
  'arrow-down-right': '<path d="m6 6 12 12M6 18h12V6"/>',
  'arrow-right': '<path d="M4 12h16m-6-6 6 6-6 6"/>',
  'arrow-left': '<path d="M20 12H4m6-6-6 6 6 6"/>',
  'arrow-down': '<path d="M12 4v16m-6-6 6 6 6-6"/>',
  'turn-right': '<path d="M6 4v12h14m-5-5 5 5-5 5"/>',
  asterisk: '<path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V4H4v12h4"/>',
  command: '<path d="M8 8h8v8H8zM8 8H5a3 3 0 1 1 3-3v3Zm8 0V5a3 3 0 1 1 3 3h-3Zm0 8h3a3 3 0 1 1-3 3v-3Zm-8 0v3a3 3 0 1 1-3-3h3Z"/>',
};

export function icon(name) {
  if (!paths[name]) throw new Error(`Unknown icon: ${name}`);
  return `<span class="icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" focusable="false">${paths[name]}</svg></span>`;
}
