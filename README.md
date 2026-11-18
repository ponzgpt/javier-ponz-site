# javier-ponz-site

My portfolio and CV: one page laid out as a repair notebook, in English and Spanish.

**Live:** https://javierponz.technoir.cloud (English) · https://javierponz.technoir.cloud/es/ (Spanish) ·
**CV (PDF):** https://javierponz.technoir.cloud/javier-ponz-prado-cv.pdf

## How this was made

I'm a vibe coder. I decide what the site says and how it should behave, write the rules it has to follow and
check the result. AI coding agents write the code; I don't write code by hand. Commits under my name were made by
an agent working for me. Every claim the site makes about me is checked against primary evidence first (a private
claims ledger).

## Structure

One page, seven numbered "pages" of the notebook, each an anchor: `#cover` (p. 1 whoami), `#story` (p. 2, the
Apple years), `#now` (p. 3, MDIB), `#work` (p. 4, the Hermes plugins and other projects), `#notes` (p. 5, the
newsletter), `#stack` (p. 6, from spec to server and the map of my machines), `#ethos` (p. 7).

| Where | What lives there |
|---|---|
| `src/data/copy.mjs` | Every visible and accessible string, as `en` and `es` objects with the same keys |
| `src/components/Notebook.astro` | The page markup, rendered from one language of the copy module |
| `src/scripts/notebook.js` | The behaviour: rough.js sketches scrubbed by scroll, Rough Notation marks, the corner fold, the map, copy tabs, doodles |
| `src/styles/notebook.css` | Tokens for both themes and the layout |
| `src/layouts/Layout.astro` | Head (canonical, hreflang, Open Graph, JSON-LD) and the self-hosted fonts |
| `src/pages/index.astro`, `src/pages/es/index.astro`, `src/pages/404.astro` | `/`, `/es/` and the bilingual 404 |
| `src/data/cv.mjs`, `scripts/build-cv-pdf.mjs` | The CV and its PDF renderer |
| `scripts/check-site.mjs` | The post-build check: copy parity, hreflang, internal links, contact address |

Both languages are real pages with their own `<html lang>` and `hreflang`, not a script swapping text, so search
engines and agents read both. There is no redirect by browser language; the EN / ES tabs on the right edge switch.

## Look

Light: ball-point pen on dotted technical paper. Dark: chalk on a slate. The corner fold at the top right turns
the page to switch (for the session only). Kalam is the hand, Courier Prime the type, both self-hosted through
Fontsource; rough.js and Rough Notation are bundled from npm, so the page makes no third-party requests. Every
drawing is progressive enhancement: reduced motion gets everything simply drawn, and without JavaScript the page
is plain, complete HTML (the map becomes a list).

`public/og.jpg` is a 1200×630 screenshot of the built cover in the light theme, taken with headless Chrome
(`--window-size=1200,630 --blink-settings=preferredColorScheme=1`) against `npm run preview`.

## The CV

`npm run cv:pdf` renders `src/data/cv.mjs` to `public/javier-ponz-prado-cv.pdf` with headless Chrome. It is
English only on purpose: it is the document that gets forwarded, and one canonical version keeps that trail
clean. The site links it in a new tab, and nginx serves it inline. The phone number is not in this repository;
a copy for sending directly is built with `CV_PHONE='…' CV_OUT=… npm run cv:pdf`.

## Develop and deploy

```bash
npm install
npm run dev
npm run check && npm run build   # what CI and the deploy script run; build ends with scripts/check-site.mjs
./scripts/deploy.sh              # static build behind nginx and Traefik; see DEPLOYMENT.md
```

MIT. See [LICENSE](LICENSE).
