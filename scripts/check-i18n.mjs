#!/usr/bin/env node
/**
 * One runnable check for the three translations.
 *
 * The way a multilingual site rots is not a crash — it is a page that quietly
 * falls back to English because somebody added a key in one language and not
 * the others. This walks every dictionary and every data overlay and fails on
 * the first gap, so the rot is loud.
 *
 *   node scripts/check-i18n.mjs
 */
import assert from 'node:assert/strict';
import { codes, ui, locales, defaultLocale, href, pick } from '../src/data/i18n.mjs';
import { pages } from '../src/data/pages.mjs';
import { cvFor } from '../src/data/cv.mjs';

const problems = [];
const need = (cond, msg) => { if (!cond) problems.push(msg); };

assert.equal(locales.length, codes.length);
need(codes.includes(defaultLocale), 'defaultLocale is not in codes');

// every ui entry carries every language
(function walk(node, path) {
  if (node && typeof node === 'object' && !Array.isArray(node)) {
    const keys = Object.keys(node);
    const isLeaf = codes.some((c) => keys.includes(c));
    if (isLeaf) {
      for (const c of codes) need(node[c] !== undefined, `ui.${path} is missing "${c}"`);
      return;
    }
    for (const k of keys) walk(node[k], path ? `${path}.${k}` : k);
  }
})(ui, '');

// every page exists in every language with the same section count
for (const [name, byLang] of Object.entries(pages)) {
  for (const c of codes) need(byLang[c], `pages.${name} is missing "${c}"`);
  const counts = codes.map((c) => (byLang[c]?.sections ?? []).length);
  need(new Set(counts).size === 1, `pages.${name} section counts differ: ${counts.join('/')}`);
  for (const c of codes) {
    const p = byLang[c];
    if (!p) continue;
    for (const f of ['title', 'desc']) {
      need(p[f], `pages.${name}.${c} is missing "${f}"`);
    }
    // the CV page builds its standfirst from cv.mjs, so it has no hero prose
    if (p.h1) for (const f of ['kicker', 'serif', 'lede']) {
      need(p[f], `pages.${name}.${c} is missing "${f}"`);
    }
  }
}

// the CV merges cleanly in all three, with no English left in the ES/ZH prose
for (const c of codes) {
  const cv = cvFor(c);
  for (const f of ['headline', 'location', 'profile', 'shipped', 'experience', 'education', 'skills']) {
    need(cv[f], `cvFor("${c}") is missing "${f}"`);
  }
  need(cv.profile.length === cvFor('en').profile.length, `cvFor("${c}").profile length differs`);
  if (c !== 'en') {
    need(cv.headline !== cvFor('en').headline, `cvFor("${c}").headline was never translated`);
    need(cv.profile[0] !== cvFor('en').profile[0], `cvFor("${c}").profile[0] was never translated`);
  }
}

// pick() actually overlays
const sample = { title: 'x', kind: 'web app', es: { kind: 'aplicación web' } };
assert.equal(pick(sample, 'es').kind, 'aplicación web');
assert.equal(pick(sample, 'en').kind, 'web app');
assert.equal(pick(sample, 'zh').kind, 'web app', 'missing overlay should fall back, not blank');

// href() builds the routes the pages are actually generated at
assert.equal(href('/about', 'en'), '/about');
assert.equal(href('/about', 'es'), '/es/about');
assert.equal(href('/', 'zh'), '/zh/');

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  problems.forEach((p) => console.error('  ' + p));
  process.exit(1);
}
console.log(`${codes.length} languages × ${Object.keys(pages).length} page blocks: complete`);
