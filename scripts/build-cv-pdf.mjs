#!/usr/bin/env node
/**
 * Generates public/javier-ponz-prado-cv.pdf from src/data/cv.mjs.
 *
 * The Contact section's CV disclosure and this PDF used to read from the
 * same module, so the two could not drift apart; the disclosure is gone
 * from the page now (the PDF is a Home CTA instead), but this still reads
 * the same source module as everything else. The only difference is that
 * entries marked `private: true` (the phone number) are written here and
 * never rendered on the public page.
 *
 * One page, deliberately: a decade in one field plus two years transitioning
 * into another does not need three. Sections read as bullets to scan, not
 * paragraphs to read start to finish; "Selected work" collapsed into one
 * line pointing at the site and GitHub, because the portfolio is the place
 * for the long version, not the CV. Bold entry titles instead of colour, so
 * it still reads correctly if printed in black and white.
 *
 * Layout is single-column on purpose. The first reader of a CV is now
 * usually software — an ATS or an agent — and multi-column layouts scramble
 * text-extraction order, so nothing here depends on visual position.
 * Everything is real selectable text; no facts live inside images.
 *
 *   node scripts/build-cv-pdf.mjs
 */

import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync, existsSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { person, cvSummary, cvBuilding, experience, education, certifications, skills } from '../src/data/cv.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public', 'javier-ponz-prado-cv.pdf');

const CHROME_CANDIDATES = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser'
];

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const role = (e) => `
  <article class="entry">
    <div class="entry-head"><h3>${esc(e.title)}</h3><span class="when">${esc(e.when)}</span></div>
    ${e.where ? `<p class="where">${esc(e.where)}</p>` : ''}
    <ul>${e.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
  </article>`;

const edu = (e) => `
  <div class="edu-row">
    <div class="entry-head"><h3>${esc(e.title)}</h3><span class="when">${esc(e.when)}</span></div>
    <p class="where">${esc(e.where)}</p>
  </div>`;

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${esc(person.name)} — CV</title>
<style>
  @page { size: A4; margin: 12mm 16mm; }
  * { box-sizing: border-box; }
  body { margin:0; font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
         font-size:9.5pt; line-height:1.34; color:#161616; }
  h1 { font-size:21pt; margin:0 0 2px; letter-spacing:-.01em; }
  .headline { font-size:10.5pt; font-weight:700; color:#2f6fd6; margin:0 0 6px; }
  .contact { font-size:8.8pt; color:#333; margin:0; }
  h2 { font-size:8.2pt; letter-spacing:.13em; text-transform:uppercase; color:#2f6fd6;
       border-bottom:1px solid #d3d3d3; padding-bottom:2px; margin:12px 0 7px; }
  p { margin:0 0 6px; }
  .entry { margin-bottom:7px; page-break-inside:avoid; }
  .entry-head { display:flex; justify-content:space-between; align-items:baseline; gap:10px; }
  .entry h3 { font-size:9.8pt; margin:0; }
  .when { font-size:8.6pt; color:#666; white-space:nowrap; }
  .where { font-size:8.8pt; color:#444; margin:0 0 3px; }
  ul { margin:2px 0 0; padding-left:14px; }
  li { margin:0 0 1px; }
  .edu-row { margin-bottom:5px; page-break-inside:avoid; }
  .edu-row h3 { font-size:9.6pt; margin:0; }
  .edu-row .where { margin:0; }
  .certs { margin:6px 0 0; color:#333; }
  .skills p { margin:0 0 4px; }
  .skills strong { font-weight:700; }
</style></head><body>

<header>
  <h1>${esc(person.name)}</h1>
  <p class="headline">${esc(person.headline)}</p>
  <p class="contact">${esc(person.location)} · ${person.contact.map((c) => esc(c.value)).join(' · ')}</p>
</header>

<h2>Profile</h2>
<p>${esc(cvSummary)}</p>
<p>${esc(cvBuilding)}</p>

<h2>Experience</h2>
${experience.map(role).join('\n')}

<h2>Education and certifications</h2>
${education.map(edu).join('\n')}
<p class="certs">${esc(certifications)}</p>

<h2>Skills</h2>
<div class="skills">
${skills.map((s) => `<p><strong>${esc(s.group)}:</strong> ${esc(s.items.join(', '))}.</p>`).join('\n')}
</div>

</body></html>`;

const chrome = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error('No Chrome or Chromium found. Tried:\n  ' + CHROME_CANDIDATES.join('\n  '));
  process.exit(1);
}

const tmp = mkdtempSync(join(tmpdir(), 'cv-'));
const src = join(tmp, 'cv.html');
writeFileSync(src, html, 'utf8');

try {
  execFileSync(chrome, [
    '--headless', '--disable-gpu', '--no-pdf-header-footer',
    `--print-to-pdf=${out}`, `file://${src}`
  ], { stdio: 'pipe' });
} catch (err) {
  console.error('Chrome failed to render the PDF:', err.message);
  process.exit(1);
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

if (!existsSync(out)) {
  console.error('Chrome reported success but no PDF was written.');
  process.exit(1);
}
console.log(`wrote ${out} (${(statSync(out).size / 1024).toFixed(0)} KB)`);
