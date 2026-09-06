#!/usr/bin/env node
/**
 * One runnable check for the skin system.
 *
 * Skins are data, and the two ways data like this breaks silently are a ragged
 * pixel grid (renders as a torn sprite) and a colour pairing that fails
 * contrast on one ground but not another. Both are caught here.
 *
 *   node scripts/check-skins.mjs
 */
import assert from 'node:assert/strict';
import { skins, defaultSkin, skinCss } from '../src/data/skins.mjs';

const lin = (c) => (c /= 255) <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
const lum = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};
// --muted is --fg mixed 28% toward --bg; mirror that here so the check tracks
// the stylesheet rather than a number someone typed twice.
const mix = (a, b, p) =>
  '#' + [1, 3, 5].map((i) => {
    const v = Math.round(parseInt(a.slice(i, i + 2), 16) * (1 - p) + parseInt(b.slice(i, i + 2), 16) * p);
    return v.toString(16).padStart(2, '0');
  }).join('');

assert.ok(skins.length > 0, 'no skins defined');
assert.ok(skins.some((s) => s.id === defaultSkin), `defaultSkin "${defaultSkin}" is not a skin`);
assert.equal(new Set(skins.map((s) => s.id)).size, skins.length, 'duplicate skin id');

let failures = 0;
for (const s of skins) {
  for (const key of ['id', 'name', 'note', 'bg', 'fg', 'accent', 'accent2', 'display', 'body', 'sprite']) {
    assert.ok(s[key], `${s.id}: missing "${key}"`);
  }
  for (const key of ['bg', 'fg', 'accent', 'accent2']) {
    assert.match(s[key], /^#[0-9a-fA-F]{6}$/, `${s.id}.${key} must be a 6-digit hex`);
  }

  // sprite grid: rectangular, and every digit has an ink
  const { grid, ink } = s.sprite;
  assert.ok(Array.isArray(grid) && grid.length, `${s.id}: empty sprite grid`);
  const widths = new Set(grid.map((r) => r.length));
  assert.equal(widths.size, 1, `${s.id}: ragged sprite grid, widths ${[...widths].join('/')}`);
  for (const row of grid) {
    for (const ch of row) {
      if (ch === '.') continue;
      assert.ok(ink[ch], `${s.id}: sprite uses "${ch}" with no ink entry`);
    }
  }

  // contrast, including the derived --muted
  const checks = { fg: s.fg, accent: s.accent, accent2: s.accent2, muted: mix(s.fg, s.bg, 0.28) };
  for (const [name, hex] of Object.entries(checks)) {
    const r = ratio(hex, s.bg);
    if (r < 4.5) {
      console.error(`  FAIL  ${s.id}.${name} ${hex} on ${s.bg} = ${r.toFixed(2)}:1 (needs 4.5)`);
      failures++;
    } else {
      console.log(`  ok    ${s.id}.${name} ${hex} = ${r.toFixed(2)}:1`);
    }
  }
}

assert.ok(skinCss().includes(`[data-skin="${skins.at(-1).id}"]`), 'skinCss() dropped a skin');
assert.equal(failures, 0, `${failures} contrast failure(s)`);
console.log(`\n${skins.length} skins ok`);
