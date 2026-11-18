# Changelog

## Unreleased

- The repair notebook replaces the tech-noir page: seven notebook pages, ball-point on dotted paper and chalk
  on slate, a corner fold that turns the page to switch theme, a map of the machines, doodles that fade.
- English at `/` and Spanish at `/es/` from one copy module (`src/data/copy.mjs`); EN / ES index tabs; no
  redirect by browser language.
- Contact is now jponz@proton.me, copied by the Email tab.
- The CV opens in a new tab and nginx serves it inline, revalidating like HTML.
- rough.js 4.6.6, Rough Notation 0.5.1, Kalam and Courier Prime self-hosted from npm; no third-party requests.
- Removed the terminal, music player, hero shader, ASCII rig, the tech-noir sections and data, `public/audio`,
  the OG generator, `check-skins`, and the `three`, `@paper-design/shaders`, Big Shoulders and JetBrains Mono
  dependencies.
- New `public/og.jpg` (the light cover), rewritten `public/llms.txt`, bilingual 404, and
  `scripts/check-site.mjs` in the build: copy parity, hreflang, internal links, no stale address.

## 1.0.0 — 2026-09-04

- Consolidated personal identity, workbench and Nous application into one Astro site.
- Added routes for about, timeline, now, agents, workbench and contact.
- Added sitemap, canonical metadata, social metadata, healthcheck and deployment documentation.
