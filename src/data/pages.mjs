// Page prose, one block per language.
//
// Each page is: a <head> title and description, a hero (kicker / heading /
// underlined word / standfirst), and a list of sections. A section is a label,
// a wrapper class, and its inner HTML. The templates are thin on purpose —
// everything a translator touches is in this file and nowhere else.
//
// Data-driven sections (the CV rows, the workbench cards, the timeline) are not
// here: those live with their data in cv.mjs and site.ts, translated in place.

const P = (...paras) => paras.map((t) => `<p>${t}</p>`).join('\n');

export const pages = {
  /* ─────────────────────────────────────────────────────────── about ── */
  about: {
    en: {
      title: 'About — Javier Ponz',
      desc: 'Background, experience, skills and credentials of Javier Ponz: ten years of technical service at Apple Retail, now building AI systems and full stack applications.',
      kicker: 'About', h1: 'Leading is ', serif: 'serving', h1end: '.',
      lede: 'Everything I do professionally comes back to that. Diagnose what is actually wrong, understand who it affects, say it in words that don\'t humiliate anyone, and leave the person with more control than they had before.',
      sections: [
        { label: 'The principle', cls: 'prose', html: P(
          'I mean it in three directions, and they are the same skill.',
          '<strong>Leading yourself.</strong> Doing the unglamorous part without an audience — the tests, the release gate, the honest README, the second look at the thing that already works. Nobody claps for it, and it is what separates finished from nearly finished.',
          '<strong>Leading others one at a time.</strong> Mentoring and teaching, which is mostly restraint: giving someone the reasoning instead of the answer, and being willing to be slower now so they are faster later.',
          '<strong>Leading teams.</strong> Removing what is in their way. As a lead the job was never to be the most capable person in the room; it was to make the room work — resources, cover, conflict handled early, credit pointed at whoever earned it.',
          'Service is not the soft edge of technical work. It is the part that decides whether the technical work reaches anyone.') },
        { label: 'Experience', cls: 'copy', html: '<h2>Apple Retail · 2014—2024</h2>' + P(
          'Ten years and five roles: Specialist, Technical Specialist, AppleCare Advisor, Genius, then In-Store Experience Lead across Parquesur and Xanadú in Madrid. The through line was diagnosis under pressure — find the real fault fast, explain it in terms the person in front of you actually cares about, and keep their trust while doing it.',
          'Thousands of people arrived angry, confused, or holding a dead machine with their only copy of something on it. That is where I learned that the technical answer and the useful answer are not always the same sentence.',
          'As a lead I ran operations across two stores — opening and closing, events, resourcing, maintenance, and supporting teams when a situation did not fit any procedure. Leading there meant clearing obstacles, not issuing instructions.') },
        { label: 'Now', cls: 'copy', html: '<h2>Technical support and open systems</h2>' + P(
          'Since moving to Aberdeen I have been working with AI systems full time: agent workflows with Hermes Agent, MCP servers, automations in Docker, local inference on my own GPU, and applications deployed on my own VPS with Traefik and TLS. I am strongest where systems fail — investigating failure modes, debugging workflows, turning unpredictable behaviour into something documented and reliable.',
          'It is the same job as before, aimed at a different surface. A person stuck on a machine and a machine stuck on a task both need someone willing to find the real fault and write down what it was. <a href="{thesis}">My thesis</a> is that the tools worth building are the ones that hand control back to the person using them.',
          'I am early in this career and deliberately public about it: every project has source code, tests and a stated scope, and says plainly which parts I wrote. I would rather be judged on what I have shipped than on how I describe myself.') }
      ],
      skillsLabel: 'Skills', credentialsLabel: 'Credentials', shortLabel: 'In short',
      short: 'Good technical work leaves people with more clarity and more control than they had before. That is the whole standard.'
    },
    es: {
      title: 'Perfil — Javier Ponz',
      desc: 'Trayectoria, experiencia, competencias y titulaciones de Javier Ponz: diez años de servicio técnico en Apple Retail, ahora construyendo sistemas de IA y aplicaciones full stack.',
      kicker: 'Perfil', h1: 'Liderar es ', serif: 'servir', h1end: '.',
      lede: 'Todo lo que hago profesionalmente vuelve a esa idea. Diagnosticar qué falla de verdad, entender a quién afecta, decirlo con palabras que no humillen a nadie, y dejar a la persona con más control del que tenía antes.',
      sections: [
        { label: 'El principio', cls: 'prose', html: P(
          'Lo digo en tres direcciones, y son la misma habilidad.',
          '<strong>Liderarse a uno mismo.</strong> Hacer la parte poco lucida sin público: las pruebas, la puerta de publicación, el README honesto, la segunda mirada a lo que ya funciona. Nadie aplaude eso, y es lo que separa lo terminado de lo casi terminado.',
          '<strong>Liderar a otros de uno en uno.</strong> Mentorizar y enseñar, que consiste sobre todo en contenerse: dar el razonamiento en lugar de la respuesta, y aceptar ir más despacio ahora para que el otro vaya más rápido después.',
          '<strong>Liderar equipos.</strong> Quitar lo que les estorba. Como responsable, el trabajo nunca fue ser el más capaz de la sala; era hacer que la sala funcionara: recursos, cobertura, conflictos atajados pronto y el mérito señalando a quien se lo ganó.',
          'El servicio no es el borde blando del trabajo técnico. Es la parte que decide si ese trabajo llega a alguien.') },
        { label: 'Experiencia', cls: 'copy', html: '<h2>Apple Retail · 2014—2024</h2>' + P(
          'Diez años y cinco puestos: Specialist, Technical Specialist, asesor de AppleCare, Genius y, después, responsable de experiencia en tienda en Parquesur y Xanadú, en Madrid. El hilo común fue diagnosticar bajo presión: encontrar el fallo real rápido, explicarlo en los términos que de verdad le importan a quien tienes delante, y no perder su confianza por el camino.',
          'Llegaban miles de personas enfadadas, desorientadas o con un equipo muerto que guardaba la única copia de algo. Ahí aprendí que la respuesta técnica y la respuesta útil no siempre son la misma frase.',
          'Como responsable llevé la operación de dos tiendas: aperturas y cierres, eventos, recursos, mantenimiento y apoyo al equipo cuando la situación no encajaba en ningún procedimiento. Liderar allí consistía en despejar obstáculos, no en dar instrucciones.') },
        { label: 'Ahora', cls: 'copy', html: '<h2>Soporte técnico y sistemas abiertos</h2>' + P(
          'Desde que me mudé a Aberdeen trabajo a tiempo completo con sistemas de IA: flujos con agentes sobre Hermes Agent, servidores MCP, automatizaciones en Docker, inferencia local en mi propia GPU y aplicaciones desplegadas en un VPS mío con Traefik y TLS. Donde mejor rindo es allí donde los sistemas fallan: investigar modos de fallo, depurar flujos y convertir un comportamiento impredecible en algo documentado y fiable.',
          'Es el mismo trabajo de antes apuntando a otra superficie. Una persona atascada con una máquina y una máquina atascada con una tarea necesitan lo mismo: alguien dispuesto a encontrar el fallo real y dejarlo por escrito. <a href="{thesis}">Mi tesis</a> es que las herramientas que merecen construirse son las que devuelven el control a quien las usa.',
          'Llevo poco en esta carrera y lo hago público a propósito: cada proyecto tiene código, pruebas y un alcance declarado, y dice con claridad qué partes escribí yo. Prefiero que me juzguen por lo que he entregado antes que por cómo me describo.') }
      ],
      skillsLabel: 'Competencias', credentialsLabel: 'Titulaciones', shortLabel: 'En resumen',
      short: 'Un buen trabajo técnico deja a las personas con más claridad y más control del que tenían antes. Ese es todo el criterio.'
    },
    zh: {
      title: '关于 — Javier Ponz',
      desc: 'Javier Ponz 的背景、经历、技能与资历：在 Apple Retail 从事十年技术服务，现在构建 AI 系统与全栈应用。',
      kicker: '关于', h1: '领导即', serif: '服务', h1end: '。',
      lede: '我做的每一件专业工作都回到这一点上：诊断真正出错的地方，弄清它影响了谁，用不让人难堪的话说出来，并让对方比之前更有掌控感。',
      sections: [
        { label: '原则', cls: 'prose', html: P(
          '这句话有三个方向，而它们是同一种能力。',
          '<strong>领导自己。</strong> 在没有观众的时候做那些不体面的部分——测试、发布关卡、诚实的 README、对已经能跑的东西再看一遍。没有人会为此鼓掌，而它正是"完成"与"差不多完成"之间的区别。',
          '<strong>一次领导一个人。</strong> 带教与传授，本质上是克制：给出推理过程而不是答案，愿意现在慢一点，好让对方以后快一些。',
          '<strong>领导团队。</strong> 搬开挡在他们前面的东西。做主管时，工作从来不是当屋子里最能干的人，而是让这间屋子运转起来——资源、掩护、尽早处理的冲突，以及把功劳指向真正挣到它的人。',
          '服务不是技术工作柔软的边缘。它决定了这份技术工作究竟有没有抵达任何人。') },
        { label: '经历', cls: 'copy', html: '<h2>Apple Retail · 2014—2024</h2>' + P(
          '十年，五个岗位：Specialist、Technical Specialist、AppleCare 顾问、Genius，之后是马德里 Parquesur 与 Xanadú 两家店的店内体验主管。贯穿始终的是高压下的诊断——快速找到真正的故障，用眼前这个人真正在意的说法解释清楚，并且在整个过程中不失去他的信任。',
          '成千上万的人带着愤怒、困惑，或者一台装着某样东西唯一副本的死机走进来。就是在那里我学到，技术上正确的回答和真正有用的回答，未必是同一句话。',
          '当主管时我负责两家门店的运营：开关店、活动、排班、维护，以及在情况不符合任何流程时支持团队。在那里，领导意味着清除障碍，而不是下达指令。') },
        { label: '现在', cls: 'copy', html: '<h2>技术支持与开放系统</h2>' + P(
          '搬到阿伯丁之后，我全职投入 AI 系统：基于 Hermes Agent 的智能体工作流、MCP 服务器、Docker 中的自动化、自有 GPU 上的本地推理，以及部署在自己 VPS 上、由 Traefik 与 TLS 托管的应用。我最擅长的地方正是系统出错之处——排查故障模式、调试工作流，把不可预测的行为变成有文档、可依赖的东西。',
          '这和以前是同一份工作，只是对准了另一个界面。卡在机器前的人和卡在任务上的机器，需要的是同一件事：有人愿意找出真正的故障并把它写下来。<a href="{thesis}">我的论点</a>是，值得做的工具，是那些把控制权交还给使用者的工具。',
          '我在这条路上还很年轻，并且刻意公开这一点：每个项目都有源码、测试和明确的范围，并且清楚说明哪些部分是我写的。我宁愿被自己交付过的东西评判，而不是被我如何描述自己评判。') }
      ],
      skillsLabel: '技能', credentialsLabel: '资历', shortLabel: '一句话',
      short: '好的技术工作，会让人比之前更清楚、也更有掌控感。这就是全部标准。'
    }
  },

  /* ────────────────────────────────────────────────────────── thesis ── */
  thesis: {
    en: {
      title: 'Thesis: the malleable machine — Javier Ponz',
      desc: 'Why open agent primitives and a malleable operating system are converging, and why that convergence is the near future of how people work with their machines.',
      kicker: 'Thesis', h1: 'The machine should be ', serif: 'shapeable', h1end: ' by the person living in it.',
      lede: 'What I am paying attention to, and why I think it matters more than the next model release.',
      sections: [
        { label: 'The claim', cls: 'prose', html: P(
          'The interesting frontier right now is not a larger model. It is the operating system becoming malleable enough for an agent to actually live in it.',
          "Most people's computers are appliances. They are fast, sealed, and arranged the way someone else decided. You can choose a wallpaper and a default browser; you cannot change the shape of the thing. For thirty years that trade — power for safety, flexibility for polish — was mostly worth taking, because the alternative was a machine you had to maintain instead of use.",
          'Agents change the maths. An agent is only as useful as the surface it can reach. On a sealed appliance it can talk, and little else. On a machine whose parts are plain files and small tools, it can do the work.') },
        { label: 'Two directions', cls: 'prose', html:
          '<h3>From the agent side: primitives instead of products</h3>' + P('Hermes Agent and MCP take capability apart into things you can inspect — a tool, a skill, a file, a permission, a schedule. None of it is a sealed feature. A skill is a Markdown file. A tool is a small server you can read. When something goes wrong you can see where, because there is a where.') +
          '<h3>From the system side: an OS you edit</h3>' + P('Omarchy comes at the same point from the opposite end: a desktop defined by plain configuration you are expected to change, distributed as an opinionated default rather than a locked one. It calls itself an OS for the age of agents, which is exactly right, and the reason is structural rather than aesthetic — a system made of editable files is a system an agent can operate.') },
        { label: 'The convergence', cls: 'prose', html: P(
          'Put those together and you get the machine I actually want: proactive, shapeable, and legible all the way down. Not an assistant bolted onto an appliance, but an agent as a first-class inhabitant of a system whose primitives are open and belong to the person using it.',
          'This is why open weights and open primitives are a practical concern and not only a political one. You cannot have a malleable machine on top of a stack you are not allowed to look at. Whoever controls the primitives controls how far the agent can help — and if that is not the owner of the computer, the ceiling gets set somewhere else.',
          'Two things follow that I hold loosely and would like to be argued out of. First, the winning interface is probably not a chat window; it is the existing system, made addressable. Second, the skill worth having in that world is not prompting — it is understanding a system deeply enough to know which parts should be exposed, and being able to debug it when the agent gets it wrong.') },
        { label: 'Where I am in it', cls: 'prose', html: P(
          'I run this rather than theorise about it: Hermes daily, Omarchy as a daily driver, a quantised model served from my own GPU, agents in Docker on my own VPS. My conviction comes from watching them fail, which they do in ways that are specific and instructive.',
          'The work I want is at that seam — making these systems reachable and reliable for people who should not have to care how they are built.',
          'Which is the same principle I have worked to for a decade, pointed at a machine instead of a person. <a href="{about}">Leading is serving</a>: the measure of a tool, like the measure of a lead, is whether the people depending on it end up with more control than they started with. An agent that makes its owner more dependent has failed at the only thing that mattered.') }
      ],
      relatedLabel: 'Related',
      related: [
        { href: '{agents}', meta: 'Notebook', h3: 'Agents →', p: 'The working notes behind this, and the questions still open.' },
        { href: '{workbench}', meta: 'Build log', h3: 'Workbench →', p: 'What I have actually built and shipped.' }
      ]
    },
    es: {
      title: 'Tesis: la máquina moldeable — Javier Ponz',
      desc: 'Por qué los primitivos abiertos de agentes y un sistema operativo moldeable están convergiendo, y por qué esa convergencia es el futuro inmediato de cómo trabajamos con nuestras máquinas.',
      kicker: 'Tesis', h1: 'La máquina debería ser ', serif: 'moldeable', h1end: ' por quien vive dentro de ella.',
      lede: 'A qué presto atención, y por qué creo que importa más que el próximo modelo que salga.',
      sections: [
        { label: 'La tesis', cls: 'prose', html: P(
          'La frontera interesante ahora mismo no es un modelo más grande. Es que el sistema operativo se vuelva lo bastante moldeable como para que un agente pueda habitarlo de verdad.',
          'El ordenador de la mayoría de la gente es un electrodoméstico: rápido, sellado y ordenado como alguien decidió por ellos. Puedes elegir el fondo de pantalla y el navegador por defecto; no puedes cambiar la forma del aparato. Durante treinta años ese trato —potencia a cambio de seguridad, flexibilidad a cambio de acabado— compensaba, porque la alternativa era una máquina que había que mantener en vez de usar.',
          'Los agentes cambian las cuentas. Un agente sirve exactamente en la medida de la superficie que alcanza. En un aparato sellado puede conversar, y poco más. En una máquina cuyas piezas son ficheros de texto y herramientas pequeñas, puede hacer el trabajo.') },
        { label: 'Dos direcciones', cls: 'prose', html:
          '<h3>Desde el agente: primitivos en lugar de productos</h3>' + P('Hermes Agent y MCP descomponen la capacidad en cosas que puedes inspeccionar: una herramienta, una habilidad, un fichero, un permiso, una programación horaria. Nada de eso es una función sellada. Una habilidad es un fichero Markdown. Una herramienta es un servidor pequeño que puedes leer. Cuando algo falla puedes ver dónde, porque hay un dónde.') +
          '<h3>Desde el sistema: un SO que se edita</h3>' + P('Omarchy llega al mismo punto por el extremo contrario: un escritorio definido por configuración en texto plano que se espera que cambies, distribuido como un valor por defecto con criterio en vez de como algo cerrado. Se describe como un SO para la era de los agentes, y es exactamente eso; el motivo es estructural más que estético, porque un sistema hecho de ficheros editables es un sistema que un agente puede operar.') },
        { label: 'La convergencia', cls: 'prose', html: P(
          'Junta las dos cosas y sale la máquina que quiero de verdad: proactiva, moldeable y legible hasta abajo. No un asistente atornillado a un electrodoméstico, sino un agente como habitante de pleno derecho de un sistema cuyos primitivos son abiertos y pertenecen a quien lo usa.',
          'Por eso los pesos abiertos y los primitivos abiertos son un asunto práctico y no solo político. No puedes tener una máquina moldeable encima de una pila que no te dejan mirar. Quien controla los primitivos controla hasta dónde puede ayudarte el agente, y si ese alguien no es el dueño del ordenador, el techo lo pone otro.',
          'De ahí salen dos ideas que sostengo sin apretar y de las que me gustaría que me sacaran con argumentos. La primera: la interfaz que gane probablemente no sea una ventana de chat, sino el sistema que ya existe, vuelto direccionable. La segunda: la habilidad que merecerá la pena en ese mundo no es escribir prompts, sino entender un sistema lo bastante a fondo para saber qué partes conviene exponer, y saber depurarlo cuando el agente se equivoque.') },
        { label: 'Dónde estoy yo', cls: 'prose', html: P(
          'Esto lo uso, no lo teorizo: Hermes a diario, Omarchy como sistema principal, un modelo cuantizado servido desde mi propia GPU, agentes en Docker sobre un VPS mío. Mi convicción viene de verlos fallar, cosa que hacen de maneras concretas e instructivas.',
          'El trabajo que quiero está en esa costura: hacer que estos sistemas resulten accesibles y fiables para gente que no debería tener que saber cómo están hechos.',
          'Que es el mismo principio con el que he trabajado durante una década, apuntado a una máquina en vez de a una persona. <a href="{about}">Liderar es servir</a>: la medida de una herramienta, como la de un responsable, es si quien depende de ella acaba con más control del que tenía. Un agente que vuelve más dependiente a su dueño ha fallado en lo único que importaba.') }
      ],
      relatedLabel: 'Relacionado',
      related: [
        { href: '{agents}', meta: 'Cuaderno', h3: 'Agentes →', p: 'Las notas de trabajo detrás de esto, y las preguntas que siguen abiertas.' },
        { href: '{workbench}', meta: 'Registro', h3: 'Taller →', p: 'Lo que he construido y entregado de verdad.' }
      ]
    },
    zh: {
      title: '论点：可塑的机器 — Javier Ponz',
      desc: '为什么开放的智能体原语与可塑的操作系统正在汇合，以及为什么这种汇合就是人机协作的近期未来。',
      kicker: '论点', h1: '机器应当能被住在里面的人', serif: '塑形', h1end: '。',
      lede: '我在关注什么，以及为什么我认为它比下一个模型发布更重要。',
      sections: [
        { label: '主张', cls: 'prose', html: P(
          '此刻真正有意思的前沿不是更大的模型，而是操作系统变得足够可塑，让智能体真的能住进去。',
          '大多数人的电脑是家电：快、封闭，按别人替他们做的决定排布好。你可以换壁纸、换默认浏览器；你不能改变这台东西的形状。三十年来这笔交易——用自由换安全、用灵活换精致——大体上是值的，因为另一种选择是一台需要维护而不是使用的机器。',
          '智能体改变了这笔账。一个智能体的用处，取决于它能触及的界面有多大。在封闭的家电上它只能说话，几乎做不了别的。在一台由纯文本文件和小工具构成的机器上，它能真正干活。') },
        { label: '两个方向', cls: 'prose', html:
          '<h3>从智能体一侧：原语而非产品</h3>' + P('Hermes Agent 与 MCP 把能力拆成你能检视的东西——一个工具、一项技能、一个文件、一条权限、一次定时。没有一样是封死的功能。技能是一个 Markdown 文件，工具是一个你读得懂的小服务。出问题时你能看见在哪里出的，因为确实存在"哪里"。') +
          '<h3>从系统一侧：一个可以编辑的操作系统</h3>' + P('Omarchy 从相反的一端走到同一个点：桌面由纯文本配置定义，并且预期你会去改它；它以有主张的默认值发布，而不是锁死的成品。它自称是"智能体时代的操作系统"，这个说法准确，理由是结构性的而非审美性的——由可编辑文件构成的系统，才是智能体能操作的系统。') },
        { label: '汇合', cls: 'prose', html: P(
          '把两者放在一起，就得到我真正想要的机器：主动、可塑、自上而下都可读。不是一个拧在家电上的助手，而是一个在系统中享有一等公民身份的智能体，而这个系统的原语是开放的，并且属于使用它的人。',
          '这就是为什么开放权重与开放原语是现实问题，而不只是立场问题。你无法在一堆不许你查看的技术栈之上，搭出一台可塑的机器。谁控制原语，谁就决定智能体能帮你到什么程度——如果那个人不是电脑的主人，天花板就由别人来定。',
          '由此引出两点，我拿得不紧，也希望有人能把我说服过来。第一，最终胜出的界面大概不是聊天窗口，而是已经存在的系统，被变得可寻址。第二，那个世界里值得拥有的能力不是写提示词，而是把一个系统理解到足以判断哪些部分该被暴露出来，并且在智能体做错时能把它调试回来。') },
        { label: '我在其中的位置', cls: 'prose', html: P(
          '这些我在用，不是在空谈：每天用 Hermes，把 Omarchy 当主力系统，用自己的 GPU 跑量化模型，在自己的 VPS 上用 Docker 跑智能体。我的判断来自看着它们出错，而它们出错的方式往往具体且有教益。',
          '我想做的工作正在那条接缝上——让这些系统对那些本不该关心它们如何构建的人，变得可及而可靠。',
          '这和我十年来遵循的原则是同一个，只是对象从人换成了机器。<a href="{about}">领导即服务</a>：衡量一个工具，就像衡量一位主管，看的是依赖它的人最后是否比开始时更有掌控。一个让主人更依赖自己的智能体，在唯一重要的事情上失败了。') }
      ],
      relatedLabel: '相关',
      related: [
        { href: '{agents}', meta: '笔记', h3: '智能体 →', p: '这背后的工作笔记，以及仍未解决的问题。' },
        { href: '{workbench}', meta: '构建记录', h3: '工作台 →', p: '我真正做出来并交付的东西。' }
      ]
    }
  },

  /* ────────────────────────────────────────────────────────── agents ── */
  agents: {
    en: {
      title: 'Agents — Javier Ponz',
      desc: 'Notes and experiments on Hermes Agent, MCP, memory and agent workflows.',
      kicker: 'Technical lab', h1: 'Agents that leave people with ', serif: 'more agency', h1end: '.',
      lede: 'A working notebook for Hermes Agent, MCP, memory and tools. Experiments with evidence, not hype.',
      sections: [
        { label: 'Questions I am working on', cls: 'copy', html: P(
          'When does an agent genuinely reduce friction, and when is it a slower way to do something simple? What should it remember, and for how long? How do you make failure visible instead of silent? How do you keep a workflow inspectable rather than magical?',
          'I work on these through tools I actually use: an MCP server with a tested filesystem-safety layer, a skill pack of decision models, and daily operation of agent systems in Docker.') }
      ],
      relatedLabel: 'Related',
      related: [
        { href: '{thesis}', meta: 'Thesis', h3: 'The malleable machine →', p: 'Why open agent primitives and an editable OS are converging.' },
        { href: '{workbench}', meta: 'Workbench', h3: 'Projects →', p: 'The tools and pipelines behind the experiments.' },
        { href: 'https://github.com/NousResearch/hermes-agent', ext: true, meta: 'External', h3: 'Hermes Agent ↗', p: 'The official repository by Nous Research. I build with it; I do not speak for it.' }
      ]
    },
    es: {
      title: 'Agentes — Javier Ponz',
      desc: 'Notas y experimentos sobre Hermes Agent, MCP, memoria y flujos de trabajo con agentes.',
      kicker: 'Laboratorio técnico', h1: 'Agentes que dejan a la gente con ', serif: 'más capacidad de decidir', h1end: '.',
      lede: 'Un cuaderno de trabajo sobre Hermes Agent, MCP, memoria y herramientas. Experimentos con pruebas, no promesas.',
      sections: [
        { label: 'Preguntas en las que trabajo', cls: 'copy', html: P(
          '¿Cuándo reduce fricción un agente de verdad, y cuándo es una forma más lenta de hacer algo sencillo? ¿Qué debería recordar, y durante cuánto tiempo? ¿Cómo se hace visible un fallo en vez de silencioso? ¿Cómo se mantiene un flujo inspeccionable en lugar de mágico?',
          'Trabajo estas preguntas con herramientas que uso de verdad: un servidor MCP con una capa de seguridad de ficheros probada, un paquete de modelos de decisión, y el uso diario de sistemas de agentes en Docker.') }
      ],
      relatedLabel: 'Relacionado',
      related: [
        { href: '{thesis}', meta: 'Tesis', h3: 'La máquina moldeable →', p: 'Por qué los primitivos abiertos de agentes y un SO editable están convergiendo.' },
        { href: '{workbench}', meta: 'Taller', h3: 'Proyectos →', p: 'Las herramientas y tuberías detrás de los experimentos.' },
        { href: 'https://github.com/NousResearch/hermes-agent', ext: true, meta: 'Externo', h3: 'Hermes Agent ↗', p: 'El repositorio oficial de Nous Research. Construyo con él; no hablo en su nombre.' }
      ]
    },
    zh: {
      title: '智能体 — Javier Ponz',
      desc: '关于 Hermes Agent、MCP、记忆与智能体工作流的笔记与实验。',
      kicker: '技术实验室', h1: '让人拥有', serif: '更多主动权', h1end: '的智能体。',
      lede: '一本关于 Hermes Agent、MCP、记忆与工具的工作笔记。用证据做实验，不吹嘘。',
      sections: [
        { label: '我在琢磨的问题', cls: 'copy', html: P(
          '智能体在什么时候真正减少了摩擦，又在什么时候只是把简单的事做得更慢？它应该记住什么，记多久？如何让失败变得可见而不是悄无声息？如何让工作流保持可检视，而不是变成魔法？',
          '我通过自己真正在用的工具来回答这些问题：一个带有经过测试的文件系统安全层的 MCP 服务器、一套决策模型技能包，以及每天在 Docker 中运行的智能体系统。') }
      ],
      relatedLabel: '相关',
      related: [
        { href: '{thesis}', meta: '论点', h3: '可塑的机器 →', p: '为什么开放的智能体原语与可编辑的操作系统正在汇合。' },
        { href: '{workbench}', meta: '工作台', h3: '项目 →', p: '实验背后的工具与流水线。' },
        { href: 'https://github.com/NousResearch/hermes-agent', ext: true, meta: '外部', h3: 'Hermes Agent ↗', p: 'Nous Research 的官方仓库。我用它构建，但不代表它发言。' }
      ]
    }
  },

  /* ───────────────────────────────────────────────────────── contact ── */
  contact: {
    en: {
      title: 'Contact — Javier Ponz',
      desc: 'How to reach Javier Ponz: email, GitHub, LinkedIn.',
      kicker: 'Contact', h1: 'Make it a ', serif: 'thoughtful', h1end: ' message.',
      lede: 'Email is best for context. GitHub is best for the work. LinkedIn is best for professional history.',
      coordsLabel: 'Coordinates',
      rows: [
        { time: 'Email', h3: 'nerion89@gmail.com', href: 'mailto:nerion89@gmail.com', p: 'For potential work, collaboration or a considered question.' },
        { time: 'GitHub', h3: 'github.com/ponzgpt ↗', href: 'https://github.com/ponzgpt', ext: true, p: 'Projects, experiments and the source trail.' },
        { time: 'LinkedIn', h3: 'javierponz ↗', href: 'https://www.linkedin.com/in/javierponz', ext: true, p: 'Professional context and public connections.' }
      ]
    },
    es: {
      title: 'Contacto — Javier Ponz',
      desc: 'Cómo localizar a Javier Ponz: correo, GitHub, LinkedIn.',
      kicker: 'Contacto', h1: 'Que sea un mensaje ', serif: 'meditado', h1end: '.',
      lede: 'El correo es lo mejor para dar contexto. GitHub, para ver el trabajo. LinkedIn, para la trayectoria profesional.',
      coordsLabel: 'Coordenadas',
      rows: [
        { time: 'Correo', h3: 'nerion89@gmail.com', href: 'mailto:nerion89@gmail.com', p: 'Para un puesto, una colaboración o una pregunta pensada.' },
        { time: 'GitHub', h3: 'github.com/ponzgpt ↗', href: 'https://github.com/ponzgpt', ext: true, p: 'Proyectos, experimentos y el rastro del código.' },
        { time: 'LinkedIn', h3: 'javierponz ↗', href: 'https://www.linkedin.com/in/javierponz', ext: true, p: 'Contexto profesional y contactos públicos.' }
      ]
    },
    zh: {
      title: '联系 — Javier Ponz',
      desc: '如何联系 Javier Ponz：邮件、GitHub、LinkedIn。',
      kicker: '联系', h1: '写一封', serif: '想过的', h1end: '信。',
      lede: '要交代来龙去脉，用邮件最好。要看作品，去 GitHub。要看职业履历，去 LinkedIn。',
      coordsLabel: '坐标',
      rows: [
        { time: '邮件', h3: 'nerion89@gmail.com', href: 'mailto:nerion89@gmail.com', p: '关于工作机会、合作，或一个认真想过的问题。' },
        { time: 'GitHub', h3: 'github.com/ponzgpt ↗', href: 'https://github.com/ponzgpt', ext: true, p: '项目、实验，以及源码的痕迹。' },
        { time: 'LinkedIn', h3: 'javierponz ↗', href: 'https://www.linkedin.com/in/javierponz', ext: true, p: '职业背景与公开人脉。' }
      ]
    }
  },

  /* ───────────────────────────────────────────────────────────── now ── */
  now: {
    en: {
      title: 'Now — Javier Ponz',
      desc: 'What Javier Ponz is working on and paying attention to right now.',
      kicker: 'Now', h1: 'What has my ', serif: 'attention', h1end: '.',
      lede: 'This page is a snapshot, not a promise. It changes as the work changes.',
      focusLabel: 'Current focus',
      cards: [
        { meta: '01', h3: 'Hermes & Omarchy', p: 'The two things I am obsessed with. An agent harness whose skills are files I can edit, and a desktop that expects to be edited rather than tolerated. They are converging on the same machine from opposite ends.' },
        { meta: '02', h3: 'Owning the stack', p: 'Local inference on my own GPU, a Proxmox homelab, moving off Google services, reading up on OSINT, GrapheneOS next. Slow, occasionally inconvenient, not stopping.' },
        { meta: '03', h3: 'Machines Do It Better', p: 'An early-stage solo practice helping small businesses and individuals adopt agentic AI where it genuinely saves time. No clients yet; that is the bet, stated as a bet.' }
      ],
      studyLabel: 'Studying', studyH2: 'Depth before theatre.',
      study: 'Artificial Intelligence and Full Stack development at Universidad Rey Juan Carlos, via Racks University. Alongside it: evaluation, web applications, APIs, Docker, and the discipline of making claims that survive inspection.',
      openLabel: 'Open to',
      open: 'Technical support, customer success and customer-facing technical roles — the work where somebody has to be technical, patient and a competent writer at once. Also junior developer and agent-operations work. Remote suits me; I am happy to travel and would consider relocating. <a href="{contact}">Get in touch</a>.'
    },
    es: {
      title: 'Ahora — Javier Ponz',
      desc: 'En qué trabaja y a qué presta atención Javier Ponz ahora mismo.',
      kicker: 'Ahora', h1: 'Qué me tiene ', serif: 'ocupado', h1end: '.',
      lede: 'Esta página es una instantánea, no una promesa. Cambia según cambia el trabajo.',
      focusLabel: 'Foco actual',
      cards: [
        { meta: '01', h3: 'Hermes y Omarchy', p: 'Mis dos obsesiones actuales. Un armazón de agentes cuyas habilidades son ficheros que puedo editar, y un escritorio que espera que lo edites en vez de que lo aguantes. Están convergiendo en la misma máquina desde extremos opuestos.' },
        { meta: '02', h3: 'Ser dueño de la pila', p: 'Inferencia local en mi propia GPU, un homelab con Proxmox, salir de los servicios de Google, aprender OSINT y, después, GrapheneOS. Lento, a ratos incómodo, y no pienso parar.' },
        { meta: '03', h3: 'Machines Do It Better', p: 'Una práctica en solitario, en fase temprana, para ayudar a pequeñas empresas y particulares a adoptar IA con agentes allí donde de verdad ahorra tiempo. Todavía sin clientes; esa es la apuesta, dicha como apuesta.' }
      ],
      studyLabel: 'Estudios', studyH2: 'Profundidad antes que espectáculo.',
      study: 'Inteligencia Artificial y desarrollo Full Stack en la Universidad Rey Juan Carlos, a través de Racks University. En paralelo: evaluación, aplicaciones web, API, Docker y la disciplina de hacer afirmaciones que aguanten una comprobación.',
      openLabel: 'Busco',
      open: 'Soporte técnico, atención al cliente y puestos técnicos de cara al usuario: el trabajo en el que alguien tiene que ser técnico, paciente y buen redactor a la vez. También desarrollo júnior y operación de agentes. El remoto me encaja; viajo sin problema y me plantearía mudarme. <a href="{contact}">Escríbeme</a>.'
    },
    zh: {
      title: '现在 — Javier Ponz',
      desc: 'Javier Ponz 当下在做什么、在关注什么。',
      kicker: '现在', h1: '什么占据了我的', serif: '注意力', h1end: '。',
      lede: '这一页是快照，不是承诺。工作变了，它就会变。',
      focusLabel: '当前重心',
      cards: [
        { meta: '01', h3: 'Hermes 与 Omarchy', p: '我目前着迷的两样东西。一个智能体框架，它的技能就是我能直接编辑的文件；一个桌面系统，它期待你去改它，而不是忍受它。它们正从相反的两端汇向同一台机器。' },
        { meta: '02', h3: '把技术栈握在自己手里', p: '在自己的 GPU 上做本地推理，用 Proxmox 搭家庭实验室，逐步离开谷歌服务，学习 OSINT，下一步是 GrapheneOS。慢，偶尔不方便，但不会停。' },
        { meta: '03', h3: 'Machines Do It Better', p: '一家处于早期阶段的个人工作室，帮助小企业和个人在真正能省时间的地方引入智能体。目前还没有客户；这是一个赌注，我把它当赌注说出来。' }
      ],
      studyLabel: '在学', studyH2: '先有深度，再谈排场。',
      study: '在胡安卡洛斯国王大学（Universidad Rey Juan Carlos）通过 Racks University 学习人工智能与全栈开发。同时在学：评测、Web 应用、API、Docker，以及"让自己的说法经得起核查"这项纪律。',
      openLabel: '求职方向',
      open: '技术支持、客户成功，以及面向客户的技术岗位——那种需要同时懂技术、有耐心、还能把话写清楚的工作。也接受初级开发与智能体运维。远程很适合我；我乐意出差，也会考虑搬迁。<a href="{contact}">联系我</a>。'
    }
  },

  /* ─────────────────────────────────────────────────────────── index ── */
  home: {
    en: {
      title: 'Javier Ponz — technical support & agent operations',
      desc: 'Javier Ponz — technology, service, agents and field notes.',
      kicker: 'Aberdeen, Scotland',
      tagline: 'I build agent tooling and small products that ', taglineSerif: 'actually ship', taglineEnd: '.',
      lede: 'Ten years diagnosing hard technical problems for people at Apple Retail, now building AI systems and full stack applications — deployed, tested, and running in production. Same job, different surface.',
      overviewLabel: '01 / Overview', overviewH2: 'Ten years between people and their machines.',
      overview: P(
        'A decade at Apple Retail taught me to diagnose failure fast, work in ambiguity, and translate between what the engineer means, what the sale promised, and what the person actually has on their screen — first at the counter, later leading the teams doing it. I now apply that to AI systems: agent workflows, automation, and applications I take all the way to production on infrastructure I run myself.',
        'I am studying Artificial Intelligence and Full Stack development at Universidad Rey Juan Carlos, and I ship real things while I do it — this site and a live web app, both written and deployed by me, plus agent tooling I specified and had an agent build. The <a href="{workbench}">workbench</a> says which is which. Everything here has source code you can read.'),
      tags: ['leading is serving', 'Hermes Agent', 'Omarchy', 'local inference', 'agent workflows', 'Docker & deployment', 'technical troubleshooting', 'MCP', 'building in public'],
      exploreLabel: '02 / Explore',
      cards: [
        { href: '{about}', meta: 'Background', h3: 'About & experience →', p: 'Apple Retail, the move into AI systems, and the credentials behind it.' },
        { href: '{workbench}', meta: 'Build log', h3: 'Workbench →', p: 'Projects and repositories, with scope and status stated plainly.' },
        { href: '{memento}', meta: 'Case study', h3: 'Shipping to production →', p: 'How a small app got from idea to a live, verified deployment.' },
        { href: '{thesis}', meta: 'Thesis', h3: 'The malleable machine →', p: 'Open agent primitives, an editable OS, and why they are converging.' }
      ],
      workLabel: '03 / Selected work'
    },
    es: {
      title: 'Javier Ponz — soporte técnico y operación de agentes',
      desc: 'Javier Ponz — tecnología, servicio, agentes y notas de campo.',
      kicker: 'Aberdeen, Escocia',
      tagline: 'Construyo herramientas de agentes y productos pequeños que ', taglineSerif: 'llegan a producción', taglineEnd: '.',
      lede: 'Diez años diagnosticando problemas técnicos difíciles para personas en Apple Retail; ahora construyo sistemas de IA y aplicaciones full stack, desplegados, probados y funcionando en producción. El mismo trabajo, otra superficie.',
      overviewLabel: '01 / Panorama', overviewH2: 'Diez años entre las personas y sus máquinas.',
      overview: P(
        'Una década en Apple Retail me enseñó a diagnosticar fallos rápido, a moverme en la ambigüedad y a traducir entre lo que quiere decir el ingeniero, lo que prometió la venta y lo que la persona tiene de verdad en su pantalla: primero en el mostrador, después dirigiendo a los equipos que lo hacían. Ahora aplico eso a sistemas de IA: flujos con agentes, automatización y aplicaciones que llevo hasta producción sobre infraestructura que administro yo.',
        'Estudio Inteligencia Artificial y desarrollo Full Stack en la Universidad Rey Juan Carlos, y mientras tanto entrego cosas reales: este sitio y una aplicación web en producción, escritos y desplegados por mí, además de utilidades de agentes que especifiqué yo y escribió un agente. El <a href="{workbench}">taller</a> dice cuál es cuál. Todo lo de aquí tiene código que puedes leer.'),
      tags: ['liderar es servir', 'Hermes Agent', 'Omarchy', 'inferencia local', 'flujos con agentes', 'Docker y despliegue', 'diagnóstico técnico', 'MCP', 'construir en público'],
      exploreLabel: '02 / Explorar',
      cards: [
        { href: '{about}', meta: 'Trayectoria', h3: 'Perfil y experiencia →', p: 'Apple Retail, el salto a los sistemas de IA y las titulaciones que hay detrás.' },
        { href: '{workbench}', meta: 'Registro', h3: 'Taller →', p: 'Proyectos y repositorios, con el alcance y el estado dichos sin adornos.' },
        { href: '{memento}', meta: 'Caso práctico', h3: 'Llevarlo a producción →', p: 'Cómo una aplicación pequeña pasó de idea a un despliegue verificado y en línea.' },
        { href: '{thesis}', meta: 'Tesis', h3: 'La máquina moldeable →', p: 'Primitivos abiertos de agentes, un SO editable, y por qué convergen.' }
      ],
      workLabel: '03 / Trabajo seleccionado'
    },
    zh: {
      title: 'Javier Ponz — 技术支持与智能体运维',
      desc: 'Javier Ponz — 技术、服务、智能体与实地笔记。',
      kicker: '苏格兰，阿伯丁',
      tagline: '我做智能体工具，以及真的能', taglineSerif: '交付上线', taglineEnd: '的小产品。',
      lede: '在 Apple Retail 为人们诊断了十年棘手的技术问题，现在构建 AI 系统与全栈应用——已部署、经过测试、跑在生产环境里。同一份工作，换了一个界面。',
      overviewLabel: '01 / 概览', overviewH2: '在人与他们的机器之间的十年。',
      overview: P(
        '在 Apple Retail 的十年教会我快速定位故障、在模糊中工作，并在三种说法之间做翻译：工程师的意思、销售的承诺，以及这个人屏幕上真正显示的东西。先是在柜台前，后来是带着做这件事的团队。现在我把这些用在 AI 系统上：智能体工作流、自动化，以及由我自己维护的基础设施一路送上生产环境的应用。',
        '我在胡安卡洛斯国王大学学习人工智能与全栈开发，同时交付真实的东西——这个网站和一个线上 Web 应用，都由我编写并部署；此外还有由我定规格、由智能体写出来的工具。<a href="{workbench}">工作台</a>会说明哪个是哪个。这里的一切都有你可以读的源码。'),
      tags: ['领导即服务', 'Hermes Agent', 'Omarchy', '本地推理', '智能体工作流', 'Docker 与部署', '技术排障', 'MCP', '公开地构建'],
      exploreLabel: '02 / 浏览',
      cards: [
        { href: '{about}', meta: '背景', h3: '关于与经历 →', p: 'Apple Retail、转向 AI 系统的过程，以及背后的资历。' },
        { href: '{workbench}', meta: '构建记录', h3: '工作台 →', p: '项目与仓库，范围和状态都直说。' },
        { href: '{memento}', meta: '案例', h3: '送上生产环境 →', p: '一个小应用如何从想法走到线上并通过验证。' },
        { href: '{thesis}', meta: '论点', h3: '可塑的机器 →', p: '开放的智能体原语、可编辑的操作系统，以及它们为何汇合。' }
      ],
      workLabel: '03 / 精选作品'
    }
  },

  /* ─────────────────────────────────────────────────────── workbench ── */
  workbench: {
    en: {
      title: 'Workbench — Javier Ponz',
      desc: 'Projects, repositories and shipped work by Javier Ponz, with scope and status stated plainly.',
      kicker: 'Workbench', h1: 'Things I am ', serif: 'making', h1end: '.',
      lede: 'What I run every day, and what I have made. The two are listed separately on purpose, and each project says who wrote it.',
      runningLabel: 'Running daily', projectsLabel: 'Projects', productionLabel: 'In production',
      cap1: 'Memento Mori — live at memento.technoir.cloud',
      cap2: 'Hermes Agent Site — one of six selectable skins',
      deepLabel: 'Deep dive', deepH2: 'How one of them got shipped.',
      deep: 'Memento Mori went from an idea to a live deployment with release gates, cross-platform CI and an immutable-image rollback path. <a href="{memento}">Read the case study →</a>',
      scopeLabel: 'Scope note',
      scope: 'These are personal projects and learning artefacts, built and maintained by me. They are not client deliverables.'
    },
    es: {
      title: 'Taller — Javier Ponz',
      desc: 'Proyectos, repositorios y trabajo entregado por Javier Ponz, con el alcance y el estado dichos sin adornos.',
      kicker: 'Taller', h1: 'Cosas que estoy ', serif: 'haciendo', h1end: '.',
      lede: 'Lo que uso a diario y lo que he hecho. Van en listas separadas a propósito, y cada proyecto dice quién lo escribió.',
      runningLabel: 'Uso diario', projectsLabel: 'Proyectos', productionLabel: 'En producción',
      cap1: 'Memento Mori — en línea en memento.technoir.cloud',
      cap2: 'Hermes Agent Site — uno de sus seis aspectos seleccionables',
      deepLabel: 'En detalle', deepH2: 'Cómo se entregó uno de ellos.',
      deep: 'Memento Mori pasó de idea a despliegue en línea con puertas de publicación, integración continua multiplataforma y una vía de reversión por imagen inmutable. <a href="{memento}">Lee el caso práctico →</a>',
      scopeLabel: 'Nota de alcance',
      scope: 'Son proyectos personales y material de aprendizaje, construidos y mantenidos por mí. No son entregas para clientes.'
    },
    zh: {
      title: '工作台 — Javier Ponz',
      desc: 'Javier Ponz 的项目、仓库与已交付的工作，范围与状态直说。',
      kicker: '工作台', h1: '我正在', serif: '做', h1end: '的东西。',
      lede: '我每天在用什么，以及我做过什么。两者刻意分开列出，并且每个项目都说明是谁写的。',
      runningLabel: '每天在用', projectsLabel: '项目', productionLabel: '生产环境',
      cap1: 'Memento Mori — 线上地址 memento.technoir.cloud',
      cap2: 'Hermes Agent Site — 六套可选外观之一',
      deepLabel: '深入一例', deepH2: '其中一个是怎么交付的。',
      deep: 'Memento Mori 从一个想法走到线上部署，带有发布关卡、跨平台 CI，以及基于不可变镜像的回滚路径。<a href="{memento}">阅读案例 →</a>',
      scopeLabel: '范围说明',
      scope: '这些是个人项目与学习产物，由我构建和维护，不是交付给客户的成果。'
    }
  },

  /* ──────────────────────────────────────────────────────── timeline ── */
  timeline: {
    en: { title: 'Timeline — Javier Ponz', desc: 'A concise chronology of Javier Ponz.', kicker: 'Timeline', h1: 'A work in ', serif: 'progress', h1end: '.', lede: 'A deliberately concise chronology. The current chapter is still being written.', label: 'Chronology' },
    es: { title: 'Cronología — Javier Ponz', desc: 'Una cronología breve de Javier Ponz.', kicker: 'Cronología', h1: 'Un trabajo ', serif: 'en curso', h1end: '.', lede: 'Una cronología deliberadamente breve. El capítulo actual todavía se está escribiendo.', label: 'Cronología' },
    zh: { title: '时间线 — Javier Ponz', desc: 'Javier Ponz 的简明年表。', kicker: '时间线', h1: '一件', serif: '仍在进行', h1end: '的工作。', lede: '一份刻意保持简短的年表。当前这一章还在写。', label: '年表' }
  },

  /* ────────────────────────────────────────────────────────────── cv ── */
  cv: {
    en: {
      title: 'CV — Javier Ponz',
      desc: 'Curriculum vitae of Javier Ponz Prado: technical support, customer success and agent operations, and ten years of technical service at Apple Retail.',
      kicker: 'Curriculum vitae', download: '↓ Download CV (PDF)',
      profile: 'Profile', selected: 'Selected work', experience: 'Experience',
      education: 'Education', skills: 'Skills', contact: 'Contact', more: 'More',
      moreText: 'A shorter chronology is on the <a href="{timeline}">timeline</a>. The PDF above is generated from the same source as this page, so the two never disagree. The PDF is in English, as the document employers usually forward.'
    },
    es: {
      title: 'CV — Javier Ponz',
      desc: 'Currículum de Javier Ponz Prado: soporte técnico, atención al cliente y operación de agentes, además de diez años de servicio técnico en Apple Retail.',
      kicker: 'Currículum', download: '↓ Descargar el CV (PDF)',
      profile: 'Perfil', selected: 'Trabajo seleccionado', experience: 'Experiencia',
      education: 'Formación', skills: 'Competencias', contact: 'Contacto', more: 'Más',
      moreText: 'Hay una cronología más breve en la <a href="{timeline}">línea de tiempo</a>. El PDF de arriba se genera desde la misma fuente que esta página, así que nunca se contradicen. El PDF está en inglés, que es el documento que las empresas suelen reenviar.'
    },
    zh: {
      title: '简历 — Javier Ponz',
      desc: 'Javier Ponz Prado 的简历：技术支持、客户成功与智能体运维，以及在 Apple Retail 的十年技术服务经历。',
      kicker: '简历', download: '↓ 下载简历（PDF）',
      profile: '简介', selected: '精选作品', experience: '工作经历',
      education: '教育与证书', skills: '技能', contact: '联系方式', more: '更多',
      moreText: '在<a href="{timeline}">时间线</a>上有一份更简短的年表。上面的 PDF 与本页由同一份数据生成，因此两者永远不会互相矛盾。PDF 为英文版，因为这是雇主通常转发的文件。'
    }
  },

  /* ──────────────────────────────────────────────────── memento-mori ── */
  memento: {
    en: {
      title: 'Case study: shipping Memento Mori — Javier Ponz',
      desc: 'How Memento Mori went from an idea to a verified production deployment: the decisions, the trade-offs and what I would do differently.',
      kicker: 'Case study', h1: 'Getting a small app to ', serif: 'production', h1end: '.',
      lede: 'Memento Mori is a Spanish-language web app that turns population life-expectancy data into perspective and one intentional action for today. This is how it got from an idea to something running on a real domain, with real release gates.',
      appLabel: 'The app', caption: 'The landing view at memento.technoir.cloud',
      linksLabel: 'Links',
      links: [
        { time: 'Live', h3: 'memento.technoir.cloud ↗', href: 'https://memento.technoir.cloud/', p: 'The deployed application.' },
        { time: 'Source', h3: 'github.com/ponzgpt/memento-mori ↗', href: 'https://github.com/ponzgpt/memento-mori', p: 'Apache-2.0, with the release tooling described below.' }
      ],
      sections: [
        { label: 'The problem', cls: 'prose', html: P(
          'People know time is finite, but the idea stays abstract, and abstract limits are easy to postpone around. The loud task wins, the meaningful conversation moves to next month, and one ordinary day feels interchangeable with any other.',
          'I wanted something that made the limit legible without pretending to predict anything about a specific person. That constraint — <em>useful without overclaiming</em> — drove most of the decisions that followed.') },
        { label: 'What it does', cls: 'prose', html: P(
          'You enter a birth date and a country reference. The app shows a central horizon drawn from World Bank life-expectancy data, with an explicit seven-year margin on each side, remaining years, weeks and days, and a 100-year life grid. Then it asks for one concrete intention for today.',
          'The uncertainty is deliberately visible. A single confident date would have been easier to build and would have been a lie.') },
        { label: 'Decisions', cls: 'prose', html:
          '<h3>No backend, no accounts, no analytics</h3>' + P('The birth date and the intention never leave the browser. Everything is in local storage; the server only sees ordinary requests for static files. This removed an entire category of work — auth, a database, a privacy policy with teeth — and it was the right call for a tool that handles something this personal. The copy-to-clipboard summary deliberately excludes the birth date.') +
          '<h3>Zero runtime dependencies</h3>' + P('The app is plain HTML, CSS and ES modules with no build step. The whole thing can be opened from a single file. This is not purity for its own sake: it means the production artifact is a directory of static files, and there is nothing to patch when a transitive dependency has a bad week.') +
          '<h3>Docker, nginx and Traefik on a VPS I already run</h3>' + P('The VPS and the domain already existed, so this path added no new subscription and no new vendor. A free static host would also have worked; I chose the container path because I wanted the deployment itself to be part of what I was learning. Each release is an immutable image tag, Traefik owns routing and certificate renewal separately from the app container, and rollback is redeploying the previous tag.') },
        { label: 'Release gates', cls: 'prose', html: P(
          'The part I am most glad about is not the app, it is what stands between the app and production. A single command, <code>npm run verify</code>, runs the whole gate: unit tests on the calculation core, feature-story checks, a lint pass, a web smoke check, installer checks, version-consistency checks across the manifest files, and a Waybar module compile.',
          'The version check exists because I drifted once — the package version, the release manifest and the changelog disagreed, and I only noticed by accident. Making that a failing check rather than a habit was the fix.',
          'The same gate runs in GitHub Actions on Linux, macOS and Windows, so a green local run is not the only evidence.') },
        { label: 'What I would do differently', cls: 'prose', html:
          '<ul><li><strong>Deploy earlier.</strong> The first real deployment surfaced things that local preview never would have. I should have put an ugly version on the domain in week one and iterated against the real thing.</li><li><strong>Decide the product boundary sooner.</strong> The project started as a status-bar widget and became a web app. Both versions exist in the repository\'s history. The pivot was correct, but I carried the widget framing longer than the evidence supported.</li><li><strong>Write the honest scope note first.</strong> The current README states plainly what the app is not — not medical, actuarial, or a prediction about an individual. Writing that early would have made several design decisions obvious instead of arriving at them by iteration.</li></ul>' }
      ],
      scopeLabel: 'Scope note',
      scope: 'This is a personal project. It is a reflective aid built on population averages, not medical, legal, actuarial or mental-health advice, and it makes no claim about any individual.'
    },
    es: {
      title: 'Caso práctico: entregar Memento Mori — Javier Ponz',
      desc: 'Cómo Memento Mori pasó de idea a un despliegue verificado en producción: las decisiones, las renuncias y qué haría distinto.',
      kicker: 'Caso práctico', h1: 'Llevar una aplicación pequeña a ', serif: 'producción', h1end: '.',
      lede: 'Memento Mori es una aplicación web en español que convierte datos de esperanza de vida poblacional en perspectiva y en una acción concreta para hoy. Esto es cómo pasó de idea a algo funcionando en un dominio real, con puertas de publicación reales.',
      appLabel: 'La aplicación', caption: 'La vista inicial en memento.technoir.cloud',
      linksLabel: 'Enlaces',
      links: [
        { time: 'En línea', h3: 'memento.technoir.cloud ↗', href: 'https://memento.technoir.cloud/', p: 'La aplicación desplegada.' },
        { time: 'Código', h3: 'github.com/ponzgpt/memento-mori ↗', href: 'https://github.com/ponzgpt/memento-mori', p: 'Apache-2.0, con las herramientas de publicación descritas abajo.' }
      ],
      sections: [
        { label: 'El problema', cls: 'prose', html: P(
          'La gente sabe que el tiempo es finito, pero la idea se queda abstracta, y con los límites abstractos es fácil ir dando largas. Gana la tarea que grita, la conversación importante se pasa al mes que viene, y un día corriente parece intercambiable con cualquier otro.',
          'Quería algo que hiciera legible ese límite sin fingir que predice nada sobre una persona concreta. Esa restricción —<em>útil sin prometer de más</em>— guio casi todas las decisiones siguientes.') },
        { label: 'Qué hace', cls: 'prose', html: P(
          'Introduces una fecha de nacimiento y un país de referencia. La aplicación muestra un horizonte central calculado con datos de esperanza de vida del Banco Mundial, con un margen explícito de siete años a cada lado, los años, semanas y días restantes, y una cuadrícula de cien años de vida. Después te pide una intención concreta para hoy.',
          'La incertidumbre se ve a propósito. Una única fecha rotunda habría sido más fácil de construir y habría sido mentira.') },
        { label: 'Decisiones', cls: 'prose', html:
          '<h3>Sin servidor, sin cuentas, sin analítica</h3>' + P('La fecha de nacimiento y la intención no salen nunca del navegador. Todo vive en el almacenamiento local; el servidor solo ve peticiones normales de ficheros estáticos. Eso eliminó una categoría entera de trabajo —autenticación, base de datos, una política de privacidad con consecuencias— y era la decisión correcta para una herramienta que maneja algo tan personal. El resumen que se copia al portapapeles excluye la fecha de nacimiento a propósito.') +
          '<h3>Cero dependencias en ejecución</h3>' + P('La aplicación es HTML, CSS y módulos ES sin ningún paso de compilación. Se puede abrir entera desde un solo fichero. No es purismo por el purismo: significa que el artefacto de producción es un directorio de ficheros estáticos, y que no hay nada que parchear cuando una dependencia transitiva tiene una mala semana.') +
          '<h3>Docker, nginx y Traefik sobre un VPS que ya tenía</h3>' + P('El VPS y el dominio ya existían, así que este camino no añadió ninguna suscripción ni ningún proveedor nuevo. Un alojamiento estático gratuito también habría valido; elegí la vía de contenedores porque quería que el despliegue formara parte de lo que estaba aprendiendo. Cada publicación es una etiqueta de imagen inmutable, Traefik se ocupa del enrutado y la renovación de certificados aparte del contenedor de la aplicación, y revertir consiste en volver a desplegar la etiqueta anterior.') },
        { label: 'Puertas de publicación', cls: 'prose', html: P(
          'De lo que más contento estoy no es de la aplicación, sino de lo que se interpone entre la aplicación y producción. Un solo comando, <code>npm run verify</code>, ejecuta la puerta entera: pruebas unitarias del núcleo de cálculo, comprobaciones de historias de usuario, análisis de estilo, una prueba de humo en web, comprobaciones del instalador, verificación de coherencia de versiones entre los ficheros de manifiesto y la compilación de un módulo de Waybar.',
          'La comprobación de versiones existe porque una vez se me descoordinaron: la versión del paquete, el manifiesto de publicación y el registro de cambios decían cosas distintas, y me di cuenta de casualidad. Convertir eso en una comprobación que falla, en vez de en una costumbre, fue el arreglo.',
          'La misma puerta se ejecuta en GitHub Actions sobre Linux, macOS y Windows, así que una ejecución local en verde no es la única prueba.') },
        { label: 'Qué haría distinto', cls: 'prose', html:
          '<ul><li><strong>Desplegar antes.</strong> El primer despliegue real sacó a la luz cosas que la vista previa local no habría mostrado nunca. Debería haber puesto una versión fea en el dominio la primera semana e ir iterando contra lo real.</li><li><strong>Decidir antes el límite del producto.</strong> El proyecto empezó como un widget de barra de estado y acabó siendo una aplicación web. Las dos versiones están en el historial del repositorio. El giro fue correcto, pero arrastré el planteamiento de widget más tiempo del que las pruebas justificaban.</li><li><strong>Escribir primero la nota de alcance honesta.</strong> El README actual dice sin rodeos lo que la aplicación no es: ni médica, ni actuarial, ni una predicción sobre nadie en concreto. Haber escrito eso pronto habría hecho evidentes varias decisiones de diseño a las que llegué iterando.</li></ul>' }
      ],
      scopeLabel: 'Nota de alcance',
      scope: 'Es un proyecto personal. Es una ayuda para la reflexión construida sobre medias poblacionales; no es consejo médico, jurídico, actuarial ni de salud mental, y no afirma nada sobre ninguna persona concreta.'
    },
    zh: {
      title: '案例：把 Memento Mori 送上线 — Javier Ponz',
      desc: 'Memento Mori 如何从一个想法走到经过验证的生产部署：决策、取舍，以及我会怎样重做。',
      kicker: '案例', h1: '把一个小应用送上', serif: '生产环境', h1end: '。',
      lede: 'Memento Mori 是一个西班牙语 Web 应用，它把人口预期寿命数据转化为一种视角，以及今天的一个具体行动。以下是它如何从想法变成跑在真实域名上、并带有真实发布关卡的东西。',
      appLabel: '应用', caption: 'memento.technoir.cloud 的首屏',
      linksLabel: '链接',
      links: [
        { time: '线上', h3: 'memento.technoir.cloud ↗', href: 'https://memento.technoir.cloud/', p: '已部署的应用。' },
        { time: '源码', h3: 'github.com/ponzgpt/memento-mori ↗', href: 'https://github.com/ponzgpt/memento-mori', p: 'Apache-2.0，包含下文描述的发布工具。' }
      ],
      sections: [
        { label: '问题', cls: 'prose', html: P(
          '人们知道时间有限，但这个念头始终抽象，而抽象的界限很容易被绕过去拖延。吵闹的任务赢了，重要的谈话推到下个月，某个平常的一天感觉和任何一天都可以互换。',
          '我想要一个能让这条界限变得可读的东西，同时不假装能预测任何具体的人。这条约束——<em>有用但不夸口</em>——决定了之后大部分的选择。') },
        { label: '它做什么', cls: 'prose', html: P(
          '你输入出生日期和一个国家参照。应用会显示一条依据世界银行预期寿命数据画出的中心线，两侧各有明确标出的七年误差区间，剩余的年、周、天数，以及一张百年人生网格。然后它请你为今天写下一个具体的意图。',
          '不确定性是刻意可见的。给出一个笃定的日期会更好做，也会是谎言。') },
        { label: '决策', cls: 'prose', html:
          '<h3>没有后端、没有账号、没有分析</h3>' + P('出生日期和意图从不离开浏览器。一切都在本地存储里；服务器只看到对静态文件的普通请求。这去掉了一整类工作——鉴权、数据库、一份真有约束力的隐私政策——对一个处理如此私人之事的工具来说，这是正确的决定。复制到剪贴板的摘要刻意不含出生日期。') +
          '<h3>运行时零依赖</h3>' + P('应用是纯 HTML、CSS 和 ES 模块，没有构建步骤，整个东西可以从单个文件打开。这不是为纯粹而纯粹：它意味着生产产物就是一个静态文件目录，当某个间接依赖出事的那一周，你没有东西需要打补丁。') +
          '<h3>Docker、nginx 与 Traefik，跑在我本来就有的 VPS 上</h3>' + P('VPS 和域名本来就在，所以这条路没有新增任何订阅或供应商。用免费的静态托管也可以；我选容器这条路，是因为我想让部署本身成为学习的一部分。每次发布都是一个不可变的镜像标签，Traefik 独立于应用容器负责路由与证书续期，回滚就是重新部署上一个标签。') },
        { label: '发布关卡', cls: 'prose', html: P(
          '我最满意的部分不是应用，而是横在应用与生产环境之间的东西。一条命令 <code>npm run verify</code> 跑完整道关卡：计算核心的单元测试、功能故事检查、代码风格检查、Web 冒烟测试、安装程序检查、各清单文件之间的版本一致性检查，以及一个 Waybar 模块的编译。',
          '版本检查之所以存在，是因为我曾经漂移过一次：包版本、发布清单和更新日志各说各话，而我是偶然才发现的。把它变成一项会失败的检查，而不是一个习惯，就是修复方案。',
          '同一道关卡在 GitHub Actions 上于 Linux、macOS 和 Windows 运行，所以本地一次绿灯并不是唯一的证据。') },
        { label: '我会怎样重做', cls: 'prose', html:
          '<ul><li><strong>更早部署。</strong> 第一次真实部署暴露出的问题，本地预览永远不会暴露。我应该在第一周就把一个丑陋的版本放到域名上，对着真实环境迭代。</li><li><strong>更早确定产品边界。</strong> 这个项目从状态栏小组件起步，最后成了 Web 应用。两个版本都留在仓库历史里。转向是对的，但我抱着"小组件"这个框架的时间，超出了证据支持的长度。</li><li><strong>先写好那份诚实的范围说明。</strong> 现在的 README 直白地写明这个应用不是什么——不是医疗、不是精算，也不是对某个人的预测。早点写下来，本可以让几个设计决定变得显而易见，而不是靠迭代才摸到。</li></ul>' }
      ],
      scopeLabel: '范围说明',
      scope: '这是一个个人项目。它是一件基于人口平均值的反思辅助工具，不构成医疗、法律、精算或心理健康建议，也不对任何个人做出断言。'
    }
  }
};
