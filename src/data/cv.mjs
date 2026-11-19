// Single source of truth for the CV: scripts/build-cv-pdf.mjs renders it to
// public/javier-ponz-prado-cv.pdf. Nothing on the site imports it.
//
// English only, on purpose. Every fact here must be in the claims ledger or
// on the live site; when the site changes its wording, this follows.
// Plain .mjs rather than .ts so the Node build script can import it directly.

export const person = {
  name: 'Javier Ponz',
  headline: 'Technical support · AI agents and the servers under them',
  location: 'Aberdeen, Scotland',
  // Email first. The build script inserts CV_PHONE after it, for copies sent
  // directly; the public PDF never carries a phone number.
  contact: [
    { value: 'jponz@proton.me', href: 'mailto:jponz@proton.me' },
    { value: 'javierponz.technoir.cloud', href: 'https://javierponz.technoir.cloud/' },
    { value: 'github.com/ponzgpt', href: 'https://github.com/ponzgpt' },
    { value: 'linkedin.com/in/javierponz', href: 'https://www.linkedin.com/in/javierponz' },
    { value: 'x.com/sudotechnoir', href: 'https://x.com/sudotechnoir' },
    { value: 'Discord sudotechnoir' }
  ]
};

export const profile = [
  'I came to software through hardware: I built and overclocked my own PCs, left industrial engineering unfinished, and worked at Apple until 2024, six and a half years as a Genius. Since then I have learned servers, deployment and local models from zero, directing AI coding agents that write the code from my specs and tests.'
];

export const experience = [
  {
    title: 'Relocation and pivot',
    when: 'Aug 2024 – now',
    where: 'Aberdeen, Scotland',
    bullets: [
      'Moved to the UK and learned, from zero, everything between a prompt and a production server; building in the open.',
      "Every site I publish runs on a VPS I administer: Docker Swarm behind Traefik, deployed by a script that refuses a dirty tree."
    ]
  },
  {
    title: 'Genius · Apple Retail',
    when: 'Mar 2018 – Aug 2024',
    where: 'Parquesur, Leganés, Madrid',
    bullets: [
      'Diagnosed and repaired Mac, iPhone and iPad hardware and software faults, owning each case through post-repair checks; repair times among the shortest on the team; NPS stable and at or above the team average.',
      "Colleagues used my case notes as the example to follow; kept case documentation to Apple's guidelines. Proposed repair-room process fixes to store leadership and linked Support with the stockroom on dead-on-arrival parts.",
      'Mentored newer technicians and new Geniuses through shadowing and case feedback.'
    ]
  },
  {
    title: 'Lead In-Store Experience · Apple Retail, secondment, twice',
    when: 'Feb – Aug 2023 · Feb – Aug 2024',
    where: 'Xanadú (Arroyomolinos), then Parquesur (Leganés), while holding the Genius role',
    bullets: [
      'Worked alongside the management team as the link between them and the floor, running the store from opening to close: staffing and team breaks, customer flow, logistics.',
      'Trained technical and sales staff, ran weekly cross-team alignment, co-owned scheduling optimisation and handled what no procedure covers.'
    ]
  },
  {
    title: 'AppleCare Support Advisor · Apple',
    when: 'Mar – Jun 2020',
    where: 'Remote, during the COVID-19 store closures in Spain, as a volunteer',
    bullets: [
      'Tier 1 by phone, email and chat: concurrent cases under structured troubleshooting and documentation standards.',
      'Escalated what Tier 1 could not resolve: documented the case and briefed Tier 2 before a live three-way handoff.'
    ]
  },
  {
    title: 'Specialist, then Technical Specialist · Apple Retail',
    when: 'Sep 2014 – Feb 2018',
    where: 'Parquesur, Madrid',
    bullets: ['Diagnosis and consultative support, on the shop floor every day.']
  }
];

// One line each. The site is where the long versions live.
export const work = [
  {
    title: 'Psychopomp and Sabbath',
    body: 'Hermes Agent plugins, both merged into the official Hermes plugin catalog on 11 November 2026 after maintainer review; 31 tests between them.',
    links: [
      { value: 'github.com/ponzgpt/psychopomp', href: 'https://github.com/ponzgpt/psychopomp' },
      { value: 'github.com/ponzgpt/sabbath', href: 'https://github.com/ponzgpt/sabbath' }
    ]
  },
  {
    title: 'Neuronara',
    body: 'Reference search over clinical neurophysiology standards, built for my partner, a clinical neurophysiologist; every miss she reports is reproduced, fixed and pinned by an evaluation question.',
    links: [{ value: 'neuronara.technoir.cloud', href: 'https://neuronara.technoir.cloud/' }]
  },
  {
    title: 'Machines Do It Better',
    body: 'Where I put it all to work: private AI agents for professionals who handle confidential information, each owned by the person who uses it.',
    links: [{ value: 'mdib.technoir.cloud', href: 'https://mdib.technoir.cloud/' }]
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
    title: 'Industrial Engineering',
    when: '2008 – 2013, 80 ECTS, not completed',
    where: 'Universidad Politécnica de Madrid'
  }
];

// Plainly written and keyword-dense: the first reader is often software.
// Only what the site's stack page or the ledger backs; "uses", not "expert in".
export const skills = [
  { group: 'Agents and AI', items: ['Hermes Agent (Syl on Hermes Cloud through Nous Portal, plus a local Hermes)', 'MCP servers', 'Hermes skills and scheduled jobs', 'Claude Code', 'Codex', 'llama.cpp', 'Ollama', 'LM Studio', 'OpenRouter'] },
  { group: 'Infrastructure', items: ['Docker Swarm', 'Dokploy', 'Traefik', 'nginx', "Let's Encrypt", 'GitHub Actions', 'VPS administration', 'Tailscale', 'Omarchy (Arch Linux)', 'macOS'] },
  { group: 'Building', items: ['specs and tests written before the code', 'AI coding agents', 'TypeScript', 'JavaScript', 'Python', 'Astro', 'Git and GitHub'] },
  { group: 'Support', items: ['Mac, iPhone and iPad diagnosis and repair', 'case documentation and escalation', 'mentoring', 'team leadership'] },
  { group: 'In progress', items: ['Proxmox home lab', 'vLLM'] }
];

export const certsAndLanguages = [
  'ACMT and ACiT, Apple Certified Mac and iOS Technician',
  'Spanish, native',
  'English, professional working proficiency'
];
