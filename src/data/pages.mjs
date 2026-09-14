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
      title: 'Javier Ponz — technical support & agent operations',
      desc: 'Javier Ponz — people-first technical problem solver. Ten years at Apple Retail, now building agent tooling and small products that reach production.',
      kicker: 'Meat-proxy · human-in-the-loop · slop provider',
      tagline: 'People-first ', taglineSerif: 'technical problem solver', taglineEnd: '.',
      lede: 'Ten years diagnosing hard problems at Apple Retail. Now applying the same principles to agent workflows, tools and small products that reach production.',
      support: 'I work where people and technical systems meet: find what broke, explain it plainly, and make the next step workable.',
      ctas: [
        { href: '{projects}', label: 'See the work' },
        { href: '{contact}', label: 'Get in touch', alt: true }
      ]
    },
    es: {
      title: 'Javier Ponz — soporte técnico y operaciones con agentes',
      desc: 'Javier Ponz — resuelvo problemas técnicos pensando primero en las personas. Diez años en Apple Retail, ahora construyendo herramientas para agentes y productos pequeños que llegan a producción.',
      kicker: 'Meat-proxy · human-in-the-loop · slop provider',
      tagline: 'Resuelvo problemas técnicos ', taglineSerif: 'pensando primero en las personas', taglineEnd: '.',
      lede: 'Diez años diagnosticando problemas difíciles en Apple Retail. Ahora aplico esos mismos principios a flujos con agentes, herramientas y productos pequeños que llegan a producción.',
      support: 'Trabajo donde se tocan las personas y los sistemas técnicos: encontrar qué se ha roto, explicarlo con claridad, y dejar el siguiente paso al alcance.',
      ctas: [
        { href: '{projects}', label: 'Ver el trabajo' },
        { href: '{contact}', label: 'Hablamos', alt: true }
      ]
    }
  },

  /* ─────────────────────────────────────────────────────────── about ── */
  about: {
    en: {
      kicker: '01 / About', h1: 'The machine should be ', serif: 'shaped',
      serifHref: 'https://world.hey.com/dhh/the-malleable-computer-7c187a9b',
      h1end: ' by the needs of the person that commands it.',
      lede: 'I am interested in the space between people and their machines: how agents, open-source tools and editable systems can give ordinary users more control instead of handing more of it to large corporations.',
      sections: [
        { label: 'Background', cls: 'copy', html: '<h2>Ten years between people and their machines.</h2>' + P(
          'A decade at Apple Retail taught me to diagnose fast and translate between what the engineer means, what the sale promised, and what the person actually sees. Same job now, different surface: agent workflows, small products, infrastructure I run myself.',
          'I prefer computers that can be edited rather than merely tolerated. Plain configuration, readable files and an owner who understands the system are practical advantages, not decoration — and the reason an agent can do anything useful on a machine at all. Open weights and open primitives matter for the same practical reason: whoever controls them sets the ceiling on how far the agent can help you.') },
        { label: 'The principle', cls: 'prose', html: P(
          '<strong><a href="{servant}" target="_blank" rel="noreferrer">Leading is serving</a>.</strong>',
          'For me, that means removing what is in somebody\'s way and leaving them with more control than they had before. It applies at a support bench, on a team and inside a technical system.') },
        { label: 'Outside work', cls: 'prose', html: P(
          'Metalhead, coffee problem, building and overclocking PCs since I was a teenager — the same instinct behind the homelab, GrapheneOS and getting off Google now. Dream car is still a Honda Civic.') }
      ]
    },
    es: {
      kicker: '01 / Perfil', h1: 'La máquina debería estar ', serif: 'moldeada',
      serifHref: 'https://world.hey.com/dhh/the-malleable-computer-7c187a9b',
      h1end: ' por las necesidades de quien la gobierna.',
      lede: 'Me interesa el espacio entre las personas y sus máquinas: cómo los agentes, las herramientas de código abierto y los sistemas editables pueden darle más control a la gente corriente en vez de entregárselo a las grandes corporaciones.',
      sections: [
        { label: 'Trayectoria', cls: 'copy', html: '<h2>Diez años entre las personas y sus máquinas.</h2>' + P(
          'Una década en Apple Retail me enseñó a diagnosticar rápido y a traducir entre lo que quiere decir el ingeniero, lo que prometió la venta, y lo que la persona realmente ve. El mismo trabajo ahora, otra superficie: flujos con agentes, productos pequeños, infraestructura que administro yo.',
          'Prefiero ordenadores que se puedan editar, no solo tolerar. La configuración en texto plano, los ficheros legibles y un dueño que entiende el sistema son ventajas prácticas, no decoración — y la razón por la que un agente puede hacer algo útil en una máquina. Los pesos y las primitivas abiertas importan por lo mismo: quien los controla pone el techo de hasta dónde puede ayudarte el agente.') },
        { label: 'El principio', cls: 'prose', html: P(
          '<strong><a href="{servant}" target="_blank" rel="noreferrer">Liderar es servir</a>.</strong>',
          'Para mí eso significa quitar lo que le estorba a alguien y dejarlo con más control del que tenía antes. Vale en un banco de reparación, en un equipo y dentro de un sistema técnico.') },
        { label: 'Fuera del trabajo', cls: 'prose', html: P(
          'Metalhead, problema con el café, montando y haciendo overclocking de PCs desde adolescente — el mismo instinto detrás del homelab, GrapheneOS y salir de Google ahora. El coche de mis sueños sigue siendo un Honda Civic.') }
      ]
    }
  },

  /* ────────────────────────────────────────────────────── experience ── */
  experience: {
    en: {
      kicker: '02 / Experience', h1: 'A decade of diagnosis, support and ', serif: 'removing obstacles', h1end: '.',
      lede: 'Apple Retail first, because it is the strongest evidence. Then the deliberate move into AI, and what I am studying while I make it.',
      sections: [
        { label: 'Apple Retail Spain · 2014—2024', cls: 'copy', html: P(
          'I moved through Specialist, Technical Specialist, Genius and In-Store Experience Lead roles in Madrid. Most of the decade was spent as a Genius: advanced troubleshooting, repair triage, cases that had already defeated someone else, and explanations for people with very different levels of technical understanding.',
          'I also worked as an AppleCare Support Advisor during COVID, handling remote cases under structured troubleshooting and documentation standards. As an ISE Lead, I ran store operations, resourcing and events, and dealt with the situations that did not fit a procedure.',
          'The useful lesson was simple: the technically correct answer and the useful answer are not always the same sentence.') },
        { label: 'Aberdeen, Scotland · since 2024', cls: 'copy', html: P(
          'I moved from Madrid to Aberdeen and began a deliberate transition into AI and full stack development. I am learning by building: small applications, agent tooling, automation, deployments, and the documentation that explains what actually happened.') }
      ],
      chronologyLabel: 'Chronology',
      educationLabel: 'Study and certification',
      closingLabel: 'In short',
      closing: 'I am early in this chapter and public about it. The work, the source and the stated limits are there to be inspected.'
    },
    es: {
      kicker: '02 / Experiencia', h1: 'Una década de diagnóstico, soporte y ', serif: 'quitar obstáculos', h1end: '.',
      lede: 'Apple Retail primero, porque es la evidencia más fuerte. Después, el cambio deliberado hacia la IA, y lo que estudio mientras lo hago.',
      sections: [
        { label: 'Apple Retail España · 2014—2024', cls: 'copy', html: P(
          'Pasé por los puestos de Specialist, Technical Specialist, Genius y responsable de Experiencia en Tienda, en Madrid. La mayor parte de la década fue como Genius: diagnóstico avanzado, triaje de reparaciones, casos que ya habían derrotado a otra persona, y explicaciones para gente con niveles de conocimiento técnico muy distintos.',
          'También trabajé como asesor de AppleCare durante la COVID, atendiendo casos en remoto bajo estándares estructurados de resolución de incidencias y documentación. Como responsable de Experiencia en Tienda llevé operaciones, recursos y eventos, y me ocupé de las situaciones que no encajaban en ningún procedimiento.',
          'La lección útil fue sencilla: la respuesta técnicamente correcta y la respuesta útil no siempre son la misma frase.') },
        { label: 'Aberdeen, Escocia · desde 2024', cls: 'copy', html: P(
          'Me mudé de Madrid a Aberdeen y empecé una transición deliberada hacia la IA y el desarrollo full stack. Aprendo construyendo: aplicaciones pequeñas, herramientas para agentes, automatización, despliegues, y la documentación que explica qué pasó de verdad.') }
      ],
      chronologyLabel: 'Cronología',
      educationLabel: 'Formación y certificaciones',
      closingLabel: 'En resumen',
      closing: 'Llevo poco en este capítulo y lo hago en público. El trabajo, el código y los límites declarados están ahí para que los mires de cerca.'
    }
  },

  /* ───────────────────────────────────────────────────────── projects ── */
  // The old standalone Workbench and Memento Mori case-study pages, merged
  // into one section: running/shipped cards, then the case study as a
  // subsection (its own #case-study anchor) instead of a separate page.
  projects: {
    en: {
      kicker: '03 / Projects', h1: 'Things I am ', serif: 'making', h1end: '.',
      lede: 'Small products and agent tooling, shown with their limits and their receipts.',
      authorship: 'Project notes say what I specified, wrote, deployed or built with an agent. The distinction matters to me.',
      runningLabel: 'Running daily', projectsLabel: 'Built and shipped',
      liveLabel: 'Live', liveNote: 'Deployed and running on a VPS I administer.',
      closingLabel: 'The common thread',
      closing: 'It is not “AI”. It is making a system useful, inspectable and hard to misunderstand.',
      scopeLabel: 'Scope note',
      scope: 'Personal projects and learning artefacts, not client deliverables. Memento Mori is a reflective aid built on population averages — not medical, legal, actuarial or mental-health advice, and no claim about any individual.'
    },
    es: {
      kicker: '03 / Proyectos', h1: 'Cosas que estoy ', serif: 'haciendo', h1end: '.',
      lede: 'Productos pequeños y herramientas para agentes, con sus límites y sus pruebas a la vista.',
      authorship: 'Cada ficha dice qué especifiqué, qué escribí, qué desplegué y qué construí con un agente. Esa distinción me importa.',
      runningLabel: 'Uso a diario', projectsLabel: 'Hecho y publicado',
      liveLabel: 'En vivo', liveNote: 'Desplegado y funcionando en un VPS que administro yo.',
      closingLabel: 'El hilo común',
      closing: 'No es la «IA». Es hacer que un sistema sea útil, inspeccionable y difícil de malinterpretar.',
      scopeLabel: 'Nota de alcance',
      scope: 'Proyectos personales y ejercicios de aprendizaje, no entregables para clientes. Memento Mori es una ayuda para la reflexión basada en promedios de población — no es consejo médico, legal, actuarial ni de salud mental, y no afirma nada sobre nadie en concreto.'
    }
  },

  /* ─────────────────────────────────────────────────────────── skills ── */
  skills: {
    en: {
      kicker: '04 / Skills', h1: 'What I know, what I am ', serif: 'learning', h1end: ', and what I am building towards.',
      lede: 'Split three ways on purpose. Nothing in the second or third group is experience I have already had.'
    },
    es: {
      kicker: '04 / Competencias', h1: 'Lo que sé, lo que estoy ', serif: 'aprendiendo', h1end: ', y hacia dónde construyo.',
      lede: 'Separado en tres a propósito. Nada del segundo ni del tercer grupo es experiencia que ya tenga.'
    }
  },

  /* ───────────────────────────────────────────────────── achievements ── */
  achievements: {
    en: {
      kicker: '05 / Achievements', h1: 'Evidence over ', serif: 'theatre', h1end: '.',
      lede: 'Ten years in Apple Retail. Genius and ISE Lead experience. Small products and agent tooling built, documented and deployed while I learn.',
      label: 'Milestones'
    },
    es: {
      kicker: '05 / Logros', h1: 'Pruebas antes que ', serif: 'teatro', h1end: '.',
      lede: 'Diez años en Apple Retail. Experiencia como Genius y como responsable de Experiencia en Tienda. Productos pequeños y herramientas para agentes construidos, documentados y desplegados mientras aprendo.',
      label: 'Hitos'
    }
  },

  /* ─────────────────────────────────────────────────────── newsletter ── */
  newsletter: {
    en: {
      kicker: '06 / Newsletter', h1: 'Machines Do It Better — ', serif: 'the signal', h1end: '.',
      lede: 'Notes from the machine: agents, sovereignty, open systems, learning in public, and the strange work of making technology answer to its owner.',
      statusLabel: 'Status', status: 'Writing in public — restarting soon. I am rebuilding how the issues get made, with Hermes Agent doing the legwork.',
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
          'Hermes Agent is built by Nous Research. My work here is usage, tooling, experimentation and documentation — not authorship of the underlying project.') },
        { label: 'Local inference / homelab', cls: 'prose', html: P(
          'I am rebuilding a two-rig local inference setup after a period offline. It is a real laboratory and a learning project, not a production endpoint anyone can call today.',
          'The surrounding work covers Linux, Bash, networking, SSH, Docker, model serving, and the unglamorous parts of keeping a machine understandable.') }
      ]
    },
    es: {
      kicker: '06 / Newsletter', h1: 'Machines Do It Better — ', serif: 'the signal', h1end: '.',
      lede: 'Notas desde la máquina: agentes, soberanía, sistemas abiertos, aprender en público, y el trabajo raro de conseguir que la tecnología le responda a su dueño.',
      statusLabel: 'Estado', status: 'Escribiendo en público — vuelve pronto. Estoy rehaciendo cómo se preparan los números, con Hermes Agent haciendo el trabajo de campo.',
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
          'Hermes Agent lo construye Nous Research. Mi trabajo aquí es uso, herramientas, experimentación y documentación — no la autoría del proyecto de base.') },
        { label: 'Inferencia local / homelab', cls: 'prose', html: P(
          'Estoy reconstruyendo un montaje de inferencia local de dos equipos tras un tiempo apagado. Es un laboratorio de verdad y un proyecto de aprendizaje, no un endpoint de producción al que nadie pueda llamar hoy.',
          'El trabajo alrededor toca Linux, Bash, redes, SSH, Docker, servido de modelos, y las partes poco lucidas de mantener una máquina comprensible.') }
      ]
    }
  },

  /* ───────────────────────────────────────────────────────── contact ── */
  contact: {
    en: {
      kicker: '07 / Contact', h1: 'If the system has to make sense to ', serif: 'actual people', h1end: ', get in touch.',
      lede: 'I am based in Aberdeen, Scotland. Remote work suits me. I am looking for work around technical support, customer-facing engineering, agent operations, implementation and practical AI tooling.',
      coordsLabel: 'Coordinates',
      rows: [
        { time: 'Email', h3: 'nerion89@gmail.com', href: 'mailto:nerion89@gmail.com', p: 'Work, collaboration, a considered question.', copy: 'nerion89@gmail.com' },
        { time: 'GitHub', h3: 'github.com/ponzgpt ↗', href: 'https://github.com/ponzgpt', ext: true, p: 'Projects, experiments, the source trail.', copy: 'https://github.com/ponzgpt' },
        { time: 'LinkedIn', h3: 'javierponz ↗', href: 'https://www.linkedin.com/in/javierponz', ext: true, p: 'Professional context, public connections.', copy: 'https://www.linkedin.com/in/javierponz' }
      ],
      copyLabel: 'Copy', copiedLabel: 'Copied', copyFailedLabel: 'Copy failed',
      availabilityLabel: 'Availability',
      availability: `<h2>Open to the right role, starting now.</h2>
      <p>Independent, so no notice period. Aberdeen, Scotland, by way of Madrid, on UK hours. Remote suits me, I travel without fuss, and would relocate if it made sense for my partner too.</p>`,
      finalLabel: 'The standard',
      final: 'Good technical work leaves people with more clarity and control than before. That is the standard.'
    },
    es: {
      kicker: '07 / Contacto', h1: 'Si el sistema tiene que tener sentido para ', serif: 'personas de verdad', h1end: ', escríbeme.',
      lede: 'Vivo en Aberdeen, Escocia. El trabajo en remoto me viene bien. Busco trabajo de soporte técnico, ingeniería de cara al cliente, operaciones con agentes, implementación y herramientas de IA aplicadas.',
      coordsLabel: 'Coordenadas',
      rows: [
        { time: 'Correo', h3: 'nerion89@gmail.com', href: 'mailto:nerion89@gmail.com', p: 'Trabajo, colaboración, una pregunta pensada.', copy: 'nerion89@gmail.com' },
        { time: 'GitHub', h3: 'github.com/ponzgpt ↗', href: 'https://github.com/ponzgpt', ext: true, p: 'Proyectos, experimentos, el rastro del código.', copy: 'https://github.com/ponzgpt' },
        { time: 'LinkedIn', h3: 'javierponz ↗', href: 'https://www.linkedin.com/in/javierponz', ext: true, p: 'Contexto profesional, contactos públicos.', copy: 'https://www.linkedin.com/in/javierponz' }
      ],
      copyLabel: 'Copiar', copiedLabel: 'Copiado', copyFailedLabel: 'No se pudo copiar',
      availabilityLabel: 'Disponibilidad',
      availability: `<h2>Disponible para el puesto adecuado, desde ya.</h2>
      <p>Independiente, así que sin preaviso que cumplir. Aberdeen, Escocia, de camino desde Madrid, en horario de Reino Unido. El remoto me viene bien, viajo sin problema, y me trasladaría si tuviera sentido también para mi pareja.</p>`,
      finalLabel: 'El criterio',
      final: 'Un buen trabajo técnico deja a las personas con más claridad y más control del que tenían antes. Ese es el criterio.'
    }
  },

  /* ────────────────────────────────────────────────────────────── cv ── */
  // Just what the Contact section's CV disclosure needs.
  cv: {
    en: { kicker: 'Curriculum vitae', download: '↓ Download CV (PDF)' },
    es: { kicker: 'Currículum', download: '↓ Descargar el CV (PDF)' }
  }
};
