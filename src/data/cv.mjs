// Single source of truth for the CV.
//
// Consumed by two outputs:
//   - src/pages/cv.astro          → the public web page (no phone number)
//   - scripts/build-cv-pdf.mjs    → public/javier-ponz-prado-cv.pdf (full contact)
//
// Plain .mjs rather than .ts so the Node build script can import it directly.
// Edit here; both outputs follow.

export const person = {
  name: 'Javier Ponz Prado',
  headline: 'AI systems & agent operations · technical troubleshooting · full stack in progress',
  location: 'Aberdeen, Scotland, United Kingdom',
  // `private: true` fields are written into the PDF only, never rendered on the web page.
  contact: [
    { label: 'Email', value: 'nerion89@gmail.com', href: 'mailto:nerion89@gmail.com' },
    { label: 'Phone', value: '+34 691 347 651', href: 'tel:+34691347651', private: true },
    { label: 'LinkedIn', value: 'linkedin.com/in/javierponz', href: 'https://www.linkedin.com/in/javierponz' },
    { label: 'GitHub', value: 'github.com/ponzgpt', href: 'https://github.com/ponzgpt' },
    { label: 'Site', value: 'javierponz.technoir.cloud', href: 'https://javierponz.technoir.cloud/' }
  ]
};

export const profile = [
  'Ten years at Apple Retail across diagnosis, customer operations and team leadership, now operating open agent systems daily and shipping small software to production.',
  'Strongest where systems fail: investigating failure modes, debugging workflows, and writing down precisely which assumption broke. I work from first principles and pay close attention to how a problem is structured before reaching for a tool.',
  'I run local inference on my own hardware — llama.cpp serving a quantised open-weights model from an RTX 5090, exposed as an API and wired into Hermes — and I am building a self-hosted homelab on Proxmox. Privacy and data sovereignty are the point of that work, not a side effect of it.',
  'One conviction carries across every role I have held: leading is serving. The measure of a tool, like the measure of a lead, is whether the person depending on it ends up with more capacity than they started with.'
];

export const shipped = [
  {
    title: 'Memento Mori — web application, live in production',
    when: '2026',
    where: 'memento.technoir.cloud · Apache-2.0 · github.com/ponzgpt/memento-mori',
    href: 'https://memento.technoir.cloud/',
    body: 'Spanish-language perspective tool built on World Bank life-expectancy data. No accounts, no backend, no analytics; all computation runs in the browser. Deployed with Docker, nginx and Traefik on a VPS I administer, behind an eight-check release gate (unit tests, feature stories, lint, web smoke, installer and version-consistency checks) that refuses to publish on red. Cross-platform CI on Linux, macOS and Windows. Native macOS menu-bar companion written in Swift.'
  },
  {
    title: 'Hermes PKM Toolkit — MCP server and agent skills',
    when: '2026',
    where: 'MIT · specified by me, implemented by an agent · github.com/ponzgpt/hermes-pkm-toolkit',
    href: 'https://github.com/ponzgpt/hermes-pkm-toolkit',
    body: 'Model Context Protocol tools for operating local Markdown vaults safely, with a filesystem-safety layer and tests covering path-traversal rejection and absolute-path neutralisation. I wrote the specification and the safety requirements; Hermes Agent produced the implementation from them. Listed because directing an agent to a usable result is the skill I am practising, not as code I could walk through line by line.'
  },
  {
    title: 'Mental Models Toolkit — agent skill pack',
    when: '2026',
    where: 'MIT · models mine, packaging agent-generated · github.com/ponzgpt/mental-models-toolkit',
    href: 'https://github.com/ponzgpt/mental-models-toolkit',
    body: 'Thirty machine-readable decision and risk models, schema-validated in continuous integration, written to be read by an agent rather than by a person. The selection and the models are my work.'
  },
  {
    title: 'The Aberdeen Daily — nightly local newspaper agent',
    when: '2026',
    where: 'MIT · fork of vaelkeep/hermes-paper-agent · github.com/ponzgpt/aberdeen-daily',
    href: 'https://github.com/ponzgpt/aberdeen-daily',
    body: 'An open Hermes Agent project adapted to my city: local feed sources, editorial rules and city-specific configuration. The architecture is upstream, not mine — one commit of seventeen is my own.'
  }
];

export const experience = [
  {
    title: 'Founder — Machines Do It Better',
    when: 'August 2024 — present',
    where: 'Aberdeen, Scotland · independent',
    body: 'An agent consultancy for individuals and small businesses, premised on privacy, data sovereignty and customisation to a specific use case rather than the deterministic workflow tooling most agencies sell. Designing, deploying and stress-testing agents and automations in Docker and Dokploy with OpenRouter and Telegram; operational documentation and workflow QA. No clients to date. Editorial newsletter covering AI, robotics and fintech.'
  },
  {
    title: 'Lead In-Store Experience — Apple Retail (secondment, twice)',
    when: 'February — August 2023; February — August 2024',
    where: 'Xanadú (Arroyomolinos), then Parquesur (Leganés), Madrid',
    body: 'Two seven-month leadership secondments taken while holding the Genius role. Ran floor experience for the store: planning, resourcing, events, maintenance coordination, structured feedback and the situations that fit no procedure. Led by removing obstacles rather than issuing instructions.'
  },
  {
    title: 'Genius — Apple Retail',
    when: 'March 2018 — August 2024',
    where: 'Parquesur, Leganés, Madrid',
    body: 'Six and a half years as the technical baseline of the store: advanced hardware and software diagnosis on the cases nobody else had resolved, translating them for people with very different levels of understanding, and bringing newer technicians onto the bench. The two leadership secondments above sit inside this run.'
  },
  {
    title: 'AppleCare Support Advisor — Apple',
    when: 'March 2020 — June 2020',
    where: 'Remote, Madrid · COVID volunteering',
    body: 'Concurrent remote support cases under structured troubleshooting and documentation standards, working autonomously.'
  },
  {
    title: 'Specialist, then Technical Specialist — Apple Retail',
    when: 'September 2014 — February 2018',
    where: 'Parquesur, Madrid',
    body: 'Foundations in diagnosis, consultative support, practical problem solving and execution under pressure.'
  }
];

export const education = [
  {
    title: 'Specialist in Artificial Intelligence',
    when: 'October 2024 — December 2026, in progress',
    where: 'Universidad Rey Juan Carlos, via Racks University (IUNIT-affiliated)'
  },
  {
    title: 'Full Stack AI Developer',
    when: 'September 2025 — December 2026, in progress',
    where: 'Universidad Rey Juan Carlos, via Racks University (IUNIT-affiliated)'
  },
  {
    title: 'Industrial Engineering (Electronics and Automation)',
    when: '80 ECTS completed, degree unfinished',
    where: 'Universidad Politécnica de Madrid · 2008 — 2013'
  },
  {
    title: 'Apple Certified Mac Technician (ACMT); Apple Certified iOS Technician (ACiT)',
    when: 'Certified',
    where: 'Apple'
  },
  {
    title: 'English — Cambridge Certificate in Advanced English (C1)',
    when: 'Certified',
    where: 'Cambridge Assessment'
  }
];

// Flat groups, deliberately keyword-dense and plainly written: the first reader
// of this document is likely to be software.
export const skills = [
  { group: 'Agents and AI', items: ['Hermes Agent', 'OpenClaw', 'Model Context Protocol (MCP)', 'MCP server development', 'agent workflows', 'workflow QA', 'OpenRouter', 'llama.cpp', 'Ollama', 'LM Studio', 'local inference on own GPU', 'prompt and failure-trace debugging'] },
  { group: 'Infrastructure and deployment', items: ['Docker', 'Docker Swarm', 'Dokploy', 'Traefik', 'nginx', 'Linux', 'VPS administration', 'TLS / Let’s Encrypt', 'GitHub Actions', 'CI/CD', 'release gating'] },
  { group: 'Development', items: ['JavaScript', 'TypeScript', 'Python', 'Astro', 'Swift', 'HTML', 'CSS', 'Git', 'unit testing', 'static site generation'] },
  { group: 'Practice', items: ['Technical troubleshooting', 'failure-mode investigation', 'technical support', 'customer operations', 'technical writing and documentation', 'mentoring', 'team leadership'] },
  { group: 'Currently learning', items: ['vLLM', 'Proxmox', 'NAS under a hypervisor', 'virtualisation', 'networking and Pi-hole', 'self-hosted homelab', 'Arch Linux', 'Fedora', 'Omarchy'] },
  { group: 'Languages', items: ['Spanish (native)', 'English (Cambridge CAE, C1)'] }
];
