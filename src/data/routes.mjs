// Page copy uses {about}, {thoughts} … placeholders instead of hard-coded
// hrefs. Everything is an anchor into the single long page now, except
// `home` (the page root) and `cv` (the static PDF).
const TOKENS = {
  about: '#about', thoughts: '#thoughts', agents: '#agents', workbench: '#projects',
  memento: '#case-study', contact: '#contact', timeline: '#timeline',
  cv: '/javier-ponz-prado-cv.pdf', now: '#now', home: '/'
};

export function expand(html) {
  return String(html).replace(/\{(\w+)\}/g, (m, k) => TOKENS[k] ?? m);
}
