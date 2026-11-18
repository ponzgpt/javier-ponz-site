// Every visible and accessible string on the page, in English and Spanish.
// `/` renders `en`, `/es/` renders `es`, through the same markup and script
// (src/components/Notebook.astro). scripts/check-site.mjs fails the build if the
// two objects stop having exactly the same keys, or if any value is empty.
//
// Strings may carry inline HTML (<b>, <a>, <span>); they are ours, rendered as is.
// URLs, handles and product names that never change live in `shared`.

export const shared = {
  site: 'https://javierponz.technoir.cloud',
  email: 'jponz@proton.me',
  discord: 'sudotechnoir',
  cv: '/javier-ponz-prado-cv.pdf',
  github: 'https://github.com/ponzgpt',
  x: 'https://x.com/sudotechnoir',
  linkedin: 'https://www.linkedin.com/in/javierponz',
  repo: 'https://github.com/ponzgpt/javier-ponz-site',
  mdib: 'https://mdib.technoir.cloud',
  newsletter: 'https://machinesdoitbetter.beehiiv.com',
  // the five Beehiiv issues: titles are Spanish in both languages
  issues: [
    ['2014 nunca acabó', 'https://machinesdoitbetter.beehiiv.com/p/2014-nunca-acab'],
    ['La era del «grande ande o no ande» ha muerto', 'https://machinesdoitbetter.beehiiv.com/p/la-era-del-grande-ande-o-no-ande-ha-muerto'],
    ['La carrera por la IA terminó. China gana con código abierto', 'https://machinesdoitbetter.beehiiv.com/p/la-carrera-ia-termin-china-gan-por-c-digo-abierto'],
    ['La batalla no es por la inteligencia, sino por el control', 'https://machinesdoitbetter.beehiiv.com/p/la-batalla-no-es-por-la-inteligencia-sino-por-el-control'],
    ['Los contratos definen la IA, no los modelos', 'https://machinesdoitbetter.beehiiv.com/p/los-contratos-definen-la-ia-no-los-modelos']
  ]
};

const en = {
  htmlLang: 'en-GB',
  ogLocale: 'en_GB',
  meta: {
    title: 'Javier Ponz',
    description: 'Javier Ponz: ten years at Apple, six and a half as a Genius. Now I build and run AI agents and the servers under them. Two of my Hermes Agent plugins are in its official catalog.'
  },
  ui: {
    foldToDark: 'Turn the page: switch to the dark slate',
    foldToLight: 'Turn the page: switch to the light paper',
    langNav: 'Language',
    langEn: 'English',
    langEs: 'Español',
    linksNav: 'Links',
    copied: 'copied ✓'
  },
  cover: {
    page: 'p. 1 · whoami',
    note: 'From Spain. Based in Aberdeen, Scotland.',
    heroLine: '<span id="hl-a">Ex-Apple</span> | <span id="hl-b">10 years fixing people\'s tech</span>. Now exploring the intersection of <span id="hl-c">ASI, Neuroscience &amp; Post-Labor Economics</span>.',
    lede: 'Ten years at Apple, six and a half as a Genius: the cases nobody else had solved, explained until the customer understood them. Now I build and run AI agents and the servers under them. Two of my Hermes Agent plugins are in its official catalog, and I\'m building Machines Do It Better.',
    photoAlt: 'Pencil sketch of Javier Ponz: long curly hair, beard, aviator sunglasses, hoodie',
    email: { name: 'Email', aria: 'Email: copy address', done: 'Email address copied', sel: 'Email address selected:' },
    discord: { name: 'Discord', aria: 'Discord sudotechnoir: copy handle', done: 'Discord handle copied', sel: 'Discord handle selected:' },
    cvSmall: 'PDF',
    youtube: { small: 'soon', aria: 'YouTube, coming soon', stamp: 'work in progress' }
  },
  story: {
    page: 'p. 2 · people and their machines',
    note: 'Industrial engineering dropout. Before Apple I built and overclocked my own PCs; at Apple I fixed everyone else\'s. In the last two years I have moved entirely to software: full stack, AI, local inference, deployment, and some devops and networking.',
    title: 'Ten years between people and their machines',
    timeline: [
      { when: 'Aug 2024 – now', title: 'Independent · Aberdeen, Scotland', text: 'Moved to the UK. Studying AI and full stack at Universidad Rey Juan Carlos via Racks University (to Dec 2026), building MDIB and shipping small products to my own server.', aside: 'same job, new kind of machine' },
      { when: 'Mar 2018 – Aug 2024', title: 'Genius · Apple Retail', text: 'Six and a half years as the store\'s technical baseline: the cases nobody else had resolved, explained to people with very different levels of understanding, and newer technicians brought onto the bench.', aside: 'colleagues used my case notes as the example to follow' },
      { when: 'Feb – Aug 2023 · Feb – Aug 2024', title: 'Lead In-Store Experience · secondment, twice', text: 'Xanadú, then Parquesur, while holding the Genius role: planning, resourcing, events, and the situations no procedure covers.', aside: 'led by removing obstacles, then went back to the bench' },
      { when: 'Mar – Jun 2020', title: 'AppleCare Support Advisor · Apple', text: 'Remote, during COVID, as a volunteer. Concurrent cases under structured troubleshooting and documentation standards.', aside: 'no shop floor around me, just the case' },
      { when: 'Sep 2014 – Feb 2018', title: 'Specialist, then Technical Specialist · Apple Retail', text: 'Parquesur, Madrid. Diagnosis and consultative support, on the shop floor every day.', aside: 'where the habits started' }
    ]
  },
  now: {
    page: 'p. 3 · building now',
    note: 'Built on Hermes Agent, the open-source harness by Nous Research.',
    title: 'Building now',
    stamp: 'work in progress',
    lede: 'After Apple I spent two years learning, from zero, everything between a prompt and a production server. <b>Machines Do It Better (MDIB)</b> is where I put it to work: private AI agents for professionals who handle other people\'s confidential information, each one fitted to a single person\'s work and owned by them, account, data and choice of model included. It is how I practise the whole job: specify, build, deploy, and support the person who uses it.',
    newsletter: 'the newsletter →',
    after: 'Alongside it, a few other things are on my bench right now.'
  },
  work: {
    page: 'p. 4 · other projects',
    note: 'Hermes Agent is built by Nous Research. My part is using it and building plugins for it.',
    title: 'Other projects I\'m working on',
    stub: 'TICKETS · PR #152559 · #152560',
    kind: 'Hermes Agent plugins',
    stamp: 'merged · in the catalog',
    h3: 'Psychopomp and Sabbath',
    fact: 'Two plugins, both merged into the official Hermes plugin catalog on 11 November 2026 after maintainer review, with 31 tests between them.',
    psychopomp: 'Helps you write a page of your life each week, and carries it to the people you love only after your witness sends a code.',
    sabbath: 'Once a week Hermes says goodnight, pauses its own scheduled jobs and sets work aside, then sends one gentle digest.',
    tests: 'tests',
    catalogPr: 'catalog PR',
    stripHead: 'Review, both PRs on one clock (UTC, from the public PR timelines):',
    stripAria: 'Opened 10 November 2026 at 10:05; reviewed by the maintainer 14 hours later; requested fixes shipped 12 hours after that; merged into the catalog 10 hours later, 11 November at 22:15.',
    review: [
      ['10 Nov · 10:05', 'PR opened'],
      ['+14 h', 'reviewed by\nthe maintainer'],
      ['+12 h', 'requested fixes\nshipped'],
      ['+10 h', 'merged · 11 Nov\n22:15 UTC']
    ],
    source: 'source',
    neuronara: { kind: 'clinical reference · in use', text: 'A deterministic, no-LLM reference search over the standards of clinical neurophysiology, with a bring-your-own-AI handoff. Built for my partner, a clinical neurophysiologist: every miss she reports is reproduced, fixed and pinned by an evaluation question.' },
    asiRush: { kind: 'browser game · live', text: 'A clicker about the real race to AI: from beige PCs in a garage, through the AI winters, GPUs and transformers, to superintelligence, with rival labs racing you.' },
    more: 'More of what I\'m building is on GitHub:'
  },
  notes: {
    page: 'p. 5 · notes from the bench',
    title: 'Notes from the bench',
    lede: 'I write about ASI, neuroscience, post-labor economics and whatever else I can\'t stop reading about: long form in the newsletter, shorter versions on X and LinkedIn.',
    caption: 'Machines Do It Better, the newsletter: 144 issues in Spanish, March to December 2025.',
    rows: [
      { text: 'And it was no accident.', when: 'Dec 2025' },
      { text: 'The end of bigger-is-better, and another open release from DeepSeek.', when: 'Dec 2025' },
      { text: 'Moonshot ships Kimi K2 as open source, two days after Jensen Huang\'s \'nanoseconds behind\'.', when: 'Nov 2025' },
      { text: 'Data centres in orbit, a billion-dollar bet against the AI bubble, and Apple turning to Google for Siri.', when: 'Nov 2025' },
      { text: 'The quiet fight over compute: OpenAI, Amazon and hardware feudalism.', when: 'Nov 2025' }
    ],
    archive: 'newsletter archive →',
    subscribe: 'subscribe →',
    onX: 'on X →',
    onLinkedIn: 'on LinkedIn →'
  },
  stack: {
    page: 'p. 6 · my stack',
    note: 'Hermes Agent and Omarchy are other people\'s work. I use them every day.',
    title: 'My stack',
    sub: 'From spec to server',
    stepsAria: 'Four steps: specify, test, agents build, run it',
    steps: [
      ['Specify', 'what it must do, written down'],
      ['Test', 'the checks it must pass, written before the code'],
      ['Agents build', 'AI coding agents write the code'],
      ['Run it', 'I deploy it, watch it and support it']
    ],
    currentHead: 'Current stack',
    // [map node ids this fact belongs to (none when the entry has one item), the fact]
    current: [
      ['ws', 'Custom workstation: AMD Ryzen 9 9900X3D, NVIDIA RTX 5090, 64 GB RAM'],
      ['mac', 'MacBook Pro M3 Pro, 18 GB'],
      ['vps', 'A VPS I administer'],
      ['ws', 'Omarchy (Arch Linux, Hyprland) on the workstation'],
      ['mac', 'macOS on the laptop'],
      ['syl', 'Hermes Agent: Syl on Hermes Cloud through Nous Portal'],
      ['loc', 'A local Hermes on the workstation'],
      ['psy sab', 'Psychopomp and Sabbath, my plugins in the official Hermes catalog'],
      ['llm', 'Local inference with llama.cpp on the workstation'],
      ['oll', 'Ollama and LM Studio, tried on the laptop'],
      ['cc', 'Claude Code and Codex'],
      ['TypeScript, JavaScript, Python, Astro'],
      ['vps', 'Docker Swarm, Dokploy, Traefik, nginx'],
      ['sites', 'GitHub Actions, deploying every *.technoir.cloud site'],
      ['Tailscale between the laptop and the workstation'],
      ['Sunshine and Moonlight for remote desktop between my machines']
    ],
    progressHead: 'In progress',
    progress: [
      ['lab', 'A home lab, beside the workstation'],
      ['lab', 'Proxmox on the home lab'],
      ['inf', 'Local inference from the workstation to the MacBook over Tailscale'],
      ['vLLM, not tried']
    ],
    mapCap: 'What it runs on',
    filtersAria: 'Show on the map',
    filters: { all: 'everything', hw: 'hardware', am: 'agents and models', srv: 'serving', plan: 'planned' }
  },
  // strings the map draws in script (src/scripts/notebook.js)
  map: {
    nodes: {
      syl: ['Syl', 'Hermes Cloud\nNous Portal'],
      psy: ['Psychopomp'],
      sab: ['Sabbath'],
      mac: ['MacBook Pro', 'M3 Pro · 18 GB\nmacOS'],
      cc: ['Claude Code · Codex'],
      oll: ['Ollama · LM Studio', 'tried here'],
      ws: ['Workstation', 'Ryzen 9 9900X3D\nRTX 5090 · 64 GB\nOmarchy'],
      loc: ['local Hermes'],
      llm: ['llama.cpp', 'local inference'],
      lab: ['home lab', 'Proxmox on it'],
      vps: ['VPS', 'Docker Swarm\nDokploy · Traefik\nnginx'],
      sites: ['the sites on\n*.technoir.cloud']
    },
    talksTo: 'talks to',
    deploys: 'deploys',
    inference: 'local inference\nover Tailscale',
    inferenceTree: 'local inference over Tailscale',
    actions: 'deploys arrive from\nGitHub Actions',
    hermesLink: 'Hermes Agent on GitHub',
    sitesLink: 'the projects, on p. 4',
    connected: 'Connected to:',
    and: 'and'
  },
  ethos: {
    page: 'p. 7 · ethos',
    note: 'These are my own views.',
    title: 'Ethos',
    work: 'How I work',
    believe: 'What I believe',
    theses: [
      ['Fix it, explain it, hand it back', 'Ten years at the Genius Bar taught me that a repair is not finished when the device works. It is finished when the person understands what happened and is still in control.'],
      ['Prove it', 'I write the specification and the tests before I trust a result, my own included. A claim without a source is a guess.'],
      ['Small steps, always live', 'Everything I build goes live on day one and then changes in small steps, each one checked before it ships. Agents make code cheap to write; they don\'t make checking it optional.'],
      ['Machines work, people judge', 'Agents can carry the repetitive load. Deciding what matters, and answering for it, stays with a person.'],
      ['Learn in public', 'I started from zero two years ago and do the learning in public repositories. Anyone can check what I can do, and how I got here.'],
      ['Curious about everything', 'Neuroscience, economics, history, hardware: I follow whatever I can\'t stop reading about. The connections between fields are where my best ideas come from.'],
      ['Own the machine', 'The hardware, the account, the data and the choice of model should belong to the person who depends on them. Nothing I build is meant to lock anyone in.'],
      ['Free and open source first', 'I build on open tools and publish my own code. What can be inspected can be trusted, and what can be read can be repaired.'],
      ['e/<span class="lam">λ</span>', 'More capable technology, sooner, in more people\'s hands. Progress is something to build, not something to wait for.'],
      ['The classical virtues', 'Prudence, justice, fortitude and temperance: the old Mediterranean virtues are still the best checklist I know. Measure in all things, ambition included.']
    ],
    made: '<b>How this was made:</b> built with AI coding agents from my spec and my tests. If I can, so can you: <a href="https://github.com/ponzgpt/javier-ponz-site" target="_blank" rel="noreferrer">the source is on GitHub</a>.',
    earlier: 'Earlier versions of this page:',
    versions: [['v1', '/v/v1/'], ['v2', '/v/v2/'], ['v3', '/v/v3/'], ['v4', '/v/v4/'], ['v5', '/v/v5/']]
  },
  notFound: {
    line: 'This page is not in the notebook.',
    home: 'Back to the first page →'
  }
};

const es = {
  htmlLang: 'es-ES',
  ogLocale: 'es_ES',
  meta: {
    title: 'Javier Ponz',
    description: 'Javier Ponz: diez años en Apple, seis y medio como Genius. Ahora construyo y opero agentes de IA y los servidores que los sostienen. Dos de mis plugins para Hermes Agent están en su catálogo oficial.'
  },
  ui: {
    foldToDark: 'Pasar la página: cambiar a la pizarra oscura',
    foldToLight: 'Pasar la página: cambiar al papel claro',
    langNav: 'Idioma',
    langEn: 'English',
    langEs: 'Español',
    linksNav: 'Enlaces',
    copied: 'copiado ✓'
  },
  cover: {
    page: 'p. 1 · whoami',
    note: 'De España. Vivo en Aberdeen, Escocia.',
    heroLine: '<span id="hl-a">Ex-Apple</span> | <span id="hl-b">10 años arreglando la tecnología de la gente</span>. Ahora explorando la intersección entre <span id="hl-c">ASI, neurociencia y economía post-laboral</span>.',
    lede: 'Diez años en Apple, seis y medio como Genius: los casos que nadie más había resuelto, explicados hasta que el cliente los entendía. Ahora construyo y opero agentes de IA y los servidores que los sostienen. Dos de mis plugins para Hermes Agent están en su catálogo oficial, y estoy construyendo Machines Do It Better.',
    photoAlt: 'Retrato a lápiz de Javier Ponz: pelo largo y rizado, barba, gafas de aviador, sudadera con capucha',
    email: { name: 'Correo', aria: 'Correo: copiar la dirección', done: 'Dirección de correo copiada', sel: 'Dirección de correo seleccionada:' },
    discord: { name: 'Discord', aria: 'Discord sudotechnoir: copiar el usuario', done: 'Usuario de Discord copiado', sel: 'Usuario de Discord seleccionado:' },
    cvSmall: 'PDF, en inglés',
    youtube: { small: 'pronto', aria: 'YouTube, próximamente', stamp: 'en construcción' }
  },
  story: {
    page: 'p. 2 · las personas y sus máquinas',
    note: 'Dejé Ingeniería Industrial a medias. Antes de Apple montaba mis propios ordenadores y les hacía overclock; en Apple arreglaba los de todos los demás. En los dos últimos años me he pasado por completo al software: full stack, IA, inferencia local, despliegue, y algo de devops y redes.',
    title: 'Diez años entre las personas y sus máquinas',
    timeline: [
      { when: 'ago. 2024 – hoy', title: 'Por mi cuenta · Aberdeen, Escocia', text: 'Me mudé al Reino Unido. Estudio IA y full stack en la Universidad Rey Juan Carlos a través de Racks University (hasta dic. 2026), construyo MDIB y publico pequeños productos en mi propio servidor.', aside: 'el mismo oficio, otro tipo de máquina' },
      { when: 'mar. 2018 – ago. 2024', title: 'Genius · Apple Retail', text: 'Seis años y medio como referencia técnica de la tienda: los casos que nadie más había resuelto, explicados a personas con niveles de conocimiento muy distintos, y la formación de los técnicos que llegaban nuevos al taller.', aside: 'mis compañeros usaban mis notas de caso como ejemplo a seguir' },
      { when: 'feb. – ago. 2023 · feb. – ago. 2024', title: 'Lead In-Store Experience · asignación temporal, dos veces', text: 'Xanadú y después Parquesur, sin dejar el puesto de Genius: planificación, recursos, eventos y las situaciones que ningún procedimiento contempla.', aside: 'lideré quitando obstáculos y después volví al taller' },
      { when: 'mar. – jun. 2020', title: 'AppleCare Support Advisor · Apple', text: 'En remoto, durante la COVID, como voluntario. Casos simultáneos con estándares estructurados de diagnóstico y documentación.', aside: 'sin tienda alrededor, solo el caso' },
      { when: 'sep. 2014 – feb. 2018', title: 'Specialist y después Technical Specialist · Apple Retail', text: 'Parquesur, Madrid. Diagnóstico y asesoramiento, a pie de tienda todos los días.', aside: 'donde empezaron los hábitos' }
    ]
  },
  now: {
    page: 'p. 3 · construyendo ahora',
    note: 'Construido sobre Hermes Agent, el agente de código abierto de Nous Research.',
    title: 'Construyendo ahora',
    stamp: 'en construcción',
    lede: 'Después de Apple pasé dos años aprendiendo desde cero todo lo que hay entre un prompt y un servidor en producción. <b>Machines Do It Better (MDIB)</b> es donde lo pongo a trabajar: agentes de IA privados para profesionales que manejan información confidencial de otras personas, cada uno ajustado al trabajo de una sola persona y de su propiedad, con la cuenta, los datos y la elección del modelo incluidos. Así practico el oficio completo: especificar, construir, desplegar y dar soporte a quien lo usa.',
    newsletter: 'la newsletter →',
    after: 'Junto a esto, ahora mismo tengo otras cosas en el taller.'
  },
  work: {
    page: 'p. 4 · otros proyectos',
    note: 'Hermes Agent lo desarrolla Nous Research. Mi parte es usarlo y crear plugins para él.',
    title: 'Otros proyectos en marcha',
    stub: 'TICKETS · PR #152559 · #152560',
    kind: 'Plugins para Hermes Agent',
    stamp: 'integrados · en el catálogo',
    h3: 'Psychopomp y Sabbath',
    fact: 'Dos plugins, ambos integrados en el catálogo oficial de plugins de Hermes el 11 de noviembre de 2026 tras la revisión del mantenedor, con 31 pruebas entre los dos.',
    psychopomp: 'Te ayuda a escribir cada semana una página de tu vida, y la lleva a las personas que quieres solo cuando tu testigo envía un código.',
    sabbath: 'Una vez por semana Hermes da las buenas noches, pausa sus propias tareas programadas y deja el trabajo a un lado; después envía un único resumen tranquilo.',
    tests: 'pruebas',
    catalogPr: 'PR del catálogo',
    stripHead: 'La revisión, las dos PR en el mismo reloj (UTC, según los historiales públicos de las PR):',
    stripAria: 'Abiertas el 10 de noviembre de 2026 a las 10:05; revisadas por el mantenedor 14 horas después; las correcciones pedidas, entregadas 12 horas más tarde; integradas en el catálogo 10 horas después, el 11 de noviembre a las 22:15.',
    review: [
      ['10 nov. · 10:05', 'PR abiertas'],
      ['+14 h', 'revisadas por\nel mantenedor'],
      ['+12 h', 'correcciones\nentregadas'],
      ['+10 h', 'integradas · 11 nov.\n22:15 UTC']
    ],
    source: 'código',
    neuronara: { kind: 'referencia clínica · en uso', text: 'Un buscador de referencia determinista, sin LLM, sobre los estándares de la neurofisiología clínica, con traspaso a la IA que elijas. Hecho para mi pareja, neurofisióloga clínica: cada fallo que me comunica se reproduce, se corrige y se fija con una pregunta de evaluación.' },
    asiRush: { kind: 'juego de navegador · publicado', text: 'Un clicker sobre la carrera real hacia la IA: de los PC beis en un garaje, pasando por los inviernos de la IA, las GPU y los transformers, hasta la superinteligencia, con laboratorios rivales compitiendo contigo.' },
    more: 'Hay más de lo que construyo en GitHub:'
  },
  notes: {
    page: 'p. 5 · notas del taller',
    title: 'Notas del taller',
    lede: 'Escribo sobre ASI, neurociencia, economía post-laboral y todo aquello sobre lo que no puedo dejar de leer: en formato largo en la newsletter, y versiones más cortas en X y LinkedIn.',
    caption: 'Machines Do It Better, la newsletter: 144 números, de marzo a diciembre de 2025.',
    rows: [
      { text: 'Y no fue casualidad.', when: 'dic. 2025' },
      { text: 'El fin de «cuanto más grande, mejor», y otro lanzamiento abierto de DeepSeek.', when: 'dic. 2025' },
      { text: 'Moonshot publica Kimi K2 en código abierto, dos días después del «nanosegundos por detrás» de Jensen Huang.', when: 'nov. 2025' },
      { text: 'Centros de datos en órbita, una apuesta milmillonaria contra la burbuja de la IA y Apple recurriendo a Google para Siri.', when: 'nov. 2025' },
      { text: 'La lucha silenciosa por la capacidad de cómputo: OpenAI, Amazon y el feudalismo del hardware.', when: 'nov. 2025' }
    ],
    archive: 'archivo de la newsletter →',
    subscribe: 'suscribirse →',
    onX: 'en X →',
    onLinkedIn: 'en LinkedIn →'
  },
  stack: {
    page: 'p. 6 · mi stack',
    note: 'Hermes Agent y Omarchy son trabajo de otras personas. Los uso todos los días.',
    title: 'Mi stack',
    sub: 'De la especificación al servidor',
    stepsAria: 'Cuatro pasos: especificar, probar, los agentes construyen, ponerlo en marcha',
    steps: [
      ['Especificar', 'lo que debe hacer, por escrito'],
      ['Probar', 'las comprobaciones que debe superar, escritas antes del código'],
      ['Los agentes lo construyen', 'los agentes de programación con IA escriben el código'],
      ['Ponerlo en marcha', 'lo despliego, lo vigilo y le doy soporte']
    ],
    currentHead: 'Stack actual',
    current: [
      ['ws', 'Una workstation a medida: AMD Ryzen 9 9900X3D, NVIDIA RTX 5090, 64 GB de RAM'],
      ['mac', 'MacBook Pro M3 Pro, 18 GB'],
      ['vps', 'Un VPS que administro'],
      ['ws', 'Omarchy (Arch Linux, Hyprland) en la workstation'],
      ['mac', 'macOS en el portátil'],
      ['syl', 'Hermes Agent: Syl en Hermes Cloud a través de Nous Portal'],
      ['loc', 'Un Hermes local en la workstation'],
      ['psy sab', 'Psychopomp y Sabbath, mis plugins en el catálogo oficial de Hermes'],
      ['llm', 'Inferencia local con llama.cpp en la workstation'],
      ['oll', 'Ollama y LM Studio, probados en el portátil'],
      ['cc', 'Claude Code y Codex'],
      ['TypeScript, JavaScript, Python, Astro'],
      ['vps', 'Docker Swarm, Dokploy, Traefik, nginx'],
      ['sites', 'GitHub Actions, que despliega cada sitio de *.technoir.cloud'],
      ['Tailscale entre el portátil y la workstation'],
      ['Sunshine y Moonlight para el escritorio remoto entre mis máquinas']
    ],
    progressHead: 'En curso',
    progress: [
      ['lab', 'Un homelab, junto a la workstation'],
      ['lab', 'Proxmox en el laboratorio de casa'],
      ['inf', 'Inferencia local desde la workstation al MacBook por Tailscale'],
      ['vLLM, sin probar']
    ],
    mapCap: 'Dónde corre',
    filtersAria: 'Mostrar en el mapa',
    filters: { all: 'todo', hw: 'hardware', am: 'agentes y modelos', srv: 'despliegue', plan: 'previsto' }
  },
  map: {
    nodes: {
      syl: ['Syl', 'Hermes Cloud\nNous Portal'],
      psy: ['Psychopomp'],
      sab: ['Sabbath'],
      mac: ['MacBook Pro', 'M3 Pro · 18 GB\nmacOS'],
      cc: ['Claude Code · Codex'],
      oll: ['Ollama · LM Studio', 'probados aquí'],
      ws: ['Workstation', 'Ryzen 9 9900X3D\nRTX 5090 · 64 GB\nOmarchy'],
      loc: ['Hermes local'],
      llm: ['llama.cpp', 'inferencia local'],
      lab: ['homelab', 'con Proxmox'],
      vps: ['VPS', 'Docker Swarm\nDokploy · Traefik\nnginx'],
      sites: ['los sitios en\n*.technoir.cloud']
    },
    talksTo: 'habla con',
    deploys: 'despliega',
    inference: 'inferencia local\npor Tailscale',
    inferenceTree: 'inferencia local por Tailscale',
    actions: 'los despliegues llegan\ndesde GitHub Actions',
    hermesLink: 'Hermes Agent en GitHub',
    sitesLink: 'los proyectos, en la p. 4',
    connected: 'Conectado con:',
    and: 'y'
  },
  ethos: {
    page: 'p. 7 · ethos',
    note: 'Son mis opiniones personales.',
    title: 'Ethos',
    work: 'Cómo trabajo',
    believe: 'En qué creo',
    theses: [
      ['Arréglalo, explícalo, devuélvelo', 'Diez años en el Genius Bar me enseñaron que una reparación no termina cuando el dispositivo funciona. Termina cuando la persona entiende qué ha pasado y sigue teniendo el control.'],
      ['Demuéstralo', 'Escribo la especificación y las pruebas antes de fiarme de un resultado, también de los míos. Una afirmación sin fuente es una suposición.'],
      ['Pasos pequeños, siempre en producción', 'Todo lo que construyo se publica el primer día y después cambia en pasos pequeños, cada uno comprobado antes de salir. Los agentes abaratan escribir código; no hacen opcional comprobarlo.'],
      ['Las máquinas trabajan, las personas juzgan', 'Los agentes pueden cargar con lo repetitivo. Decidir qué importa, y responder por ello, sigue en manos de una persona.'],
      ['Aprender en público', 'Empecé desde cero hace dos años y aprendo en repositorios públicos. Cualquiera puede comprobar qué sé hacer y cómo he llegado hasta aquí.'],
      ['Curiosidad por todo', 'Neurociencia, economía, historia, hardware: sigo todo aquello sobre lo que no puedo dejar de leer. Mis mejores ideas salen de las conexiones entre campos.'],
      ['Ser dueño de la máquina', 'El hardware, la cuenta, los datos y la elección del modelo deberían pertenecer a la persona que depende de ellos. Nada de lo que construyo está pensado para atar a nadie.'],
      ['Primero, software libre y de código abierto', 'Construyo sobre herramientas abiertas y publico mi propio código. En lo que se puede inspeccionar se puede confiar, y lo que se puede leer se puede reparar.'],
      ['e/<span class="lam">λ</span>', 'Tecnología más capaz, antes y en manos de más gente. El progreso hay que construirlo, no esperarlo.'],
      ['Las virtudes clásicas', 'Prudencia, justicia, fortaleza y templanza: las viejas virtudes mediterráneas siguen siendo la mejor lista de comprobación que conozco. Mesura en todo, también en la ambición.']
    ],
    made: '<b>Cómo está hecho:</b> construido con agentes de programación con IA a partir de mi especificación y mis pruebas. Si yo puedo, tú también: <a href="https://github.com/ponzgpt/javier-ponz-site" target="_blank" rel="noreferrer">el código está en GitHub</a>.',
    earlier: 'Versiones anteriores de esta página:',
    versions: [['v1', '/v/v1/'], ['v2', '/v/v2/es/'], ['v3', '/v/v3/es/'], ['v4', '/v/v4/'], ['v5', '/v/v5/']]
  },
  notFound: {
    line: 'Esta página no está en el cuaderno.',
    home: 'Volver a la primera página →'
  }
};

export const copy = { en, es };
