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
// Order matches identity/ONTOLOGY.md (private repo javier-ponz-site-internal):
// Machines Do It Better (main project, in progress), the two Hermes plugins,
// Neuronara, then range. Items with `also: true` render as a compact list
// under the cards; the terminal still lists every project.
export const projects = [
  {
    title: 'Machines Do It Better', icon: '◆', kind: 'main project', status: 'in progress', by: 'mine; site vibe-coded',
    description: "Where I'm heading: personal and business AI agents set up for you on open models and open harnesses like Hermes, so you own the account, the data and the choice of model. The Genius Bar reflex, applied to agents: get it working, explain it, leave you in control. Pre-launch; the first pilots are friends and family.",
    url: 'https://github.com/ponzgpt/machines-do-it-better', live: 'https://mdib.technoir.cloud/',
    es: {
      kind: 'proyecto principal', status: 'en marcha', by: 'mío; web hecha en vibe coding',
      description: 'Hacia dónde voy: agentes de IA personales y para negocios, montados sobre modelos y frameworks abiertos como Hermes, para que la cuenta, los datos y la elección de modelo sean tuyos. El reflejo del Genius Bar aplicado a los agentes: que funcione, explicártelo y dejarte el control. En prelanzamiento; los primeros pilotos son familia y amigos.'
    }
  },
  {
    title: 'Psychopomp', icon: '☤', kind: 'Hermes plugin', status: 'hackathon entry', by: 'vibe-coded: my spec and tests, agent-written',
    description: "Every week Hermes helps you write a page of your life. If you ever go silent for good, it carries your words to the people you love, but only after your witness sends a code. Named after Hermes's other job: guide of souls. Tested on my own Hermes in Desktop and Telegram, and entered in the Nous Research plugin hackathon.",
    url: 'https://github.com/ponzgpt/psychopomp',
    es: {
      kind: 'plugin de Hermes', status: 'en el hackathon', by: 'vibe-coded: especificado y probado por mí, escrito por un agente',
      description: 'Cada semana Hermes te ayuda a escribir una página de tu vida. Si un día te quedas en silencio para siempre, lleva tus palabras a la gente que quieres, pero solo cuando tu testigo envía un código. Se llama como el otro oficio de Hermes: guía de almas. Probado en mi propio Hermes, en Desktop y Telegram, y presentado al hackathon de plugins de Nous Research.'
    }
  },
  {
    title: 'Sabbath', icon: '☾', kind: 'Hermes plugin', status: 'hackathon entry', by: 'vibe-coded: my spec and tests, agent-written',
    description: 'Your agent never rests. Now it rests with you. Once a week Hermes says goodnight on your phone, pauses its own scheduled jobs, keeps you company in anything but work and sets the rest aside. When the day ends you get one gentle digest. And if the ox falls into the well: /sabbath ox.',
    url: 'https://github.com/ponzgpt/sabbath',
    es: {
      kind: 'plugin de Hermes', status: 'en el hackathon', by: 'vibe-coded: especificado y probado por mí, escrito por un agente',
      description: 'Tu agente nunca descansa. Ahora descansa contigo. Una vez por semana Hermes te da las buenas noches en el móvil, pausa sus propias tareas programadas, te acompaña en todo menos en el trabajo y aparca lo demás. Al acabar el día, un único resumen tranquilo. Y si el buey cae al pozo: /sabbath ox.'
    }
  },
  {
    title: 'Neuronara', icon: '◎', kind: 'clinical search', status: 'in use', by: 'vibe-coded: my spec, agent-written',
    description: 'Cited answers over the standards of clinical neurophysiology: EEG, EMG/NCS, evoked potentials, sleep, IONM. Built for my partner, a clinical neurophysiologist, and improved in a feedback loop with her: every miss she reports is reproduced, fixed and added to the evaluation set so it stays fixed.',
    url: 'https://github.com/ponzgpt/neuronara', live: 'https://neuronara.technoir.cloud/',
    es: {
      kind: 'búsqueda clínica', status: 'en uso', by: 'vibe-coded: especificado por mí, escrito por un agente',
      description: 'Respuestas con citas sobre los estándares de la neurofisiología clínica: EEG, EMG/ENG, potenciales evocados, sueño, monitorización intraoperatoria. Construido para mi pareja, neurofisióloga clínica, y mejorado en un ciclo de feedback con ella: cada fallo que reporta se reproduce, se arregla y se añade al conjunto de evaluación para que no vuelva.'
    }
  },
  {
    title: 'ASI Rush', icon: '▲', kind: 'browser game', status: 'live', by: 'vibe-coded: my spec, agent-written',
    description: 'A clicker about the real race to AI: from beige PCs in a garage, through the AI winters, GPUs and transformers, all the way to superintelligence. Rival labs race you there, and your lab changes era by era around you.',
    url: 'https://github.com/ponzgpt/asi-rush', live: 'https://asi-rush.technoir.cloud/',
    es: {
      kind: 'juego de navegador', status: 'en producción', by: 'vibe-coded: especificado por mí, escrito por un agente',
      description: 'Un clicker sobre la carrera real hacia la IA: de los PCs beige en un garaje, pasando por los inviernos de la IA, las GPUs y los transformers, hasta la superinteligencia. Los laboratorios rivales compiten contigo y tu laboratorio cambia de época a tu alrededor.'
    }
  },
  {
    title: 'Post-Labor Wiki', icon: '¶', kind: 'wiki', status: 'growing', by: 'vibe-coded: my spec, agent-written',
    description: 'A visual, source-first wiki on post-labor economics and the post-work society: timelines, charts and memes over walls of text, and a citation behind every claim. Sections ship one at a time.',
    url: 'https://github.com/ponzgpt/post-labor-wiki', live: 'https://post-labor-wiki.technoir.cloud/',
    es: {
      kind: 'wiki', status: 'creciendo', by: 'vibe-coded: especificado por mí, escrito por un agente',
      description: 'Una wiki visual y con fuentes sobre economía post-laboral y la sociedad post-trabajo: líneas de tiempo, gráficas y memes en vez de muros de texto, y una cita detrás de cada afirmación. Se publica sección a sección.'
    }
  },
  {
    title: 'BRINK', icon: '☢', kind: 'agent game', status: 'live', by: 'vibe-coded: my spec, agent-written', also: true,
    description: 'A deterministic nuclear escalation game with published arsenals and real distances, playable in the browser or by any MCP-capable agent, Hermes included: a way to watch how agents behave under pressure.',
    url: 'https://github.com/ponzgpt/brink', live: 'https://brink.technoir.cloud/',
    es: {
      kind: 'juego para agentes', status: 'en producción', by: 'vibe-coded: especificado por mí, escrito por un agente',
      description: 'Un juego determinista de escalada nuclear con arsenales publicados y distancias reales, jugable en el navegador o por cualquier agente con MCP, Hermes incluido: una forma de ver cómo se comportan los agentes bajo presión.'
    }
  },
  {
    title: 'StacksNRacks', icon: '▥', kind: 'web app', status: 'live', by: 'vibe-coded: my spec, agent-written', also: true,
    description: 'Local AI hardware, priced this week: budget tiers for running LLMs at home, estimated tokens per second per dollar, and community rigs submitted through GitHub issues.',
    url: 'https://github.com/ponzgpt/stacksnracks', live: 'https://stacksnracks.technoir.cloud/',
    es: {
      kind: 'aplicación web', status: 'en producción', by: 'vibe-coded: especificado por mí, escrito por un agente',
      description: 'Hardware para IA local, con precios de esta semana: niveles de presupuesto para correr LLMs en casa, tokens por segundo por euro estimados y equipos de la comunidad enviados como issues de GitHub.'
    }
  },
  {
    title: 'Memento Mori', icon: '▣', kind: 'web app', status: 'shipped', by: 'vibe-coded: my spec, agent-written', also: true,
    description: 'A private, in-browser life-expectancy visualisation: a nudge to act, without pretending to predict anyone. No backend, no accounts, no analytics.',
    url: 'https://github.com/ponzgpt/memento-mori', live: 'https://memento.technoir.cloud/',
    es: {
      kind: 'aplicación web', status: 'publicado', by: 'vibe-coded: especificado por mí, escrito por un agente',
      description: 'Una visualización privada de esperanza de vida, en el navegador: un empujón para actuar, sin pretender predecir nada de nadie. Sin backend, sin cuentas, sin analítica.'
    }
  },
  {
    title: 'Hyperexcitability atlas', icon: '∿', kind: 'study atlas', status: 'live', by: 'vibe-coded: my spec, agent-written', also: true,
    description: 'An interactive study atlas of the EURO-NMD webinar on muscle hyperexcitability and cramps, for clinical neurophysiologists: where it starts, what the EMG hears, why it happens.',
    url: 'https://github.com/ponzgpt/hyperexcitability', live: 'https://hyperexcitability.technoir.cloud/',
    es: {
      kind: 'atlas de estudio', status: 'en producción', by: 'vibe-coded: especificado por mí, escrito por un agente',
      description: 'Un atlas de estudio interactivo del webinar de EURO-NMD sobre hiperexcitabilidad muscular y calambres, para neurofisiólogos clínicos: dónde empieza, qué oye el EMG y por qué ocurre.'
    }
  },
  {
    title: 'Mental Models Toolkit', icon: '▤', kind: 'skill pack', status: 'active', by: 'vibe-coded: models chosen by me, agent-written', also: true,
    description: 'Thirty machine-readable mental models for decision-making and risk checks, packaged as an agent skill pack and schema-validated in CI.',
    url: 'https://github.com/ponzgpt/mental-models-toolkit',
    es: {
      kind: 'paquete de skills', status: 'activo', by: 'vibe-coded: modelos elegidos por mí, escrito por un agente',
      description: 'Treinta modelos mentales legibles por máquina para decisiones y comprobaciones de riesgo, empaquetados como skill pack de agente y validados contra esquema en CI.'
    }
  },
  {
    title: 'hermes-contributions', icon: '⚚', kind: 'Hermes toolkit', status: 'archived', by: 'vibe-coded: my spec, agent-written', also: true,
    description: 'My first things around Hermes, under one roof: an onboarding script, a landing page that behaves like the CLI, a model field guide and a PKM toolkit, with a check that fails the build when a fact quoted from upstream changes.',
    url: 'https://github.com/ponzgpt/hermes-contributions',
    es: {
      kind: 'kit para Hermes', status: 'archivado', by: 'vibe-coded: especificado por mí, escrito por un agente',
      description: 'Lo primero que hice alrededor de Hermes, bajo un mismo techo: un script de arranque, una portada que se comporta como la CLI, una guía de modelos y un kit PKM, con una comprobación que rompe el build cuando cambia un dato citado de upstream.'
    }
  }
];

// Things I run every day but did not write. Kept separate from `projects` for
// the same reason `projects` carries a `by` field: operating something and
// authoring it are different claims.
export const running = [
  {
    title: 'Hermes Agent', icon: '◉', kind: 'agent harness', status: 'daily', by: 'Nous Research · I operate it',
    description: 'My main agent, Syl, runs on Hermes Cloud through Nous Portal; I joined the Portal beta among its first users. Scheduled workflows, skills I can edit as Markdown, tools that are servers I can read.',
    url: 'https://github.com/NousResearch/hermes-agent',
    es: {
      kind: 'framework de agentes', status: 'diario', by: 'Nous Research · yo lo opero',
      description: 'Mi agente principal, Syl, corre en Hermes Cloud a través de Nous Portal; entré en la beta de Portal entre sus primeros usuarios. Flujos programados, skills que edito como Markdown y tools que son servidores que puedo leer.'
    }
  },
  {
    title: 'Omarchy', icon: '⌘', kind: 'operating system', status: 'daily', by: 'Basecamp / DHH · I run it',
    description: 'My daily driver alongside Arch and Fedora. A desktop that expects to be edited, not tolerated. The machine has to be shapeable before an agent can do much with it.',
    url: 'https://omarchy.org',
    es: {
      kind: 'sistema operativo', status: 'diario', by: 'Basecamp / DHH · yo lo uso',
      description: 'Mi sistema principal, junto a Arch y Fedora. Un escritorio que espera que lo edites, no que lo aguantes. La máquina tiene que ser moldeable antes de que un agente pueda hacer gran cosa con ella.'
    }
  }
];

export const timeline = [
  {
    date: 'Sep 2014 – Feb 2018', title: 'Specialist, then Technical Specialist · Apple Retail',
    text: 'Parquesur, Madrid. Foundations in diagnosis, consultative support and daily execution under pressure.',
    es: {
      title: 'Specialist y luego Technical Specialist · Apple Retail',
      text: 'Parquesur, Madrid. Fundamentos de diagnóstico, venta consultiva y ejecución diaria bajo presión.'
    }
  },
  {
    date: 'Mar 2018 – Aug 2024', title: 'Genius · Apple Retail',
    text: 'Parquesur, Leganés. Six and a half years as the technical baseline of the store: advanced diagnosis on the cases nobody else had resolved, translating them for people with very different levels of understanding, and bringing newer technicians onto the bench.',
    es: {
      text: 'Parquesur, Leganés. Seis años y medio como base técnica de la tienda: diagnóstico avanzado en los casos que nadie más había resuelto, traduciéndolos para personas con niveles de conocimiento muy distintos, y formando a los técnicos más nuevos.'
    }
  },
  {
    date: 'Mar – Jun 2020', title: 'AppleCare Support Advisor · Apple',
    text: 'Remote, during COVID, as a volunteer. Concurrent cases under structured troubleshooting and documentation standards, working without a floor around me.',
    es: {
      text: 'En remoto, durante la COVID, como voluntario. Casos simultáneos bajo estándares estructurados de resolución de incidencias y documentación, trabajando sin tienda física alrededor.'
    }
  },
  {
    date: 'Feb – Aug 2023 · Feb – Aug 2024', title: 'Lead In-Store Experience · Apple Retail (secondment, twice)',
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
    date: 'Aug 2024 – now', title: 'AI, agent tooling, and building in public',
    text: 'Studying AI and full stack at Universidad Rey Juan Carlos via Racks University, building Machines Do It Better, writing a newsletter (technoirNews, later Machines Do It Better; paused), and shipping small products that reach production.',
    es: {
      title: 'IA, herramientas para agentes y construir en público',
      text: 'Estudiando IA y full stack en la Universidad Rey Juan Carlos a través de Racks University, levantando Machines Do It Better, escribiendo una newsletter (technoirNews, luego Machines Do It Better; en pausa) y publicando productos pequeños que llegan a producción.'
    }
  },
  {
    date: 'Nov 2026', title: 'Two Hermes plugins · Nous Research hackathon',
    text: 'Psychopomp and Sabbath, tested end to end on my own Hermes and submitted to the Hermes plugin catalog.',
    es: {
      title: 'Dos plugins de Hermes · hackathon de Nous Research',
      text: 'Psychopomp y Sabbath, probados de principio a fin en mi propio Hermes y enviados al catálogo de plugins de Hermes.'
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
      'Linux: Arch, Fedora, Omarchy', 'Bash, networking and SSH',
      'Docker, Traefik and nginx', 'GitHub Actions and CI',
      'Automation, evaluation and open systems'
    ],
    es: {
      name: 'Aprendiendo ahora',
      items: [
        'IA y desarrollo Full Stack', 'JavaScript / TypeScript', 'Python', 'Astro',
        'Linux: Arch, Fedora, Omarchy', 'Bash, redes y SSH',
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
      'A homelab of my own: hardware, topology, networking, Proxmox',
      'Tools that help normal people and small businesses use technology with more control'
    ],
    es: {
      name: 'Hacia dónde voy',
      items: [
        'Operaciones e implementación con agentes', 'Soberanía digital y tecnología privada y personalizada',
        'Inferencia local y servido de modelos', 'vLLM y pesos abiertos cuantizados',
        'Kubernetes y orquestación de contenedores', 'Despliegue de servicios con agentes y su infraestructura',
        'Un homelab propio: hardware, topología, redes, Proxmox',
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
    title: 'Specialist in Artificial Intelligence', org: 'Universidad Rey Juan Carlos, via Racks University (IUNIT-affiliated)', date: 'Oct 2024 – Dec 2026', status: 'in progress',
    es: {
      title: 'Especialista en Inteligencia Artificial', org: 'Universidad Rey Juan Carlos, a través de Racks University (adscrita a IUNIT)', status: 'en curso'
    }
  },
  {
    title: 'Full Stack AI Developer', org: 'Universidad Rey Juan Carlos, via Racks University (IUNIT-affiliated)', date: 'Sep 2025 – Dec 2026', status: 'in progress',
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
    date: 'Ten years', title: 'Apple Retail Spain · 2014–2024',
    text: 'Five roles across a decade, six and a half years of it as a Genius: the technical baseline of the store.',
    es: {
      date: 'Diez años', title: 'Apple Retail España · 2014–2024',
      text: 'Cinco puestos en una década, seis años y medio de ellos como Genius: la base técnica de la tienda.'
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
    date: 'Nov 2026', title: 'Two Hermes plugins',
    text: 'Psychopomp and Sabbath, built for the Nous Research plugin hackathon and tested end to end on my own Hermes. Catalog PRs open.',
    es: {
      date: 'Nov 2026', title: 'Dos plugins de Hermes',
      text: 'Psychopomp y Sabbath, hechos para el hackathon de plugins de Nous Research y probados de principio a fin en mi propio Hermes. PRs al catálogo abiertas.'
    }
  },
  {
    date: 'In use', title: 'Neuronara',
    text: 'A clinical reference tool with a real user, a clinical neurophysiologist, improved in a feedback loop with her, every fix pinned by an evaluation question.',
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
