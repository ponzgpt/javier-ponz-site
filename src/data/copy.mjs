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
    lede: 'I\'m not a programmer. I\'m the person who sits between a confused user and a system that isn\'t doing what it should. I spent a decade explaining broken technology to people having a bad day; then the last two years learning how to build it, from zero.',
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
    // three points, each with a small drawn mark (padlock, tape measure, sunrise: see the trio sketch)
    points: [
      ['Own the machine', 'Your agent, your data, your choice of model, all in your name. Nobody can lock you in, because nothing is theirs to keep.'],
      ['Bespoke AI, for everyone', 'Technology should mould to you, not the other way round. I start with professionals who handle other people\'s confidential information, because they have the most to lose. The aim is an agent fitted to anyone.'],
      ['Ready for a <a href="https://post-labor-wiki.technoir.cloud" target="_blank" rel="noreferrer">post-labour</a> world', 'I expect machines to do most paid work, and sooner than most people plan for. I would rather help people prepare early, with agents they own, than meet it unprepared.']
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
  skills: {
    page: 'p. 6 · what I can do',
    note: 'My role in all of it: human in the loop, occasional meat proxy.',
    title: 'What I can do',
    sub: 'Skills, with proof',
    proof: 'Proof:',
    // one row per group, proof only where there is one; the last row is drawn with an empty box (learning next)
    rows: [
      { group: 'Support and explaining', items: ['diagnosing and repairing Mac, iPhone and iPad', 'explaining technical problems to non-technical people', 'documenting and escalating cases', 'mentoring newer technicians', 'leading a store floor'], proof: 'Apple, 2014 to 2024 (<a href="#story">p. 2</a>)' },
      { group: 'AI agents', items: ['Hermes Agent', 'MCP servers', 'skills and scheduled jobs', 'local models with llama.cpp, Ollama and LM Studio', 'OpenRouter'], proof: 'two plugins in the official Hermes catalog (<a href="#work">p. 4</a>)' },
      { group: 'Building', items: ['vibe coding with AI coding agents (Claude Code, Codex)', 'TypeScript, JavaScript, Python, Astro', 'Git and GitHub'], proof: '<a href="https://github.com/ponzgpt" target="_blank" rel="noreferrer">public repositories</a>' },
      { group: 'Infrastructure', items: ['Linux (Arch, Omarchy) and macOS', 'Docker Swarm, Dokploy, Traefik, nginx, Let\'s Encrypt', 'GitHub Actions', 'Tailscale', 'a VPS I administer'], proof: 'everything on <a href="#work">p. 4</a> runs on it' },
      { group: 'Languages', items: ['Spanish (native)', 'English (professional working proficiency)'] },
      { group: 'Learning next', items: ['a Proxmox home lab', 'vLLM'] }
    ]
  },
  ethos: {
    page: 'p. 7 · ethos',
    note: 'These are my own views.',
    title: 'Ethos',
    work: 'How I work',
    theses: [
      ['You can just do things', 'Steve Jobs said you can "build your own things that other people can use". Today the line goes around as "you can just do things". I could not program two years ago; I started anyway, broke a lot and kept what worked.'],
      ['Open source must win', 'I build on open tools and publish my own code. What can be inspected can be trusted, and what you own can\'t be taken away: your hardware, your account, your data, your choice of model.'],
      ['English is today\'s programming language', 'Each language was an abstraction over the one below it: assembly over microcode, C over assembly. Rick Rubin calls vibe coding "the punk rock of software": nobody needs a licence to make something. Plain English, or Spanish, now sits on top, and agents carry it down. I would rather embrace that than argue with it.'],
      ['<svg class="glyph" role="img" aria-label="e slash lambda" viewBox="0 0 56 32"><path d="M3.5 21 L15.5 21 C16 15.5 12.5 13.5 9.5 14 C5.5 14.5 3 18 3.5 22 C4 25.5 8 27.5 11 26.5 C13 26 14.5 25 15.5 23.5"/><path d="M21.5 29 L30.5 6.5"/><path d="M35 6.5 C39 7 41 10 43.5 16 C45.5 21 48 25 51 27.5"/><path d="M44 17 C42 21 39 25 35.5 27.5"/></svg>', 'More capable technology, sooner, in more people\'s hands. I would rather help build it than wait for it.'],
      ['The polymath beats the expert', 'I bet on range. Agents can supply narrow expertise on demand; what stays scarce is knowing what to ask for and how fields connect. I read across neuroscience, economics, history and hardware, and most of my ideas come from the joins.']
    ],
    made: '<b>How this was made:</b> built from plain English through my current AI stack and workflow. If I can, so can you: <a href="https://github.com/ponzgpt/javier-ponz-site" target="_blank" rel="noreferrer">the source is on GitHub</a>.',
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
    lede: 'No soy programador. Soy la persona que se sitúa entre un usuario confundido y un sistema que no hace lo que debería. Pasé una década explicando tecnología rota a gente que tenía un mal día; después, los dos últimos años aprendiendo a construirla, desde cero.',
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
      ['Ser dueño de la máquina', 'Tu agente, tus datos, tu elección de modelo, todo a tu nombre. Nadie puede atarte, porque nada es suyo para quedárselo.'],
      ['IA a medida, para todos', 'La tecnología debería adaptarse a ti, y no al revés. Empiezo por los profesionales que manejan información confidencial de otras personas, porque son quienes más tienen que perder. El objetivo es un agente a la medida de cualquiera.'],
      ['Preparados para un mundo <a href="https://post-labor-wiki.technoir.cloud" target="_blank" rel="noreferrer">post-laboral</a>', 'Creo que las máquinas harán la mayor parte del trabajo remunerado, y antes de lo que casi nadie prevé. Prefiero ayudar a la gente a prepararse pronto, con agentes que sean suyos, que encontrarnos con ello sin estar preparados.']
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
  skills: {
    page: 'p. 6 · lo que sé hacer',
    note: 'Mi papel en todo esto: el humano en el bucle y, a ratos, proxy de carne y hueso.',
    title: 'Lo que sé hacer',
    sub: 'Con pruebas',
    proof: 'Prueba:',
    rows: [
      { group: 'Soporte y explicación', items: ['diagnóstico y reparación de Mac, iPhone y iPad', 'explicar problemas técnicos a personas sin perfil técnico', 'documentar y escalar casos', 'formar a los técnicos nuevos', 'dirigir la planta de una tienda'], proof: 'Apple, de 2014 a 2024 (<a href="#story">p. 2</a>)' },
      { group: 'Agentes de IA', items: ['Hermes Agent', 'servidores MCP', 'skills y tareas programadas', 'modelos locales con llama.cpp, Ollama y LM Studio', 'OpenRouter'], proof: 'dos plugins en el catálogo oficial de Hermes (<a href="#work">p. 4</a>)' },
      { group: 'Desarrollo', items: ['vibe coding con agentes de programación con IA (Claude Code, Codex)', 'TypeScript, JavaScript, Python, Astro', 'Git y GitHub'], proof: '<a href="https://github.com/ponzgpt" target="_blank" rel="noreferrer">repositorios públicos</a>' },
      { group: 'Infraestructura', items: ['Linux (Arch, Omarchy) y macOS', 'Docker Swarm, Dokploy, Traefik, nginx, Let\'s Encrypt', 'GitHub Actions', 'Tailscale', 'un VPS que administro'], proof: 'todo lo de la <a href="#work">p. 4</a> corre en él' },
      { group: 'Idiomas', items: ['español (nativo)', 'inglés (competencia profesional)'] },
      { group: 'Lo siguiente que aprendo', items: ['un homelab con Proxmox', 'vLLM'] }
    ]
  },
  ethos: {
    page: 'p. 7 · ethos',
    note: 'Son mis opiniones personales.',
    title: 'Ethos',
    work: 'Cómo trabajo',
    theses: [
      ['Puedes simplemente hacer cosas', 'Steve Jobs dijo que puedes construir "tus propias cosas para que otras personas las usen". Hoy la idea circula como "you can just do things". Hace dos años no sabía programar; empecé igual, rompí mucho y me quedé con lo que funcionó.'],
      ['El código abierto tiene que ganar', 'Construyo sobre herramientas abiertas y publico mi propio código. En lo que se puede inspeccionar se puede confiar, y lo que es tuyo no te lo pueden quitar: tu hardware, tu cuenta, tus datos, tu elección de modelo.'],
      ['El lenguaje de programación de hoy es el humano', 'Cada lenguaje fue una abstracción sobre el de abajo: el ensamblador sobre el microcódigo, C sobre el ensamblador. Rick Rubin llama al vibe coding "el punk rock del software": nadie necesita una licencia para hacer algo. Ahora el inglés, o el español, está arriba del todo y los agentes lo bajan hasta la máquina. Prefiero abrazarlo antes que discutirlo.'],
      ['<svg class="glyph" role="img" aria-label="e barra lambda" viewBox="0 0 56 32"><path d="M3.5 21 L15.5 21 C16 15.5 12.5 13.5 9.5 14 C5.5 14.5 3 18 3.5 22 C4 25.5 8 27.5 11 26.5 C13 26 14.5 25 15.5 23.5"/><path d="M21.5 29 L30.5 6.5"/><path d="M35 6.5 C39 7 41 10 43.5 16 C45.5 21 48 25 51 27.5"/><path d="M44 17 C42 21 39 25 35.5 27.5"/></svg>', 'Tecnología más capaz, antes y en manos de más gente. Prefiero ayudar a construirla que esperarla.'],
      ['El polímata gana al experto', 'Apuesto por la amplitud. Los agentes pueden aportar conocimiento especializado cuando haga falta; lo que sigue escaseando es saber qué pedir y cómo se conectan los campos. Leo sobre neurociencia, economía, historia y hardware, y la mayoría de mis ideas salen de los puntos de unión.']
    ],
    made: '<b>Cómo está hecho:</b> construido desde inglés llano con mi stack y mi flujo de trabajo actuales con IA. Si yo puedo, tú también: <a href="https://github.com/ponzgpt/javier-ponz-site" target="_blank" rel="noreferrer">el código está en GitHub</a>.',
    earlier: 'Versiones anteriores de esta página:',
    versions: [['v1', '/v/v1/'], ['v2', '/v/v2/es/'], ['v3', '/v/v3/es/'], ['v4', '/v/v4/'], ['v5', '/v/v5/']]
  },
  notFound: {
    line: 'Esta página no está en el cuaderno.',
    home: 'Volver a la primera página →'
  }
};

export const copy = { en, es };
