// Page prose, one { en, es } pair per block. Consumed by HomePage.astro, the
// section components in src/components/sections/ and the terminal.
//
// The page is one screen of hero and six numbered sections: 01 now, 02 work,
// 03 rig, 04 story, 05 notes, 06 connect. Each section block below has a
// kicker (numbered to match the scroll order in HomePage.astro), a title in
// three parts (`h`, the italic accent phrase `em`, `end`) and its own labels.
//
// Data-driven content (projects, timeline, skills, credentials, achievements,
// the CV) is not here: it lives with its data in site.ts and cv.mjs.
//
// The `about`, `experience` and `newsletter` essays are no longer printed on
// the page in full; the terminal's `read` command prints them, so nothing in
// this file is unreachable.

const P = (...paras) => paras.map((t) => `<p>${t}</p>`).join('\n');

// The Now section's figures, with their sources. Timestamps are UTC, from the
// public timeline of NousResearch/hermes-agent#152559 and #152560. The
// published hour counts are derived, not typed (see hoursBetween), and
// scripts/check-skins.mjs asserts them.
export const NOW_FACTS = {
  tests: { psychopomp: 18, sabbath: 13 },
  prs: [152559, 152560],
  opened: '2026-11-10T10:05Z',
  reviewed: '2026-11-11T00:07Z',
  fixed: '2026-11-11T11:59Z'
};
export const PR_URL = 'https://github.com/NousResearch/hermes-agent/pull/';

/** Whole hours between two ISO timestamps, rounded to the nearest hour. */
export function hoursBetween(a, b) {
  return Math.round((Date.parse(b) - Date.parse(a)) / 3.6e6);
}

export const pages = {
  /* ─────────────────────────────────────────────────────────── hero ── */
  home: {
    en: {
      title: 'Javier Ponz · ex-Apple Genius, open agents, things that ship',
      desc: "Hi! I'm Javier, ex-Apple Genius. Ten years fixing people's tech; now I help people and their AI agents get unstuck. Hermes user, plugin builder, vibe coder.",
      prompt: 'whoami',
      line: "Ex-Apple | 10 years fixing people's tech. Now exploring the intersection of ASI, Neuroscience & Post-Labor Economics.",
      cv: 'CV',
      portraitLabel: 'ASCII portrait of Javier Ponz',
      scroll: '↓ scroll',
      marquee: ['ASI', 'NEUROSCIENCE', 'POST-LABOR ECONOMICS', 'OPEN AGENTS', 'HERMES AGENT', 'SOVEREIGN STACK', 'LOCAL INFERENCE', 'OMARCHY', 'SUPPORT', 'TECH NOIR']
    },
    es: {
      title: 'Javier Ponz · ex-Genius de Apple, agentes abiertos, cosas que funcionan',
      desc: '¡Hola! Soy Javier, ex-Genius de Apple. Diez años arreglando la tecnología de la gente; ahora ayudo a las personas y a sus agentes de IA a desatascarse. Usuario de Hermes, hago plugins, vibe coder.',
      prompt: 'whoami',
      line: 'Ex-Apple | 10 años arreglando la tecnología de la gente. Ahora exploro la intersección entre la ASI, la neurociencia y la economía post-laboral.',
      cv: 'CV',
      portraitLabel: 'Retrato ASCII de Javier Ponz',
      scroll: '↓ bajar',
      marquee: ['ASI', 'NEUROCIENCIA', 'ECONOMÍA POST-LABORAL', 'AGENTES ABIERTOS', 'HERMES AGENT', 'INFRAESTRUCTURA SOBERANA', 'INFERENCIA LOCAL', 'OMARCHY', 'SOPORTE', 'TECH NOIR']
    }
  },

  /* ─────────────────────────────────────────────────────── 01 · now ── */
  now: {
    en: {
      kicker: '01 · NOW', h: 'Open agents. ', em: 'Two Hermes plugins', end: '.',
      lede: 'Psychopomp and Sabbath, built for the Nous Research plugin hackathon and tested end to end on my own Hermes, in Desktop and Telegram.',
      status: 'Both catalog PRs are open and awaiting re-review. Nothing is merged yet.',
      repo: 'source ↗',
      stats: {
        tests: 'tests', testsSrc: (a, b) => `${a} psychopomp + ${b} sabbath`,
        prs: 'catalog PRs', prsSrc: 'hermes-agent',
        review: 'to maintainer review', reviewSrc: 'opened 10 Nov 10:05 → reviewed 11 Nov 00:07 UTC',
        fixes: 'to fixes shipped', fixesSrc: 'reviewed 00:07 → fixes pinned 11:59 UTC'
      },
      hUnit: 'h',
      replayLabel: 'Illustrative session · /sabbath',
      replayNote: 'Hand-authored replay, not a recording.',
      replayAgain: 'replay',
      replayWho: { cmd: '› ', you: 'you  ', bot: 'hermes  ' },
      replay: [
        ['cmd', '/sabbath'],
        ['bot', "Goodnight. It's Sabbath: I'm resting with you until tomorrow."],
        ['bot', 'My scheduled jobs are paused. Anything that comes in, I set aside.'],
        ['you', 'anything good to watch tonight?'],
        ['bot', 'Plenty. A film, a walk, a long read? Anything but work.'],
        ['cmd', '/sabbath ox'],
        ['bot', 'The ox is in the well. Handling just this one, then back to rest.'],
        ['sep', '— end of the day —'],
        ['bot', 'Digest: everything I set aside today, in one gentle list.']
      ]
    },
    es: {
      kicker: '01 · AHORA', h: 'Agentes abiertos. ', em: 'Dos plugins de Hermes', end: '.',
      lede: 'Psychopomp y Sabbath, hechos para el hackathon de plugins de Nous Research y probados de principio a fin en mi propio Hermes, en Desktop y Telegram.',
      status: 'Las dos PRs al catálogo están abiertas, pendientes de una nueva revisión. Aún no hay nada fusionado.',
      repo: 'código ↗',
      stats: {
        tests: 'tests', testsSrc: (a, b) => `${a} psychopomp + ${b} sabbath`,
        prs: 'PRs al catálogo', prsSrc: 'hermes-agent',
        review: 'hasta la revisión', reviewSrc: 'abierta 10 nov 10:05 → revisada 11 nov 00:07 UTC',
        fixes: 'hasta publicar los arreglos', fixesSrc: 'revisada 00:07 → arreglos fijados 11:59 UTC'
      },
      hUnit: 'h',
      replayLabel: 'Sesión ilustrativa · /sabbath',
      replayNote: 'Repetición escrita a mano, no una grabación.',
      replayAgain: 'repetir',
      replayWho: { cmd: '› ', you: 'tú  ', bot: 'hermes  ' },
      replay: [
        ['cmd', '/sabbath'],
        ['bot', 'Buenas noches. Es Sabbath: descanso contigo hasta mañana.'],
        ['bot', 'Mis tareas programadas están en pausa. Lo que llegue, lo aparco.'],
        ['you', '¿algo bueno que ver esta noche?'],
        ['bot', 'Mucho. ¿Una película, un paseo, una lectura larga? Todo menos trabajo.'],
        ['cmd', '/sabbath ox'],
        ['bot', 'El buey ha caído al pozo. Me ocupo solo de esto y vuelvo a descansar.'],
        ['sep', '— al acabar el día —'],
        ['bot', 'Resumen: todo lo que aparqué hoy, en una sola lista tranquila.']
      ]
    }
  },

  /* ────────────────────────────────────────────────────── 02 · work ── */
  work: {
    en: {
      kicker: '02 · WORK', h: 'Things that ', em: 'ship', end: '.',
      lede: "Small products, a couple of games, a wiki. I'm a vibe coder: I decide, specify, test and ship; AI coding agents write the code. Every card says so, and names any upstream work.",
      // Titles from site.ts `projects`, in the order they lead the section.
      lead: ['Neuronara', 'Machines Do It Better', 'Post-Labor Wiki'],
      live: 'live ↗', source: 'source ↗', alsoLabel: 'Also built'
    },
    es: {
      kicker: '02 · TRABAJO', h: 'Cosas que ', em: 'funcionan', end: '.',
      lede: 'Productos pequeños, un par de juegos, una wiki. Soy vibe coder: decido, especifico, pruebo y publico; el código lo escriben agentes de IA. Cada ficha lo dice y nombra el trabajo ajeno del que parte.',
      lead: ['Neuronara', 'Machines Do It Better', 'Post-Labor Wiki'],
      live: 'en vivo ↗', source: 'código ↗', alsoLabel: 'También hecho'
    }
  },

  /* ─────────────────────────────────────────────────────── 03 · rig ── */
  rig: {
    en: {
      kicker: '03 · RIG', h: 'The ', em: 'sovereign', end: ' stack.',
      lede: 'The machine I work on, the server everything here runs on, and the tools I run every day but did not write.',
      sceneLabel: 'A torus knot rendered as amber ASCII characters. Drag, or use the arrow keys, to spin it.',
      sceneHint: 'drag to spin',
      machineLabel: 'Workstation',
      vpsLabel: 'Server',
      vps: 'A VPS I administer: Docker, Docker Swarm, Dokploy, Traefik and nginx. Every *.technoir.cloud link on this page runs there.',
      runningLabel: 'Running daily, did not write',
      labLabel: 'Local inference',
      lab: 'A two-rig local inference setup, being rebuilt after a period offline: a real laboratory and a learning project, not a production endpoint anyone can call today.'
    },
    es: {
      kicker: '03 · EQUIPO', h: 'Infraestructura ', em: 'soberana', end: '.',
      lede: 'La máquina en la que trabajo, el servidor donde corre todo lo de aquí y las herramientas que uso a diario pero no he escrito.',
      sceneLabel: 'Un nudo tórico dibujado con caracteres ASCII ámbar. Arrastra, o usa las flechas, para girarlo.',
      sceneHint: 'arrastra para girar',
      machineLabel: 'Estación de trabajo',
      vpsLabel: 'Servidor',
      vps: 'Un VPS que administro yo: Docker, Docker Swarm, Dokploy, Traefik y nginx. Todos los enlaces *.technoir.cloud de esta página corren ahí.',
      runningLabel: 'Uso a diario, no lo he escrito',
      labLabel: 'Inferencia local',
      lab: 'Un montaje de inferencia local de dos equipos, en reconstrucción tras un tiempo apagado: un laboratorio de verdad y un proyecto de aprendizaje, no un endpoint de producción al que nadie pueda llamar hoy.'
    }
  },

  /* ───────────────────────────────────────────────────── 04 · story ── */
  story: {
    en: {
      kicker: '04 · STORY', h: 'Ten years at the Genius Bar, ', em: 'then agents', end: '.',
      lede: "Apple first, because it's the strongest evidence. Then the move into AI, and what I'm studying while I make it.",
      detailsLabel: 'What the role involved',
      studyLabel: 'Study and certification',
      skillsLabel: 'Skills',
      skillsNote: 'Split three ways on purpose. Nothing in the second or third group is experience I have already had. The third is what I am starting next, learned with an LLM and an agent harness beside me and aimed at the 20% that makes a system run: enough to deploy it, read what the harness proposes and catch it when it is wrong.'
    },
    es: {
      kicker: '04 · HISTORIA', h: 'Diez años en el Genius Bar, ', em: 'después agentes', end: '.',
      lede: 'Apple primero, porque es la prueba más sólida. Después, el salto a la IA y lo que estudio mientras lo doy.',
      detailsLabel: 'En qué consistía el puesto',
      studyLabel: 'Formación y certificaciones',
      skillsLabel: 'Competencias',
      skillsNote: 'Separado en tres a propósito. Nada del segundo ni del tercer grupo es experiencia que ya tenga. El tercero es lo que empiezo ahora, con un LLM y un arnés de agentes al lado y buscando el 20% que hace funcionar un sistema: lo justo para desplegarlo, leer lo que propone el arnés y pillarlo cuando se equivoca.'
    }
  },

  /* ───────────────────────────────────────────────────── 05 · notes ── */
  notes: {
    en: {
      kicker: '05 · FIELD NOTES', h: 'ASI, neuroscience, ', em: 'post-labor economics', end: '.',
      lede: "Interests, not credentials. Each column links to what I've built or written around it.",
      // `project` is a title from site.ts `projects`; `note` shortens its description.
      columns: [
        { h: 'ASI', items: [
          { project: 'ASI Rush', note: 'A clicker about the real race to AI, from beige PCs in a garage to superintelligence.' },
          { newsletter: true, note: 'Machines Do It Better, the newsletter: hot topics around AI agents. Paused; the archive is up.' }
        ] },
        { h: 'Neuroscience', items: [
          { project: 'Neuronara', note: 'Cited answers over the standards of clinical neurophysiology, built for my partner, a clinical neurophysiologist.' },
          { project: 'Hyperexcitability atlas', note: 'A study atlas of the EURO-NMD webinar on muscle hyperexcitability and cramps.' }
        ] },
        { h: 'Post-labor economics', items: [
          { project: 'Post-Labor Wiki', note: 'A visual, source-first wiki on post-labor economics and the post-work society, a citation behind every claim.' }
        ] }
      ],
      milestonesLabel: 'Milestones'
    },
    es: {
      kicker: '05 · CUADERNO DE CAMPO', h: 'ASI, neurociencia, ', em: 'economía post-laboral', end: '.',
      lede: 'Intereses, no credenciales. Cada columna enlaza a lo que he construido o escrito a su alrededor.',
      columns: [
        { h: 'ASI', items: [
          { project: 'ASI Rush', note: 'Un clicker sobre la carrera real hacia la IA, de los PCs beige en un garaje a la superinteligencia.' },
          { newsletter: true, note: 'Machines Do It Better, la newsletter: temas calientes sobre agentes de IA. En pausa; el archivo sigue en línea.' }
        ] },
        { h: 'Neurociencia', items: [
          { project: 'Neuronara', note: 'Respuestas con citas sobre los estándares de la neurofisiología clínica, construido para mi pareja, neurofisióloga clínica.' },
          { project: 'Hyperexcitability atlas', note: 'Un atlas de estudio del webinar de EURO-NMD sobre hiperexcitabilidad muscular y calambres.' }
        ] },
        { h: 'Economía post-laboral', items: [
          { project: 'Post-Labor Wiki', note: 'Una wiki visual y con fuentes sobre economía post-laboral y la sociedad post-trabajo, con una cita detrás de cada afirmación.' }
        ] }
      ],
      milestonesLabel: 'Hitos'
    }
  },

  /* ─────────────────────────────────────────────────── 06 · connect ── */
  connect: {
    en: {
      kicker: '06 · CONNECT',
      termLabel: 'A working terminal. It reads the same data as this page.',
      footer: '© 2026 Javier Ponz · built with AI coding agents; I specify and test · some effects from the libraries catalogued at Uncommon Web (webdev.teknium.io)',
      howLabel: 'How this was made ↗'
    },
    es: {
      kicker: '06 · CONTACTO',
      termLabel: 'Un terminal que funciona. Lee los mismos datos que esta página.',
      footer: '© 2026 Javier Ponz · hecho con agentes de IA; yo especifico y pruebo · algunos efectos de las librerías recogidas en Uncommon Web (webdev.teknium.io)',
      howLabel: 'Cómo está hecho ↗'
    }
  },

  /* ── Below: the longer essays, printed in full by the terminal's `read`
        command, plus the newsletter and contact data the page still shows. */

  /* ─────────────────────────────────────────────────────────── about ── */
  about: {
    en: {
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
      h1: 'A decade of diagnosis, support and ', serif: 'removing obstacles', h1end: '.',
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
      h1: 'Una década de diagnóstico, soporte y ', serif: 'quitar obstáculos', h1end: '.',
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

  /* ─────────────────────────────────────────────────────── newsletter ── */
  newsletter: {
    en: {
      h1: 'Machines Do It Better: ', serif: 'the signal', h1end: '.',
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
      h1: 'Machines Do It Better: ', serif: 'the signal', h1end: '.',
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
      h: 'If the system has to make sense to ', em: 'the person', end: ' using it, get in touch.',
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
      h: 'Si el sistema tiene que tener sentido para ', em: 'la persona', end: ' que lo usa, escríbeme.',
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
