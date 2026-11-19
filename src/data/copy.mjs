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
    description: 'Javier Ponz: from hardware to software. Ten years at Apple, six and a half as a Genius, then two years learning servers, deployment and AI coding agents from zero. Two of his Hermes Agent plugins are in its official catalog.'
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
    note: 'Elder Millennial from Spain, now based near the Scottish Highlands.',
    heroLine: '<span id="hl-a">Ex-Apple</span> | <span id="hl-b">10 years fixing people\'s tech</span>. Now exploring the intersection of <span id="hl-c">ASI, Neuroscience &amp; Post-Labor Economics</span>.',
    lede: 'I came to software through hardware. I built and overclocked my own PCs, left industrial engineering unfinished, then worked at Apple until 2024, six and a half years of it as a Genius. Since then I have learned the rest from zero: servers, deployment, local models, and how to direct AI coding agents that write the code from my specs and tests. Two plugins I built for Hermes Agent are in its official catalog.',
    photoAlt: 'Pencil sketch of Javier Ponz: long curly hair, beard, aviator sunglasses, hoodie',
    email: { name: 'Email', aria: 'Email: copy address', done: 'Email address copied', sel: 'Email address selected:' },
    discord: { name: 'Discord', aria: 'Discord sudotechnoir: copy handle', done: 'Discord handle copied', sel: 'Discord handle selected:' },
    cvSmall: 'PDF',
    youtube: { small: 'soon', aria: 'YouTube, coming soon', stamp: 'work in progress' }
  },
  story: {
    page: 'p. 2 · people and their machines',
    note: 'Industrial engineering dropout. In the last two years I have moved entirely to software: full stack, AI, local inference, deployment, and some devops and networking.',
    title: 'Ten years between people and their machines',
    timeline: [
      { when: '2026', title: 'Now · building', text: 'Two of my Hermes Agent plugins were merged into the official catalog on 11 November 2026. Neuronara is in use, MDIB is being built, and every site I publish runs on a VPS I administer.', aside: 'the learning, now running on my own server' },
      { when: 'Aug 2024 – 2025', title: 'Relocation and pivot · Aberdeen, Scotland', text: 'Moved to the UK and learned, from zero, everything between a prompt and a production server. Started studying AI and full stack at Universidad Rey Juan Carlos, via Racks University.', aside: 'from zero to a production server' },
      { when: 'Feb – Aug 2023 · Feb – Aug 2024', title: 'Lead In-Store Experience · secondment, twice', text: 'Xanadú, then Parquesur, while holding the Genius role: planning, resourcing, events, and the situations no procedure covers.', aside: 'led by removing obstacles, then went back to the bench' },
      { when: 'Mar – Jun 2020', title: 'AppleCare Support Advisor · Apple', text: 'Remote, during COVID, as a volunteer. Concurrent cases under structured troubleshooting and documentation standards.', aside: 'no shop floor around me, just the case' },
      { when: 'Mar 2018 – Aug 2024', title: 'Genius · Apple Retail', text: 'Six and a half years as the store\'s technical baseline: the cases nobody else had resolved, explained to people with very different levels of understanding, and newer technicians brought onto the bench.', aside: 'colleagues used my case notes as the example to follow' },
      { when: 'Sep 2014 – Feb 2018', title: 'Specialist, then Technical Specialist · Apple Retail', text: 'Parquesur, Madrid. Diagnosis and consultative support, on the shop floor every day.', aside: 'where the habits started' },
      { when: '2008 – 2013', title: 'Before Apple · Madrid', text: 'Industrial Engineering at Universidad Politécnica de Madrid, not finished. I built and overclocked my own PCs.', aside: 'hardware first, then everyone else\'s' }
    ]
  },
  now: {
    page: 'p. 3 · building now',
    note: 'Built on Hermes Agent, the open-source harness by Nous Research.',
    title: 'Building now',
    stamp: 'work in progress',
    lede: '<b>Machines Do It Better (MDIB)</b> builds private AI agents, each fitted to one person\'s work and owned by them: account, data and choice of model.',
    spine: 'Machines do the mechanical work. People keep the judgement.',
    // three points, each with a small drawn mark (open, check, person: see the trio sketch)
    points: [
      ['Open, so you can check', 'My code is public under the MIT licence, and it runs on open tools: Hermes Agent, llama.cpp, Omarchy.'],
      ['Agent-first, with checks', 'I never worked the old way. Agents write the code; I write the spec and the tests, read the result, and keep every step small enough to undo.'],
      ['People do the people part', 'The agent types. I decide what to build, judge the result and look after whoever uses it.']
    ],
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
    neuronara: { kind: 'clinical reference · in use', text: 'A deterministic, no-LLM reference search over the standards of clinical neurophysiology, built for my partner, a clinical neurophysiologist.', lines: ['says which standard applies, and whether it is current or superseded', 'hands the sources to the AI you choose for a summary', 'every miss she reports is reproduced, fixed and pinned by an evaluation question'] },
    plw: { kind: 'source-first wiki · growing', text: 'A visual wiki on post-labor economics: what happens to income, power and meaning when machines can do most paid work.', lines: ['every number traced to primary data or a peer-reviewed paper', 'charts built from FRED and Our World in Data', 'evidence, forecasts and proposals labelled apart'] },
    asiRush: { kind: 'browser game · live', text: 'A clicker about the real race to AI: from beige PCs in a garage, through the AI winters, GPUs and transformers, to superintelligence.', lines: ['run benchmarks, buy hardware that follows history', 'race four rival labs to five milestones', 'in English and Spanish, saved in your browser'] },
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
    onX: 'follow me on X →'
  },
  stack: {
    page: 'p. 6 · my stack',
    note: 'My role in this stack: human in the loop, occasional meat proxy.',
    title: 'My stack',
    sub: 'Current workflow',
    // the workflow loop: [step, what it is, (checks that never go away)]
    flowCap: 'How I get a change into production: five steps in a loop, back to the first after each one, with the checks that never go away ticked.',
    checksKey: 'ticked: the checks that never go away',
    mine: [
      ['Specify', 'what it must do, written down'],
      ['Agent builds', 'an AI agent writes the code'],
      ['Check', 'one command runs every check', ['it must pass before any deploy']],
      ['Production', 'live early, for a real person', ['the deploy refuses uncommitted changes', 'a health check before traffic moves', 'one command rolls it back']],
      ['Iterate there', 'small steps, each one checked']
    ],
    loop: 'next step',
    lines: [
      'The usual pipeline puts a branch, a review, staging and an approval between a change and production. It exists for good reasons: many people change the same code.',
      'I work alone with a real person on the other end, so the first version goes live early and I improve it there, in small steps. The checks stay; the ceremony goes. I would not run a bank this way.'
    ],
    currentHead: 'Current stack',
    // [map node ids this fact belongs to (none when the entry has one item), the fact]
    current: [
      ['mac', 'Laptop: MacBook Pro M3 Pro, 18 GB, on macOS, my daily machine'],
      ['ws', 'Workstation: a custom build, Ryzen 9 9900X3D, RTX 5090, 64 GB RAM'],
      ['ws', 'Omarchy (Arch Linux, Hyprland) on the workstation'],
      ['ws', 'Local models with llama.cpp on the workstation'],
      ['mac ws', 'Tailscale, a private network between the laptop and the workstation'],
      ['vps', 'Server: a VPS I run, with Docker and Traefik'],
      ['mac vps', 'Deploys go from the laptop to the server'],
      ['sites', 'My sites: the live projects, served from that server'],
      ['agent', 'Cloud agent: Hermes Agent on Hermes Cloud'],
      ['plugins', 'My plugins: Psychopomp and Sabbath, public, in the official Hermes catalog'],
      ['AI coding agents: Claude Code and Codex'],
      ['TypeScript, JavaScript, Python, Astro']
    ],
    progressHead: 'In progress',
    progress: [
      ['A home lab, with Proxmox'],
      ['Local models served from the workstation to the laptop over Tailscale'],
      ['vLLM, not tried yet']
    ],
    mapCap: 'What it runs on'
  },
  // strings the map draws in script (src/scripts/notebook.js)
  map: {
    nodes: {
      agent: ['Cloud agent', 'Hermes Agent\non Hermes Cloud'],
      plugins: ['My plugins', 'Psychopomp · Sabbath'],
      mac: ['Laptop', 'daily machine\nmacOS'],
      ws: ['Workstation', 'custom build\nlocal models · llama.cpp\nOmarchy'],
      vps: ['Server', 'a VPS I run\nDocker · Traefik'],
      sites: ['My sites', 'live projects']
    },
    talksTo: 'talks to',
    runs: 'runs',
    network: 'private network\nTailscale',
    networkTree: 'private network · Tailscale',
    deploys: 'deploys',
    serves: 'serves',
    hermesLink: 'Hermes Agent on GitHub',
    pluginsLink: 'the plugins, on p. 4',
    sitesLink: 'the projects, on p. 4',
    connected: 'Connected to:'
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
      ['A person answers for it', 'Agents can carry the repetitive load. What gets built, and whether it was right, is still on a person.'],
      ['Learn in public', 'I started from zero two years ago and do the learning in public repositories. Anyone can check what I can do, and how I got here.'],
      ['Curious about everything', 'Neuroscience, economics, history, hardware: I follow whatever I can\'t stop reading about. The connections between fields are where my best ideas come from.'],
      ['Own the machine', 'The hardware, the account, the data and the choice of model should belong to the person who depends on them. Nothing I build is meant to lock anyone in.'],
      ['Free and open source first', 'I build on open tools and publish my own code. What can be inspected can be trusted, and what can be read can be repaired.'],
      ['<svg class="glyph" role="img" aria-label="e slash lambda" viewBox="0 0 56 32"><path d="M3.5 21 L15.5 21 C16 15.5 12.5 13.5 9.5 14 C5.5 14.5 3 18 3.5 22 C4 25.5 8 27.5 11 26.5 C13 26 14.5 25 15.5 23.5"/><path d="M21.5 29 L30.5 6.5"/><path d="M35 6.5 C39 7 41 10 43.5 16 C45.5 21 48 25 51 27.5"/><path d="M44 17 C42 21 39 25 35.5 27.5"/></svg>', 'More capable technology, sooner, in more people\'s hands. I would rather help build it than wait for it.'],
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
    description: 'Javier Ponz: del hardware al software. Diez años en Apple, seis y medio como Genius, y dos años aprendiendo desde cero servidores, despliegue y agentes de programación con IA. Dos de sus plugins para Hermes Agent están en su catálogo oficial.'
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
    note: 'Elder Millennial de España, ahora cerca de las Highlands escocesas.',
    heroLine: '<span id="hl-a">Ex-Apple</span> | <span id="hl-b">10 años arreglando la tecnología de la gente</span>. Ahora explorando la intersección entre <span id="hl-c">ASI, neurociencia y economía post-laboral</span>.',
    lede: 'Llegué al software desde el hardware. Monté y overclockeé mis propios ordenadores, dejé a medias Ingeniería Industrial y trabajé en Apple hasta 2024, seis años y medio de ellos como Genius. Desde entonces he aprendido el resto desde cero: servidores, despliegue, modelos locales y cómo dirigir agentes de programación con IA que escriben el código a partir de mis especificaciones y mis pruebas. Dos plugins que hice para Hermes Agent están en su catálogo oficial.',
    photoAlt: 'Retrato a lápiz de Javier Ponz: pelo largo y rizado, barba, gafas de aviador, sudadera con capucha',
    email: { name: 'Correo', aria: 'Correo: copiar la dirección', done: 'Dirección de correo copiada', sel: 'Dirección de correo seleccionada:' },
    discord: { name: 'Discord', aria: 'Discord sudotechnoir: copiar el usuario', done: 'Usuario de Discord copiado', sel: 'Usuario de Discord seleccionado:' },
    cvSmall: 'PDF, en inglés',
    youtube: { small: 'pronto', aria: 'YouTube, próximamente', stamp: 'en construcción' }
  },
  story: {
    page: 'p. 2 · las personas y sus máquinas',
    note: 'Dejé Ingeniería Industrial a medias. En los dos últimos años me he pasado por completo al software: full stack, IA, inferencia local, despliegue, y algo de devops y redes.',
    title: 'Diez años entre las personas y sus máquinas',
    timeline: [
      { when: '2026', title: 'Ahora · construyendo', text: 'Dos de mis plugins para Hermes Agent se integraron en el catálogo oficial el 11 de noviembre de 2026. Neuronara está en uso, MDIB está en construcción y cada sitio que publico corre en un VPS que administro.', aside: 'lo aprendido, ya funcionando en mi propio servidor' },
      { when: 'ago. 2024 – 2025', title: 'Mudanza y cambio de rumbo · Aberdeen, Escocia', text: 'Me mudé al Reino Unido y aprendí desde cero todo lo que hay entre un prompt y un servidor en producción. Empecé a estudiar IA y full stack en la Universidad Rey Juan Carlos, a través de Racks University.', aside: 'de cero a un servidor en producción' },
      { when: 'feb. – ago. 2023 · feb. – ago. 2024', title: 'Lead In-Store Experience · asignación temporal, dos veces', text: 'Xanadú y después Parquesur, sin dejar el puesto de Genius: planificación, recursos, eventos y las situaciones que ningún procedimiento contempla.', aside: 'lideré quitando obstáculos y después volví al taller' },
      { when: 'mar. – jun. 2020', title: 'AppleCare Support Advisor · Apple', text: 'En remoto, durante la COVID, como voluntario. Casos simultáneos con estándares estructurados de diagnóstico y documentación.', aside: 'sin tienda alrededor, solo el caso' },
      { when: 'mar. 2018 – ago. 2024', title: 'Genius · Apple Retail', text: 'Seis años y medio como referencia técnica de la tienda: los casos que nadie más había resuelto, explicados a personas con niveles de conocimiento muy distintos, y la formación de los técnicos que llegaban nuevos al taller.', aside: 'mis compañeros usaban mis notas de caso como ejemplo a seguir' },
      { when: 'sep. 2014 – feb. 2018', title: 'Specialist y después Technical Specialist · Apple Retail', text: 'Parquesur, Madrid. Diagnóstico y asesoramiento, a pie de tienda todos los días.', aside: 'donde empezaron los hábitos' },
      { when: '2008 – 2013', title: 'Antes de Apple · Madrid', text: 'Ingeniería Industrial en la Universidad Politécnica de Madrid, sin terminar. Montaba mis propios ordenadores y les hacía overclock.', aside: 'primero el hardware, después el de los demás' }
    ]
  },
  now: {
    page: 'p. 3 · construyendo ahora',
    note: 'Construido sobre Hermes Agent, el agente de código abierto de Nous Research.',
    title: 'Construyendo ahora',
    stamp: 'en construcción',
    lede: '<b>Machines Do It Better (MDIB)</b> construye agentes de IA privados, cada uno ajustado al trabajo de una persona y de su propiedad: cuenta, datos y elección del modelo.',
    spine: 'Las máquinas hacen el trabajo mecánico. Las personas conservan el criterio.',
    points: [
      ['Abierto, para que se pueda comprobar', 'Mi código es público con licencia MIT y corre sobre herramientas abiertas: Hermes Agent, llama.cpp, Omarchy.'],
      ['Primero el agente, con controles', 'Yo nunca trabajé a la antigua. Los agentes escriben el código; yo escribo la especificación y las pruebas, leo el resultado y mantengo cada paso lo bastante pequeño como para deshacerlo.'],
      ['Lo humano, para las personas', 'El agente teclea. Yo decido qué construir, juzgo el resultado y cuido de quien lo usa.']
    ],
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
    neuronara: { kind: 'referencia clínica · en uso', text: 'Un buscador de referencia determinista, sin LLM, sobre los estándares de la neurofisiología clínica, hecho para mi pareja, neurofisióloga clínica.', lines: ['dice qué estándar se aplica y si está vigente o sustituido', 'pasa las fuentes a la IA que elijas para un resumen', 'cada fallo que me comunica se reproduce, se corrige y se fija con una pregunta de evaluación'] },
    plw: { kind: 'wiki con fuentes · en crecimiento', text: 'Una wiki visual sobre economía post-laboral: qué pasa con los ingresos, el poder y el sentido cuando las máquinas pueden hacer casi todo el trabajo remunerado.', lines: ['cada cifra remite a datos primarios o a un artículo revisado por pares', 'gráficos con datos de FRED y Our World in Data', 'evidencia, previsiones y propuestas, etiquetadas por separado'] },
    asiRush: { kind: 'juego de navegador · publicado', text: 'Un clicker sobre la carrera real hacia la IA: de los PC beis en un garaje, pasando por los inviernos de la IA, las GPU y los transformers, hasta la superinteligencia.', lines: ['ejecuta benchmarks y compra hardware que sigue la historia', 'compite con cuatro laboratorios rivales por cinco hitos', 'en inglés y en español, guardado en tu navegador'] },
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
    onX: 'sígueme en X →'
  },
  stack: {
    page: 'p. 6 · mi stack',
    note: 'Mi papel en este stack: el humano en el bucle y, a ratos, proxy de carne y hueso.',
    title: 'Mi stack',
    sub: 'Flujo de trabajo actual',
    flowCap: 'Cómo llevo un cambio a producción: cinco pasos en bucle, de vuelta al primero después de cada uno, con marcados los controles que nunca desaparecen.',
    checksKey: 'marcados: los controles que nunca desaparecen',
    mine: [
      ['Especificar', 'lo que debe hacer, por escrito'],
      ['El agente construye', 'un agente de IA escribe el código'],
      ['Comprobar', 'un solo comando ejecuta todas las comprobaciones', ['tiene que pasar antes de cualquier despliegue']],
      ['Producción', 'en marcha pronto, para una persona real', ['el despliegue rechaza cambios sin confirmar', 'una comprobación de salud antes de mover el tráfico', 'un solo comando lo revierte']],
      ['Iterar ahí', 'pasos pequeños, cada uno comprobado']
    ],
    loop: 'siguiente paso',
    lines: [
      'El flujo habitual pone una rama, una revisión, un entorno de preproducción y una aprobación entre un cambio y producción. Existe por buenas razones: muchas personas tocan el mismo código.',
      'Yo trabajo solo y con una persona real al otro lado, así que la primera versión sale pronto a producción y la mejoro ahí, en pasos pequeños. Los controles se quedan; la ceremonia sobra. Yo no llevaría así un banco.'
    ],
    currentHead: 'Stack actual',
    current: [
      ['mac', 'Portátil: MacBook Pro M3 Pro, 18 GB, con macOS, mi máquina de diario'],
      ['ws', 'Workstation: hecha a medida, Ryzen 9 9900X3D, RTX 5090, 64 GB de RAM'],
      ['ws', 'Omarchy (Arch Linux, Hyprland) en la workstation'],
      ['ws', 'Modelos locales con llama.cpp en la workstation'],
      ['mac ws', 'Tailscale, una red privada entre el portátil y la workstation'],
      ['vps', 'Servidor: un VPS que administro, con Docker y Traefik'],
      ['mac vps', 'Los despliegues van del portátil al servidor'],
      ['sites', 'Mis sitios: los proyectos publicados, servidos desde ese servidor'],
      ['agent', 'Agente en la nube: Hermes Agent en Hermes Cloud'],
      ['plugins', 'Mis plugins: Psychopomp y Sabbath, públicos, en el catálogo oficial de Hermes'],
      ['Agentes de programación con IA: Claude Code y Codex'],
      ['TypeScript, JavaScript, Python, Astro']
    ],
    progressHead: 'En curso',
    progress: [
      ['Un homelab, con Proxmox'],
      ['Modelos locales servidos desde la workstation al portátil por Tailscale'],
      ['vLLM, aún sin probar']
    ],
    mapCap: 'Dónde corre'
  },
  map: {
    nodes: {
      agent: ['Agente en la nube', 'Hermes Agent\nen Hermes Cloud'],
      plugins: ['Mis plugins', 'Psychopomp · Sabbath'],
      mac: ['Portátil', 'máquina de diario\nmacOS'],
      ws: ['Workstation', 'hecha a medida\nmodelos locales · llama.cpp\nOmarchy'],
      vps: ['Servidor', 'un VPS que administro\nDocker · Traefik'],
      sites: ['Mis sitios', 'proyectos publicados']
    },
    talksTo: 'habla con',
    runs: 'ejecuta',
    network: 'red privada\nTailscale',
    networkTree: 'red privada · Tailscale',
    deploys: 'despliega',
    serves: 'sirve',
    hermesLink: 'Hermes Agent en GitHub',
    pluginsLink: 'los plugins, en la p. 4',
    sitesLink: 'los proyectos, en la p. 4',
    connected: 'Conectado con:'
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
      ['Una persona responde de ello', 'Los agentes pueden cargar con lo repetitivo. Qué se construye, y si estuvo bien, sigue siendo cosa de una persona.'],
      ['Aprender en público', 'Empecé desde cero hace dos años y aprendo en repositorios públicos. Cualquiera puede comprobar qué sé hacer y cómo he llegado hasta aquí.'],
      ['Curiosidad por todo', 'Neurociencia, economía, historia, hardware: sigo todo aquello sobre lo que no puedo dejar de leer. Mis mejores ideas salen de las conexiones entre campos.'],
      ['Ser dueño de la máquina', 'El hardware, la cuenta, los datos y la elección del modelo deberían pertenecer a la persona que depende de ellos. Nada de lo que construyo está pensado para atar a nadie.'],
      ['Primero, software libre y de código abierto', 'Construyo sobre herramientas abiertas y publico mi propio código. En lo que se puede inspeccionar se puede confiar, y lo que se puede leer se puede reparar.'],
      ['<svg class="glyph" role="img" aria-label="e barra lambda" viewBox="0 0 56 32"><path d="M3.5 21 L15.5 21 C16 15.5 12.5 13.5 9.5 14 C5.5 14.5 3 18 3.5 22 C4 25.5 8 27.5 11 26.5 C13 26 14.5 25 15.5 23.5"/><path d="M21.5 29 L30.5 6.5"/><path d="M35 6.5 C39 7 41 10 43.5 16 C45.5 21 48 25 51 27.5"/><path d="M44 17 C42 21 39 25 35.5 27.5"/></svg>', 'Tecnología más capaz, antes y en manos de más gente. Prefiero ayudar a construirla que esperarla.'],
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
