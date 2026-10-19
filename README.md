# javier-ponz-site

My portfolio and CV: one page, in English and Spanish, with a working terminal and four colour skins.

**Live:** https://javierponz.technoir.cloud · **CV (PDF):** https://javierponz.technoir.cloud/javier-ponz-prado-cv.pdf

## How this was made

I'm a vibe coder. I decide what the site says and how it should behave, write the rules it has to follow and
check the result. AI coding agents write the code; I don't write code by hand. Commits under my name were made by
an agent working for me. Every claim the site makes about me is checked against primary evidence first (a private
claims ledger), and the site states for each project who or what wrote it.

## Structure

One long page, not separate routes. Each section is an anchor: `#about`, `#experience`, `#projects`, `#skills`,
`#achievements`, `#newsletter`, `#contact`.

| Where | What lives there |
|---|---|
| `src/components/HomePage.astro` | The whole page, parameterised by language |
| `src/pages/index.astro`, `src/pages/es/index.astro` | One-line wrappers: `/` is English, `/es/` is Spanish |
| `src/data/site.ts` | Projects, timeline, skills and credentials. English is the record; an optional `es` layer overrides only the fields that change |
| `src/data/ui.mjs`, `src/data/pages.mjs` | Interface text and section prose, `{ en, es }` per block |
| `src/data/cv.mjs` | The CV, the single source of the PDF |
| `src/data/skins.mjs` | The four skins |

Both languages are real pages with their own `<html lang>` and `hreflang`, not a script swapping text, so search
engines and agents read both.

## The CV

`npm run cv:pdf` renders `src/data/cv.mjs` to `public/javier-ponz-prado-cv.pdf` with headless Chrome. It is
English only on purpose: it is the document that gets forwarded, and one canonical version keeps that trail
clean. The phone number is not in this repository; a copy for sending directly is built with
`CV_PHONE='…' CV_OUT=… npm run cv:pdf`.

## Skins

Pick one from the header, or force one by URL: `?skin=omarchy`.

| id | Name | Colours from |
|---|---|---|
| `hermes` | Caduceus | The default skin of the Hermes Agent CLI |
| `omarchy` | Omakase | Tokyo Night, Omarchy's default theme |
| `stormlight` | Stormlight | Original |
| `halflife` | HL | Valve orange on asphalt, the HEV suit's amber HUD |

A skin is four colours and two fonts; everything else derives from them with `color-mix()`. Add one in
`src/data/skins.mjs`, then run `npm run check:skins`, which fails if any text colour drops below 4.5:1 contrast.

## The terminal

The home page has a real terminal (`help`, `whoami`, `projects`, `cv`, `skin`, `lang`, `fastfetch`…). Its commands
read the same data files as the page, so the two cannot disagree. `fastfetch` renders on the server, so without
JavaScript the page is still plain text.

## Develop and deploy

```bash
npm install
npm run dev
npm run check && npm run build   # what CI and the deploy script run
./scripts/deploy.sh              # static build behind nginx and Traefik; see DEPLOYMENT.md
```

MIT. See [LICENSE](LICENSE).
