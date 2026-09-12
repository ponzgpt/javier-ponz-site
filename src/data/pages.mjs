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
    lede: 'Everything I do professionally comes back to that. Diagnose what is actually wrong, understand who it affects, say it in words that don\'t humiliate anyone, and leave the person with more control than they had before.',
    sections: [
      { label: 'The principle', cls: 'prose', html: P(
        'I mean it in three directions, and they are the same skill.',
        '<strong>Leading yourself.</strong> Doing the unglamorous part without an audience — the tests, the release gate, the honest README, the second look at the thing that already works. Nobody claps for it, and it is what separates finished from nearly finished.',
        '<strong>Leading others one at a time.</strong> Mentoring and teaching, which is mostly restraint: giving someone the reasoning instead of the answer, and being willing to be slower now so they are faster later.',
        '<strong>Leading teams.</strong> Removing what is in their way. As a lead the job was never to be the most capable person in the room; it was to make the room work — resources, cover, conflict handled early, credit pointed at whoever earned it.',
        'Service is not the soft edge of technical work. It is the part that decides whether the technical work reaches anyone.') },
      { label: 'Experience', cls: 'copy', html: '<h2>Apple Retail · 2014—2024</h2>' + P(
        'Ten years and five roles: Specialist, Technical Specialist, AppleCare Advisor, Genius, then In-Store Experience Lead across Parquesur and Xanadú in Madrid — plenty of it hands inside a machine, including older Macs well past warranty. The through line was diagnosis under pressure — find the real fault fast, explain it in terms the person in front of you actually cares about, and keep their trust while doing it.',
        'Thousands of people arrived angry, confused, or holding a dead machine with their only copy of something on it. That is where I learned that the technical answer and the useful answer are not always the same sentence.',
        'As a lead I ran operations across two stores — opening and closing, events, resourcing, maintenance, and supporting teams when a situation did not fit any procedure. Leading there meant clearing obstacles, not issuing instructions.') },
      { label: 'Now', cls: 'copy', html: '<h2>Technical support and open systems</h2>' + P(
        'Since moving from Madrid to Aberdeen I have been working with AI systems full time: agent workflows with Hermes Agent, MCP servers, automations in Docker, local inference on my own GPU, and applications deployed on my own VPS with Traefik and TLS. I am strongest where systems fail — investigating failure modes, debugging workflows, turning unpredictable behaviour into something documented and reliable.',
        'It is the same job as before, aimed at a different surface. A person stuck on a machine and a machine stuck on a task both need someone willing to find the real fault and write down what it was. <a href="{thoughts}">My thoughts</a> are that the tools worth building are the ones that hand control back to the person using them.',
        'I am early in this career and deliberately public about it: every project has source code, tests and a stated scope, and says plainly which parts I wrote. I would rather be judged on what I have shipped than on how I describe myself.') },
      { label: 'Outside work', cls: 'prose', html: P(
        'PC building and overclocking since I was a teenager, well before I had a professional reason for it. The same instinct runs the homelab I am building now — Proxmox, GrapheneOS, de-Googling — and picked the Half-Life aesthetic on the rest of this profile: I like taking a sealed thing apart and understanding it, whether that thing is a computer or a platform.') }
    ],
    skillsLabel: 'Skills', credentialsLabel: 'Credentials', shortLabel: 'In short',
    short: 'Good technical work leaves people with more clarity and more control than they had before. That is the whole standard.'
  },

  /* ───────────────────────────────────────────────────────── thoughts ── */
  thoughts: {
    kicker: 'Thoughts', h1: 'The machine should be ', serif: 'shapeable', h1end: ' by the person living in it.',
    lede: 'What I am paying attention to, and why I think it matters more than the next model release.',
    sections: [
      { label: 'The claim', cls: 'prose', html: P(
        'The interesting frontier right now is not a larger model. It is the operating system becoming malleable enough for an agent to actually live in it.',
        "Most people's computers are appliances. They are fast, sealed, and arranged the way someone else decided. You can choose a wallpaper and a default browser; you cannot change the shape of the thing. For thirty years that trade — power for safety, flexibility for polish — was mostly worth taking, because the alternative was a machine you had to maintain instead of use.",
        'Agents change the maths. An agent is only as useful as the surface it can reach. On a sealed appliance it can talk, and little else. On a machine whose parts are plain files and small tools, it can do the work.') },
      { label: 'Two directions', cls: 'prose', html:
        '<h3>From the agent side: primitives instead of products</h3>' + P('Hermes Agent and MCP take capability apart into things you can inspect — a tool, a skill, a file, a permission, a schedule. None of it is a sealed feature. A skill is a Markdown file. A tool is a small server you can read. When something goes wrong you can see where, because there is a where.') +
        '<h3>From the system side: an OS you edit</h3>' + P('Omarchy comes at the same point from the opposite end: a desktop defined by plain configuration you are expected to change, distributed as an opinionated default rather than a locked one. It calls itself an OS for the age of agents, which is exactly right, and the reason is structural rather than aesthetic — a system made of editable files is a system an agent can operate.') },
      { label: 'The convergence', cls: 'prose', html: P(
        'Put those together and you get the machine I actually want: proactive, shapeable, and legible all the way down. Not an assistant bolted onto an appliance, but an agent as a first-class inhabitant of a system whose primitives are open and belong to the person using it.',
        'This is why open weights and open primitives are a practical concern and not only a political one. You cannot have a malleable machine on top of a stack you are not allowed to look at. Whoever controls the primitives controls how far the agent can help — and if that is not the owner of the computer, the ceiling gets set somewhere else.',
        'Two things follow that I hold loosely and would like to be argued out of. First, the winning interface is probably not a chat window; it is the existing system, made addressable. Second, the skill worth having in that world is not prompting — it is understanding a system deeply enough to know which parts should be exposed, and being able to debug it when the agent gets it wrong.') },
      { label: 'Where I am in it', cls: 'prose', html: P(
        'I run this rather than theorise about it: Hermes daily, Omarchy as a daily driver, a quantised model served from my own GPU, agents in Docker on my own VPS. My conviction comes from watching them fail, which they do in ways that are specific and instructive.',
        'The work I want is at that seam — making these systems reachable and reliable for people who should not have to care how they are built.',
        'Which is the same principle I have worked to for a decade, pointed at a machine instead of a person. <a href="{about}">Leading is serving</a>: the measure of a tool, like the measure of a lead, is whether the people depending on it end up with more control than they started with. An agent that makes its owner more dependent has failed at the only thing that mattered.') }
    ],
    relatedLabel: 'Related',
    related: [
      { href: '{agents}', meta: 'Notebook', h3: 'Agents →', p: 'The working notes behind this, and the questions still open.' },
      { href: '{workbench}', meta: 'Build log', h3: 'Workbench →', p: 'What I have actually built and shipped.' }
    ]
  },

  /* ────────────────────────────────────────────────────────── agents ── */
  agents: {
    kicker: 'Technical lab', h1: 'Agents that leave people with ', serif: 'more agency', h1end: '.',
    lede: 'A working notebook for Hermes Agent, MCP, memory and tools. Experiments with evidence, not hype.',
    sections: [
      { label: 'Questions I am working on', cls: 'copy', html: P(
        'When does an agent genuinely reduce friction, and when is it a slower way to do something simple? What should it remember, and for how long? How do you make failure visible instead of silent? How do you keep a workflow inspectable rather than magical?',
        'I work on these through tools I actually use: an MCP server with a tested filesystem-safety layer, a skill pack of decision models, and daily operation of agent systems in Docker.') }
    ],
    relatedLabel: 'Related',
    related: [
      { href: '{thoughts}', meta: 'Thoughts', h3: 'The malleable machine →', p: 'Why open agent primitives and an editable OS are converging.' },
      { href: '{workbench}', meta: 'Workbench', h3: 'Projects →', p: 'The tools and pipelines behind the experiments.' },
      { href: 'https://github.com/NousResearch/hermes-agent', ext: true, meta: 'External', h3: 'Hermes Agent ↗', p: 'The official repository by Nous Research. I build with it; I do not speak for it.' }
    ]
  },

  /* ───────────────────────────────────────────────────────── contact ── */
  contact: {
    kicker: 'Contact', h1: 'Three ways to reach ', serif: 'me', h1end: '.',
    lede: 'Pick whichever fits — each one below says what it is for.',
    coordsLabel: 'Coordinates',
    rows: [
      { time: 'Email', h3: 'nerion89@gmail.com', href: 'mailto:nerion89@gmail.com', p: 'For potential work, collaboration or a considered question.', copy: 'nerion89@gmail.com' },
      { time: 'GitHub', h3: 'github.com/ponzgpt ↗', href: 'https://github.com/ponzgpt', ext: true, p: 'Projects, experiments and the source trail.', copy: 'https://github.com/ponzgpt' },
      { time: 'LinkedIn', h3: 'javierponz ↗', href: 'https://www.linkedin.com/in/javierponz', ext: true, p: 'Professional context and public connections.', copy: 'https://www.linkedin.com/in/javierponz' }
    ],
    copyLabel: 'Copy', copiedLabel: 'Copied', copyFailedLabel: 'Copy failed',
    availabilityLabel: 'Availability',
    availability: `<h2>Open to the right role, starting now.</h2>
      <p>I work independently at the moment, so there is no notice period between a conversation and a start date. What I am looking for is technical support, customer-facing engineering or agent operations — work where the job is to find the real fault and leave the person with more control than they had before.</p>
      <p>I am in Aberdeen, Scotland, by way of Madrid, and I keep UK hours. Remote suits me and I am set up for it, I travel without fuss, and I would consider relocating if the move made sense for my partner as much as for me.</p>`
  },

  /* ───────────────────────────────────────────────────────────── now ── */
  now: {
    kicker: 'Now', h1: 'What has my ', serif: 'attention', h1end: '.',
    lede: 'This page is a snapshot, not a promise. It changes as the work changes.',
    obsessions: [
      { label: 'Omarchy', html: P(
        'My daily driver, alongside Arch and Fedora. Omarchy is a desktop that expects to be edited rather than tolerated — plain configuration you are meant to change, distributed as an opinionated default rather than something locked. It is the other half of my thoughts: <a href="{thoughts}">the machine has to be shapeable</a> before an agent can do much with it. A system made of editable files is a system an agent can actually operate.') },
      { label: 'Hermes Agent', html: P(
        'The agent harness I operate daily, built by Nous Research, not by me. Scheduled workflows, automations and agents with permission to touch real files, wired to a model I serve myself from my own GPU. Its whole design is primitives instead of products: a skill is a Markdown file, a tool is a small server you can read. When something goes wrong you can see where, because there is a where.') }
    ],
    focusLabel: 'Current focus',
    cards: [
      { meta: '01', h3: 'Owning the stack', p: 'Local inference on my own GPU, a Proxmox homelab, moving off Google services, reading up on OSINT, GrapheneOS next. Slow, occasionally inconvenient, not stopping.' },
      { meta: '02', h3: 'Machines Do It Better', p: 'An early-stage solo practice helping small businesses and individuals adopt agentic AI where it genuinely saves time. No clients yet; that is the bet, stated as a bet.' }
    ],
    studyLabel: 'Studying', studyH2: 'Depth before theatre.',
    study: 'Artificial Intelligence and Full Stack development at Universidad Rey Juan Carlos, via Racks University. Alongside it: evaluation, web applications, APIs, Docker, and the discipline of making claims that survive inspection.',
    openLabel: 'Open to',
    open: 'Technical support, customer success and customer-facing technical roles — the work where somebody has to be technical, patient and a competent writer at once. Also junior developer and agent-operations work. Remote suits me; I am happy to travel and would consider relocating. <a href="{contact}">Get in touch</a>.'
  },

  /* ─────────────────────────────────────────────────────────── index ── */
  home: {
    title: 'Javier Ponz — technical support & agent operations',
    desc: 'Javier Ponz — technology, service and agents.',
    kicker: 'Aberdeen, Scotland',
    tagline: 'I build agent tooling and small products that ', taglineSerif: 'actually ship', taglineEnd: '.',
    lede: 'Ten years diagnosing hard technical problems for people at Apple Retail, now building AI systems and full stack applications — deployed, tested, and running in production. Same job, different surface.',
    overviewLabel: '01 / Overview', overviewH2: 'Ten years between people and their machines.',
    overview: P(
      'A decade at Apple Retail taught me to diagnose failure fast, work in ambiguity, and translate between what the engineer means, what the sale promised, and what the person actually has on their screen — first at the counter, later leading the teams doing it. I now apply that to AI systems: agent workflows, automation, and applications I take all the way to production on infrastructure I run myself.',
      'I am studying Artificial Intelligence and Full Stack development at Universidad Rey Juan Carlos, and I ship real things while I do it — this site and a live web app, both written and deployed by me, plus agent tooling I specified and had an agent build. The <a href="{workbench}">workbench</a> says which is which. Everything here has source code you can read.'),
    tags: ['leading is serving', 'Hermes Agent', 'Omarchy', 'local inference', 'agent workflows', 'Docker & deployment', 'technical troubleshooting', 'MCP', 'building in public'],
    exploreLabel: '02 / Explore',
    cards: [
      { href: '{about}', meta: 'Background', h3: 'About & experience →', p: 'Apple Retail, the move into AI systems, and the credentials behind it.' },
      { href: '{workbench}', meta: 'Build log', h3: 'Workbench →', p: 'Projects and repositories, with scope and status stated plainly.' },
      { href: '{memento}', meta: 'Case study', h3: 'Shipping to production →', p: 'How a small app got from idea to a live, verified deployment.' },
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
    lede: 'What I run every day, and what I have made. The two are listed separately on purpose, and each project says who wrote it.',
    runningLabel: 'Running daily', projectsLabel: 'Shipped', productionLabel: 'In production',
    cap2: 'Hermes Agent Site — one of six selectable skins',
    scopeLabel: 'Scope note',
    scope: 'These are personal projects and learning artefacts, built and maintained by me. They are not client deliverables.',
    caseStudyLabel: 'Case study: Memento Mori', caseStudyH2: 'Getting a small app to production.',
    caseStudyLede: 'Memento Mori\'s native widget is the product; this web app is its demo, running the exact same life-expectancy model in a browser. This case study is about how the web side got from an idea to something running on a real domain, with real release gates.',
    caseStudyAppLabel: 'The app', caseStudyCaption: 'The landing view at memento.technoir.cloud',
    caseStudyLinksLabel: 'Links',
    caseStudyLinks: [
      { time: 'Live', h3: 'memento.technoir.cloud ↗', href: 'https://memento.technoir.cloud/', p: 'The deployed application.' },
      { time: 'Source', h3: 'github.com/ponzgpt/memento-mori ↗', href: 'https://github.com/ponzgpt/memento-mori', p: 'Apache-2.0, with the release tooling described below.' }
    ],
    caseStudySections: [
      { label: 'The problem', cls: 'prose', html: P(
        'People know time is finite, but the idea stays abstract, and abstract limits are easy to postpone around. The loud task wins, the meaningful conversation moves to next month, and one ordinary day feels interchangeable with any other.',
        'I wanted something that made the limit legible without pretending to predict anything about a specific person. That constraint — <em>useful without overclaiming</em> — drove most of the decisions that followed.') },
      { label: 'What it does', cls: 'prose', html: P(
        'You enter a birth date, a country of birth (and a current country and the age you moved, if it differs), and six lifestyle factors — the same ones the native widget asks for. The app shows a central horizon drawn from World Bank life-expectancy data, with an explicit seven-year margin on each side, remaining years, weeks and days, and a 100-year life grid. Then it asks for one concrete intention for today.',
        'The uncertainty is deliberately visible. A single confident date would have been easier to build and would have been a lie.') },
      { label: 'Decisions', cls: 'prose', html:
        '<h3>No backend, no accounts, no analytics</h3>' + P('The birth date and the intention never leave the browser. Everything is in local storage; the server only sees ordinary requests for static files. This removed an entire category of work — auth, a database, a privacy policy with teeth — and it was the right call for a tool that handles something this personal. The copy-to-clipboard summary deliberately excludes the birth date.') +
        '<h3>Zero runtime dependencies</h3>' + P('The app is plain HTML, CSS and ES modules with no build step. The whole thing can be opened from a single file. This is not purity for its own sake: it means the production artifact is a directory of static files, and there is nothing to patch when a transitive dependency has a bad week.') +
        '<h3>Docker, nginx and Traefik on a VPS I already run</h3>' + P('The VPS and the domain already existed, so this path added no new subscription and no new vendor. A free static host would also have worked; I chose the container path because I wanted the deployment itself to be part of what I was learning. Each release is an immutable image tag, Traefik owns routing and certificate renewal separately from the app container, and rollback is redeploying the previous tag.') },
      { label: 'Release gates', cls: 'prose', html: P(
        'The part I am most glad about is not the app, it is what stands between the app and production. A single command, <code>npm run verify</code>, runs the whole gate: unit tests on the calculation core, feature-story checks, a lint pass, a web smoke check, installer checks, version-consistency checks across the manifest files, and a Waybar module compile.',
        'The version check exists because I drifted once — the package version, the release manifest and the changelog disagreed, and I only noticed by accident. Making that a failing check rather than a habit was the fix.',
        'The same gate runs in GitHub Actions on Linux, macOS and Windows, so a green local run is not the only evidence.') },
      { label: 'What I would do differently', cls: 'prose', html:
        '<ul><li><strong>Deploy earlier.</strong> The first real deployment surfaced things that local preview never would have. I should have put an ugly version on the domain in week one and iterated against the real thing.</li><li><strong>Decide the product boundary once, and write down why.</strong> The project moved from a status-bar widget to a web app, then back — the widget is the product now, and this web app is its demo. Both moves made sense given what I knew at the time, but each one meant real rework. Next time I would fix the criteria for which surface is primary early, and revisit it on purpose, not rediscover it under deploy pressure.</li><li><strong>Write the honest scope note first.</strong> The current README states plainly what the app is not — not medical, actuarial, or a prediction about an individual. Writing that early would have made several design decisions obvious instead of arriving at them by iteration.</li></ul>' }
    ],
    caseStudyScopeLabel: 'Scope note',
    caseStudyScope: 'This is a personal project. It is a reflective aid built on population averages, not medical, legal, actuarial or mental-health advice, and it makes no claim about any individual.'
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
