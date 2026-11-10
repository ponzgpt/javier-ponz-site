// Page prose, one { en, es } pair per section. Each language is a hero
// (kicker / heading / underlined word / standfirst) and a list of sections —
// a label, a wrapper class, and its inner HTML. Consumed by the components
// in src/components/sections/, which read pages.<name>[lang].
//
// Data-driven sections (the CV rows, the project cards, the timeline, the
// skill groups, the achievements) are not here: those live with their data
// in cv.mjs and site.ts.
//
// Section order is Home → About → Experience → Projects → Skills →
// Achievements → Newsletter → Contact, and the kickers number themselves
// 01…07 from About down. Change the order in HomePage.astro and the kickers
// here together, or the numbering lies.

const P = (...paras) => paras.map((t) => `<p>${t}</p>`).join('\n');

export const pages = {
  /* ─────────────────────────────────────────────────────────── index ── */
  home: {
    en: {
      title: 'Javier Ponz · ex-Apple Genius, open agents, things that ship',
      desc: "Hi! I'm Javier, ex-Apple Genius. Ten years fixing people's tech; now I help people and their AI agents get unstuck. Hermes user, plugin builder, vibe coder.",
      kicker: 'Meat-proxy · human-in-the-loop · slop-refiner',
      tagline: "Hi! I'm ", taglineSerif: 'Javier', taglineEnd: '.',
      lede: "Ex-Apple Genius. Ten years fixing people's tech; now I help people and their AI agents get unstuck.",
      support: 'Hermes runs my day and I build plugins for it. Vibe coder, proud of it. Open source must win.',
      ctas: [
        { href: '{projects}', label: 'See the work' },
        { href: '{contact}', label: 'Get in touch', alt: true },
        { href: '/javier-ponz-prado-cv.pdf', label: 'CV', alt: true, ext: true }
      ]
    },
    es: {
      title: 'Javier Ponz · ex-Genius de Apple, agentes abiertos, cosas que funcionan',
      desc: '¡Hola! Soy Javier, ex-Genius de Apple. Diez años arreglando la tecnología de la gente; ahora ayudo a las personas y a sus agentes de IA a desatascarse. Usuario de Hermes, hago plugins, vibe coder.',
      kicker: 'Meat-proxy · human-in-the-loop · slop-refiner',
      tagline: '¡Hola! Soy ', taglineSerif: 'Javier', taglineEnd: '.',
      lede: 'Ex-Genius de Apple. Diez años arreglando la tecnología de la gente; ahora ayudo a las personas y a sus agentes de IA a desatascarse.',
      support: 'Hermes me organiza el día y le hago plugins. Vibe coder, y a mucha honra. El open source tiene que ganar.',
      ctas: [
        { href: '{projects}', label: 'Ver el trabajo' },
        { href: '{contact}', label: 'Hablamos', alt: true },
        { href: '/javier-ponz-prado-cv.pdf', label: 'CV', alt: true, ext: true }
      ]
    }
  },

  /* ─────────────────────────────────────────────────────────── about ── */
  about: {
    en: {
      kicker: '01 / About',
      epigraph: '“The future is already here. It\'s just not evenly distributed.”<cite>William Gibson</cite>',
      h1: 'The machine should be ', serif: 'shaped',
      h1end: ' by the needs of the person that commands it.',
      lede: 'I care about the space between people and their machines. Agents and open tools can put control back in the hands of the person using them. Not the platform, and not whoever else thinks they have a say.',
      sections: [
        { label: 'Background', cls: 'copy', html: '<h2>Ten years between people and their machines.</h2>' + P(
          'Apple taught me to diagnose fast, explain it plainly and put the person first. Somewhere along the way I stopped seeing a Genius as someone who repairs the product, and started seeing someone who solves whatever the person in front of them actually needs. Same goal now, new surface: agents, automations and the infrastructure under them.',
          'I want a machine that works the moment I turn it on, and still lets me open it up when I feel like it. Convenience and control aren\'t opposites. Open weights and open tools matter for the same reason: whoever controls them decides where the ceiling is.') },
        { label: 'The principle', cls: 'prose', html: P(
          '<strong><a href="{servant}" target="_blank" rel="noreferrer">Leading is serving</a>.</strong>',
          'Clear whatever is in someone\'s way and leave them with more control than they had. At a repair bench, on a team or inside a system. And leading doesn\'t mean imposing your view, however right it is. It means getting the best idea out of everyone.') },
        { label: 'What I believe', cls: 'prose', html: P(
          '<strong>Open source must win.</strong> Your machine, your data, your keys, your agent.',
          'Freedom first. I trust people with their own tools, their own money and their own mistakes.',
          'Optimist about technology: build faster, build in the open, and keep people in charge.',
          'Mediterranean to the bone: Greek myths, Roman roads, Catholic feast days. It sneaks into what I build, from a plugin named after Hermes\'s second job to one that keeps a day of rest.',
          '<em>Journey before destination.</em>') },
        { label: 'Outside work', cls: 'prose', html: P(
          'Metalhead, coffee problem, building and overclocking PCs since I was a teenager. Same instinct behind Omarchy, GrapheneOS, getting off Google and the homelab I\'m designing. Dream car is still a Honda Civic.') }
      ]
    },
    es: {
      kicker: '01 / Perfil',
      epigraph: '«El futuro ya está aquí. Solo que no está repartido por igual.»<cite>William Gibson</cite>',
      h1: 'La máquina debería estar ', serif: 'moldeada',
      h1end: ' por las necesidades de quien la gobierna.',
      lede: 'Me importa el espacio entre las personas y sus máquinas. Los agentes y las herramientas abiertas pueden devolverle el control a quien las usa. No a la plataforma, ni a quien crea tener derecho a decidir por ti.',
      sections: [
        { label: 'Trayectoria', cls: 'copy', html: '<h2>Diez años entre las personas y sus máquinas.</h2>' + P(
          'Apple me enseñó a diagnosticar rápido, explicarlo claro y poner a la persona primero. Por el camino dejé de ver al Genius como alguien que repara el producto y empecé a verlo como alguien que resuelve lo que de verdad necesita quien tiene delante. El mismo objetivo ahora, otra superficie: agentes, automatizaciones y la infraestructura que hay debajo.',
          'Quiero una máquina que funcione en cuanto la enciendo y que me deje abrirla cuando me apetezca. Comodidad y control no son opuestos. Los pesos y las herramientas abiertas importan por lo mismo: quien los controla decide dónde está el techo.') },
        { label: 'El principio', cls: 'prose', html: P(
          '<strong><a href="{servant}" target="_blank" rel="noreferrer">Liderar es servir</a>.</strong>',
          'Quitar lo que le estorba a alguien y dejarle con más control del que tenía. En un banco de reparación, en un equipo o dentro de un sistema. Y liderar no es imponer tu criterio, por correcto que sea. Es sacar la mejor idea de todos.') },
        { label: 'En lo que creo', cls: 'prose', html: P(
          '<strong>El open source tiene que ganar.</strong> Tu máquina, tus datos, tus llaves, tu agente.',
          'La libertad primero. Confío en que cada cual maneje sus herramientas, su dinero y sus propios errores.',
          'Optimista con la tecnología: construir más rápido, en abierto y con las personas al mando.',
          'Mediterráneo hasta la médula: mitos griegos, calzadas romanas, fiestas de guardar. Se cuela en lo que hago, desde un plugin con el nombre del segundo oficio de Hermes hasta otro que guarda un día de descanso.',
          '<em>El viaje antes que el destino.</em>') },
        { label: 'Fuera del trabajo', cls: 'prose', html: P(
          'Metalhead, adicto al café, montando y haciendo overclocking de PCs desde adolescente. El mismo instinto detrás de Omarchy, GrapheneOS, salir de Google y el homelab que estoy diseñando. El coche de mis sueños sigue siendo un Honda Civic.') }
      ]
    }
  },

  /* ────────────────────────────────────────────────────── experience ── */
  experience: {
    en: {
      kicker: '02 / Experience', h1: 'A decade of diagnosis, support and ', serif: 'removing obstacles', h1end: '.',
      lede: "Apple first, because it's the strongest evidence. Then the move into AI, and what I'm studying while I make it.",
      sections: [
        { label: 'Apple Retail Spain · 2014–2024', cls: 'copy', html: P(
          'Specialist, Technical Specialist, Genius and In-Store Experience Lead, all in Madrid. Most of the decade I was a Genius: advanced troubleshooting, repair triage, cases that had already beaten someone else, and explaining all of it to people with very different levels of tech.',
          'When COVID closed the stores I volunteered for remote AppleCare support: several cases at once by phone, email and chat, each one owned to resolution. As Lead I ran the store alongside management, opening to close, and handled whatever no procedure covered.',
          'The useful lesson was simple: the technically correct answer and the useful answer are not always the same sentence.') },
        { label: 'Aberdeen, Scotland · since 2024', cls: 'copy', html: P(
          'I moved from Madrid to Aberdeen and went all in on AI. I learn by building: small apps, agent tooling, plugins for Hermes, deployments on my own server, and docs that say what actually happened. I also started a newsletter, technoirNews on Substack, later Machines Do It Better on beehiiv. It\'s paused for now.') }
      ],
      chronologyLabel: 'Chronology',
      educationLabel: 'Study and certification'
    },
    es: {
      kicker: '02 / Experiencia', h1: 'Una década de diagnóstico, soporte y ', serif: 'quitar obstáculos', h1end: '.',
      lede: 'Apple primero, porque es la prueba más sólida. Después, el salto a la IA y lo que estudio mientras lo doy.',
      sections: [
        { label: 'Apple Retail España · 2014–2024', cls: 'copy', html: P(
          'Specialist, Technical Specialist, Genius y responsable de Experiencia en Tienda, todo en Madrid. Casi toda la década fui Genius: diagnóstico avanzado, triaje de reparaciones, casos que ya habían podido con otro, y explicárselo todo a gente con niveles técnicos muy distintos.',
          'Cuando la COVID cerró las tiendas me ofrecí voluntario para el soporte remoto de AppleCare: varios casos a la vez por teléfono, correo y chat, cada uno llevado hasta resolverlo. Como Lead llevé la tienda junto a dirección, de apertura a cierre, y me ocupé de todo lo que no cubría ningún procedimiento.',
          'La lección útil fue sencilla: la respuesta técnicamente correcta y la respuesta útil no siempre son la misma frase.') },
        { label: 'Aberdeen, Escocia · desde 2024', cls: 'copy', html: P(
          'Me mudé de Madrid a Aberdeen y me lancé de lleno a la IA. Aprendo construyendo: apps pequeñas, herramientas para agentes, plugins para Hermes, despliegues en mi propio servidor y documentación que cuenta lo que pasó de verdad. También empecé una newsletter, technoirNews en Substack, luego Machines Do It Better en beehiiv. De momento está en pausa.') }
      ],
      chronologyLabel: 'Cronología',
      educationLabel: 'Formación y certificaciones'
    }
  },

  /* ───────────────────────────────────────────────────────── projects ── */
  // The old standalone Workbench and Memento Mori case-study pages, merged
  // into one section: running/shipped cards, then the case study as a
  // subsection (its own #case-study anchor) instead of a separate page.
  projects: {
    en: {
      kicker: '03 / Projects', h1: 'Things I am ', serif: 'making', h1end: '.',
      lede: 'Hermes plugins, small products and a couple of games. Each one says what it is, what it isn\'t, and links to the code.',
      authorship: "I'm a vibe coder: I decide, specify, test and ship; AI coding agents write the code. Every card says so, and names any upstream work.",
      runningLabel: 'Running daily', projectsLabel: 'Built', alsoLabel: 'Also built'
    },
    es: {
      kicker: '03 / Proyectos', h1: 'Cosas que estoy ', serif: 'haciendo', h1end: '.',
      lede: 'Plugins para Hermes, productos pequeños y un par de juegos. Cada uno dice lo que es, lo que no es, y enlaza al código.',
      authorship: 'Soy vibe coder: decido, especifico, pruebo y publico; el código lo escriben agentes de IA. Cada ficha lo dice y nombra el trabajo ajeno del que parte.',
      runningLabel: 'Uso a diario', projectsLabel: 'Hecho', alsoLabel: 'También hecho'
    }
  },

  /* ─────────────────────────────────────────────────────────── skills ── */
  skills: {
    en: {
      kicker: '04 / Skills', h1: 'What I know, what I am ', serif: 'learning', h1end: ', and what I am building towards.',
      lede: 'Split three ways on purpose. Nothing in the second or third group is experience I have already had. The third is what I am starting next, learned with an LLM and an agent harness beside me and aimed at the 20% that makes a system run: enough to deploy it, read what the harness proposes and catch it when it is wrong.'
    },
    es: {
      kicker: '04 / Competencias', h1: 'Lo que sé, lo que estoy ', serif: 'aprendiendo', h1end: ', y hacia dónde construyo.',
      lede: 'Separado en tres a propósito. Nada del segundo ni del tercer grupo es experiencia que ya tenga. El tercero es lo que empiezo ahora, con un LLM y un arnés de agentes al lado y buscando el 20% que hace funcionar un sistema: lo justo para desplegarlo, leer lo que propone el arnés y pillarlo cuando se equivoca.'
    }
  },

  /* ───────────────────────────────────────────────────── achievements ── */
  achievements: {
    en: {
      kicker: '05 / Achievements', h1: 'Evidence over ', serif: 'theatre', h1end: '.',
      lede: 'Ten years at Apple Retail. Genius, then Lead. Two Hermes plugins in the Nous Research hackathon. Small products shipped and documented while I learn.',
      label: 'Milestones'
    },
    es: {
      kicker: '05 / Logros', h1: 'Pruebas antes que ', serif: 'teatro', h1end: '.',
      lede: 'Diez años en Apple Retail. Genius y después Lead. Dos plugins de Hermes en el hackathon de Nous Research. Productos pequeños publicados y documentados mientras aprendo.',
      label: 'Hitos'
    }
  },

  /* ─────────────────────────────────────────────────────── newsletter ── */
  newsletter: {
    en: {
      kicker: '06 / Newsletter', h1: 'Machines Do It Better: ', serif: 'the signal', h1end: '.',
      lede: 'Notes from the machine: agents, sovereignty, open systems, learning in public, and the strange work of making technology answer to its owner.',
      statusLabel: 'Status', status: "Paused. It started as technoirNews on Substack and moved to beehiiv as Machines Do It Better; the archive is still up. It'll be back once Hermes does more of the legwork.",
      readLabel: 'Read it',
      rows: [
        { time: 'beehiiv', h3: 'machinesdoitbetter.beehiiv.com ↗', href: '{mdib}', p: 'Hot topics around AI agents, written for a semi-technical reader and readable by a curious one.' }
      ],
      topicsLabel: 'Topics',
      topics: ['Agents and Hermes Agent', 'Digital sovereignty', 'Omarchy, Linux and open systems', 'Practical AI adoption', 'Building, deploying and learning in public', 'Failure, limits and design decisions'],
      sections: [
        { label: 'Omarchy / open systems', cls: 'prose', html: P(
          'I prefer computers that can be edited rather than merely tolerated. Plain configuration, readable files and an owner who can understand the system are practical advantages, not aesthetic decoration.') },
        { label: 'Hermes Agent', cls: 'prose', html: P(
          'I operate Hermes Agent daily and build tools and skills around it. The interesting question is not whether an agent can produce a convincing answer. It is whether the workflow is inspectable, the permissions are clear and failure stays visible.',
          'Hermes Agent is built by Nous Research. My part is using it, building plugins and tools around it, and writing down what I learn. Not the project itself.') },
        { label: 'Local inference / homelab', cls: 'prose', html: P(
          'I am rebuilding a two-rig local inference setup after a period offline. It is a real laboratory and a learning project, not a production endpoint anyone can call today.',
          'The surrounding work covers Linux, Bash, networking, SSH, Docker, model serving, and the unglamorous parts of keeping a machine understandable.') }
      ]
    },
    es: {
      kicker: '06 / Newsletter', h1: 'Machines Do It Better: ', serif: 'the signal', h1end: '.',
      lede: 'Notas desde la máquina: agentes, soberanía, sistemas abiertos, aprender en público, y el trabajo raro de conseguir que la tecnología le responda a su dueño.',
      statusLabel: 'Estado', status: 'En pausa. Empezó como technoirNews en Substack y pasó a beehiiv como Machines Do It Better; el archivo sigue en línea. Volverá cuando Hermes haga más del trabajo de campo.',
      readLabel: 'Léela',
      rows: [
        { time: 'beehiiv', h3: 'machinesdoitbetter.beehiiv.com ↗', href: '{mdib}', p: 'Temas calientes sobre agentes de IA, escritos para un lector semitécnico y legibles para uno curioso.' }
      ],
      topicsLabel: 'Temas',
      topics: ['Agentes y Hermes Agent', 'Soberanía digital', 'Omarchy, Linux y sistemas abiertos', 'Adopción práctica de la IA', 'Construir, desplegar y aprender en público', 'Fallos, límites y decisiones de diseño'],
      sections: [
        { label: 'Omarchy / sistemas abiertos', cls: 'prose', html: P(
          'Prefiero ordenadores que se puedan editar, no solo tolerar. La configuración en texto plano, los ficheros legibles y un dueño capaz de entender el sistema son ventajas prácticas, no decoración estética.') },
        { label: 'Hermes Agent', cls: 'prose', html: P(
          'Opero Hermes Agent a diario y construyo herramientas y skills a su alrededor. La pregunta interesante no es si un agente puede dar una respuesta convincente. Es si el flujo se puede inspeccionar, si los permisos están claros y si el fallo sigue siendo visible.',
          'Hermes Agent lo construye Nous Research. Lo mío es usarlo, hacerle plugins y herramientas, y dejar por escrito lo que aprendo. No el proyecto en sí.') },
        { label: 'Inferencia local / homelab', cls: 'prose', html: P(
          'Estoy reconstruyendo un montaje de inferencia local de dos equipos tras un tiempo apagado. Es un laboratorio de verdad y un proyecto de aprendizaje, no un endpoint de producción al que nadie pueda llamar hoy.',
          'El trabajo alrededor toca Linux, Bash, redes, SSH, Docker, servido de modelos, y las partes poco lucidas de mantener una máquina comprensible.') }
      ]
    }
  },

  /* ───────────────────────────────────────────────────────── contact ── */
  contact: {
    en: {
      kicker: '07 / Contact', h1: 'If the system has to make sense to ', serif: 'the person', h1end: ' using it, get in touch.',
      lede: "I'm in Aberdeen, Scotland, and remote suits me. I'm looking for support, customer-facing and agent operations work around open agents and practical AI. LinkedIn and X DMs are open.",
      coordsLabel: 'Coordinates',
      rows: [
        { time: 'GitHub', h3: 'github.com/ponzgpt ↗', href: 'https://github.com/ponzgpt', ext: true, p: 'Projects, experiments, the source trail.', copy: 'https://github.com/ponzgpt' },
        { time: 'LinkedIn', h3: 'javierponz ↗', href: 'https://www.linkedin.com/in/javierponz', ext: true, p: 'Work, collaboration, a considered question. DMs open.', copy: 'https://www.linkedin.com/in/javierponz' },
        { time: 'X', h3: '@sudotechnoir ↗', href: 'https://x.com/sudotechnoir', ext: true, p: 'Open agents, Hermes, what I am building. Talking with the Nous community.', copy: 'https://x.com/sudotechnoir' },
        { time: 'Discord', h3: 'sudotechnoir', p: 'Same name on the Nous Research Discord.', copy: 'sudotechnoir' }
      ],
      copyLabel: 'Copy', copiedLabel: 'Copied', copyFailedLabel: 'Copy failed',
      availabilityLabel: 'Availability',
      availability: `<h2>Open to the right role, starting now.</h2>
      <p>Independent, so no notice period. Aberdeen, Scotland, by way of Madrid, on UK hours. Remote suits me, I travel without fuss, and would relocate if it made sense for my partner too.</p>`,
      finalLabel: 'The standard',
      final: 'Good technical work leaves people with more clarity and control than before. That is the standard.'
    },
    es: {
      kicker: '07 / Contacto', h1: 'Si el sistema tiene que tener sentido para ', serif: 'la persona', h1end: ' que lo usa, escríbeme.',
      lede: 'Vivo en Aberdeen, Escocia, y el remoto me viene bien. Busco trabajo de soporte, de cara al cliente y de operaciones con agentes, alrededor de agentes abiertos e IA práctica. Los mensajes de LinkedIn y X están abiertos.',
      coordsLabel: 'Coordenadas',
      rows: [
        { time: 'GitHub', h3: 'github.com/ponzgpt ↗', href: 'https://github.com/ponzgpt', ext: true, p: 'Proyectos, experimentos, el rastro del código.', copy: 'https://github.com/ponzgpt' },
        { time: 'LinkedIn', h3: 'javierponz ↗', href: 'https://www.linkedin.com/in/javierponz', ext: true, p: 'Trabajo, colaboración, una pregunta pensada. Mensajes abiertos.', copy: 'https://www.linkedin.com/in/javierponz' },
        { time: 'X', h3: '@sudotechnoir ↗', href: 'https://x.com/sudotechnoir', ext: true, p: 'Agentes abiertos, Hermes, lo que estoy construyendo. En conversación con la comunidad de Nous.', copy: 'https://x.com/sudotechnoir' },
        { time: 'Discord', h3: 'sudotechnoir', p: 'El mismo nombre en el Discord de Nous Research.', copy: 'sudotechnoir' }
      ],
      copyLabel: 'Copiar', copiedLabel: 'Copiado', copyFailedLabel: 'No se pudo copiar',
      availabilityLabel: 'Disponibilidad',
      availability: `<h2>Disponible para el puesto adecuado, desde ya.</h2>
      <p>Independiente, así que sin preaviso que cumplir. Aberdeen, Escocia, de camino desde Madrid, en horario de Reino Unido. El remoto me viene bien, viajo sin problema, y me trasladaría si tuviera sentido también para mi pareja.</p>`,
      finalLabel: 'El criterio',
      final: 'Un buen trabajo técnico deja a las personas con más claridad y más control del que tenían antes. Ese es el criterio.'
    }
  }
};
