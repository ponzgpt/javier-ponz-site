// Two languages, built as real routes rather than swapped in the browser.
// English lives at /, Spanish at /es/ — each a separate static page with its
// own <html lang> and its own crawlable text, because the first reader of
// this site is often an ATS filter or an agent, and a JS-swapped translation
// is invisible to both.
//
// Anchors (#about, #now…) and static files (the CV PDF) are the same on
// every locale, so routes.mjs needs no lang-awareness — only prose keyed by
// `en`/`es` in ui.mjs and pages.mjs, and the `es` override layer on the
// records in site.ts/cv.mjs (see `pick`), does.
//
// Spanish is peninsular and deliberately free of anglicisms where a plain
// Spanish word does the job: "correo" not "email", "puesto" not "rol",
// "aspecto" for a visual skin. Product and technology names stay as they are.

export const locales = [
  { code: 'en', label: 'EN', name: 'English', html: 'en-US' },
  { code: 'es', label: 'ES', name: 'Español', html: 'es-ES' }
];

export const defaultLocale = 'en';

/** Site-absolute path to the home page in a given language. */
export function localeHome(lang) {
  return lang === defaultLocale ? '/' : `/${lang}/`;
}

/** Merge a record's `es` override layer over its English fields. English
 * fields the override omits pass through unchanged — an override only ever
 * needs to name what actually changes. */
export function pick(item, lang) {
  if (lang === defaultLocale || !item) return item;
  const { es, ...base } = item;
  return { ...base, ...(es || {}) };
}
