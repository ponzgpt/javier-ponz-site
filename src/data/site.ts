// `by` states authorship explicitly. Three of these were specified by me and
// written by an agent, or forked from someone else's work, and a page headed
// "things I am making" has to say so rather than let the reader assume.
export const projects = [
  { title: 'Memento Mori', kind: 'web app', status: 'shipped', by: 'written & deployed by me', description: 'A Spanish-first web app turning life-expectancy data into perspective and one intentional action for today. Live in production on my own VPS.', url: 'https://github.com/ponzgpt/memento-mori', live: 'https://memento.technoir.cloud/' },
  { title: 'Hermes PKM Toolkit', kind: 'MCP tools', status: 'active', by: 'specified by me, agent-written', description: 'MCP server and agent skills for working safely with local Markdown vaults, with path-traversal protection and a tested filesystem layer.', url: 'https://github.com/ponzgpt/hermes-pkm-toolkit' },
  { title: 'Mental Models Toolkit', kind: 'skill pack', status: 'active', by: 'models mine, agent-packaged', description: '30 machine-readable mental models for decisions and risk checks, packaged as an agent skill pack.', url: 'https://github.com/ponzgpt/mental-models-toolkit' },
  { title: 'Hermes Agent Site', kind: 'landing page', status: 'shipped', by: 'written & deployed by me', description: 'An unofficial landing page for Hermes Agent that behaves like the CLI it describes: real slash-command palette, six skins, zero build step.', url: 'https://github.com/ponzgpt/hermes-agent-site' },
  { title: 'The Aberdeen Daily', kind: 'news agent', status: 'active', by: 'fork of vaelkeep/hermes-paper-agent, adapted by me', description: 'A nightly local paper for Aberdeen. Data desks compute every figure in Python so the model is never in a position to invent one. The architecture is upstream; my contribution is the city, the feeds and the editorial rules.', url: 'https://github.com/ponzgpt/aberdeen-daily' }
];

// Things I run every day but did not write. Kept separate from `projects` for
// the same reason `projects` carries a `by` field: operating something and
// authoring it are different claims.
export const running = [
  {
    title: 'Hermes Agent',
    kind: 'agent harness',
    status: 'daily',
    by: 'Nous Research · I operate it',
    description: 'Scheduled workflows, automations and agents with permission to touch real files. Skills are Markdown I can edit, tools are servers I can read. Wired to a model served from my own GPU.',
    url: 'https://github.com/NousResearch/hermes-agent'
  },
  {
    title: 'Omarchy',
    kind: 'operating system',
    status: 'daily',
    by: 'Basecamp / DHH · I run it',
    description: 'My daily driver alongside Arch and Fedora. A desktop that expects to be edited rather than tolerated, and the other half of the argument in my thesis: the machine has to be shapeable before an agent can do much with it.',
    url: 'https://omarchy.org'
  },
  {
    title: 'llama.cpp on an RTX 5090',
    kind: 'local inference',
    status: 'daily',
    by: 'set up and maintained by me',
    description: 'A dense Qwen3 27B, GGUF at Q6, served from this room as an API and wired into Hermes. Nothing in that loop leaves the house. I have also run Ollama and LM Studio.',
    url: 'https://github.com/ggml-org/llama.cpp'
  }
];

export const timeline = [
  { date: 'Sep 2014 — Feb 2018', title: 'Specialist, then Technical Specialist · Apple Retail', text: 'Parquesur, Madrid. Foundations in diagnosis, consultative support and daily execution under pressure.' },
  { date: 'Mar 2018 — Aug 2024', title: 'Genius · Apple Retail', text: 'Parquesur, Leganés. Six and a half years as the technical baseline of the store: advanced diagnosis on the cases nobody else had resolved, translating them for people with very different levels of understanding, and bringing newer technicians onto the bench.' },
  { date: 'Mar — Jun 2020', title: 'AppleCare Support Advisor · Apple', text: 'Remote, during COVID, as a volunteer. Concurrent cases under structured troubleshooting and documentation standards, working without a floor around me.' },
  { date: 'Feb — Aug 2023 · Feb — Aug 2024', title: 'Lead In-Store Experience · Apple Retail (secondment, twice)', text: 'Xanadú first, then Parquesur. Two seven-month leadership secondments taken while holding the Genius role: planning, resourcing, events, coordination and the situations that fit no procedure. Led by removing obstacles, then went back to the bench.' },
  { date: 'Aug 2024', title: 'Aberdeen, Scotland', text: 'Moved to the UK and started a deliberate transition into AI systems and full stack development.' },
  { date: 'Aug 2024 — now', title: 'AI systems, automation, and building in public', text: 'Studying at Universidad Rey Juan Carlos via Racks University, founding Machines Do It Better, running local inference on my own hardware, and shipping small products that reach production.' }
];

export const skills = {
  'Agents & AI tooling': ['Hermes Agent', 'OpenClaw', 'MCP servers', 'OpenRouter', 'llama.cpp', 'local inference on own GPU', 'agent workflows', 'prompt and workflow QA'],
  'Infrastructure & deployment': ['Docker', 'Dokploy', 'Traefik', 'nginx', 'VPS (Hostinger, Hetzner)', 'GitHub Actions', 'Linux — Arch, Fedora, Omarchy', 'PC building & overclocking'],
  'Development': ['JavaScript / TypeScript', 'Astro', 'Python', 'Swift (menu bar app)', 'HTML / CSS', 'Git'],
  'Practice': ['Technical support', 'Customer success', 'Technical troubleshooting', 'Failure-mode investigation', 'Structured documentation', 'Testing and release gates', 'Customer operations', 'Mentoring', 'Team leadership'],
  'Learning now': ['vLLM', 'Proxmox', 'self-hosted homelab', 'OSINT', 'GrapheneOS', 'de-Googling']
};

export const credentials = [
  { title: 'Specialist in Artificial Intelligence', org: 'Universidad Rey Juan Carlos, via Racks University (IUNIT-affiliated)', date: 'Oct 2024 — Dec 2026', status: 'in progress' },
  { title: 'Full Stack AI Developer', org: 'Universidad Rey Juan Carlos, via Racks University (IUNIT-affiliated)', date: 'Sep 2025 — Dec 2026', status: 'in progress' },
  { title: 'Industrial Engineering (Electronics & Automation)', org: 'Universidad Politécnica de Madrid', date: '80 ECTS completed', status: 'degree not finished' },
  { title: 'Apple Certified Mac Technician (ACMT) · Apple Certified iOS Technician (ACiT)', org: 'Apple', date: '', status: 'certified' },
  { title: 'English — Cambridge CAE (C1)', org: 'Cambridge Assessment', date: '', status: 'certified' }
];
