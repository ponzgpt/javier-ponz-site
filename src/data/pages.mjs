// Page prose, one flat English object per section.
//
// Each page is: a hero (kicker / heading / underlined word / standfirst),
// and a list of sections. A section is a label, a wrapper class, and its
// inner HTML. Consumed by the components in src/components/sections/.
//
// Data-driven sections (the CV rows, the project cards, the timeline) are
// not here: those live with their data in cv.mjs and site.ts.

const P = (...paras) => paras.map((t) => `<p>${t}</p>`).join('\n');

export const pages = {
  /* ─────────────────────────────────────────────────────────── about ── */
  about: {
    kicker: 'About', h1: 'Leading is ', serif: 'serving', h1end: '.',
    lede: 'Everything I do comes back to that: diagnose what is actually wrong, say it plainly, and leave the person with more control than they had before.',
    sections: [
      { label: 'The principle', cls: 'prose', html: P(
        'Three directions, one skill.',
        '<strong>Leading yourself.</strong> The unglamorous part with no audience — tests, the honest README, a second look at something that works. Nobody claps.',
        '<strong>Leading others one at a time.</strong> Mostly restraint: reasoning instead of the answer, slower now so they are faster later.',
        '<strong>Leading teams.</strong> Removing what is in their way — not the most capable person in the room, but the one who makes the room work.',
        'Service is not the soft edge of technical work. It is what decides whether the work reaches anyone.') },
      { label: 'Experience', cls: 'copy', html: '<h2>Apple Retail · 2014—2024</h2>' + P(
        'Ten years, five roles: Specialist, Technical Specialist, AppleCare Advisor, Genius, then In-Store Experience Lead, Madrid — much of it hands inside a machine, including Macs well past warranty. Diagnosis under pressure, explained in terms the person in front of me cared about.',
        'Thousands arrived angry, confused, or holding a dead machine with their only copy of something on it — the technical answer and the useful one are not always the same sentence.',
        'As a lead I ran two stores — opening, closing, events, whatever no procedure covered. Clearing obstacles, not instructions.') },
      { label: 'Now', cls: 'copy', html: '<h2>Technical support and open systems</h2>' + P(
        'Since Aberdeen, full time on AI: agent workflows, MCP servers, Docker, local GPU inference, my own VPS. Strongest where systems fail — finding what broke, documenting it.',
        'Same job, different surface. <a href="{thoughts}">My thoughts</a>: the tools worth building hand control back to the person using them.',
        'Early in this career and public about it — source, tests, a stated scope. Judge me on what I have shipped.') },
      { label: 'Outside work', cls: 'prose', html: P(
        'Building and overclocking PCs since I was a teenager — same instinct behind the homelab now (Proxmox, GrapheneOS, de-Googling) and this profile\'s Half-Life aesthetic: taking sealed things apart.') }
    ],
    skillsLabel: 'Skills', credentialsLabel: 'Credentials', shortLabel: 'In short',
    short: 'Good technical work leaves people with more clarity and control than before. That is the whole standard.'
  },

  /* ───────────────────────────────────────────────────────── thoughts ── */
  thoughts: {
    kicker: 'Thoughts', h1: 'The machine should be ', serif: 'shapeable', h1end: ' by the person living in it.',
    lede: 'What I am paying attention to, and why it matters more than the next model release.',
    sections: [
      { label: 'The claim', cls: 'prose', html: P(
        'The interesting frontier is not a larger model — it is the OS becoming malleable enough for an agent to live in it.',
        "Most computers are appliances: fast, sealed, arranged how someone else decided. For thirty years that trade beat the alternative — a machine to maintain instead of use.",
        'Agents change the maths: one is only as useful as the surface it reaches — talk on a sealed appliance, real work on plain files and small tools.') },
      { label: 'Two directions', cls: 'prose', html:
        '<h3>From the agent side: primitives instead of products</h3>' + P('Hermes Agent and MCP take capability apart into things you can inspect. A skill is a Markdown file; a tool is a server you can read.') +
        '<h3>From the system side: an OS you edit</h3>' + P('Omarchy meets it from the other end: plain configuration you are expected to change, opinionated rather than locked. Structural, not aesthetic — editable files make a system an agent can operate.') },
      { label: 'The convergence', cls: 'prose', html: P(
        'Together: the machine I actually want — proactive, shapeable, legible all the way down. Not an assistant bolted onto an appliance, but a first-class inhabitant of an open system.',
        'Open weights and primitives are practical, not only political — whoever controls them controls how far the agent can help. If not the computer\'s owner, someone else sets the ceiling.',
        'Two things I hold loosely: the winning interface is probably the existing system made addressable, not a chat window; the skill worth having is understanding a system well enough to expose and debug it.') },
      { label: 'Where I am in it', cls: 'prose', html: P(
        'I run this rather than theorise: Hermes daily, Omarchy as a daily driver, a quantised model on my own GPU, agents in Docker on my own VPS. Conviction from watching them fail.',
        'The work I want is at that seam — making these systems reliable for people who should not have to care how they are built.',
        'Same principle, pointed at a machine instead of a person. <a href="{about}">Leading is serving</a>: measured by whether people depending on it end up with more control than they started with.') }
    ],
    relatedLabel: 'Related',
    related: [
      { href: '{agents}', meta: 'Notebook', h3: 'Agents →', p: 'Working notes, and the questions still open.' },
      { href: '{workbench}', meta: 'Build log', h3: 'Workbench →', p: 'What I have actually built and shipped.' }
    ]
  },

  /* ────────────────────────────────────────────────────────── agents ── */
  agents: {
    kicker: 'Technical lab', h1: 'Agents that leave people with ', serif: 'more agency', h1end: '.',
    lede: 'A working notebook for Hermes Agent, MCP and tools. Evidence, not hype.',
    sections: [
      { label: 'Questions I am working on', cls: 'copy', html: P(
        'When does an agent reduce friction versus slow down something simple? What should it remember, for how long? How do you keep failure visible, a workflow inspectable, not magical?',
        'Through tools I actually use: an MCP server with a tested filesystem-safety layer, a skill pack of decision models, daily agent operation in Docker.') }
    ],
    relatedLabel: 'Related',
    related: [
      { href: '{thoughts}', meta: 'Thoughts', h3: 'The malleable machine →', p: 'Why open agent primitives and an editable OS are converging.' },
      { href: '{workbench}', meta: 'Workbench', h3: 'Projects →', p: 'Tools and pipelines behind the experiments.' },
      { href: 'https://github.com/NousResearch/hermes-agent', ext: true, meta: 'External', h3: 'Hermes Agent ↗', p: 'Nous Research\'s repository. I build with it; I do not speak for it.' }
    ]
  },

  /* ───────────────────────────────────────────────────────── contact ── */
  contact: {
    kicker: 'Contact', h1: 'Three ways to reach ', serif: 'me', h1end: '.',
    lede: 'Pick whichever fits — each one below says what it is for.',
    coordsLabel: 'Coordinates',
    rows: [
      { time: 'Email', h3: 'nerion89@gmail.com', href: 'mailto:nerion89@gmail.com', p: 'Work, collaboration, a considered question.', copy: 'nerion89@gmail.com' },
      { time: 'GitHub', h3: 'github.com/ponzgpt ↗', href: 'https://github.com/ponzgpt', ext: true, p: 'Projects, experiments, the source trail.', copy: 'https://github.com/ponzgpt' },
      { time: 'LinkedIn', h3: 'javierponz ↗', href: 'https://www.linkedin.com/in/javierponz', ext: true, p: 'Professional context, public connections.', copy: 'https://www.linkedin.com/in/javierponz' }
    ],
    copyLabel: 'Copy', copiedLabel: 'Copied', copyFailedLabel: 'Copy failed',
    availabilityLabel: 'Availability',
    availability: `<h2>Open to the right role, starting now.</h2>
      <p>Independent, so no notice period. Looking for technical support, customer-facing engineering or agent operations — finding the real fault, leaving the person with more control.</p>
      <p>Aberdeen, Scotland, by way of Madrid, UK hours. Remote suits me, I travel without fuss, and would relocate if it made sense for my partner too.</p>`
  },

  /* ───────────────────────────────────────────────────────────── now ── */
  now: {
    kicker: 'Now', h1: 'What has my ', serif: 'attention', h1end: '.',
    lede: 'This page is a snapshot, not a promise. It changes as the work changes.',
    obsessions: [
      { label: 'Omarchy', html: P(
        'My daily driver, alongside Arch and Fedora — a desktop that expects to be edited rather than tolerated. <a href="{thoughts}">Read why</a>: the machine has to be shapeable before an agent can do much with it.') },
      { label: 'Hermes Agent', html: P(
        'The agent harness I operate daily, built by Nous Research, not by me — scheduled workflows with permission to touch real files, wired to a model on my own GPU.') }
    ],
    focusLabel: 'Current focus',
    cards: [
      { meta: '01', h3: 'Owning the stack', p: 'Local GPU inference, a Proxmox homelab, moving off Google, OSINT, GrapheneOS next. Slow, inconvenient, not stopping.' },
      { meta: '02', h3: 'Machines Do It Better', p: 'Early-stage solo practice helping small businesses adopt agentic AI where it genuinely saves time. No clients yet — that is the bet.' }
    ],
    studyLabel: 'Studying', studyH2: 'Depth before theatre.',
    study: 'AI and Full Stack development at Universidad Rey Juan Carlos, via Racks University. Alongside it: evaluation, web apps, APIs, Docker, claims that survive inspection.',
    openLabel: 'Open to',
    open: 'Technical support, customer success and customer-facing roles — technical, patient, a competent writer, at once. Also junior developer and agent-operations work. Remote suits me. <a href="{contact}">Get in touch</a>.'
  },

  /* ─────────────────────────────────────────────────────────── index ── */
  home: {
    title: 'Javier Ponz — technical support & agent operations',
    desc: 'Javier Ponz — technology, service and agents.',
    kicker: 'Aberdeen, Scotland',
    tagline: 'I build agent tooling and small products that ', taglineSerif: 'actually ship', taglineEnd: '.',
    lede: 'Ten years diagnosing hard problems at Apple Retail, now building AI systems and full stack applications — deployed, tested, running in production. Same job, different surface.',
    overviewLabel: '01 / Overview', overviewH2: 'Ten years between people and their machines.',
    overview: P(
      'A decade at Apple Retail taught me to diagnose fast and translate between what the engineer means, what the sale promised, and what the person actually sees. I apply that now to AI systems — agent workflows, automation, infrastructure I run myself.',
      'Alongside it, AI and Full Stack development at Universidad Rey Juan Carlos, shipping real things as I go — this site, a live web app, agent tooling built with and without an agent. The <a href="{workbench}">workbench</a> says which is which.'),
    tags: ['leading is serving', 'Hermes Agent', 'Omarchy', 'local inference', 'agent workflows', 'Docker & deployment', 'technical troubleshooting', 'MCP', 'building in public'],
    exploreLabel: '02 / Explore',
    cards: [
      { href: '{about}', meta: 'Background', h3: 'About & experience →', p: 'Apple Retail, the move into AI systems, and the credentials behind it.' },
      { href: '{workbench}', meta: 'Build log', h3: 'Workbench →', p: 'Projects and repositories, scope and status stated plainly.' },
      { href: '{memento}', meta: 'Case study', h3: 'Shipping to production →', p: 'How a small app went from idea to a verified deployment.' },
      { href: '{thoughts}', meta: 'Thoughts', h3: 'The malleable machine →', p: 'Open agent primitives, an editable OS, and why they are converging.' }
    ],
    workLabel: '03 / Selected work'
  },

  /* ───────────────────────────────────────────────────────── projects ── */
  // Merges the old standalone Workbench and Memento Mori case-study pages
  // into one section: running/shipped cards, then the case study as a
  // subsection (its own #case-study anchor) instead of a separate page.
  projects: {
    kicker: 'Projects', h1: 'Things I am ', serif: 'making', h1end: '.',
    lede: 'What I run every day, and what I have made — listed separately, each naming who wrote it.',
    runningLabel: 'Running daily', projectsLabel: 'Shipped', productionLabel: 'In production',
    cap2: 'Hermes Agent Site — one of six selectable skins',
    scopeLabel: 'Scope note',
    scope: 'Personal projects and learning artefacts. Not client deliverables.',
    caseStudyLabel: 'Case study: Memento Mori', caseStudyH2: 'Getting a small app to production.',
    caseStudyLede: 'The native widget is the product; this is its web demo, same model, same browser. How the web side went from idea to a real domain with real release gates.',
    caseStudyAppLabel: 'The app', caseStudyCaption: 'The landing view at memento.technoir.cloud',
    caseStudyLinksLabel: 'Links',
    caseStudyLinks: [
      { time: 'Live', h3: 'memento.technoir.cloud ↗', href: 'https://memento.technoir.cloud/', p: 'The deployed application.' },
      { time: 'Source', h3: 'github.com/ponzgpt/memento-mori ↗', href: 'https://github.com/ponzgpt/memento-mori', p: 'Apache-2.0, with the release tooling described below.' }
    ],
    caseStudySections: [
      { label: 'The problem', cls: 'prose', html: P(
        'Time is finite, but the idea stays abstract — easy to postpone, the loud task always winning. I wanted the limit legible without predicting anyone specific: <em>useful without overclaiming</em>.') },
      { label: 'What it does', cls: 'prose', html: P(
        'Birth date, birth country, current country and age moved, six lifestyle factors — same as the native widget. A central horizon from World Bank life-expectancy data, a seven-year margin each side, a 100-year life grid, one intention for today.',
        'The uncertainty stays visible — a confident single date would have been easier, and a lie.') },
      { label: 'Decisions', cls: 'prose', html:
        '<h3>No backend, no accounts, no analytics</h3>' + P('Birth date and intention never leave the browser — right call for something this personal.') +
        '<h3>Zero runtime dependencies</h3>' + P('Plain HTML, CSS and ES modules, no build step, openable from a single file. Nothing to patch when a dependency has a bad week.') +
        '<h3>Docker, nginx and Traefik on a VPS I already run</h3>' + P('The VPS and domain already existed — no new subscription, no new vendor. Containers because the deployment itself was part of the learning. Each release is an immutable tag; rollback redeploys the last one.') },
      { label: 'Release gates', cls: 'prose', html: P(
        'Gladdest about is not the app but what stands between it and production: <code>npm run verify</code> runs unit tests, feature-story checks, lint, a smoke check, version-consistency, a Waybar compile.',
        'The version check exists because I once drifted — package version, manifest and changelog disagreed, noticed by accident. A failing check instead of a habit, run in GitHub Actions on all three platforms.') },
      { label: 'What I would do differently', cls: 'prose', html:
        '<ul><li><strong>Deploy earlier.</strong> Local preview never surfaces what a real deployment does — an ugly version in week one beats polishing in isolation.</li><li><strong>Decide the product boundary once, and write down why.</strong> Widget to web app and back; deciding early skips real rework.</li><li><strong>Write the scope note first.</strong> Not medical, actuarial, or a prediction about an individual — writing that early makes several decisions obvious sooner.</li></ul>' }
    ],
    caseStudyScopeLabel: 'Scope note',
    caseStudyScope: 'A personal project: a reflective aid on population averages, not medical, legal, actuarial or mental-health advice, and no claim about any individual.'
  },

  /* ──────────────────────────────────────────────────────── timeline ── */
  timeline: {
    kicker: 'Timeline', h1: 'A work in ', serif: 'progress', h1end: '.',
    lede: 'A deliberately concise chronology. The current chapter is still being written.',
    label: 'Chronology'
  },

  /* ────────────────────────────────────────────────────────────── cv ── */
  // Just what the Contact section's CV disclosure needs.
  cv: {
    kicker: 'Curriculum vitae', download: '↓ Download CV (PDF)'
  }
};
