# Workflow research: the usual CI/CD pipeline, AI agents, and how I work

Notes behind p. 6 ("Current workflow"). Read on 2026-11-18. Primary sources only; dates are each source's own.
No number from this file appears on the page; the page only names the stages of a typical pipeline.

## 1. What a typical modern pipeline looks like (2025–2026)

- **Continuous delivery** is the ability to get changes of all kinds (features, config, fixes, experiments) into
  production safely, quickly and sustainably, keeping code always deployable. Jez Humble,
  <https://continuousdelivery.com/> (book: Humble & Farley, *Continuous Delivery*, 2010).
- **Trunk-based development vs long-lived branches.** Everyone integrates into one trunk (`main`) at least daily;
  short-lived feature branches and pull requests are fine if each lives about one session; feature flags and
  branch by abstraction keep trunk releasable. Direct commits to trunk suit very small teams.
  <https://trunkbaseddevelopment.com/>. Gitflow-style long-lived branches are the older alternative this site argues against.
- **Pull request and code review as gates.** GitHub protected branches can require approving reviews (optionally
  from code owners), passing status checks (CI), resolved conversations, signed commits, linear history, a merge
  queue and successful deployments before merge.
  <https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches>
- **Staging / environments and approvals.** GitHub Actions environments add deployment protection rules: required
  reviewers (up to 6, "prevent self-review"), wait timers, allowed branches, custom rules.
  <https://docs.github.com/en/actions/deployment/targeting-different-environments/managing-environments-for-deployment>
- **Progressive delivery: feature flags.** Toggles change behaviour at runtime without a deploy; categories: release,
  experiment, ops, permissioning. Pete Hodgson, martinfowler.com, 2017-10-09.
  <https://martinfowler.com/articles/feature-toggles.html>
- **Progressive delivery: canaries.** A partial, time-limited deployment to a slice of production, evaluated against
  a control; if worse, halt and roll back. Google SRE Workbook, "Canarying Releases".
  <https://sre.google/workbook/canarying-releases/>
- **GitOps.** OpenGitOps principles: declarative, versioned and immutable, pulled automatically, continuously
  reconciled. <https://opengitops.dev/>
- **The yardstick: DORA metrics** (page updated 2026-01-05): five metrics. Throughput: change lead time, deployment
  frequency, failed deployment recovery time. Instability: change fail rate, deployment rework rate.
  <https://dora.dev/guides/dora-metrics/>

Fair summary: each gate exists because many people change the same code; review spreads knowledge and catches
mistakes, staging rehearses, approvals assign responsibility, canaries and flags limit blast radius.

## 2. Where AI coding agents change it (evidence)

- **DORA 2024** (Google Cloud blog, 2024-10-23): a 25% increase in AI adoption was associated with +7.5% documentation
  quality, +3.4% code quality, +3.1% code review speed; as AI adoption increased, delivery throughput fell an
  estimated 1.5% and delivery stability an estimated 7.2%. Their reading: small batches and robust testing still
  decide delivery performance. <https://cloud.google.com/blog/products/devops-sre/announcing-the-2024-dora-report>
- **DORA 2025, "State of AI-assisted Software Development"** (2025-09-23): 90% of respondents use AI at work, over 80%
  feel more productive, 30% report little or no trust in AI-generated code; AI adoption now relates positively to
  throughput but still negatively to stability; "AI doesn't fix a team; it amplifies what's already there". Without
  automated testing, mature version control and fast feedback, more change volume means more instability.
  <https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report>
  (full report: <https://services.google.com/fh/files/misc/2025_state_of_ai_assisted_software_development.pdf>)
- **DORA AI Capabilities Model** (2025-09-23): seven capabilities that amplify AI's benefit: clear and communicated AI
  stance; healthy data ecosystems; AI-accessible internal data; strong version control practices; working in small
  batches; user-centric focus; quality internal platforms.
  <https://cloud.google.com/blog/products/ai-machine-learning/introducing-doras-inaugural-ai-capabilities-model>
- **Review load and perceived vs measured speed.** METR randomised trial (2025-07-10): 16 experienced open-source
  developers, 246 real issues; with early-2025 AI tools they took 19% longer, while expecting 24% faster and
  afterwards believing ~20% faster. METR notes the result is dated (follow-up data Feb 2026).
  <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>

Takeaway for the page: agents make code cheap; the risk moves to review and stability. The evidence favours
exactly the checks I keep: small batches, version control with easy rollback, automated tests as a gate, a
person focused on the user.

## 3. How I work, checked against the real scripts

Every `scripts/deploy.sh` in my projects (checked 2026-11-18 across `~/Code/MVPs/*`) does the same:

- refuses a dirty tree (`git status --porcelain --untracked-files=no`), so a deploy is always a commit;
- runs the project's one check command first (here `npm run check && npm run build`; CI runs the same on push);
- builds `<app>:<sha>` on the server and updates the Swarm service with `--update-order start-first` and a
  `/healthz` health command, so the new task must be healthy before the old one stops;
- on failure prints the rollback: `docker service rollback <app>`, which restores the previous service spec
  (<https://docs.docker.com/reference/cli/docker/service/rollback/>).

What I skip: long-lived branches, a second-person review gate, a staging environment, manual approvals, canaries
and flags. Trade-off, stated on the page: this suits one person with a real user on the other end; a bank, or a
team of many, needs the full pipeline.
