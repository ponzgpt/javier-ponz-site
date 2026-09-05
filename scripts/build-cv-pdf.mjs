#!/usr/bin/env node
/**
 * Generates public/javier-ponz-prado-cv.pdf from src/data/cv.mjs.
 *
 * The web page at /cv and this PDF read from the same module, so the two
 * cannot drift apart. The only difference is that entries marked
 * `private: true` (the phone number) are written here and never rendered
 * on the public page.
 *
 * The layout is deliberately plain and single-column. The first reader of a
 * CV is now usually software — an ATS or an agent — and multi-column layouts
 * scramble text-extraction order, so nothing here depends on visual position.
 * Everything is real selectable text; no facts live inside images.
 *
 *   node scripts/build-cv-pdf.mjs
 */

import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync, existsSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { person, profile, shipped, experience, education, skills } from '../src/data/cv.mjs';

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

const entry = (e) => `
  <article class="entry">
    <h3>${esc(e.title)}</h3>
    <p class="when">${esc(e.when)}</p>
    ${e.where ? `<p class="where">${esc(e.where)}</p>` : ''}
    ${e.body ? `<p class="body">${esc(e.body)}</p>` : ''}
  </article>`;

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${esc(person.name)} — CV</title>
<style>
  @page { size: A4; margin: 15mm 16mm; }
  * { box-sizing: border-box; }
  body { margin:0; font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;
         font-size:9.7pt; line-height:1.42; color:#111; }
  h1 { font-size:20pt; margin:0 0 3px; letter-spacing:-.01em; }
  .headline { font-size:10pt; font-weight:700; color:#3a3a3a; margin:0 0 5px; }
  .contact { font-size:8.7pt; color:#333; margin:0 0 4px; }
  h2 { font-size:8.6pt; letter-spacing:.14em; text-transform:uppercase; color:#555;
       border-bottom:1px solid #b9b9b9; padding-bottom:3px; margin:15px 0 9px; }
  .entry { margin-bottom:10px; page-break-inside:avoid; }
  .entry h3 { font-size:10pt; margin:0 0 1px; }
  .when { font-size:8.5pt; color:#666; margin:0 0 1px; }
  .where { font-size:8.8pt; color:#444; margin:0 0 3px; }
  .body { margin:0; }
  p { margin:0 0 5px; }
  .skills p { margin:0 0 4px; }
  .skills strong { font-weight:700; }
</style></head><body>

<header>
  <h1>${esc(person.name)}</h1>
  <p class="headline">${esc(person.headline)}</p>
  <p class="contact">${esc(person.location)}</p>
  <p class="contact">${person.contact.map((c) => `${esc(c.label)}: ${esc(c.value)}`).join(' · ')}</p>
</header>

<h2>Profile</h2>
${profile.map((p) => `<p>${esc(p)}</p>`).join('\n')}

<h2>Selected work</h2>
${shipped.map(entry).join('\n')}

<h2>Experience</h2>
${experience.map(entry).join('\n')}

<h2>Education and certifications</h2>
${education.map(entry).join('\n')}

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
