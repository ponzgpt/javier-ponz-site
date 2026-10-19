// Site data. English is the base record; an optional `es` object overrides
// only the fields that change in Spanish (title/description/status-style
// text) — `pick(item, lang)` (src/data/i18n.mjs) merges it over English.
// Structural fields (icon, url, date) have nothing to translate, so they are
// simply absent from `es`.
//
// `by` states authorship explicitly. I'm a vibe coder: every project here was
// specified, tested and shipped by me and written by AI coding agents, or is a
// fork of someone else's work. A page headed "things I am making" has to say
// so rather than let the reader assume.
//
// Order matters: Neuronara leads — it has a real user and improves in a
// feedback loop with her, which is the support loop the Nous application is
// about. Memento Mori
// follows: the only one written entirely by me, and the case study further
// down the Projects section.
export const projects = [
  {
    title: 'Neuronara', icon: '◎', kind: 'clinical search', status: 'in use', by: 'vibe-coded: my spec, agent-written',
    description: 'Cited answers over the standards of clinical neurophysiology — EEG, EMG/NCS, evoked potentials, sleep, IONM. Built for my partner, a clinical neurophysiologist, and improved in a feedback loop with her: every miss she reports is reproduced, fixed and added to the evaluation set so it stays fixed.',
    url: 'https://github.com/ponzgpt/neuronara', live: 'https://neuronara.technoir.cloud/',
    es: {
      kind: 'búsqueda clínica', status: 'en uso', by: 'vibe-coded: especificado por mí, escrito por un agente',
      description: 'Respuestas con citas sobre los estándares de la neurofisiología clínica: EEG, EMG/ENG, potenciales evocados, sueño, monitorización intraoperatoria. Construido para mi pareja, neurofisióloga clínica, y mejorado en un ciclo de feedback con ella: cada fallo que reporta se reproduce, se arregla y se añade al conjunto de evaluación para que no vuelva.'
    }
  },
  {
    title: 'Memento Mori', icon: '▣', kind: 'web app', status: 'shipped', by: 'vibe-coded: my spec, agent-written',
    description: 'A private browser-based life-expectancy visualisation — useful as a prompt to act, without pretending to predict anyone in particular. No backend, no accounts, no analytics. Live on a VPS I administer.',
    url: 'https://github.com/ponzgpt/memento-mori', live: 'https://memento.technoir.cloud/',
    es: {
      kind: 'aplicación web', status: 'publicado', by: 'vibe-coded: especificado por mí, escrito por un agente',
      description: 'Una visualización privada de esperanza de vida, en el navegador — útil como empujón para actuar, sin pretender predecir nada sobre nadie en concreto. Sin backend, sin cuentas, sin analítica. En producción sobre un VPS que administro yo.'
    }
  },
  {
    title: 'Mental Models Toolkit', icon: '▤', kind: 'skill pack', status: 'active', by: 'vibe-coded: models chosen by me, agent-written',
    description: 'Thirty machine-readable mental models for decision-making and risk checks, packaged as an agent skill pack and schema-validated in CI.',
    url: 'https://github.com/ponzgpt/mental-models-toolkit',
    es: {
      kind: 'paquete de skills', status: 'activo', by: 'vibe-coded: modelos elegidos por mí, escrito por un agente',
      description: 'Treinta modelos mentales legibles por máquina para decisiones y comprobaciones de riesgo, empaquetados como skill pack de agente y validados contra esquema en CI.'
    }
  },
  {
    title: 'The Aberdeen Daily', icon: '▦', kind: 'news agent', status: 'scaffolding', by: 'fork of vaelkeep/hermes-paper-agent, adapted with an agent',
    description: 'A local paper for Aberdeen, written by a Hermes agent. Python computes the figures before the model writes the copy, so the model is never asked to invent the number. The architecture is upstream; my contribution is the city, the feeds and the editorial rules. Scaffolding only: one test edition. The plan is a landing page for local news and businesses with a Beehiiv newsletter.',
    url: 'https://github.com/ponzgpt/aberdeen-daily',
    es: {
      kind: 'agente de noticias', status: 'en andamiaje', by: 'fork de vaelkeep/hermes-paper-agent, adaptado con un agente',
      description: 'Un periódico local para Aberdeen, escrito por un agente de Hermes. Python calcula las cifras antes de que el modelo escriba el texto, así que al modelo nunca se le pide que se invente el número. La arquitectura viene de upstream; mi aportación es la ciudad, las fuentes y las reglas editoriales. Solo el andamiaje: una edición de prueba. El plan es una página de noticias y negocios locales con newsletter en Beehiiv.'
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
    description: 'My daily driver alongside Arch and Fedora. A desktop that expects to be edited rather than tolerated — the machine has to be shapeable before an agent can do much with it.',
    url: 'https://omarchy.org',
    es: {
      kind: 'sistema operativo', status: 'diario', by: 'Basecamp / DHH · yo lo uso',
      description: 'Mi sistema principal, junto a Arch y Fedora. Un escritorio que espera que lo edites en vez de tolerarlo — la máquina tiene que ser moldeable antes de que un agente pueda hacer gran cosa con ella.'
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
    text: 'Moved to the UK and started a deliberate transition into AI and full stack development.',
    es: {
      title: 'Aberdeen, Escocia',
      text: 'Me mudé al Reino Unido y empecé una transición deliberada hacia la IA y el desarrollo full stack.'
    }
  },
  {
    date: 'Aug 2024 — now', title: 'AI, agent tooling, and building in public',
    text: 'Studying at Universidad Rey Juan Carlos via Racks University, building Machines Do It Better as a solo practice with no clients yet, rebuilding a local-inference lab, and shipping small products that reach production.',
    es: {
      title: 'IA, herramientas para agentes, y construir en público',
      text: 'Estudiando en la Universidad Rey Juan Carlos a través de Racks University, levantando Machines Do It Better como práctica en solitario y todavía sin clientes, reconstruyendo un laboratorio de inferencia local, y publicando productos pequeños que llegan a producción.'
    }
  }
];

// Three groups on purpose: what I have already done for a living, what I am
// learning right now, and where I am pointing. Collapsing them into one list
// is exactly the overclaim this section exists to avoid.
export const skillGroups = [
  {
    name: 'Demonstrated in practice',
    items: [
      'Technical diagnosis and troubleshooting', 'Consultative technical support',
      'Translating complex technology for non-technical people',
      'Documentation and clear technical communication',
      'Small web products deployed in production', 'Agent workflows, MCP tools and skills',
      'Testing and release gates', 'Mentoring and team leadership'
    ],
    es: {
      name: 'Demostrado en la práctica',
      items: [
        'Diagnóstico y resolución de incidencias técnicas', 'Soporte técnico consultivo',
        'Traducir tecnología compleja para gente no técnica',
        'Documentación y comunicación técnica clara',
        'Productos web pequeños desplegados en producción', 'Flujos con agentes, herramientas MCP y skills',
        'Testing y controles de publicación', 'Mentoría y liderazgo de equipos'
      ]
    }
  },
  {
    name: 'Building now',
    items: [
      'AI and Full Stack development', 'JavaScript / TypeScript', 'Python', 'Astro',
      'Linux — Arch, Fedora, Omarchy', 'Bash, networking and SSH',
      'Docker, Traefik and nginx', 'GitHub Actions and CI',
      'Automation, evaluation and open systems'
    ],
    es: {
      name: 'Aprendiendo ahora',
      items: [
        'IA y desarrollo Full Stack', 'JavaScript / TypeScript', 'Python', 'Astro',
        'Linux — Arch, Fedora, Omarchy', 'Bash, redes y SSH',
        'Docker, Traefik y nginx', 'GitHub Actions y CI',
        'Automatización, evaluación y sistemas abiertos'
      ]
    }
  },
  {
    name: 'Direction',
    items: [
      'Agent operations and implementation', 'Digital sovereignty and private, personalised technology',
      'Local inference and model serving', 'vLLM and quantised open weights',
      'Kubernetes and container orchestration', 'Deployment of agent services and their infrastructure',
      'A homelab of my own — hardware, topology, networking, Proxmox',
      'Tools that help normal people and small businesses use technology with more control'
    ],
    es: {
      name: 'Hacia dónde voy',
      items: [
        'Operaciones e implementación con agentes', 'Soberanía digital y tecnología privada y personalizada',
        'Inferencia local y servido de modelos', 'vLLM y pesos abiertos cuantizados',
        'Kubernetes y orquestación de contenedores', 'Despliegue de servicios con agentes y su infraestructura',
        'Un homelab propio — hardware, topología, redes, Proxmox',
        'Herramientas para que personas normales y pequeños negocios usen la tecnología con más control'
      ]
    }
  }
];

/** Backwards-compatible shape for anything that still expects a plain object. */
export const skills = Object.fromEntries(skillGroups.map((g) => [g.name, g.items]));

// Study and certifications, rendered under Experience. Cambridge CAE is
// deliberately absent: living and working in the UK already answers that
// question, and the CV PDF still carries it for the readers who want it.
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
    title: 'Industrial Engineering (Electronics & Automation)', org: 'Universidad Politécnica de Madrid', date: '80 ECTS completed', status: 'degree not completed',
    es: {
      title: 'Ingeniería Industrial (Electrónica y Automática)', date: '80 ECTS superados', status: 'título sin terminar'
    }
  },
  {
    title: 'Apple Certified Mac Technician (ACMT) · Apple Certified iOS Technician (ACiT)', org: 'Apple', date: 'Certified', status: '',
    es: { date: 'Certificado' }
  }
];

// Milestones and proof, not awards. Every row here is something a reader can
// check — a date range, a live URL, a public repository. Deliberately does
// not repeat the credential rows above.
export const achievements = [
  {
    date: 'Ten years', title: 'Apple Retail Spain · 2014—2024',
    text: 'Five roles across a decade, six and a half years of it as a Genius — the technical baseline of the store.',
    es: {
      date: 'Diez años', title: 'Apple Retail España · 2014—2024',
      text: 'Cinco puestos en una década, seis años y medio de ellos como Genius — la base técnica de la tienda.'
    }
  },
  {
    date: 'Twice', title: 'Lead In-Store Experience',
    text: 'Two seven-month leadership secondments, both taken while holding the Genius role, then handed back.',
    es: {
      date: 'Dos veces', title: 'Responsable de Experiencia en Tienda',
      text: 'Dos comisiones de liderazgo de siete meses, ambas compatibilizadas con el puesto de Genius, y devueltas después.'
    }
  },
  {
    date: 'In production', title: 'Memento Mori',
    text: 'A small app, vibe-coded and live on infrastructure I run, behind an eight-check release gate that refuses to publish on red.',
    es: {
      date: 'En producción', title: 'Memento Mori',
      text: 'Una app pequeña propia, en producción sobre infraestructura que administro, tras un control de publicación de ocho comprobaciones que se niega a publicar en rojo.'
    }
  },
  {
    date: 'In use', title: 'Neuronara',
    text: 'A clinical reference tool with a real user — a clinical neurophysiologist — improved in a feedback loop with her, every fix pinned by an evaluation question.',
    es: {
      date: 'En uso', title: 'Neuronara',
      text: 'Una herramienta de referencia clínica con una usuaria real, neurofisióloga clínica, mejorada en un ciclo de feedback con ella; cada arreglo queda fijado por una pregunta de evaluación.'
    }
  },
  {
    date: 'In progress', title: 'AI and Full Stack development',
    text: 'Two programmes at Universidad Rey Juan Carlos via Racks University, both running to December 2026.',
    es: {
      date: 'En curso', title: 'IA y desarrollo Full Stack',
      text: 'Dos programas en la Universidad Rey Juan Carlos a través de Racks University, ambos hasta diciembre de 2026.'
    }
  }
];
