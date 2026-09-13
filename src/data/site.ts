// Site data. English is the base record; an optional `es` object overrides
// only the fields that change in Spanish (title/description/status-style
// text) — `pick(item, lang)` (src/data/i18n.mjs) merges it over English.
// Structural fields (icon, url, date) have nothing to translate, so they are
// simply absent from `es`.
//
// `by` states authorship explicitly. Three of these were specified by me and
// written by an agent, or forked from someone else's work, and a page headed
// "things I am making" has to say so rather than let the reader assume.
export const projects = [
  {
    title: '0TH Hermes', icon: '➤', kind: 'onboarding guide', status: 'active', by: 'specified by me, agent-written',
    description: 'An opinionated shortest path to a working Hermes Agent. Installing it is one line; what stops people is the next hour — 1,900 docs, three setup modes, twenty providers and no obvious default. A guide that decides for you, plus a script that reads your machine and names the one next step.',
    url: 'https://github.com/ponzgpt/0th-hermes',
    es: {
      kind: 'guía de inicio', status: 'activo', by: 'especificado por mí, escrito por un agente',
      description: 'El camino más corto y con criterio propio hasta un Hermes Agent funcionando. Instalarlo es una línea; lo que frena a la gente es la hora siguiente — 1.900 páginas de documentación, tres modos de instalación, veinte proveedores y ninguna opción por defecto obvia. Una guía que decide por ti, más un script que lee tu máquina y te dice el único paso siguiente.'
    }
  },
  {
    title: 'Memento Mori', icon: '▣', kind: 'web app', status: 'shipped', by: 'written & deployed by me',
    description: 'The web demo of the Memento Mori widget: same life-expectancy model, birth country, lifestyle factors and all, tried in a browser before you install it. Live in production on my own VPS.',
    url: 'https://github.com/ponzgpt/memento-mori', live: 'https://memento.technoir.cloud/',
    es: {
      kind: 'aplicación web', status: 'publicado', by: 'escrito y desplegado por mí',
      description: 'La demo web del widget Memento Mori: el mismo modelo de esperanza de vida, país de nacimiento, factores de estilo de vida y todo lo demás, para probarlo en el navegador antes de instalarlo. En producción sobre mi propio VPS.'
    }
  },
  {
    title: 'Hermes PKM Toolkit', icon: '⌁', kind: 'MCP tools', status: 'active', by: 'specified by me, agent-written',
    description: 'MCP server and agent skills for working safely with local Markdown vaults, with path-traversal protection and a tested filesystem layer.',
    url: 'https://github.com/ponzgpt/hermes-pkm-toolkit',
    es: {
      kind: 'herramientas MCP', status: 'activo', by: 'especificado por mí, escrito por un agente',
      description: 'Servidor MCP y skills de agente para trabajar de forma segura con bóvedas locales de Markdown, con protección contra path traversal y una capa de ficheros probada con tests.'
    }
  },
  {
    title: 'Mental Models Toolkit', icon: '▤', kind: 'skill pack', status: 'active', by: 'models mine, agent-packaged',
    description: '30 machine-readable mental models for decisions and risk checks, packaged as an agent skill pack.',
    url: 'https://github.com/ponzgpt/mental-models-toolkit',
    es: {
      kind: 'paquete de skills', status: 'activo', by: 'modelos míos, empaquetado por un agente',
      description: '30 modelos mentales legibles por máquina para decisiones y comprobaciones de riesgo, empaquetados como un skill pack de agente.'
    }
  },
  {
    title: 'Hermes Agent Site', icon: '◈', kind: 'landing page', status: 'shipped', by: 'written & deployed by me',
    description: 'An unofficial landing page for Hermes Agent that behaves like the CLI it describes: real slash-command palette, six skins, zero build step.',
    url: 'https://github.com/ponzgpt/hermes-agent-site',
    es: {
      status: 'publicado', by: 'escrito y desplegado por mí',
      description: 'Una landing page no oficial para Hermes Agent que se comporta como el CLI que describe: paleta real de comandos con barra, seis aspectos, sin paso de compilación.'
    }
  },
  {
    title: 'The Aberdeen Daily', icon: '▦', kind: 'news agent', status: 'active', by: 'fork of vaelkeep/hermes-paper-agent, adapted by me',
    description: 'A nightly local paper for Aberdeen. Data desks compute every figure in Python so the model is never in a position to invent one. The architecture is upstream; my contribution is the city, the feeds and the editorial rules.',
    url: 'https://github.com/ponzgpt/aberdeen-daily',
    es: {
      kind: 'agente de noticias', status: 'activo', by: 'fork de vaelkeep/hermes-paper-agent, adaptado por mí',
      description: 'Un periódico local nocturno para Aberdeen. Los data desks calculan cada cifra en Python para que el modelo nunca esté en posición de inventarse una. La arquitectura viene de upstream; mi aportación es la ciudad, las fuentes y las reglas editoriales.'
    }
  }
];

// Things I run every day but did not write. Kept separate from `projects` for
// the same reason `projects` carries a `by` field: operating something and
// authoring it are different claims.
export const running = [
  {
    title: 'Hermes Agent', icon: '◉', kind: 'agent harness', status: 'daily', by: 'Nous Research · I operate it',
    description: 'Scheduled workflows, automations and agents with permission to touch real files. Skills are Markdown I can edit, tools are servers I can read.',
    url: 'https://github.com/NousResearch/hermes-agent',
    es: {
      kind: 'framework de agentes', status: 'diario', by: 'Nous Research · yo lo opero',
      description: 'Flujos programados, automatizaciones y agentes con permiso para tocar ficheros reales. Las skills son Markdown que puedo editar, las tools son servidores que puedo leer.'
    }
  },
  {
    title: 'Omarchy', icon: '⌘', kind: 'operating system', status: 'daily', by: 'Basecamp / DHH · I run it',
    description: 'My daily driver alongside Arch and Fedora. A desktop that expects to be edited rather than tolerated, and the other half of the argument in my thesis: the machine has to be shapeable before an agent can do much with it.',
    url: 'https://omarchy.org',
    es: {
      kind: 'sistema operativo', status: 'diario', by: 'Basecamp / DHH · yo lo uso',
      description: 'Mi sistema principal, junto a Arch y Fedora. Un escritorio que espera que lo edites en vez de tolerarlo, y la otra mitad del argumento de mis ideas: la máquina tiene que ser moldeable antes de que un agente pueda hacer gran cosa con ella.'
    }
  }
];

export const timeline = [
  {
    date: 'Sep 2014 — Feb 2018', title: 'Specialist, then Technical Specialist · Apple Retail',
    text: 'Parquesur, Madrid. Foundations in diagnosis, consultative support and daily execution under pressure.',
    es: {
      title: 'Specialist y luego Technical Specialist · Apple Retail',
      text: 'Parquesur, Madrid. Fundamentos de diagnóstico, venta consultiva y ejecución diaria bajo presión.'
    }
  },
  {
    date: 'Mar 2018 — Aug 2024', title: 'Genius · Apple Retail',
    text: 'Parquesur, Leganés. Six and a half years as the technical baseline of the store: advanced diagnosis on the cases nobody else had resolved, translating them for people with very different levels of understanding, and bringing newer technicians onto the bench.',
    es: {
      text: 'Parquesur, Leganés. Seis años y medio como base técnica de la tienda: diagnóstico avanzado en los casos que nadie más había resuelto, traduciéndolos para personas con niveles de conocimiento muy distintos, y formando a los técnicos más nuevos.'
    }
  },
  {
    date: 'Mar — Jun 2020', title: 'AppleCare Support Advisor · Apple',
    text: 'Remote, during COVID, as a volunteer. Concurrent cases under structured troubleshooting and documentation standards, working without a floor around me.',
    es: {
      text: 'En remoto, durante la COVID, como voluntario. Casos simultáneos bajo estándares estructurados de resolución de incidencias y documentación, trabajando sin tienda física alrededor.'
    }
  },
  {
    date: 'Feb — Aug 2023 · Feb — Aug 2024', title: 'Lead In-Store Experience · Apple Retail (secondment, twice)',
    text: 'Xanadú first, then Parquesur. Two seven-month leadership secondments taken while holding the Genius role: planning, resourcing, events, coordination and the situations that fit no procedure. Led by removing obstacles, then went back to the bench.',
    es: {
      title: 'Responsable de Experiencia en Tienda · Apple Retail (comisión de servicio, dos veces)',
      text: 'Primero Xanadú, después Parquesur. Dos comisiones de liderazgo de siete meses compatibilizadas con el puesto de Genius: planificación, recursos, eventos, coordinación y las situaciones que no encajaban en ningún procedimiento. Liderar consistía en quitar obstáculos; luego, vuelta al banco de trabajo.'
    }
  },
  {
    date: 'Aug 2024', title: 'Aberdeen, Scotland',
    text: 'Moved to the UK and started a deliberate transition into AI systems and full stack development.',
    es: {
      title: 'Aberdeen, Escocia',
      text: 'Me mudé al Reino Unido y empecé una transición deliberada hacia sistemas de IA y desarrollo full stack.'
    }
  },
  {
    date: 'Aug 2024 — now', title: 'AI systems, automation, and building in public',
    text: 'Studying at Universidad Rey Juan Carlos via Racks University, founding Machines Do It Better, running local inference on my own hardware, and shipping small products that reach production.',
    es: {
      title: 'Sistemas de IA, automatización, y construir en público',
      text: 'Estudiando en la Universidad Rey Juan Carlos a través de Racks University, fundando Machines Do It Better, con un proyecto de inferencia local en hardware propio (pausado mientras reconstruyo el equipo), y publicando productos pequeños que llegan a producción.'
    }
  }
];

export const skillGroups = [
  {
    name: 'Agents & AI tooling',
    items: ['Hermes Agent', 'OpenClaw', 'MCP servers', 'OpenRouter', 'llama.cpp', 'local inference on own GPU', 'agent workflows', 'prompt and workflow QA'],
    es: {
      name: 'Agentes y herramientas de IA',
      items: ['Hermes Agent', 'OpenClaw', 'servidores MCP', 'OpenRouter', 'llama.cpp', 'inferencia local en GPU propia', 'flujos con agentes', 'QA de prompts y flujos']
    }
  },
  {
    name: 'Infrastructure & deployment',
    items: ['Docker', 'Dokploy', 'Traefik', 'nginx', 'VPS (Hostinger, Hetzner)', 'GitHub Actions', 'Linux — Arch, Fedora, Omarchy', 'PC building & overclocking'],
    es: {
      name: 'Infraestructura y despliegue',
      items: ['Docker', 'Dokploy', 'Traefik', 'nginx', 'VPS (Hostinger, Hetzner)', 'GitHub Actions', 'Linux — Arch, Fedora, Omarchy', 'montaje y overclocking de PCs']
    }
  },
  {
    name: 'Development',
    items: ['JavaScript / TypeScript', 'Astro', 'Python', 'Swift (menu bar app)', 'HTML / CSS', 'Git'],
    es: {
      name: 'Desarrollo',
      items: ['JavaScript / TypeScript', 'Astro', 'Python', 'Swift (app de barra de menú)', 'HTML / CSS', 'Git']
    }
  },
  {
    name: 'Practice',
    items: ['Technical support', 'Customer success', 'Technical troubleshooting', 'Failure-mode investigation', 'Structured documentation', 'Testing and release gates', 'Customer operations', 'Mentoring', 'Team leadership'],
    es: {
      name: 'Práctica',
      items: ['Soporte técnico', 'Customer success', 'Resolución de incidencias técnicas', 'Investigación de modos de fallo', 'Documentación estructurada', 'Testing y controles de publicación', 'Operaciones de atención al cliente', 'Mentoría', 'Liderazgo de equipos']
    }
  },
  {
    name: 'Learning now',
    items: ['vLLM', 'Proxmox', 'self-hosted homelab', 'OSINT', 'GrapheneOS', 'de-Googling'],
    es: {
      name: 'Aprendiendo ahora',
      items: ['vLLM', 'Proxmox', 'homelab autoalojado', 'OSINT', 'GrapheneOS', 'salir de Google']
    }
  }
];

/** Backwards-compatible shape for anything that still expects a plain object. */
export const skills = Object.fromEntries(skillGroups.map((g) => [g.name, g.items]));

export const credentials = [
  {
    title: 'Specialist in Artificial Intelligence', org: 'Universidad Rey Juan Carlos, via Racks University (IUNIT-affiliated)', date: 'Oct 2024 — Dec 2026', status: 'in progress',
    es: {
      title: 'Especialista en Inteligencia Artificial', org: 'Universidad Rey Juan Carlos, a través de Racks University (adscrita a IUNIT)', status: 'en curso'
    }
  },
  {
    title: 'Full Stack AI Developer', org: 'Universidad Rey Juan Carlos, via Racks University (IUNIT-affiliated)', date: 'Sep 2025 — Dec 2026', status: 'in progress',
    es: {
      title: 'Desarrollador Full Stack de IA', org: 'Universidad Rey Juan Carlos, a través de Racks University (adscrita a IUNIT)', status: 'en curso'
    }
  },
  {
    title: 'Industrial Engineering (Electronics & Automation)', org: 'Universidad Politécnica de Madrid', date: '80 ECTS completed', status: 'degree not finished',
    es: {
      title: 'Ingeniería Industrial (Electrónica y Automática)', date: '80 ECTS superados', status: 'título sin terminar'
    }
  },
  {
    title: 'Apple Certified Mac Technician (ACMT) · Apple Certified iOS Technician (ACiT)', org: 'Apple', date: '', status: 'certified',
    es: { status: 'certificado' }
  },
  {
    title: 'English — Cambridge CAE (C1)', org: 'Cambridge Assessment', date: '', status: 'certified',
    es: { title: 'Inglés — Cambridge CAE (C1)', status: 'certificado' }
  }
];
