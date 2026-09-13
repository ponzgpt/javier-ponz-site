// Page prose, one { en, es } pair per section. Each language is a hero
// (kicker / heading / underlined word / standfirst) and a list of sections —
// a label, a wrapper class, and its inner HTML. Consumed by the components
// in src/components/sections/, which read pages.<name>[lang].
//
// Data-driven sections (the CV rows, the project cards, the timeline) are
// not here: those live with their data in cv.mjs and site.ts.

const P = (...paras) => paras.map((t) => `<p>${t}</p>`).join('\n');

export const pages = {
  /* ─────────────────────────────────────────────────────────── about ── */
  about: {
    en: {
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
          'Same skill, new surface: diagnosis under pressure, translated for whoever is in front of me — now pointed at agent workflows and infrastructure instead of a dead MacBook. Full time on AI since Aberdeen; what I actually run day to day is on <a href="{now}">Now</a>.',
          'Strongest where systems fail — finding what broke, documenting it, then saying it plainly. <a href="{thoughts}">My thoughts</a> go further: the tools worth building hand control back to the person using them.',
          'Early in this career and public about it — source, tests, a stated scope. Judge me on what I have shipped.') },
        { label: 'Outside work', cls: 'prose', html: P(
          'Building and overclocking PCs since I was a teenager — same instinct behind the homelab now (Proxmox, GrapheneOS, de-Googling) and this profile\'s Half-Life aesthetic: taking sealed things apart.') }
      ],
      skillsLabel: 'Skills', credentialsLabel: 'Credentials', shortLabel: 'In short',
      short: 'Good technical work leaves people with more clarity and control than before. That is the whole standard.'
    },
    es: {
      kicker: 'Perfil', h1: 'Liderar es ', serif: 'servir', h1end: '.',
      lede: 'Todo lo que hago vuelve a esa idea: diagnosticar qué falla de verdad, decirlo con claridad, y dejar a la persona con más control del que tenía antes.',
      sections: [
        { label: 'El principio', cls: 'prose', html: P(
          'Tres direcciones, una misma habilidad.',
          '<strong>Liderarse a uno mismo.</strong> La parte poco lucida y sin público — las pruebas, el README honesto, una segunda mirada a algo que ya funciona. Nadie aplaude eso.',
          '<strong>Liderar a otros, de uno en uno.</strong> Sobre todo contención: dar el razonamiento en vez de la respuesta, ir más despacio ahora para que el otro vaya más rápido después.',
          '<strong>Liderar equipos.</strong> Quitar lo que les estorba — no ser el más capaz de la sala, sino quien hace que la sala funcione.',
          'El servicio no es el borde blando del trabajo técnico. Es lo que decide si ese trabajo llega a alguien.') },
        { label: 'Experiencia', cls: 'copy', html: '<h2>Apple Retail · 2014—2024</h2>' + P(
          'Diez años, cinco puestos: Specialist, Technical Specialist, asesor de AppleCare, Genius y, después, responsable de experiencia en tienda, en Madrid — buena parte con las manos dentro de la máquina, incluidos Macs muy fuera de garantía. Diagnóstico bajo presión, explicado en los términos que de verdad le importaban a quien tenía delante.',
          'Llegaban miles de personas enfadadas, desorientadas, o con un equipo muerto que guardaba la única copia de algo. La respuesta técnica y la útil no siempre son la misma frase.',
          'Como responsable llevé dos tiendas — aperturas, cierres, eventos, lo que ningún procedimiento cubría. Despejar obstáculos, no dar instrucciones.') },
        { label: 'Ahora', cls: 'copy', html: '<h2>Soporte técnico y sistemas abiertos</h2>' + P(
          'La misma habilidad, otra superficie: diagnóstico bajo presión, traducido para quien tengo delante — ahora apuntado a flujos con agentes e infraestructura en vez de a un MacBook muerto. A tiempo completo en IA desde que vivo en Aberdeen; lo que uso de verdad, día a día, está en <a href="{now}">Ahora</a>.',
          'Donde mejor rindo es donde los sistemas fallan — encontrar qué se rompió, documentarlo, y decirlo con claridad. <a href="{thoughts}">Mis ideas</a> van más allá: las herramientas que merece la pena construir devuelven el control a quien las usa.',
          'Llevo poco en esta carrera y lo hago público — código, pruebas, un alcance declarado. Que me juzguen por lo que he entregado.') },
        { label: 'Fuera del trabajo', cls: 'prose', html: P(
          'Monto y hago overclocking de PCs desde adolescente — el mismo instinto detrás del homelab actual (Proxmox, GrapheneOS, salir de Google) y de la estética de Half-Life en este perfil: abrir lo que viene cerrado.') }
      ],
      skillsLabel: 'Competencias', credentialsLabel: 'Titulaciones', shortLabel: 'En resumen',
      short: 'Un buen trabajo técnico deja a las personas con más claridad y más control del que tenían antes. Ese es todo el criterio.'
    }
  },

  /* ───────────────────────────────────────────────────────── thoughts ── */
  thoughts: {
    en: {
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
          'I run this rather than theorise it — Hermes daily, Omarchy as a daily driver, agents in Docker on my own VPS. What that stack actually is right now lives on <a href="{now}">Now</a>. Conviction comes from watching it fail and fixing it, not from reading about it.',
          'The work I want is at that seam — making these systems reliable for people who should not have to care how they are built.',
          'Same principle, pointed at a machine instead of a person. <a href="{about}">Leading is serving</a>: measured by whether people depending on it end up with more control than they started with.') }
      ],
      relatedLabel: 'Related',
      related: [
        { href: '{agents}', meta: 'Notebook', h3: 'Agents →', p: 'Working notes, and the questions still open.' },
        { href: '{workbench}', meta: 'Build log', h3: 'Workbench →', p: 'What I have actually built and shipped.' }
      ]
    },
    es: {
      kicker: 'Ideas', h1: 'La máquina debería ser ', serif: 'moldeable', h1end: ' por quien vive dentro de ella.',
      lede: 'A qué le presto atención, y por qué importa más que el próximo modelo que salga.',
      sections: [
        { label: 'La idea', cls: 'prose', html: P(
          'La frontera interesante no es un modelo más grande — es que el sistema operativo se vuelva lo bastante moldeable para que un agente pueda vivir dentro de él.',
          'La mayoría de los ordenadores son electrodomésticos: rápidos, sellados, ordenados como decidió otro. Durante treinta años ese trato ganó a la alternativa — una máquina que mantener en vez de usar.',
          'Los agentes cambian la cuenta: uno solo es tan útil como la superficie a la que llega — conversación en un electrodoméstico sellado, trabajo real sobre ficheros planos y herramientas pequeñas.') },
        { label: 'Dos direcciones', cls: 'prose', html:
          '<h3>Desde el lado del agente: primitivas en vez de productos</h3>' + P('Hermes Agent y MCP descomponen la capacidad en cosas que se pueden inspeccionar. Una skill es un fichero Markdown; una tool es un servidor que puedes leer.') +
          '<h3>Desde el lado del sistema: un sistema operativo que editas</h3>' + P('Omarchy llega desde el otro extremo: configuración corriente que se espera que cambies, con opinión propia en vez de cerrado. Es estructural, no estético — los ficheros editables son lo que permite que un agente opere el sistema.') },
        { label: 'La convergencia', cls: 'prose', html: P(
          'Juntas: la máquina que de verdad quiero — proactiva, moldeable, legible de arriba abajo. No un asistente atornillado a un electrodoméstico, sino un habitante de pleno derecho de un sistema abierto.',
          'Los pesos abiertos y las primitivas son prácticos, no solo políticos — quien los controla controla hasta dónde puede ayudar el agente. Si no es el dueño del ordenador, el techo lo pone otro.',
          'Dos cosas que sostengo sin aferrarme: la interfaz que gana probablemente sea el sistema existente hecho direccionable, no una ventana de chat; la habilidad que merece la pena tener es entender un sistema lo bastante bien como para exponerlo y depurarlo.') },
        { label: 'Dónde estoy yo en esto', cls: 'prose', html: P(
          'Lo uso a diario en vez de teorizar sobre ello — Hermes cada día, Omarchy como sistema principal, agentes en Docker sobre mi propio VPS. En qué consiste esa pila ahora mismo está en <a href="{now}">Ahora</a>. La convicción viene de verlo fallar y arreglarlo, no de leer sobre ello.',
          'El trabajo que quiero está en esa costura — hacer que estos sistemas sean fiables para gente que no debería tener que preocuparse de cómo están construidos.',
          'El mismo principio, apuntado a una máquina en vez de a una persona. <a href="{about}">Liderar es servir</a>: se mide por si quien depende de ello acaba con más control del que tenía al empezar.') }
      ],
      relatedLabel: 'Relacionado',
      related: [
        { href: '{agents}', meta: 'Cuaderno', h3: 'Agentes →', p: 'Notas de trabajo, y las preguntas todavía abiertas.' },
        { href: '{workbench}', meta: 'Registro', h3: 'Proyectos →', p: 'Lo que de verdad he construido y publicado.' }
      ]
    }
  },

  /* ────────────────────────────────────────────────────────── agents ── */
  agents: {
    en: {
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
    es: {
      kicker: 'Laboratorio técnico', h1: 'Agentes que dejan a la gente con ', serif: 'más capacidad de decidir', h1end: '.',
      lede: 'Un cuaderno de trabajo sobre Hermes Agent, MCP y herramientas. Evidencia, no discurso.',
      sections: [
        { label: 'Preguntas en las que estoy trabajando', cls: 'copy', html: P(
          '¿Cuándo reduce un agente la fricción, y cuándo ralentiza algo simple? ¿Qué debería recordar, y durante cuánto tiempo? ¿Cómo mantienes visible un fallo, y un flujo inspeccionable en vez de mágico?',
          'A través de herramientas que uso de verdad: un servidor MCP con una capa de seguridad de ficheros probada con tests, un paquete de skills con modelos de decisión, operación diaria de agentes en Docker.') }
      ],
      relatedLabel: 'Relacionado',
      related: [
        { href: '{thoughts}', meta: 'Ideas', h3: 'La máquina moldeable →', p: 'Por qué las primitivas abiertas de los agentes y un sistema operativo editable están convergiendo.' },
        { href: '{workbench}', meta: 'Proyectos', h3: 'Proyectos →', p: 'Herramientas y pipelines detrás de los experimentos.' },
        { href: 'https://github.com/NousResearch/hermes-agent', ext: true, meta: 'Externo', h3: 'Hermes Agent ↗', p: 'Repositorio de Nous Research. Construyo con él; no hablo en su nombre.' }
      ]
    }
  },

  /* ───────────────────────────────────────────────────────── contact ── */
  contact: {
    en: {
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
    es: {
      kicker: 'Contacto', h1: 'Tres formas de ', serif: 'contactarme', h1end: '.',
      lede: 'Elige la que mejor encaje — cada una dice abajo para qué sirve.',
      coordsLabel: 'Coordenadas',
      rows: [
        { time: 'Correo', h3: 'nerion89@gmail.com', href: 'mailto:nerion89@gmail.com', p: 'Trabajo, colaboración, una pregunta pensada.', copy: 'nerion89@gmail.com' },
        { time: 'GitHub', h3: 'github.com/ponzgpt ↗', href: 'https://github.com/ponzgpt', ext: true, p: 'Proyectos, experimentos, el rastro del código.', copy: 'https://github.com/ponzgpt' },
        { time: 'LinkedIn', h3: 'javierponz ↗', href: 'https://www.linkedin.com/in/javierponz', ext: true, p: 'Contexto profesional, contactos públicos.', copy: 'https://www.linkedin.com/in/javierponz' }
      ],
      copyLabel: 'Copiar', copiedLabel: 'Copiado', copyFailedLabel: 'No se pudo copiar',
      availabilityLabel: 'Disponibilidad',
      availability: `<h2>Disponible para el puesto adecuado, desde ya.</h2>
      <p>Independiente, así que sin preaviso que cumplir. Busco soporte técnico, ingeniería de cara al cliente, u operaciones con agentes — encontrar el fallo real, dejar a la persona con más control.</p>
      <p>Aberdeen, Escocia, de camino desde Madrid, en horario de Reino Unido. El remoto me viene bien, viajo sin problema, y me trasladaría si tuviera sentido también para mi pareja.</p>`
    }
  },

  /* ───────────────────────────────────────────────────────────── now ── */
  now: {
    en: {
      kicker: 'Now', h1: 'What has my ', serif: 'attention', h1end: '.',
      lede: 'This page is a snapshot, not a promise. It changes as the work changes.',
      obsessions: [
        { label: 'Omarchy', html: P(
          'My daily driver, alongside Arch and Fedora — a desktop that expects to be edited rather than tolerated. <a href="{thoughts}">Read why</a>: the machine has to be shapeable before an agent can do much with it.') },
        { label: 'Hermes Agent', html: P(
          'The agent harness I operate daily, built by Nous Research, not by me — scheduled workflows with permission to touch real files.') }
      ],
      focusLabel: 'Current focus',
      cards: [
        { meta: '01', h3: 'Owning the stack', p: 'Local GPU inference — two rigs offline after a format, rebuilding now — plus a Proxmox homelab, moving off Google, OSINT, GrapheneOS next. Slow, inconvenient, not stopping.' },
        { meta: '02', h3: 'Machines Do It Better', p: 'Early-stage solo practice helping small businesses adopt agentic AI where it genuinely saves time. No clients yet — that is the bet.' }
      ],
      studyLabel: 'Studying', studyH2: 'Depth before theatre.',
      study: 'AI and Full Stack development at Universidad Rey Juan Carlos, via Racks University. Alongside it: evaluation, web apps, APIs, Docker, claims that survive inspection.',
      openLabel: 'Open to',
      open: 'Technical support, customer success and customer-facing roles — technical, patient, a competent writer, at once. Also junior developer and agent-operations work. Remote suits me. <a href="{contact}">Get in touch</a>.'
    },
    es: {
      kicker: 'Ahora', h1: 'Qué me tiene ', serif: 'ocupado', h1end: '.',
      lede: 'Esta página es una foto fija, no una promesa. Cambia según cambia el trabajo.',
      obsessions: [
        { label: 'Omarchy', html: P(
          'Mi sistema principal, junto a Arch y Fedora — un escritorio que espera que lo edites en vez de tolerarlo. <a href="{thoughts}">Lee por qué</a>: la máquina tiene que ser moldeable antes de que un agente pueda hacer gran cosa con ella.') },
        { label: 'Hermes Agent', html: P(
          'El framework de agentes que opero a diario, construido por Nous Research, no por mí — flujos programados con permiso para tocar ficheros reales.') }
      ],
      focusLabel: 'Foco actual',
      cards: [
        { meta: '01', h3: 'Ser dueño de la pila', p: 'Inferencia local por GPU — dos equipos apagados tras un formateo, reconstruyéndolos ahora — más un homelab en Proxmox, salir de Google, OSINT, y GrapheneOS después. Lento, incómodo, sin parar.' },
        { meta: '02', h3: 'Machines Do It Better', p: 'Práctica en solitario y en fase inicial, ayudando a pequeños negocios a adoptar IA con agentes donde de verdad ahorra tiempo. Sin clientes todavía — esa es la apuesta.' }
      ],
      studyLabel: 'Estudiando', studyH2: 'Profundidad antes que teatro.',
      study: 'IA y desarrollo Full Stack en la Universidad Rey Juan Carlos, a través de Racks University. En paralelo: evaluación, aplicaciones web, APIs, Docker, y afirmaciones que aguantan que las mires de cerca.',
      openLabel: 'Disponible para',
      open: 'Soporte técnico, customer success y puestos de cara al cliente — técnico, paciente y que escribe bien, a la vez. También trabajo de desarrollador junior y de operaciones con agentes. El remoto me viene bien. <a href="{contact}">Escríbeme</a>.'
    }
  },

  /* ─────────────────────────────────────────────────────────── index ── */
  home: {
    en: {
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
    es: {
      title: 'Javier Ponz — soporte técnico y operaciones con agentes',
      desc: 'Javier Ponz — tecnología, servicio y agentes.',
      kicker: 'Aberdeen, Escocia',
      tagline: 'Construyo herramientas para agentes y productos pequeños que ', taglineSerif: 'de verdad se publican', taglineEnd: '.',
      lede: 'Diez años diagnosticando problemas difíciles en Apple Retail, ahora construyendo sistemas de IA y aplicaciones full stack — desplegadas, probadas, en producción. El mismo trabajo, otra superficie.',
      overviewLabel: '01 / Panorama', overviewH2: 'Diez años entre las personas y sus máquinas.',
      overview: P(
        'Una década en Apple Retail me enseñó a diagnosticar rápido y a traducir entre lo que el ingeniero quiere decir, lo que prometió la venta, y lo que la persona realmente ve. Aplico eso ahora a sistemas de IA — flujos con agentes, automatización, infraestructura que administro yo mismo.',
        'En paralelo, IA y desarrollo Full Stack en la Universidad Rey Juan Carlos, publicando cosas reales según avanzo — este sitio, una app web en producción, herramientas para agentes hechas con y sin un agente. El <a href="{workbench}">registro de proyectos</a> dice cuál es cuál.'),
      tags: ['liderar es servir', 'Hermes Agent', 'Omarchy', 'inferencia local', 'flujos con agentes', 'Docker y despliegue', 'resolución de incidencias técnicas', 'MCP', 'construir en público'],
      exploreLabel: '02 / Explorar',
      cards: [
        { href: '{about}', meta: 'Trayectoria', h3: 'Perfil y experiencia →', p: 'Apple Retail, el paso a sistemas de IA, y las titulaciones detrás.' },
        { href: '{workbench}', meta: 'Registro', h3: 'Proyectos →', p: 'Proyectos y repositorios, con el alcance y el estado dichos con claridad.' },
        { href: '{memento}', meta: 'Caso práctico', h3: 'Llevarlo a producción →', p: 'Cómo una app pequeña pasó de idea a un despliegue verificado.' },
        { href: '{thoughts}', meta: 'Ideas', h3: 'La máquina moldeable →', p: 'Primitivas abiertas de agentes, un sistema operativo editable, y por qué convergen.' }
      ],
      workLabel: '03 / Trabajo seleccionado'
    }
  },

  /* ───────────────────────────────────────────────────────── projects ── */
  // Merges the old standalone Workbench and Memento Mori case-study pages
  // into one section: running/shipped cards, then the case study as a
  // subsection (its own #case-study anchor) instead of a separate page.
  projects: {
    en: {
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
    es: {
      kicker: 'Proyectos', h1: 'Cosas que estoy ', serif: 'haciendo', h1end: '.',
      lede: 'Lo que uso a diario, y lo que he hecho — en listas separadas, cada una dice quién lo escribió.',
      runningLabel: 'Uso a diario', projectsLabel: 'Publicado', productionLabel: 'En producción',
      cap2: 'Hermes Agent Site — uno de sus seis aspectos',
      scopeLabel: 'Nota de alcance',
      scope: 'Proyectos personales y ejercicios de aprendizaje. No son entregables para clientes.',
      caseStudyLabel: 'Caso práctico: Memento Mori', caseStudyH2: 'Llevar una app pequeña a producción.',
      caseStudyLede: 'El widget nativo es el producto; esto es su demo web, mismo modelo, mismo navegador. Cómo la parte web pasó de idea a un dominio real con controles de publicación reales.',
      caseStudyAppLabel: 'La app', caseStudyCaption: 'La vista principal en memento.technoir.cloud',
      caseStudyLinksLabel: 'Enlaces',
      caseStudyLinks: [
        { time: 'En vivo', h3: 'memento.technoir.cloud ↗', href: 'https://memento.technoir.cloud/', p: 'La aplicación desplegada.' },
        { time: 'Código', h3: 'github.com/ponzgpt/memento-mori ↗', href: 'https://github.com/ponzgpt/memento-mori', p: 'Apache-2.0, con las herramientas de publicación descritas abajo.' }
      ],
      caseStudySections: [
        { label: 'El problema', cls: 'prose', html: P(
          'El tiempo es finito, pero la idea se queda en lo abstracto — fácil de posponer, la tarea que más ruido hace siempre gana. Quería que el límite fuera legible sin predecir nada sobre nadie en concreto: <em>útil sin prometer de más</em>.') },
        { label: 'Qué hace', cls: 'prose', html: P(
          'Fecha de nacimiento, país de nacimiento, país actual y edad al mudarte, seis factores de estilo de vida — igual que el widget nativo. Un horizonte central a partir de datos de esperanza de vida del Banco Mundial, un margen de siete años a cada lado, una cuadrícula de una vida de 100 años, una intención para hoy.',
          'La incertidumbre se queda visible — una fecha única y segura habría sido más fácil, y una mentira.') },
        { label: 'Decisiones', cls: 'prose', html:
          '<h3>Sin backend, sin cuentas, sin analítica</h3>' + P('La fecha de nacimiento y la intención nunca salen del navegador — la decisión correcta para algo tan personal.') +
          '<h3>Cero dependencias en tiempo de ejecución</h3>' + P('HTML, CSS y módulos ES sin más, sin paso de compilación, se puede abrir desde un único fichero. Nada que parchear cuando a una dependencia le va mal la semana.') +
          '<h3>Docker, nginx y Traefik sobre un VPS que ya tenía</h3>' + P('El VPS y el dominio ya existían — sin suscripción nueva, sin proveedor nuevo. Contenedores porque el propio despliegue era parte de lo que quería aprender. Cada versión es una etiqueta inmutable; el rollback vuelve a desplegar la anterior.') },
        { label: 'Controles de publicación', cls: 'prose', html: P(
          'De lo que más contento estoy no es de la app, sino de lo que hay entre ella y producción: <code>npm run verify</code> ejecuta tests unitarios, comprobaciones de historias de usuario, lint, una prueba de humo, consistencia de versión, y una compilación de Waybar.',
          'La comprobación de versión existe porque una vez se me desincronizó — la versión del paquete, el manifiesto y el changelog no coincidían, y lo noté por casualidad. Un check que falla en vez de un hábito, ejecutado en GitHub Actions en las tres plataformas.') },
        { label: 'Qué haría distinto', cls: 'prose', html:
          '<ul><li><strong>Desplegar antes.</strong> La vista previa local nunca saca a la luz lo que hace un despliegue real — una versión fea en la primera semana gana a pulirla en aislamiento.</li><li><strong>Decidir el límite del producto una vez, y anotar por qué.</strong> Del widget a la app web y de vuelta; decidirlo pronto evita rehacer trabajo de verdad.</li><li><strong>Escribir la nota de alcance primero.</strong> No es consejo médico, actuarial, ni una predicción sobre nadie en concreto — escribirlo pronto hace evidentes varias decisiones antes.</li></ul>' }
      ],
      caseStudyScopeLabel: 'Nota de alcance',
      caseStudyScope: 'Un proyecto personal: una ayuda para la reflexión basada en promedios de población, no consejo médico, legal, actuarial ni de salud mental, y sin ninguna afirmación sobre nadie en concreto.'
    }
  },

  /* ──────────────────────────────────────────────────────── timeline ── */
  timeline: {
    en: {
      kicker: 'Timeline', h1: 'A work in ', serif: 'progress', h1end: '.',
      lede: 'A deliberately concise chronology. The current chapter is still being written.',
      label: 'Chronology'
    },
    es: {
      kicker: 'Cronología', h1: 'Un trabajo ', serif: 'en curso', h1end: '.',
      lede: 'Una cronología deliberadamente breve. El capítulo actual todavía se está escribiendo.',
      label: 'Cronología'
    }
  },

  /* ────────────────────────────────────────────────────────────── cv ── */
  // Just what the Contact section's CV disclosure needs.
  cv: {
    en: { kicker: 'Curriculum vitae', download: '↓ Download CV (PDF)' },
    es: { kicker: 'Currículum', download: '↓ Descargar el CV (PDF)' }
  }
};
