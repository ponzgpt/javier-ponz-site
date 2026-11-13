# Design language

## Identity: tech noir

Film noir meeting the terminal: night, sodium street light, rain on glass, venetian-blind shadows. The handle
is sudotechnoir / techn0ir.

- **One palette, dark only** (`src/data/skins.mjs`): warm near-black with a violet tint, bone text, sodium
  amber accent, electric violet second accent. Every other shade is a `color-mix()` of those four; text
  colours keep 4.5:1 on the background (`npm run check:skins`).
- **Type**: Big Shoulders Display for the giant name and section titles (a condensed poster face), JetBrains
  Mono for anything a terminal would print (prompts, kickers, data, links), Inter for running prose.
- **Structure**: a one-screen hero (prompt, giant name with a block cursor, one line, link chips), then
  numbered sections with a mono kicker (`01 · NOW`) and a title with one italic amber phrase.
- **Evidence beside every claim**: each figure on the page carries its source under it; illustrative
  material is labelled as such.
- **Live artefacts, not screenshots**: a dithered shader, an ASCII 3D scene, a typed replay, a working terminal.

## Reference and boundary

Loosely inspired by teknium.io (a shell prompt over a giant name, numbered sections, sources next to numbers,
a terminal last) and by the effects catalogued at webdev.teknium.io. Only those principles are taken: not its
palette, font pairing, copy, section names, portrait treatment or assets.

## Rules for effects

Progressive enhancement only. Honour `prefers-reduced-motion` (one still frame), pause canvases off-screen and
in hidden tabs, cap device pixel ratio at 1.5, lazy-load three.js, show a static fallback when WebGL is
missing, reserve canvas sizes so nothing shifts, and keep the page fully readable without JavaScript.
