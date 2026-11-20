// Runs after `astro build` (part of `npm run build`). Fails if:
// - the en and es copy objects differ in keys (deep, arrays by index) or any value is empty;
// - a built page lacks its `lang` or its hreflang alternates (en, es, x-default);
// - an internal href/src in dist does not resolve to a file (or a same-page #anchor to an id);
// - "nerion" or "gmail" appears anywhere in dist, or a stale fact (phone, Cambridge/CAE, the plugins as unmerged) in any text file;
// - the Email tab does not carry jponz@proton.me;
// - a frozen page in dist/v lacks noindex or its corner ribbon with the version switcher inside (v1-v6, the right one current,
//   every link resolving), still has the old ribbon or bottom switcher, links outside its copy, or has an unresolved asset or old contact detail.
// - the language redirect is missing from /, present on /es/ or 404, or decides wrongly for a few browser languages and stored choices;
// - p. 6 (the skills sheet) names "Syl" or technoir.cloud.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import vm from 'node:vm';
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
  if (!/\.(html|js|css|txt|json|xml|svg|md)$/.test(f)) continue;
  const st = s.match(/tel:|\+34|Cambridge|\bCAE\b|awaiting re-review|submitted to the Hermes plugin catalog/);
  if (st) fail(`${relative(dist, f)}: stale fact "${st[0]}"`);
}

// 6. the frozen earlier versions in dist/v: noindex, the switcher ribbon, links that stay inside their copy,
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
  const slug = rel.split('/')[1], es = /<html[^>]*\slang="es/i.test(s);
  const vx = (s.match(/<!--vx-->([\s\S]*?)<!--\/vx-->/) || [])[1];
  if (!vx) { fail(`${rel}: version ribbon missing`); continue; }
  if (/vx-ribbon|vx-switch|vx-corner/.test(s)) fail(`${rel}: old ribbon or bottom switcher still present`);
  const band = (vx.match(/<nav class="vxr-band"[\s\S]*?<\/nav>/) || [''])[0];
  const stamp = band.match(/<span class="vxr-stamp">([^<]+)<\/span>/);
  if (!stamp || stamp[1] !== Buffer.from(`${es ? 'VERSIÓN ANTERIOR' : 'OLDER VERSION'} · ${slug}`).toString('latin1')) fail(`${rel}: ribbon stamp wrong or missing`);
  const links = [...band.matchAll(/<a href="([^"]+)"([^>]*)>([^<]+)<\/a>/g)];
  if (links.map((l) => l[3].split(' ')[0]).join() !== 'v1,v2,v3,v4,v5,v6') fail(`${rel}: ribbon does not link v1-v6`);
  const cur = links.filter((l) => /aria-current="page"/.test(l[2]));
  if (cur.length !== 1 || cur[0][3] !== slug) fail(`${rel}: ribbon does not mark ${slug} as current`);
  for (const [, u] of links) if (!resolves(u)) fail(`${rel}: ribbon link ${u} does not resolve`);
  if (links[5] && links[5][1] !== (es ? '/es/' : '/')) fail(`${rel}: ribbon v6 is not the ${es ? 'Spanish' : 'English'} current site`);
  const page = s.replace(/<!--vx-->[\s\S]*?<!--\/vx-->/, '');
  for (const [, u] of page.matchAll(/\s(?:href|src|srcset)="(\/(?!\/)[^"]*)"/g)) {
    if (!u.startsWith('/v/') && u !== '/javier-ponz-cv.pdf') fail(`${rel}: ${u} leaves the frozen copy`);
  }
}

// 7. the language redirect: only on /, Spanish-first browsers go to /es/, a stored EN / ES choice always wins
{
  const page = (f) => read(join(dist, f));
  const pick = (s) => (s.match(/<script>\s*\/\* nb-lang:[\s\S]*?<\/script>/) || [''])[0].replace(/^<script>|<\/script>$/g, '');
  const code = pick(page('index.html'));
  if (!code) fail('index.html: language redirect script missing');
  if (pick(page('es/index.html')) || pick(page('404.html'))) fail('es/index.html or 404.html: carries the language redirect');
  const run = (langs, stored, noStorage) => {
    let to = null;
    const localStorage = { getItem: (k) => { if (noStorage) throw new Error('blocked'); return k === 'nb-lang' ? stored : null; } };
    vm.runInNewContext(code, { localStorage, navigator: { languages: langs, language: langs[0] }, location: { search: '', hash: '#notes', replace: (u) => { to = u; } } });
    return to;
  };
  const cases = [[['es-ES', 'en'], null, false, '/es/#notes'], [['es'], null, true, '/es/#notes'], [['en-GB', 'es'], null, false, null],
    [['es-ES'], 'en', false, null], [['en-GB'], 'es', false, '/es/#notes'], [['et-EE'], null, false, null]];
  if (code) for (const [langs, stored, noStorage, want] of cases) {
    const got = run(langs, stored, noStorage);
    if (got !== want) fail(`language redirect: ${langs[0]}, stored ${stored}: went to ${got}, expected ${want}`);
  }
  // p. 6, the skills sheet, names no private machines or domains
  for (const f of ['index.html', 'es/index.html']) {
    const sec = (page(f).match(/<section[^>]*id="skills"[\s\S]*?<\/section>/) || [''])[0];
    if (!sec) { fail(`${f}: p. 6 (#skills) missing`); continue; }
    const m = sec.match(/\bSyl\b|technoir\.cloud/);
    if (m) fail(`${f}: p. 6 names "${m[0]}"`);
  }
}

if (errors.length) { console.error('check-site failed:\n- ' + errors.join('\n- ')); process.exit(1); }
console.log(`check-site: ok (copy parity, ${html.length} pages, hreflang, links, no stale address or facts, email tab, frozen versions with the switcher ribbon)`);
