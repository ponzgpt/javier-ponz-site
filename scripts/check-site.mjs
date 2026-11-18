// Runs after `astro build` (part of `npm run build`). Fails if:
// - the en and es copy objects differ in keys (deep, arrays by index) or any value is empty;
// - a built page lacks its `lang` or its hreflang alternates (en, es, x-default);
// - an internal href/src in dist does not resolve to a file (or a same-page #anchor to an id);
// - "nerion" or "gmail" appears anywhere in dist;
// - the Email tab does not carry jponz@proton.me;
// - a frozen page in dist/v lacks noindex or its banner, links outside its copy, or has an unresolved asset or old contact detail.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { copy, shared } from '../src/data/copy.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const errors = [];
const fail = (m) => errors.push(m);

// 1. copy parity
function walk(a, b, path) {
  const ta = Array.isArray(a) ? 'array' : typeof a, tb = Array.isArray(b) ? 'array' : typeof b;
  if (ta !== tb) return fail(`copy: ${path} is ${ta} in en, ${tb} in es`);
  if (ta === 'string') {
    if (!a.trim()) fail(`copy: ${path} is empty in en`);
    if (!b.trim()) fail(`copy: ${path} is empty in es`);
    return;
  }
  if (ta === 'array' && a.length !== b.length) return fail(`copy: ${path} has ${a.length} items in en, ${b.length} in es`);
  if (ta === 'array' || ta === 'object') {
    const ka = Object.keys(a), kb = Object.keys(b);
    if (!ka.length) fail(`copy: ${path} is empty`);
    for (const k of new Set([...ka, ...kb])) {
      if (!(k in a)) fail(`copy: ${path}.${k} missing in en`);
      else if (!(k in b)) fail(`copy: ${path}.${k} missing in es`);
      else walk(a[k], b[k], `${path}.${k}`);
    }
  }
}
walk(copy.en, copy.es, 'copy');

if (!existsSync(dist)) { console.error('check-site: no dist/; run astro build first'); process.exit(1); }
const files = [];
(function ls(d) { for (const f of readdirSync(d)) { const p = join(d, f); statSync(p).isDirectory() ? ls(p) : files.push(p); } })(dist);
const html = files.filter((f) => f.endsWith('.html'));
const read = (f) => readFileSync(f, 'utf8');

// 2. lang and hreflang on both pages
for (const [file, lang] of [['index.html', 'en'], ['es/index.html', 'es']]) {
  const p = join(dist, file);
  if (!existsSync(p)) { fail(`${file} missing`); continue; }
  const s = read(p);
  if (!new RegExp(`<html[^>]*\\slang="${copy[lang].htmlLang}"`).test(s)) fail(`${file}: <html lang="${copy[lang].htmlLang}"> missing`);
  for (const [hl, href] of [['en', '/'], ['es', '/es/'], ['x-default', '/']]) {
    const re = new RegExp(`<link[^>]*rel="alternate"[^>]*hreflang="${hl}"[^>]*href="${shared.site}${href}"`);
    if (!re.test(s)) fail(`${file}: hreflang="${hl}" alternate missing`);
  }
  // 5. the Email tab copies the address
  if (!/<button[^>]*data-copy="jponz@proton\.me"/.test(s)) fail(`${file}: Email tab does not carry jponz@proton.me`);
}

// 3. internal links resolve
for (const f of html) {
  const s = read(f), ids = new Set([...s.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const m of s.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const u = m[1];
    if (/^(https?:|mailto:|tel:|data:|\/\/)/.test(u)) continue;
    if (u.startsWith('#')) { if (u.length > 1 && !ids.has(u.slice(1))) fail(`${relative(dist, f)}: ${u} has no target`); continue; }
    const path = u.split(/[?#]/)[0];
    const abs = path.startsWith('/') ? join(dist, path) : join(dirname(f), path);
    const ok = path.endsWith('/') ? existsSync(join(abs, 'index.html')) : existsSync(abs) && statSync(abs).isFile() || existsSync(join(abs, 'index.html'));
    if (!ok) fail(`${relative(dist, f)}: ${u} does not resolve`);
  }
}

// 4. the old address appears nowhere
for (const f of files) {
  const s = readFileSync(f).toString('latin1');
  const m = s.match(/nerion|gmail/i);
  if (m) fail(`${relative(dist, f)}: contains "${m[0]}"`);
}

// 6. the frozen earlier versions in dist/v: noindex, the archive banner, links that stay inside their copy,
//    asset paths in CSS url() and in scripts that resolve, and no old contact details.
const vdir = join(dist, 'v');
const resolves = (p) => { const abs = join(dist, p); return p.endsWith('/') ? existsSync(join(abs, 'index.html')) : existsSync(abs) && statSync(abs).isFile() || existsSync(join(abs, 'index.html')); };
for (const f of files.filter((f) => f.startsWith(vdir + '/'))) {
  const rel = relative(dist, f), s = readFileSync(f).toString('latin1');
  const m = s.match(/\+34|tel:/i);
  if (m && /\.(html|js|css|txt|json)$/.test(f)) fail(`${rel}: contains "${m[0]}"`);
  if (f.endsWith('.css')) for (const [, u] of s.matchAll(/url\(["']?(\/[^"')]+)["']?\)/g)) if (!resolves(u.split(/[?#]/)[0])) fail(`${rel}: url(${u}) does not resolve`);
  if (!/\.(html|js)$/.test(f)) continue;
  for (const [, u] of s.matchAll(/["'`](\/v\/[^"'`\s?#]+)/g)) if (!resolves(u)) fail(`${rel}: ${u} does not resolve`);
  if (!f.endsWith('.html')) continue;
  if (!/<meta name="robots" content="noindex">/.test(s)) fail(`${rel}: noindex missing`);
  if (rel === 'v/index.html') continue;
  if (!/<div id="v-archive" role="note"/.test(s)) fail(`${rel}: archive banner missing`);
  const page = s.replace(/<div id="v-archive"[\s\S]*?<\/div>/, '');
  for (const [, u] of page.matchAll(/\s(?:href|src|srcset)="(\/(?!\/)[^"]*)"/g)) {
    if (!u.startsWith('/v/') && u !== '/javier-ponz-prado-cv.pdf') fail(`${rel}: ${u} leaves the frozen copy`);
  }
}

if (errors.length) { console.error('check-site failed:\n- ' + errors.join('\n- ')); process.exit(1); }
console.log(`check-site: ok (copy parity, ${html.length} pages, hreflang, links, no stale address, email tab, frozen versions)`);
