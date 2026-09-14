// Page copy uses {about}, {projects} … placeholders instead of hard-coded
// hrefs. Everything is an anchor into the single long page, except `home`
// (the page root), `cv` (the static PDF) and the two external references.
const TOKENS = {
  about: '#about', experience: '#experience', projects: '#projects',
  skills: '#skills', achievements: '#achievements', newsletter: '#newsletter',
  contact: '#contact', casestudy: '#case-study',
  servant: 'https://en.wikipedia.org/wiki/Servant_leadership',
  mdib: 'https://machinesdoitbetter.beehiiv.com',
  cv: '/javier-ponz-prado-cv.pdf', home: '/'
};

export function expand(html) {
  return String(html).replace(/\{(\w+)\}/g, (m, k) => TOKENS[k] ?? m);
}
