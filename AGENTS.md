# javier-ponz-site
Javier Ponz's personal site (Astro, static, EN + ES): one tech-noir page with a working terminal. Live: https://javierponz.technoir.cloud

## Commands
- Check (before every commit and deploy): `npm run check && npm run build`
- Dev: `npm run dev`
- Deploy: `./scripts/deploy.sh`

## Non-negotiables
1. One palette: four colours and the fonts in `src/data/skins.mjs`; everything else derives via `color-mix()`.
2. `fg`, `accent`, `accent2` and the derived `--muted` keep 4.5:1 against `bg` (`npm run check:skins`).
3. Terminal commands read the same data files as the pages; never duplicate content. Anything dropped from the page must stay reachable through a terminal command.
4. The CV PDF (`npm run cv:pdf`, from `src/data/cv.mjs`) is English-only on purpose.
5. Publish only claims backed by primary evidence (ledger: private repo `ponzgpt/javier-ponz-site-internal`); never claim senior engineering experience, enterprise clients, production work for third parties, official Nous employment or visa sponsorship without it.
6. Effects are progressive enhancement: honour reduced motion, pause off-screen, keep a static fallback; the page reads fully without JS.
