# Consolidation audit

## Decision

The two public prototypes are consolidated into one canonical site at `javierponz.technoir.cloud`. The Nous application is now `/nous-application`; it is explicitly personal and does not imply affiliation.

## Reused

- Astro static generation.
- A restrained editorial/technical visual direction.
- The honest positioning around service, troubleshooting, AI adoption and learning.
- Docker + Nginx deployment model.

## Rewritten

- Navigation and routes.
- Content model: typed data in `src/data/site.ts` for the first production iteration.
- SEO metadata and sitemap.
- Nginx security headers and healthcheck.
- Claims and wording that implied unsupported technical or commercial experience.

## Rejected

- Empty content collections from the external prototype.
- The duplicate `/nous` route.
- Claims about home-lab inference, enterprise deployment or shipped Hermes work not supported by the available evidence.
- Any implication of official Nous affiliation.

## Remaining review

Javier should review exact dates, role wording, project descriptions and contact details before using the site as a final CV or application. The site intentionally avoids independent-verification language where evidence is self-reported.
