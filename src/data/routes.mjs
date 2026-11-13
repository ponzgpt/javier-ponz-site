// Page copy uses {now}, {work} … placeholders instead of hard-coded hrefs.
// Everything is an anchor into the single long page, except `home` (the page
// root), `cv` (the static PDF) and the external references.
const TOKENS = {
  now: '#now', work: '#work', rig: '#rig', story: '#story', notes: '#notes', connect: '#connect',
  servant: 'https://en.wikipedia.org/wiki/Servant_leadership',
  mdib: 'https://machinesdoitbetter.beehiiv.com',
  cv: '/javier-ponz-prado-cv.pdf', home: '/'
};

export function expand(html) {
  return String(html).replace(/\{(\w+)\}/g, (m, k) => TOKENS[k] ?? m);
}
