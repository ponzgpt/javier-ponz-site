# javier-ponz-site

My portfolio and CV: one tech-noir page, in English and Spanish, ending in a working terminal.

**Live:** https://javierponz.technoir.cloud · **CV (PDF):** https://javierponz.technoir.cloud/javier-ponz-prado-cv.pdf

## How this was made

I'm a vibe coder. I decide what the site says and how it should behave, write the rules it has to follow and
check the result. AI coding agents write the code; I don't write code by hand. Commits under my name were made by
an agent working for me. Every claim the site makes about me is checked against primary evidence first (a private
claims ledger), and the site states for each project who or what wrote it.

## Structure

One page, not separate routes: a one-screen hero, then six numbered sections, each an anchor:
`#now`, `#work`, `#rig`, `#story`, `#notes`, `#connect`.

| Where | What lives there |
|---|---|
| `src/components/HomePage.astro` | The whole page, parameterised by language; one component per section in `sections/` |
| `src/pages/index.astro`, `src/pages/es/index.astro` | One-line wrappers: `/` is English, `/es/` is Spanish |
| `src/data/site.ts` | Projects, timeline, skills and credentials. English is the record; an optional `es` layer overrides only the fields that change |
| `src/data/ui.mjs`, `src/data/pages.mjs` | Interface text and section prose, `{ en, es }` per block |
| `src/data/cv.mjs` | The CV, the single source of the PDF |
| `src/data/skins.mjs` | The palette: four colours and the fonts |
| `src/data/portrait.mjs` | The ASCII portrait and wordmark (hero, terminal, OG card) |
| `src/scripts/` | The two WebGL effects: the hero's dither shader and the Rig section's ASCII scene |

Both languages are real pages with their own `<html lang>` and `hreflang`, not a script swapping text, so search
engines and agents read both.

## The CV

`npm run cv:pdf` renders `src/data/cv.mjs` to `public/javier-ponz-prado-cv.pdf` with headless Chrome. It is
English only on purpose: it is the document that gets forwarded, and one canonical version keeps that trail
clean. The phone number is not in this repository; a copy for sending directly is built with
`CV_PHONE='…' CV_OUT=… npm run cv:pdf`.

## Look

"Tech noir": warm near-black, bone text, sodium amber and electric violet; Big Shoulders Display, JetBrains
Mono and Inter, all self-hosted. Everything derives from `src/data/skins.mjs`; `npm run check:skins` fails if a
text colour drops below 4.5:1. Effects (the dithered hero shader via `@paper-design/shaders`, the three.js
`AsciiEffect` scene, CSS blinds, grain and scanlines) are progressive enhancement: reduced motion gets one
still frame, canvases pause off-screen, and without JS or WebGL the page is plain, complete HTML. Some effects
are from libraries catalogued at Uncommon Web (webdev.teknium.io). `python3 scripts/build-og.py` redraws the
link-preview card (`public/og.jpg`).

## The terminal

The last section is a real terminal (`help`, `whoami`, `projects`, `read`, `cv`, `lang`, `fastfetch`…). Its commands
read the same data files as the page, so the two cannot disagree; `read` prints the longer essays the page no
longer shows in full. Its seeded `help` output renders on the server, so without JavaScript it is still text.

## Develop and deploy

```bash
npm install
npm run dev
npm run check && npm run build   # what CI and the deploy script run
./scripts/deploy.sh              # static build behind nginx and Traefik; see DEPLOYMENT.md
```

MIT. See [LICENSE](LICENSE).
