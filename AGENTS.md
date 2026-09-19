# javier-ponz-site
Javier Ponz's personal site (Astro, static, multilingual) with a working terminal and selectable skins. Live: https://javierponz.technoir.cloud

## Commands
- Check (before every commit and deploy): `npm run check && npm run build`
- Dev: `npm run dev`
- Deploy: `DEPLOYMENT.md`

## Non-negotiables
1. A skin is four colours and two fonts in `src/data/skins.mjs`; everything else derives via `color-mix()`. No per-skin CSS.
2. `fg`, `accent`, `accent2` and the derived `--muted` keep 4.5:1 against `bg` (`npm run check:skins`).
3. Terminal commands read the same data files as the pages; never duplicate content.
4. The CV PDF (`npm run cv:pdf`, from `src/data/cv.mjs`) is English-only on purpose.
