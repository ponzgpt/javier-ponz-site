#!/usr/bin/env node
/**
 * Contrast check for the palette in src/data/skins.mjs, plus a test for the
 * derived figures in the Now section (they are computed from timestamps, so a
 * typo in the data would silently change a published claim).
 *
 *   node scripts/check-skins.mjs
 */
import assert from 'node:assert/strict';
import { palette, MUTED_TOWARD_BG, paletteCss } from '../src/data/skins.mjs';
import { NOW_FACTS, hoursBetween } from '../src/data/pages.mjs';

const lin = (c) => (c /= 255) <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};
// Mirrors the color-mix() that paletteCss() writes for --muted.
const mix = (a, b, p) =>
  '#' + [1, 3, 5].map((i) => {
    const v = Math.round(parseInt(a.slice(i, i + 2), 16) * (1 - p) + parseInt(b.slice(i, i + 2), 16) * p);
    return v.toString(16).padStart(2, '0');
  }).join('');

for (const key of ['bg', 'fg', 'accent', 'accent2']) {
  assert.match(palette[key], /^#[0-9a-fA-F]{6}$/, `palette.${key} must be a 6-digit hex`);
}
for (const key of ['display', 'mono', 'body']) assert.ok(palette[key], `palette.${key} missing`);

let failures = 0;
const checks = { fg: palette.fg, accent: palette.accent, accent2: palette.accent2, muted: mix(palette.fg, palette.bg, MUTED_TOWARD_BG) };
for (const [name, hex] of Object.entries(checks)) {
  const r = ratio(hex, palette.bg);
  if (r < 4.5) { console.error(`  FAIL  ${name} ${hex} on ${palette.bg} = ${r.toFixed(2)}:1 (needs 4.5)`); failures++; }
  else console.log(`  ok    ${name} ${hex} = ${r.toFixed(2)}:1`);
}
assert.ok(paletteCss().startsWith(':root{--bg:'), 'paletteCss() shape changed');
assert.equal(failures, 0, `${failures} contrast failure(s)`);

// Now section: the published figures must follow from their sources.
const { tests, opened, reviewed, fixed } = NOW_FACTS;
assert.equal(tests.psychopomp + tests.sabbath, 31, 'test total');
assert.equal(hoursBetween(opened, reviewed), 14, 'opened → review');
assert.equal(hoursBetween(reviewed, fixed), 12, 'review → fixes');
assert.equal(hoursBetween('2026-01-01T00:00Z', '2026-01-01T00:29Z'), 0, 'rounds to nearest hour');
console.log('\npalette ok · now-section figures ok');
