# javier-ponz-site
Javier Ponz's personal site: one repair-notebook page, real pages in English (`/`) and Spanish (`/es/`). Live: https://javierponz.technoir.cloud

## Commands
- Check (before every commit and deploy): `npm run check && npm run build`
- Dev: `npm run dev`
- Deploy: `./scripts/deploy.sh`

## Non-negotiables
1. Publish only claims backed by primary evidence (ledger: private repo `ponzgpt/javier-ponz-site-internal`); never claim senior engineering experience, enterprise clients, production work for third parties, official Nous employment or visa sponsorship without it.
2. The CV PDF (`npm run cv:pdf`, from `src/data/cv.mjs`) is English-only on purpose: one canonical document to forward. Nothing on the site imports `cv.mjs`.
3. EN/ES parity: every visible and accessible string lives in `src/data/copy.mjs` under both `en` and `es`; `scripts/check-site.mjs` (run by `npm run build`) fails on a missing key or empty value. Never hard-code prose in the markup or script.
4. Themes are tokens with the three-state contract: values on bare `:root` (light), redefined under `prefers-color-scheme: dark` guarded by `:root:not([data-theme="light"])`, and again under `:root[data-theme="dark"]`. Sketches read colours from the tokens; never write a colour in script.
5. Progressive enhancement: the page reads fully without JavaScript (every sketch is decoration over real lists); honour reduced motion; no third-party requests at runtime (rough.js, Rough Notation and the fonts are bundled from npm).
6. Contact is `jponz@proton.me`, copied by the Email tab, never a `mailto:`; the old Gmail address must not reappear (the check greps `dist`).
