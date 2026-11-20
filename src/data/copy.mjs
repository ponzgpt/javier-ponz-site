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
  cv: '/javier-ponz-cv.pdf',
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
    page: 'p. 2 · hardware to agents',
    note: 'Industrial Engineering dropout. Hardware enthusiast. The last two years fully immersed in AI-assisted development, local inference, devops basics, networking…',
    title: 'From the hardware trenches to agentic engineering',
    // four acts, newest first: a roman numeral and era, a short story, two or three typed examples, a handwritten aside
    timeline: [
      { act: 'IV', when: 'now · since 2024', title: 'Relocation and a full pivot · Aberdeen', text: 'In August 2024 I moved to Aberdeen, Scotland, and started on AI and software from zero, studying at Universidad Rey Juan Carlos via Racks University. Now I build my own things and run them myself. What I do sits where explaining and building meet: support engineering and forward-deployed work.', lines: ['two Hermes Agent plugins merged into the official catalog on 11 November 2026', 'Neuronara in use, the Post-Labor Wiki growing, MDIB in progress', 'every site I publish runs on a VPS I administer'], aside: 'from zero to a production server' },
      { act: 'III', when: '2023 to 2024', title: 'Apple, the leadership years', text: 'Two secondments of about seven months as Lead In-Store Experience, at Xanadú and then Parquesur, while holding the Genius role. The Lead works alongside the management team as the link between them and the floor, and runs the store from opening to close.', lines: ['staffing and team breaks, customer flow, logistics, and what no procedure covers', 'trained technical and sales staff, ran weekly cross-team alignment, co-owned scheduling optimisation', 'the written review after the first: high visibility with the Support team and store leadership'], aside: 'led by removing obstacles, then went back to the bench' },
      { act: 'II', when: '2018 to 2023', title: 'Apple, the technical years', text: 'Genius from March 2018, after passing the selection that February: the store\'s technical baseline, taking the faults nobody else had resolved and explaining them to people with very different levels of understanding. In spring 2020, when COVID-19 closed the stores in Spain, I volunteered for remote AppleCare support.', lines: ['diagnosed and repaired Mac, iPhone and iPad; Apple-certified ACMT and ACiT', 'mentored newer technicians; proposed repair-room fixes and linked Support with the stockroom on dead-on-arrival parts', 'AppleCare, 2020: Tier 1 by phone, email and chat, several cases at once, escalations briefed to Tier 2'], aside: 'colleagues used my case notes as the example to follow' },
      { act: 'I', when: '2008 to 2018', title: 'Engineering, hardware and the first Apple years', text: 'Industrial Engineering (electronics and automation) at Universidad Politécnica de Madrid, 80 ECTS, not finished. On the side, hardware as a hobby: building my own PCs, watercooling them, overclocking them. In September 2014 I joined Apple Retail at Parquesur, Madrid, as a Specialist, then Technical Specialist.', lines: ['consultative selling: finding the product each person actually needed', 'Technical Specialist: diagnosis and consultative support on the shop floor every day', 'colleagues brought me their procedure questions and ambiguous cases every day'], aside: 'hardware first, then everyone else\'s' }
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
    // one line each, in the pen
    note: ['Meat proxy.', 'Human-in-the-loop.', 'Biological API.'],
    title: 'What I can do',
    sub: '…and what I don\'t know yet',
    // one row per group; the last row is drawn with an empty box (learning next)
    rows: [
      { group: 'Support and explaining', items: ['diagnosing and repairing Mac, iPhone and iPad', 'explaining technical problems to non-technical people', 'documenting and escalating cases', 'mentoring newer technicians', 'leading a store floor'] },
      { group: 'AI agents', items: ['Hermes Agent', 'MCP servers', 'skills and scheduled jobs', 'local models with llama.cpp, Ollama and LM Studio', 'OpenRouter'] },
      { group: 'Building', items: ['vibe coding with AI coding agents (Claude Code, Codex)', 'TypeScript, JavaScript, Python, Astro', 'Git and GitHub'] },
      { group: 'Infrastructure', items: ['Linux (Arch, Omarchy) and macOS', 'Docker Swarm, Dokploy, Traefik, nginx, Let\'s Encrypt', 'GitHub Actions', 'Tailscale', 'a VPS I administer'] },
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
    description: 'Javier Ponz: del hardware al software. Diez años en Apple, seis y medio de ellos como Genius, y después dos años aprendiendo desde cero servidores, despliegues y agentes de programación con IA. Dos de sus plugins para Hermes Agent están en el catálogo oficial.'
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
    note: 'Elder Millennial de España. Ahora vivo cerca de las Highlands escocesas.',
    heroLine: '<span id="hl-a">Ex-Apple</span> | <span id="hl-b">10 años arreglando los aparatos de la gente</span>. Ahora exploro el cruce entre <span id="hl-c">ASI, neurociencia y economía post-laboral</span>.',
    lede: 'No soy programador. Soy la persona que está entre un usuario confundido y un sistema que no hace lo que debería. Me pasé diez años explicando tecnología que no funcionaba a gente que tenía un mal día, y los dos últimos aprendiendo a construirla desde cero.',
    photoAlt: 'Retrato a lápiz de Javier Ponz: pelo largo y rizado, barba, gafas de aviador y sudadera con capucha',
    email: { name: 'Correo', aria: 'Correo: copiar la dirección', done: 'Dirección de correo copiada', sel: 'Dirección de correo seleccionada:' },
    discord: { name: 'Discord', aria: 'Discord sudotechnoir: copiar el nombre de usuario', done: 'Nombre de usuario de Discord copiado', sel: 'Nombre de usuario de Discord seleccionado:' },
    cvSmall: 'PDF, en inglés',
    youtube: { small: 'pronto', aria: 'YouTube, próximamente', stamp: 'en construcción' }
  },
  story: {
    page: 'p. 2 · del hardware a los agentes',
    note: 'Dejé Ingeniería Industrial a medias. Aficionado al hardware. Los dos últimos años, metido de lleno en desarrollo asistido por IA, inferencia local, nociones de devops, redes…',
    title: 'De las trincheras del hardware a la ingeniería con agentes',
    timeline: [
      { act: 'IV', when: 'ahora · desde 2024', title: 'Mudanza y giro total · Aberdeen', text: 'En agosto de 2024 me mudé a Aberdeen, en Escocia, y empecé con la IA y el software desde cero, estudiando en la Universidad Rey Juan Carlos a través de Racks University. Ahora construyo mis propias cosas y las mantengo yo. Lo mío está donde se cruzan explicar y construir: ingeniería de soporte y forward-deployed engineering.', lines: ['dos plugins de Hermes Agent integrados en el catálogo oficial el 11 de noviembre de 2026', 'Neuronara, en uso; la Post-Labor Wiki, creciendo; MDIB, en marcha', 'todo lo que publico corre en un VPS que administro yo'], aside: 'de cero a un servidor en producción' },
      { act: 'III', when: '2023 a 2024', title: 'Apple, los años de liderazgo', text: 'Dos asignaciones temporales de unos siete meses como Lead In-Store Experience, primero en Xanadú y después en Parquesur, sin dejar el puesto de Genius. El Lead trabaja codo con codo con el equipo de dirección, hace de puente entre ellos y la planta y lleva la tienda de la apertura al cierre.', lines: ['turnos y descansos del equipo, flujo de clientes, logística y lo que ningún procedimiento contempla', 'formé a personal técnico y de ventas, coordiné a los equipos cada semana y compartí la optimización de horarios', 'la evaluación escrita tras la primera: mucha visibilidad ante el equipo de Support y la dirección de la tienda'], aside: 'lideré quitando obstáculos y después volví al taller' },
      { act: 'II', when: '2018 a 2023', title: 'Apple, los años técnicos', text: 'Genius desde marzo de 2018, tras pasar la selección en febrero: la referencia técnica de la tienda: me quedaba con las averías que nadie había resuelto y se las explicaba a personas con niveles de conocimiento muy distintos. En la primavera de 2020, con las tiendas de España cerradas por la COVID, me presenté voluntario al soporte remoto de AppleCare.', lines: ['diagnóstico y reparación de Mac, iPhone y iPad; certificaciones ACMT y ACiT de Apple', 'mentor de los técnicos nuevos; propuse mejoras en la sala de reparaciones y conecté Support con el almacén para las piezas que llegaban defectuosas', 'AppleCare, 2020: nivel 1 por teléfono, correo y chat, varios casos a la vez, y escalados al nivel 2 con el caso ya documentado'], aside: 'mis compañeros usaban mis notas de caso como ejemplo a seguir' },
      { act: 'I', when: '2008 a 2018', title: 'Ingeniería, hardware y los primeros años en Apple', text: 'Ingeniería Industrial (Electrónica y Automática) en la Universidad Politécnica de Madrid: 80 ECTS, sin terminar. Por mi cuenta, el hardware como afición: montarme los PC, ponerles refrigeración líquida, hacerles overclock. En septiembre de 2014 entré en Apple Retail, en Parquesur (Madrid), como Specialist y después Technical Specialist.', lines: ['venta consultiva: dar con el producto que de verdad necesitaba cada persona', 'Technical Specialist: diagnóstico y asesoramiento a pie de tienda, todos los días', 'mis compañeros me traían cada día sus dudas de procedimiento y los casos ambiguos'], aside: 'primero el hardware, después el de los demás' }
    ]
  },
  now: {
    page: 'p. 3 · lo que construyo',
    note: 'Está hecho sobre Hermes Agent, el agente de código abierto de Nous Research.',
    title: 'Lo que construyo ahora',
    stamp: 'en construcción',
    lede: '<b>Machines Do It Better (MDIB)</b> hace agentes de IA privados, cada uno a medida del trabajo de una persona y suyo: la cuenta, los datos y el modelo que elija.',
    spine: 'Las máquinas hacen el trabajo mecánico. El criterio lo ponen las personas.',
    points: [
      ['La máquina es tuya', 'Tu agente, tus datos, el modelo que tú elijas, todo a tu nombre. Nadie puede atarte, porque no hay nada suyo que quedarse.'],
      ['IA a medida, para todos', 'La tecnología tiene que adaptarse a ti, no al revés. Empiezo por los profesionales que manejan información confidencial de otros, porque son los que más tienen que perder. La idea es un agente a la medida de cualquiera.'],
      ['Preparados para un mundo <a href="https://post-labor-wiki.technoir.cloud" target="_blank" rel="noreferrer">post-laboral</a>', 'Creo que las máquinas harán la mayor parte del trabajo remunerado, y antes de lo que la mayoría tiene previsto. Prefiero ayudar a la gente a prepararse con tiempo, con agentes que sean suyos, a que les pille desprevenidos.']
    ],
    newsletter: 'la newsletter →',
    after: 'Además, ahora mismo tengo otras cosas en el taller.'
  },
  work: {
    page: 'p. 4 · otros proyectos',
    note: 'Hermes Agent lo desarrolla Nous Research. Lo mío es usarlo y hacerle plugins.',
    title: 'Otros proyectos en marcha',
    stub: 'TICKETS · PR #152559 · #152560',
    kind: 'Plugins para Hermes Agent',
    stamp: 'integrados · en el catálogo',
    h3: 'Psychopomp y Sabbath',
    fact: 'Dos plugins, los dos integrados en el catálogo oficial de plugins de Hermes el 11 de noviembre de 2026 tras pasar la revisión del mantenedor, con 31 tests entre ambos.',
    psychopomp: 'Te ayuda a escribir cada semana una página de tu vida y se la hace llegar a la gente que quieres, pero solo cuando tu testigo envía un código.',
    sabbath: 'Una vez a la semana Hermes da las buenas noches, pausa sus tareas programadas y aparca el trabajo; luego manda un solo resumen, sin agobios.',
    tests: 'tests',
    catalogPr: 'PR del catálogo',
    stripHead: 'La revisión de las dos PR, en el mismo reloj (UTC, según el historial público de cada PR):',
    stripAria: 'Abiertas el 10 de noviembre de 2026 a las 10:05; el mantenedor las revisó 14 horas después; las correcciones que pidió se entregaron 12 horas más tarde, y se integraron en el catálogo 10 horas después, el 11 de noviembre a las 22:15.',
    review: [
      ['10 nov. · 10:05', 'PR abiertas'],
      ['+14 h', 'revisadas por\nel mantenedor'],
      ['+12 h', 'correcciones\nentregadas'],
      ['+10 h', 'integradas · 11 nov.\n22:15 UTC']
    ],
    source: 'código',
    neuronara: { kind: 'referencia clínica · en uso', text: 'Un buscador de referencias determinista, sin LLM, sobre los estándares de neurofisiología clínica. Lo hice para mi pareja, que es neurofisióloga clínica.', lines: ['dice qué estándar se aplica y si sigue vigente o lo han sustituido', 'pasa las fuentes a la IA que elijas para que las resuma', 'cada fallo que me cuenta lo reproduzco, lo corrijo y lo fijo con una pregunta de evaluación'] },
    plw: { kind: 'wiki con fuentes · en crecimiento', text: 'Una wiki visual de economía post-laboral: qué pasa con los ingresos, el poder y el sentido cuando las máquinas pueden hacer casi todo el trabajo remunerado.', lines: ['cada cifra sale de datos primarios o de un artículo revisado por pares', 'gráficos hechos con datos de FRED y Our World in Data', 'evidencias, previsiones y propuestas, cada cosa con su etiqueta'] },
    asiRush: { kind: 'juego de navegador · ya se puede jugar', text: 'Un clicker sobre la carrera real hacia la IA: de los PC beis en un garaje a la superinteligencia, pasando por los inviernos de la IA, las GPU y los transformers.', lines: ['pasa benchmarks y compra hardware fiel a la historia', 'compite con cuatro laboratorios rivales por cinco hitos', 'en inglés y en español; la partida se guarda en tu navegador'] },
    more: 'Tengo más proyectos en GitHub:'
  },
  notes: {
    page: 'p. 5 · notas del taller',
    title: 'Notas del taller',
    lede: 'Escribo sobre ASI, neurociencia, economía post-laboral y cualquier otra cosa sobre la que no paro de leer: textos largos en la newsletter y versiones cortas en X y LinkedIn.',
    caption: 'Machines Do It Better, la newsletter: 144 números, de marzo a diciembre de 2025.',
    rows: [
      { text: 'Y no fue casualidad.', when: 'dic. 2025' },
      { text: 'El fin de «cuanto más grande, mejor» y otro lanzamiento abierto de DeepSeek.', when: 'dic. 2025' },
      { text: 'Moonshot saca Kimi K2 en código abierto, dos días después del «nanosegundos por detrás» de Jensen Huang.', when: 'nov. 2025' },
      { text: 'Centros de datos en órbita, una apuesta milmillonaria contra la burbuja de la IA y Apple tirando de Google para Siri.', when: 'nov. 2025' },
      { text: 'La pelea silenciosa por el cómputo: OpenAI, Amazon y el feudalismo del hardware.', when: 'nov. 2025' }
    ],
    archive: 'archivo de la newsletter →',
    subscribe: 'suscríbete →',
    onX: 'sígueme en X →'
  },
  skills: {
    page: 'p. 6 · lo que sé hacer',
    note: ['Proxy de carne y hueso.', 'Humano en el bucle.', 'API biológica.'],
    title: 'Lo que sé hacer',
    sub: '…y lo que todavía no sé',
    rows: [
      { group: 'Soporte y explicación', items: ['diagnóstico y reparación de Mac, iPhone y iPad', 'explicar problemas técnicos a personas sin perfil técnico', 'documentar y escalar casos', 'hacer de mentor de los técnicos nuevos', 'dirigir la planta de una tienda'] },
      { group: 'Agentes de IA', items: ['Hermes Agent', 'servidores MCP', 'skills y tareas programadas', 'modelos locales con llama.cpp, Ollama y LM Studio', 'OpenRouter'] },
      { group: 'Desarrollo', items: ['vibe coding con agentes de programación con IA (Claude Code, Codex)', 'TypeScript, JavaScript, Python, Astro', 'Git y GitHub'] },
      { group: 'Infraestructura', items: ['Linux (Arch, Omarchy) y macOS', 'Docker Swarm, Dokploy, Traefik, nginx, Let\'s Encrypt', 'GitHub Actions', 'Tailscale', 'un VPS que administro'] },
      { group: 'Idiomas', items: ['español (nativo)', 'inglés (competencia profesional)'] },
      { group: 'Lo siguiente que aprendo', items: ['un homelab con Proxmox', 'vLLM'] }
    ]
  },
  ethos: {
    page: 'p. 7 · ethos',
    note: 'Son opiniones mías.',
    title: 'Ethos',
    work: 'Cómo trabajo',
    theses: [
      ['Puedes ponerte a hacer cosas', 'Steve Jobs dijo que puedes construir «tus propias cosas para que otras personas las usen». Hoy la frase circula como «you can just do things». Hace dos años no sabía programar; empecé igualmente, rompí mucho y me quedé con lo que funcionaba.'],
      ['El código abierto tiene que ganar', 'Construyo con herramientas abiertas y publico mi código. Lo que se puede inspeccionar es de fiar, y lo que es tuyo no te lo pueden quitar: tu hardware, tu cuenta, tus datos, el modelo que elijas.'],
      ['El lenguaje de programación de hoy es el humano', 'Cada lenguaje ha sido una abstracción sobre el anterior: el ensamblador sobre el microcódigo, C sobre el ensamblador. Rick Rubin dice que el vibe coding es «el punk rock del software»: nadie necesita permiso para hacer algo. Ahora, encima de todo, está el inglés, o el español, y los agentes lo bajan hasta la máquina. Prefiero subirme a eso que pelearme con ello.'],
      ['<svg class="glyph" role="img" aria-label="e barra lambda" viewBox="0 0 56 32"><path d="M3.5 21 L15.5 21 C16 15.5 12.5 13.5 9.5 14 C5.5 14.5 3 18 3.5 22 C4 25.5 8 27.5 11 26.5 C13 26 14.5 25 15.5 23.5"/><path d="M21.5 29 L30.5 6.5"/><path d="M35 6.5 C39 7 41 10 43.5 16 C45.5 21 48 25 51 27.5"/><path d="M44 17 C42 21 39 25 35.5 27.5"/></svg>', 'Tecnología más capaz, antes y en manos de más gente. Prefiero ayudar a construirla que quedarme esperándola.'],
      ['El polímata gana al experto', 'Apuesto por saber de muchas cosas. Los agentes te dan conocimiento especializado cuando lo necesitas; lo que sigue escaseando es saber qué pedir y cómo se conectan los campos. Leo de neurociencia, economía, historia y hardware, y la mayoría de mis ideas salen de donde se tocan.']
    ],
    made: '<b>Cómo está hecha:</b> a partir de instrucciones en inglés llano, con el stack y el flujo de trabajo de IA que uso ahora. Si yo puedo, tú también: <a href="https://github.com/ponzgpt/javier-ponz-site" target="_blank" rel="noreferrer">el código está en GitHub</a>.',
    earlier: 'Versiones anteriores de esta página:',
    versions: [['v1', '/v/v1/'], ['v2', '/v/v2/es/'], ['v3', '/v/v3/es/'], ['v4', '/v/v4/'], ['v5', '/v/v5/']]
  },
  notFound: {
    line: 'Esta página no está en el cuaderno.',
    home: 'Volver a la primera página →'
  }
};

export const copy = { en, es };
