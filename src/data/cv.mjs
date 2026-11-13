// Single source of truth for the CV.
//
// Consumed by two outputs:
//   - the Contact section's CV disclosure (headline + first profile line)
//   - scripts/build-cv-pdf.mjs    → public/javier-ponz-prado-cv.pdf (full contact)
//
// Plain .mjs rather than .ts so the Node build script can import it directly.
// Edit here; both outputs follow.

export const person = {
  name: 'Javier Ponz',
  headline: 'Technical support · support engineering · agent operations',
  location: 'Aberdeen, Scotland, United Kingdom',
  contact: [
    { label: 'LinkedIn', value: 'linkedin.com/in/javierponz', href: 'https://www.linkedin.com/in/javierponz' },
    { label: 'GitHub', value: 'github.com/ponzgpt', href: 'https://github.com/ponzgpt' },
    { label: 'X', value: 'x.com/sudotechnoir', href: 'https://x.com/sudotechnoir' },
    { label: 'Discord', value: 'sudotechnoir (Nous Discord)' },
    { label: 'Site', value: 'javierponz.technoir.cloud', href: 'https://javierponz.technoir.cloud/' }
  ]
};

// The web page (Contact's CV disclosure, the terminal's whoami/cv commands)
// only ever reads person.headline/location and profile[0]/profile[1] — the
// rest of this file (shipped/experience/education/skills, profile[2..4])
// feeds only build-cv-pdf.mjs, and that PDF stays English-only on purpose
// (see README). So only those four strings get a Spanish counterpart.
export const personEs = {
  headline: 'Soporte técnico · ingeniería de soporte · operaciones con agentes',
  location: 'Aberdeen, Escocia, Reino Unido'
};

export const profileEs = [
  'Ex-Genius de Apple. Diez años en Apple Retail entre reparación, diagnóstico técnico, venta consultiva y liderazgo de equipos; ahora ayudo a las personas y a sus agentes de IA a desatascarse, uso Hermes a diario y le hago plugins.',
  'Se me da mejor ser la persona entre la gente y sus máquinas: traducir lo que quiere decir el ingeniero, lo que prometió la venta, y lo que la persona realmente tiene en la pantalla. La mayoría de los fallos de soporte son fallos de traducción, no técnicos.'
];

export const profile = [
  "Ex-Apple Genius. Ten years at Apple Retail across hands-on repair, technical diagnosis, consultative selling and team leadership; now I help people and their AI agents get unstuck, use Hermes every day and build plugins for it.",
  'Best at being the human between people and their machines: translating what the engineer means, what the sale promised, and what the person actually has on their screen. Most support failures are translation failures, not technical ones.',
  'Strongest where systems fail: investigating failure modes, debugging workflows, writing down precisely which assumption broke. Building and overclocking PCs since I was a teenager is where that interest in hardware started.',
  'Local inference is my own infrastructure project: two machines meant to serve a quantised open-weights model behind an API, wired into Hermes Agent, currently offline while I rebuild the hardware. Daily driver is Arch, Fedora and Omarchy, and a self-hosted homelab on Proxmox is taking shape alongside it. Deliberately unwinding a decade inside a closed platform: off Google, learning OSINT, GrapheneOS next. Privacy and data sovereignty are the point, not a side effect.',
  'One conviction across every role: leading is serving. A tool, like a lead, is measured by whether the person depending on it ends up with more capacity than they started with.'
];

// The CV's Profile section, and only that section — everything else on the
// PDF still reads from the arrays below. Kept separate from `profile`
// (above) rather than trimming that array, because `profile[1]` is also
// what the terminal's `whoami` command prints on the live site and has to
// stay exactly as it is. This one exists to be short: a one-page CV has no
// room for the personal-essay version, and a hiring manager skimming it
// doesn't need the homelab backstory the site tells at length elsewhere.
export const cvSummary = "Ten years of technical support at Apple as a Genius, a remote AppleCare advisor and an in-store Lead: diagnosing faults I'd never seen, escalating cases someone could act on, and training the technicians who came after me. Colleagues used my case notes as the example to follow. Today Hermes runs my day and I build plugins for it as a vibe coder: I spec and test, AI agents write the code. Looking for support and customer-facing roles around open agents, and to help a support team grow.";

export const shipped = [
  {
    title: 'Psychopomp and Sabbath · Hermes Agent plugins',
    when: 'Nov 2026',
    where: 'Nous Research plugin hackathon · vibe-coded: my spec and tests, agent-written · github.com/ponzgpt/psychopomp · github.com/ponzgpt/sabbath',
    href: 'https://github.com/ponzgpt/psychopomp',
    body: 'Psychopomp: a weekly page of your life, and a dead man\'s switch that carries your words to the people you love only after a witness sends a code. Sabbath: a weekly day of rest where Hermes pauses its own scheduled jobs and sets work aside. Both tested end to end on my own Hermes in Desktop and Telegram, pass Hermes\'s plugin validator and security scan, disclose every risky behaviour, and are submitted to the Hermes plugin catalog.'
  },
  {
    title: 'Neuronara · cited answers over clinical neurophysiology standards',
    when: '2026',
    where: 'neuronara.technoir.cloud · vibe-coded: my spec, agent-written · github.com/ponzgpt/neuronara',
    href: 'https://neuronara.technoir.cloud/',
    body: 'Built for my partner, a clinical neurophysiologist, and improved in a feedback loop with her: every miss she reports is reproduced, fixed and added to a held-out evaluation set. Searches society guidance and Europe PMC in English, Spanish and German; the server drops any answer sentence that does not cite a real source.'
  },
  {
    title: 'ASI Rush · Post-Labor Wiki',
    when: '2026',
    where: 'asi-rush.technoir.cloud · post-labor-wiki.technoir.cloud · vibe-coded',
    href: 'https://asi-rush.technoir.cloud/',
    body: 'A browser clicker about the real race to AI, from a garage to superintelligence; and a visual, source-first wiki on post-labor economics with a citation behind every claim.'
  }
];

// MDIB used to be the first entry here, with its own paragraph. It has no
// clients and is not conventional employment, so on a one-page CV it now
// gets one line in `cvBuilding` instead of a full entry with its own bullets.
// `bullets` (1-2 per role, tightest for the oldest/shortest ones) replaced a
// `body` paragraph per entry — a CV reads as achievements to scan, not
// prose to read start to finish, and a paragraph forced it into the latter.
export const cvBuilding = 'Independent since August 2024, in Aberdeen: studying and building in public. Machines Do It Better, my main project (pre-launch): AI agents set up for people on open models and harnesses like Hermes, so they own them. Two Hermes plugins in the Nous Research hackathon; Neuronara, built for my partner, a clinical neurophysiologist. All vibe-coded: I specify, test and ship; AI coding agents write the code. All on a VPS I administer; javierponz.technoir.cloud and github.com/ponzgpt.';

// Each role may carry an `es` layer (see `pick` in i18n.mjs) that the Spanish
// page's Story section reads for its collapsed bullets. The PDF ignores it and
// stays English-only.
export const experience = [
  {
    title: 'Lead In-Store Experience · Apple Retail (secondment, twice)',
    when: 'Feb – Aug 2023; Feb – Aug 2024',
    where: 'Xanadú (Arroyomolinos), then Parquesur (Leganés), Madrid',
    bullets: [
      'From the bench into leadership, twice: seven-month secondments taken while holding the Genius role. Worked alongside the management team as the link between them and the floor, running the store from opening to close: staffing and team breaks, customer flow, logistics.',
      'Trained technical and sales staff, ran weekly cross-team alignment and co-owned scheduling optimisation; handled what no procedure covered. Noted by my manager for high visibility with the Support team and store leadership.'
    ],
    es: {
      bullets: [
        'Del banco de trabajo al liderazgo, dos veces: comisiones de siete meses compatibilizadas con el puesto de Genius. Trabajé junto al equipo de dirección como enlace entre ellos y la tienda, llevándola de apertura a cierre: turnos y descansos del equipo, flujo de clientes, logística.',
        'Formé al personal técnico y de ventas, dirigí la coordinación semanal entre equipos y compartí la optimización de horarios; me ocupé de lo que no cubría ningún procedimiento. Mi responsable destacó mi visibilidad ante el equipo de Soporte y la dirección de la tienda.'
      ]
    }
  },
  {
    title: 'Genius · Apple Retail',
    when: 'March 2018 – August 2024',
    where: 'Parquesur, Leganés, Madrid',
    bullets: [
      'Diagnosed and repaired Mac, iPhone and iPad hardware and software faults, owning each case through post-repair checks; repair times among the shortest on the team while covering front-of-house support; NPS stable and at or above the team average.',
      'Colleagues used my case notes as the example to follow; standardised documentation to Apple guidelines, which shortened their appointments. Proposed repair-room process fixes to store leadership and linked Support with the stockroom on dead-on-arrival parts.',
      'Mentored newer technicians and new Geniuses through shadowing and case feedback; trusted by Lead Geniuses to run floor resourcing and walk-in triage.'
    ],
    es: {
      bullets: [
        'Diagnostiqué y reparé fallos de hardware y software en Mac, iPhone y iPad, llevando cada caso hasta las comprobaciones posteriores a la reparación; tiempos de reparación entre los más cortos del equipo mientras cubría el soporte de cara al público; NPS estable y en la media del equipo o por encima.',
        'Mis compañeros usaban mis notas de caso como el ejemplo a seguir; estandaricé la documentación según las pautas de Apple, lo que acortó sus citas. Propuse a la dirección mejoras de proceso en la sala de reparaciones y conecté Soporte con el almacén en las piezas defectuosas de origen.',
        'Mentoricé a técnicos y Geniuses nuevos con acompañamiento y feedback sobre casos; los Lead Geniuses me confiaban la asignación de recursos en tienda y el triaje de clientes sin cita.'
      ]
    }
  },
  {
    title: 'AppleCare Support Advisor · Apple',
    when: 'March – June 2020',
    where: 'Remote, Madrid · COVID volunteering',
    bullets: [
      'Remote, asynchronous support: Tier 1 by phone, email and chat, several cases at once, each owned from first contact to resolution under structured troubleshooting and documentation standards.',
      'Escalated what Tier 1 could not resolve: documented the case, briefed Tier 2 first, then a live three-way handoff with the customer.'
    ],
    es: {
      bullets: [
        'Soporte remoto y asíncrono: Tier 1 por teléfono, correo y chat, varios casos a la vez, cada uno llevado del primer contacto a la resolución con estándares estructurados de resolución de incidencias y documentación.',
        'Escalaba lo que Tier 1 no podía resolver: documentaba el caso, informaba antes a Tier 2 y después hacía el traspaso a tres en directo con el cliente.'
      ]
    }
  },
  {
    title: 'Specialist, then Technical Specialist · Apple Retail',
    when: 'September 2014 – February 2018',
    where: 'Parquesur, Madrid',
    bullets: [
      'Foundations in diagnosis, consultative support and execution under pressure.'
    ],
    es: {
      bullets: ['Fundamentos de diagnóstico, soporte consultivo y ejecución bajo presión.']
    }
  }
];

export const education = [
  {
    title: 'Specialist in Artificial Intelligence',
    when: '2024 – 2026, in progress',
    where: 'Universidad Rey Juan Carlos, via Racks University'
  },
  {
    title: 'Full Stack AI Developer',
    when: '2025 – 2026, in progress',
    where: 'Universidad Rey Juan Carlos, via Racks University'
  },
  {
    title: 'Industrial Engineering (Electronics and Automation)',
    when: '2008 – 2013, 80 ECTS, not completed',
    where: 'Universidad Politécnica de Madrid'
  }
];

// One line, not two entries with their own when/where — neither certificate
// needs a date and both fit a single row.
export const certifications = 'Apple Certified Mac Technician (ACMT) · Apple Certified iOS Technician (ACiT) · English, Cambridge CAE (C1)';

// Flat groups, deliberately keyword-dense and plainly written: the first
// reader of this document is likely to be software. Pruned against
// site.ts's own skillGroups (the web's already fact-checked version of this
// same claim) rather than left to drift on its own — OpenClaw, LM Studio and
// the homelab-privacy items (OSINT, GrapheneOS, de-Googling, Pi-hole) were
// in an earlier draft of this list but never verified anywhere else on the
// site, and a CV is the wrong place for a claim the site itself doesn't make.
export const skills = [
  { group: 'Agents and AI', items: ['Hermes Agent', 'Model Context Protocol (MCP)', 'agent workflows', 'workflow QA', 'OpenRouter', 'llama.cpp', 'Ollama', 'local inference', 'prompt and failure-trace debugging'] },
  { group: 'Infrastructure and deployment', items: ['Docker', 'Docker Swarm', 'Dokploy', 'Traefik', 'nginx', 'Linux: Arch, Fedora, Omarchy', 'VPS administration', 'GitHub Actions', 'CI/CD'] },
  { group: 'Building (vibe-coded, with AI coding agents)', items: ['Claude Code', 'Codex', 'specs and acceptance tests', 'testing and verifying agent output', 'Git', 'shipped in JavaScript, TypeScript, Python, Astro'] },
  { group: 'Practice', items: ['Technical support', 'technical troubleshooting', 'failure-mode investigation', 'documentation', 'mentoring', 'team leadership'] },
  { group: 'Building towards', items: ['vLLM', 'Proxmox', 'self-hosted homelab', 'agent operations'] },
  { group: 'Languages', items: ['Spanish (native)', 'English (Cambridge CAE, C1)'] }
];

