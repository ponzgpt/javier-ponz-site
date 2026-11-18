#!/usr/bin/env node
/**
 * Generates public/javier-ponz-prado-cv.pdf from src/data/cv.mjs with the
 * machine's Chrome (headless print to PDF).
 *
 * The phone number is not in this public repository. The published PDF has
 * none; a copy to send directly is built with it from the environment:
 *   CV_PHONE='+44 …' CV_OUT=~/somewhere/cv.pdf node scripts/build-cv-pdf.mjs
 *
 * Layout rules: one A4 page, single column (ATS and agents extract text in
 * DOM order, and multi-column layouts scramble it), real selectable text,
 * clickable links, black and white safe (hierarchy from weight and size,
 * never colour). Type is Inter, inlined from @fontsource/inter, on a strict
 * scale: 9 body, 10.5 titles and section heads, 13 headline, 22 name.
 *
 * Chrome writes no Author into the PDF, so after printing this appends an
 * incremental update with a new Info dictionary (Title and Author).
 *
 *   npm run cv:pdf
 */

import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, readFileSync, rmSync, existsSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { person, profile, experience, work, education, skills, certsAndLanguages } from '../src/data/cv.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = process.env.CV_OUT || join(root, 'public', 'javier-ponz-prado-cv.pdf');
const contact = process.env.CV_PHONE
  ? [person.contact[0], { value: process.env.CV_PHONE }, ...person.contact.slice(1)]
  : person.contact;

const TITLE = `${person.name} — CV`;
const AUTHOR = person.name;

const CHROME_CANDIDATES = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser'
];

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const link = (c) => (c.href ? `<a href="${esc(c.href)}">${esc(c.value)}</a>` : esc(c.value));

const fontDir = join(root, 'node_modules', '@fontsource', 'inter', 'files');
const fontFace = (weight) => {
  const file = join(fontDir, `inter-latin-${weight}-normal.woff2`);
  if (!existsSync(file)) {
    console.error(`Missing ${file}; @fontsource/inter is a dependency of this repo.`);
    process.exit(1);
  }
  const data = readFileSync(file).toString('base64');
  return `@font-face{font-family:"Inter";font-style:normal;font-weight:${weight};font-display:block;src:url(data:font/woff2;base64,${data}) format("woff2");}`;
};

const head = (title, when) =>
  `<div class="head"><h3>${esc(title)}</h3>${when ? `<span class="when">${esc(when)}</span>` : ''}</div>`;

const role = (e) => `
  <article class="entry">
    ${head(e.title, e.when)}
    <p class="where">${esc(e.where)}</p>
    <ul>${e.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
  </article>`;

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>${esc(TITLE)}</title><meta name="author" content="${esc(AUTHOR)}">
<style>
  ${[400, 500, 600, 700].map(fontFace).join('\n  ')}
  @page { size: A4; margin: 9mm 12mm 7mm; }
  * { box-sizing: border-box; }
  html { -webkit-print-color-adjust: exact; }
  body { margin: 0; font-family: "Inter", sans-serif; font-size: 9pt; line-height: 1.27;
         color: #111; font-feature-settings: "tnum" 0, "cv11" 1; }
  a { color: inherit; text-decoration: none; }
  p, ul { margin: 0; }

  header { margin-bottom: 7pt; }
  h1 { font-size: 22pt; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; margin: 0 0 3pt; }
  .headline { font-size: 13pt; font-weight: 500; line-height: 1.25; margin-bottom: 4pt; }
  .contact { color: #333; }
  .sep { color: #888; padding: 0 3pt; }

  section { margin-top: 6.5pt; }
  h2 { font-size: 10.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
       line-height: 1.2; border-bottom: 0.75pt solid #111; padding-bottom: 1.5pt; margin: 0 0 4pt;
       break-after: avoid; page-break-after: avoid; }


  .entry { break-inside: avoid; page-break-inside: avoid; }
  .entry + .entry { margin-top: 4.5pt; }
  .head { display: flex; justify-content: space-between; align-items: baseline; gap: 12pt; }
  h3 { font-size: 10.5pt; font-weight: 600; line-height: 1.3; margin: 0; }
  .when { font-weight: 500; white-space: nowrap; font-variant-numeric: tabular-nums; }
  .where { color: #444; font-weight: 400; }
  ul { padding-left: 11pt; margin-top: 1.5pt; }
  li { padding-left: 1pt; }
  li + li { margin-top: 0.5pt; }

  .rows > * { break-inside: avoid; page-break-inside: avoid; }
  .rows > * + * { margin-top: 2pt; }
  .rows strong { font-weight: 600; }
  .work .links { color: #333; }
  .work .links a { white-space: nowrap; }
  .edu .when { font-weight: 400; }
</style></head><body>

<header>
  <h1>${esc(person.name)}</h1>
  <p class="headline">${esc(person.headline)}</p>
  <p class="contact">${contact.slice(0, -2).map(link).join('<span class="sep">·</span>')}</p>
  <p class="contact">${[...contact.slice(-2).map(link), esc(person.location)].join('<span class="sep">·</span>')}</p>
</header>

<section class="profile">
  <h2>Profile</h2>
  <p>${esc(profile.join(' '))}</p>
</section>

<section>
  <h2>Experience</h2>
  ${experience.map(role).join('\n')}
</section>

<section class="work rows">
  <h2>Selected work</h2>
  ${work.map((w) => `<p><strong>${esc(w.title)}</strong>: ${esc(w.body)} <span class="links">${w.links.map(link).join(' · ')}</span></p>`).join('\n  ')}
</section>

<section class="edu rows">
  <h2>Education</h2>
  ${education.map((e) => `<div class="head"><p><strong>${esc(e.title)}</strong><span class="sep">·</span><span class="where">${esc(e.where)}</span></p><span class="when">${esc(e.when)}</span></div>`).join('\n  ')}
</section>

<section class="rows">
  <h2>Skills</h2>
  ${skills.map((s) => `<p><strong>${esc(s.group)}:</strong> ${esc(s.items.join(', '))}</p>`).join('\n  ')}
</section>

<section>
  <h2>Certifications and languages</h2>
  <p>${certsAndLanguages.map(esc).join('<span class="sep">·</span>')}</p>
</section>

</body></html>`;

// Appends an incremental update that replaces the document Info dictionary.
// Works on Chrome's (Skia's) classic xref-table PDFs; anything else fails loud.
function setInfo(file, fields) {
  const buf = readFileSync(file);
  const text = buf.toString('latin1');
  const sx = text.lastIndexOf('startxref');
  const trailerAt = text.lastIndexOf('trailer', sx);
  if (sx < 0 || trailerAt < 0) throw new Error('PDF has no classic trailer; cannot set Info');
  const prev = Number(/startxref\s+(\d+)/.exec(text.slice(sx))[1]);
  const trailer = text.slice(trailerAt, sx);
  const size = Number(/\/Size\s+(\d+)/.exec(trailer)[1]);
  const rootRef = /\/Root\s+(\d+\s+\d+\s+R)/.exec(trailer)[1];
  const oldInfo = /\/Info\s+(\d+)\s+0\s+R/.exec(trailer);
  const keep = {};
  if (oldInfo) {
    const m = new RegExp(`(?:^|\\s)${oldInfo[1]}\\s+0\\s+obj\\s*<<([\\s\\S]*?)>>\\s*endobj`).exec(text);
    // Creator is dropped: Chrome fills it with its user agent.
    for (const k of ['Producer', 'CreationDate', 'ModDate']) {
      const at = m ? m[1].indexOf(`/${k}`) : -1;
      if (at < 0) continue;
      // Read one PDF literal string, honouring nested and escaped parentheses.
      let i = m[1].indexOf('(', at), depth = 0, j = i;
      if (i < 0) continue;
      for (; j < m[1].length; j++) {
        const c = m[1][j];
        if (c === '\\') { j++; continue; }
        if (c === '(') depth++;
        if (c === ')' && --depth === 0) break;
      }
      keep[k] = m[1].slice(i, j + 1);
    }
  }
  // UTF-16BE hex strings, so the dash in the title survives.
  const pdfString = (s) => '<FEFF' + [...s].map((c) => c.charCodeAt(0).toString(16).padStart(4, '0')).join('') + '>';
  const entries = { ...keep, ...Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, pdfString(v)])) };
  const objNum = size;
  const sep = buf[buf.length - 1] === 0x0a ? '' : '\n';
  const objOffset = buf.length + sep.length;
  const obj = `${objNum} 0 obj\n<<${Object.entries(entries).map(([k, v]) => `/${k} ${v}`).join(' ')}>>\nendobj\n`;
  const xrefOffset = objOffset + obj.length;
  const xref = `xref\n${objNum} 1\n${String(objOffset).padStart(10, '0')} 00000 n \ntrailer\n<</Size ${objNum + 1} /Root ${rootRef} /Info ${objNum} 0 R /Prev ${prev}>>\nstartxref\n${xrefOffset}\n%%EOF\n`;
  writeFileSync(file, Buffer.concat([buf, Buffer.from(sep + obj + xref, 'latin1')]));
}

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
    '--headless', '--disable-gpu', '--no-pdf-header-footer', '--user-data-dir=' + join(tmp, 'profile'),
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
setInfo(out, { Title: TITLE, Author: AUTHOR });
console.log(`wrote ${out} (${(statSync(out).size / 1024).toFixed(0)} KB)`);
