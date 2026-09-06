// One getStaticPaths for every page: English at /, the rest under /<code>/.
// A rest parameter of undefined renders at the root, which is why the default
// locale gets no prefix and existing links keep working.
import { codes, defaultLocale } from './i18n.mjs';

export function localePaths() {
  return codes.map((c) => ({ params: { locale: c === defaultLocale ? undefined : c } }));
}

/** Strip the locale prefix off a pathname, so /es/about → /about. */
export function bare(pathname) {
  const m = pathname.match(/^\/(es|zh)(\/|$)/);
  return m ? pathname.slice(m[1].length + 1) || '/' : pathname;
}

// Page copy uses {about}, {thesis} … placeholders instead of hard-coded hrefs,
// so a link written once resolves to the right locale on all three builds.
const TOKENS = {
  about: '/about', thesis: '/thesis', agents: '/agents', workbench: '/workbench',
  memento: '/memento-mori', contact: '/contact', timeline: '/timeline',
  cv: '/cv', now: '/now', home: '/'
};

export function expand(html, lang, href) {
  return String(html).replace(/\{(\w+)\}/g, (m, k) =>
    TOKENS[k] ? href(TOKENS[k], lang) : m);
}
