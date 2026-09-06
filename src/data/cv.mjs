// Single source of truth for the CV.
//
// Consumed by two outputs:
//   - src/pages/cv.astro          → the public web page (no phone number)
//   - scripts/build-cv-pdf.mjs    → public/javier-ponz-prado-cv.pdf (full contact)
//
// Plain .mjs rather than .ts so the Node build script can import it directly.
// Edit here; both outputs follow.

export const person = {
  name: 'Javier Ponz Prado',
  headline: 'Technical support & customer success · agent operations · technical troubleshooting',
  location: 'Aberdeen, Scotland, United Kingdom',
  // `private: true` fields are written into the PDF only, never rendered on the web page.
  contact: [
    { label: 'Email', value: 'nerion89@gmail.com', href: 'mailto:nerion89@gmail.com' },
    { label: 'Phone', value: '+34 691 347 651', href: 'tel:+34691347651', private: true },
    { label: 'LinkedIn', value: 'linkedin.com/in/javierponz', href: 'https://www.linkedin.com/in/javierponz' },
    { label: 'GitHub', value: 'github.com/ponzgpt', href: 'https://github.com/ponzgpt' },
    { label: 'Site', value: 'javierponz.technoir.cloud', href: 'https://javierponz.technoir.cloud/' }
  ]
};

export const profile = [
  'Ten years at Apple Retail across technical diagnosis, consultative selling, remote support and team leadership, now operating open agent systems daily and shipping small software to production.',
  'The job I am best at is being the human between people and their machines: translating between what the engineer means, what the sale promised, and what the person actually has on their screen. Most support failures are a translation failure rather than a technical one.',
  'Strongest where systems fail — investigating failure modes, debugging workflows, and writing down precisely which assumption broke. I have been building and overclocking PCs since I was a teenager, which is where the interest in what hardware can actually do came from, long before I had an argument for it.',
  'I run local inference on my own hardware — llama.cpp serving a dense Qwen3 27B (GGUF, Q6) from an RTX 5090, exposed as an API and wired into Hermes Agent — on Arch, Fedora and Omarchy, and I am building a self-hosted homelab on Proxmox. After a decade inside a closed platform I am deliberately unwinding that: off Google services, learning OSINT, GrapheneOS next. Privacy and data sovereignty are the point of the work, not a side effect of it.',
  'One conviction carries across every role I have held: leading is serving. The measure of a tool, like the measure of a lead, is whether the person depending on it ends up with more capacity than they started with.'
];

export const shipped = [
  {
    title: 'Memento Mori — web application, live in production',
    when: '2026',
    where: 'memento.technoir.cloud · Apache-2.0 · github.com/ponzgpt/memento-mori',
    href: 'https://memento.technoir.cloud/',
    body: 'Spanish-language perspective tool built on World Bank life-expectancy data. No accounts, no backend, no analytics; all computation runs in the browser. Deployed with Docker, nginx and Traefik on a VPS I administer, behind an eight-check release gate (unit tests, feature stories, lint, web smoke, installer and version-consistency checks) that refuses to publish on red. Cross-platform CI on Linux, macOS and Windows. Native macOS menu-bar companion written in Swift.'
  },
  {
    title: 'Hermes PKM Toolkit — MCP server and agent skills',
    when: '2026',
    where: 'MIT · specified by me, implemented by an agent · github.com/ponzgpt/hermes-pkm-toolkit',
    href: 'https://github.com/ponzgpt/hermes-pkm-toolkit',
    body: 'Model Context Protocol tools for operating local Markdown vaults safely, with a filesystem-safety layer and tests covering path-traversal rejection and absolute-path neutralisation. I wrote the specification and the safety requirements; Hermes Agent produced the implementation from them. Listed because directing an agent to a usable result is the skill I am practising, not as code I could walk through line by line.'
  },
  {
    title: 'Mental Models Toolkit — agent skill pack',
    when: '2026',
    where: 'MIT · models mine, packaging agent-generated · github.com/ponzgpt/mental-models-toolkit',
    href: 'https://github.com/ponzgpt/mental-models-toolkit',
    body: 'Thirty machine-readable decision and risk models, schema-validated in continuous integration, written to be read by an agent rather than by a person. The selection and the models are my work.'
  },
  {
    title: 'The Aberdeen Daily — nightly local newspaper agent',
    when: '2026',
    where: 'MIT · fork of vaelkeep/hermes-paper-agent · github.com/ponzgpt/aberdeen-daily',
    href: 'https://github.com/ponzgpt/aberdeen-daily',
    body: 'An open Hermes Agent project adapted to my city: local feed sources, editorial rules and city-specific configuration. The architecture is upstream, not mine — one commit of seventeen is my own.'
  }
];

export const experience = [
  {
    title: 'Founder — Machines Do It Better',
    when: 'August 2024 — present',
    where: 'Aberdeen, Scotland · independent',
    body: 'An agent consultancy for individuals and small businesses, premised on privacy, data sovereignty and customisation to a specific use case rather than the deterministic workflow tooling most agencies sell. Designing, deploying and stress-testing agents and automations in Docker and Dokploy with OpenRouter and Telegram; operational documentation and workflow QA. No clients to date. Editorial newsletter covering AI, robotics and fintech.'
  },
  {
    title: 'Lead In-Store Experience — Apple Retail (secondment, twice)',
    when: 'February — August 2023; February — August 2024',
    where: 'Xanadú (Arroyomolinos), then Parquesur (Leganés), Madrid',
    body: 'Two seven-month leadership secondments taken while holding the Genius role. Ran floor experience for the store: planning, resourcing, events, maintenance coordination, structured feedback and the situations that fit no procedure. Led by removing obstacles rather than issuing instructions.'
  },
  {
    title: 'Genius — Apple Retail',
    when: 'March 2018 — August 2024',
    where: 'Parquesur, Leganés, Madrid',
    body: 'Six and a half years as the technical baseline of the store: advanced hardware and software diagnosis on the cases nobody else had resolved, translating them for people with very different levels of understanding, and bringing newer technicians onto the bench. The two leadership secondments above sit inside this run.'
  },
  {
    title: 'AppleCare Support Advisor — Apple',
    when: 'March 2020 — June 2020',
    where: 'Remote, Madrid · COVID volunteering',
    body: 'Concurrent remote support cases under structured troubleshooting and documentation standards, working autonomously.'
  },
  {
    title: 'Specialist, then Technical Specialist — Apple Retail',
    when: 'September 2014 — February 2018',
    where: 'Parquesur, Madrid',
    body: 'Foundations in diagnosis, consultative support, practical problem solving and execution under pressure.'
  }
];

export const education = [
  {
    title: 'Specialist in Artificial Intelligence',
    when: 'October 2024 — December 2026, in progress',
    where: 'Universidad Rey Juan Carlos, via Racks University (IUNIT-affiliated)'
  },
  {
    title: 'Full Stack AI Developer',
    when: 'September 2025 — December 2026, in progress',
    where: 'Universidad Rey Juan Carlos, via Racks University (IUNIT-affiliated)'
  },
  {
    title: 'Industrial Engineering (Electronics and Automation)',
    when: '80 ECTS completed, degree unfinished',
    where: 'Universidad Politécnica de Madrid · 2008 — 2013'
  },
  {
    title: 'Apple Certified Mac Technician (ACMT); Apple Certified iOS Technician (ACiT)',
    when: 'Certified',
    where: 'Apple'
  },
  {
    title: 'English — Cambridge Certificate in Advanced English (C1)',
    when: 'Certified',
    where: 'Cambridge Assessment'
  }
];

// Flat groups, deliberately keyword-dense and plainly written: the first reader
// of this document is likely to be software.
export const skills = [
  { group: 'Agents and AI', items: ['Hermes Agent', 'OpenClaw', 'Model Context Protocol (MCP)', 'MCP server development', 'agent workflows', 'workflow QA', 'OpenRouter', 'llama.cpp', 'Ollama', 'LM Studio', 'local inference on own GPU', 'prompt and failure-trace debugging'] },
  { group: 'Infrastructure and deployment', items: ['Docker', 'Docker Swarm', 'Dokploy', 'Traefik', 'nginx', 'Linux — Arch, Fedora, Omarchy', 'VPS administration', 'TLS / Let’s Encrypt', 'GitHub Actions', 'CI/CD', 'release gating', 'PC building and overclocking'] },
  { group: 'Development', items: ['JavaScript', 'TypeScript', 'Python', 'Astro', 'Swift', 'HTML', 'CSS', 'Git', 'unit testing', 'static site generation'] },
  { group: 'Practice', items: ['Technical support', 'customer success', 'customer-facing technical work', 'technical troubleshooting', 'failure-mode investigation', 'customer operations', 'consultative selling', 'technical writing and documentation', 'de-escalation', 'mentoring', 'team leadership'] },
  { group: 'Currently learning', items: ['vLLM', 'Proxmox', 'NAS under a hypervisor', 'virtualisation', 'networking and Pi-hole', 'self-hosted homelab', 'OSINT', 'GrapheneOS', 'de-Googling'] },
  { group: 'Languages', items: ['Spanish (native)', 'English (Cambridge CAE, C1)'] }
];

/* ── Localised copy for the web page ──────────────────────────────────────
   The PDF at /javier-ponz-prado-cv.pdf is deliberately English-only: it is the
   file an employer forwards, and one canonical version keeps that trail clean.
   Everything below translates the page and nothing else. */

export const headlineI18n = {
  es: 'Soporte técnico y atención al cliente · operación de agentes · diagnóstico técnico',
  zh: '技术支持与客户成功 · 智能体运维 · 技术排障'
};

export const locationI18n = {
  es: 'Aberdeen, Escocia, Reino Unido',
  zh: '英国 苏格兰 阿伯丁'
};

export const profileI18n = {
  es: [
    'Diez años en Apple Retail entre diagnóstico técnico, venta consultiva, soporte remoto y dirección de equipos; ahora opero sistemas de agentes abiertos a diario y entrego software pequeño a producción.',
    'En lo que mejor soy es en hacer de intermediario entre las personas y sus máquinas: traducir entre lo que quiere decir el ingeniero, lo que prometió la venta y lo que la persona tiene de verdad en su pantalla. La mayoría de los fallos de soporte son fallos de traducción, no fallos técnicos.',
    'Rindo mejor donde los sistemas fallan: investigar modos de fallo, depurar flujos y dejar por escrito exactamente qué supuesto se rompió. Monto y hago overclocking a ordenadores desde adolescente, que es de donde viene el interés por lo que el hardware puede dar de sí, mucho antes de tener un argumento para ello.',
    'Ejecuto inferencia local en mi propio equipo —llama.cpp sirviendo un Qwen3 27B denso, en GGUF a Q6, desde una RTX 5090, expuesto como API y conectado a Hermes Agent— sobre Arch, Fedora y Omarchy, y estoy montando un homelab autoalojado con Proxmox. Tras una década dentro de una plataforma cerrada, la estoy desmontando a propósito: fuera de los servicios de Google, aprendiendo OSINT y con GrapheneOS como siguiente paso. La privacidad y la soberanía de los datos son el objetivo del trabajo, no un efecto secundario.',
    'Una convicción atraviesa todos los puestos que he tenido: liderar es servir. La medida de una herramienta, como la de un responsable, es si la persona que depende de ella acaba con más capacidad de la que tenía.'
  ],
  zh: [
    '在 Apple Retail 的十年，横跨技术诊断、顾问式销售、远程支持与团队管理；现在每天操作开放的智能体系统，并把小型软件交付到生产环境。',
    '我最擅长的是做人与机器之间的那个人：在工程师的意思、销售的承诺，以及这个人屏幕上真正显示的东西之间做翻译。大多数支持失败是翻译失败，而不是技术失败。',
    '我最强的地方正是系统出错之处——排查故障模式、调试工作流，并把究竟是哪一个假设破了写清楚。我从少年时代就开始装机和超频，对硬件究竟能榨出什么的兴趣正是从那里来的，远早于我为此找到任何理由。',
    '我在自己的硬件上跑本地推理——llama.cpp 在 RTX 5090 上提供一个稠密的 Qwen3 27B（GGUF，Q6），以 API 暴露并接入 Hermes Agent——系统是 Arch、Fedora 与 Omarchy，同时在用 Proxmox 搭建自托管家庭实验室。在一个封闭平台里待了十年之后，我在有意识地把它拆开：离开谷歌服务、学习 OSINT，下一步是 GrapheneOS。隐私与数据自主是这项工作的目的，不是副产品。',
    '有一条信念贯穿我做过的每一个岗位：领导即服务。衡量一件工具，就像衡量一位主管，看的是依赖它的人最后是否比开始时更有能力。'
  ]
};

/** Overlays for the entries above, indexed the same way as the arrays. */
export const shippedI18n = {
  es: [
    { title: 'Memento Mori — aplicación web, en producción', where: 'memento.technoir.cloud · Apache-2.0 · github.com/ponzgpt/memento-mori',
      body: 'Herramienta de perspectiva en español construida sobre datos de esperanza de vida del Banco Mundial. Sin cuentas, sin servidor, sin analítica; todo el cálculo ocurre en el navegador. Desplegada con Docker, nginx y Traefik en un VPS que administro yo, detrás de una puerta de publicación de ocho comprobaciones (pruebas unitarias, historias de usuario, análisis de estilo, prueba de humo web, instalador y coherencia de versiones) que se niega a publicar en rojo. Integración continua en Linux, macOS y Windows. Aplicación complementaria nativa para la barra de menús de macOS escrita en Swift.' },
    { title: 'Hermes PKM Toolkit — servidor MCP y habilidades de agente', where: 'MIT · especificado por mí, implementado por un agente · github.com/ponzgpt/hermes-pkm-toolkit',
      body: 'Herramientas de Model Context Protocol para operar con seguridad sobre carpetas locales de Markdown, con una capa de seguridad de ficheros y pruebas que cubren el rechazo de recorrido de rutas y la neutralización de rutas absolutas. Yo escribí la especificación y los requisitos de seguridad; Hermes Agent produjo la implementación a partir de ellos. Lo incluyo porque dirigir a un agente hasta un resultado utilizable es la habilidad que estoy practicando, no como código que pueda recorrer línea a línea.' },
    { title: 'Mental Models Toolkit — paquete de habilidades', where: 'MIT · los modelos son míos, el empaquetado lo generó un agente · github.com/ponzgpt/mental-models-toolkit',
      body: 'Treinta modelos de decisión y de riesgo legibles por máquina, validados contra esquema en integración continua, escritos para que los lea un agente y no una persona. La selección y los modelos son trabajo mío.' },
    { title: 'The Aberdeen Daily — agente de periódico local nocturno', where: 'MIT · bifurcación de vaelkeep/hermes-paper-agent · github.com/ponzgpt/aberdeen-daily',
      body: 'Un proyecto abierto de Hermes Agent adaptado a mi ciudad: fuentes locales, normas editoriales y configuración específica. La arquitectura viene del original, no es mía: uno de diecisiete commits es mío.' }
  ],
  zh: [
    { title: 'Memento Mori — Web 应用，运行于生产环境', where: 'memento.technoir.cloud · Apache-2.0 · github.com/ponzgpt/memento-mori',
      body: '一个基于世界银行预期寿命数据的西班牙语视角工具。没有账号、没有后端、没有分析；所有计算都在浏览器中完成。使用 Docker、nginx 与 Traefik 部署在我自己管理的 VPS 上，前面有一道八项检查的发布关卡（单元测试、功能故事、代码风格、Web 冒烟、安装程序与版本一致性），任何一项红灯就拒绝发布。在 Linux、macOS 与 Windows 上做跨平台 CI。另有一个用 Swift 写的 macOS 菜单栏原生伴随应用。' },
    { title: 'Hermes PKM Toolkit — MCP 服务器与智能体技能', where: 'MIT · 由我定规格，智能体实现 · github.com/ponzgpt/hermes-pkm-toolkit',
      body: '一套 Model Context Protocol 工具，用于安全地操作本地 Markdown 库，带文件系统安全层，并有覆盖路径穿越拒绝与绝对路径中和的测试。规格与安全要求由我编写，实现由 Hermes Agent 依此产出。我把它列出来，是因为"把智能体引导到一个可用的结果"正是我在练的能力，而不是把它当作我能逐行讲解的代码。' },
    { title: 'Mental Models Toolkit — 智能体技能包', where: 'MIT · 模型是我的，打包由智能体生成 · github.com/ponzgpt/mental-models-toolkit',
      body: '三十个机器可读的决策与风险模型，在持续集成中经过 schema 校验，写给智能体读而不是给人读。模型的选择与内容是我的工作。' },
    { title: 'The Aberdeen Daily — 夜间地方报智能体', where: 'MIT · fork 自 vaelkeep/hermes-paper-agent · github.com/ponzgpt/aberdeen-daily',
      body: '一个开源的 Hermes Agent 项目，被我改造到自己的城市：本地信息源、编辑规则与城市相关配置。架构来自上游，不是我的——十七个提交里有一个是我的。' }
  ]
};

export const experienceI18n = {
  es: [
    { title: 'Fundador — Machines Do It Better', when: 'Agosto 2024 — actualidad', where: 'Aberdeen, Escocia · por cuenta propia',
      body: 'Una consultora de agentes para particulares y pequeñas empresas, basada en la privacidad, la soberanía de los datos y la adaptación a un caso de uso concreto, en lugar de las herramientas de flujo determinista que vende la mayoría de las agencias. Diseño, despliegue y prueba de resistencia de agentes y automatizaciones en Docker y Dokploy con OpenRouter y Telegram; documentación operativa y control de calidad de flujos. Sin clientes hasta la fecha. Boletín editorial sobre IA, robótica y tecnología financiera.' },
    { title: 'Responsable de experiencia en tienda — Apple Retail (comisión de servicio, dos veces)', when: 'Febrero — agosto 2023; febrero — agosto 2024', where: 'Xanadú (Arroyomolinos) y después Parquesur (Leganés), Madrid',
      body: 'Dos comisiones de servicio de siete meses asumidas sin dejar el puesto de Genius. Dirigí la experiencia de sala de la tienda: planificación, recursos, eventos, coordinación de mantenimiento, recogida estructurada de opiniones y las situaciones que no encajan en ningún procedimiento. Lideré despejando obstáculos en vez de dando instrucciones.' },
    { title: 'Genius — Apple Retail', when: 'Marzo 2018 — agosto 2024', where: 'Parquesur, Leganés, Madrid',
      body: 'Seis años y medio como referencia técnica de la tienda: diagnóstico avanzado de hardware y software en los casos que nadie más había resuelto, traducirlos para personas con niveles de conocimiento muy distintos, y formar a los técnicos nuevos en el banco de trabajo. Las dos comisiones de servicio anteriores caen dentro de esta etapa.' },
    { title: 'Asesor de soporte de AppleCare — Apple', when: 'Marzo 2020 — junio 2020', where: 'En remoto, Madrid · voluntariado durante la COVID',
      body: 'Casos de soporte remoto simultáneos bajo estándares estructurados de diagnóstico y documentación, trabajando de forma autónoma.' },
    { title: 'Specialist y después Technical Specialist — Apple Retail', when: 'Septiembre 2014 — febrero 2018', where: 'Parquesur, Madrid',
      body: 'Los cimientos: diagnóstico, atención consultiva, resolución práctica de problemas y ejecución bajo presión.' }
  ],
  zh: [
    { title: '创始人 — Machines Do It Better', when: '2024年8月 — 至今', where: '苏格兰 阿伯丁 · 自营',
      body: '一家面向个人与小企业的智能体咨询工作室，立足于隐私、数据自主，以及针对具体使用场景的定制，而不是多数代理商在卖的确定性流程工具。在 Docker 与 Dokploy 上，结合 OpenRouter 与 Telegram 设计、部署并压力测试智能体与自动化；负责运维文档与流程质检。至今没有客户。另有一份关于 AI、机器人与金融科技的编辑通讯。' },
    { title: '店内体验主管 — Apple Retail（两次借调）', when: '2023年2—8月；2024年2—8月', where: '马德里 Xanadú（Arroyomolinos），之后 Parquesur（Leganés）',
      body: '两段七个月的管理借调，期间保留 Genius 职位。负责门店的卖场体验：规划、排班、活动、维护协调、结构化反馈，以及那些不符合任何流程的状况。靠清除障碍来带队，而不是下达指令。' },
    { title: 'Genius — Apple Retail', when: '2018年3月 — 2024年8月', where: '马德里 莱加内斯 Parquesur',
      body: '六年半作为门店的技术基准：处理别人解决不了的软硬件疑难诊断，把它们翻译给理解水平差异极大的人，并带新技师上手。上面两段管理借调就发生在这段时间里。' },
    { title: 'AppleCare 支持顾问 — Apple', when: '2020年3月 — 6月', where: '远程，马德里 · 疫情期间志愿服务',
      body: '在结构化的排障与文档标准下并行处理多个远程支持案例，独立工作。' },
    { title: 'Specialist，之后 Technical Specialist — Apple Retail', when: '2014年9月 — 2018年2月', where: '马德里 Parquesur',
      body: '打基础的阶段：诊断、顾问式支持、务实的问题解决，以及高压下的执行。' }
  ]
};

export const educationI18n = {
  es: [
    { title: 'Especialista en Inteligencia Artificial', when: 'Octubre 2024 — diciembre 2026, en curso', where: 'Universidad Rey Juan Carlos, a través de Racks University (adscrita a IUNIT)' },
    { title: 'Desarrollador Full Stack de IA', when: 'Septiembre 2025 — diciembre 2026, en curso', where: 'Universidad Rey Juan Carlos, a través de Racks University (adscrita a IUNIT)' },
    { title: 'Ingeniería Industrial (Electrónica y Automática)', when: '80 ECTS superados, carrera sin terminar', where: 'Universidad Politécnica de Madrid · 2008 — 2013' },
    { title: 'Apple Certified Mac Technician (ACMT); Apple Certified iOS Technician (ACiT)', when: 'Certificado', where: 'Apple' },
    { title: 'Inglés — Certificate in Advanced English de Cambridge (C1)', when: 'Certificado', where: 'Cambridge Assessment' }
  ],
  zh: [
    { title: '人工智能专业方向', when: '2024年10月 — 2026年12月，在读', where: '胡安卡洛斯国王大学，通过 Racks University（IUNIT 合作）' },
    { title: '全栈 AI 开发', when: '2025年9月 — 2026年12月，在读', where: '胡安卡洛斯国王大学，通过 Racks University（IUNIT 合作）' },
    { title: '工业工程（电子与自动化）', when: '已修 80 ECTS，未完成学位', where: '马德里理工大学 · 2008 — 2013' },
    { title: 'Apple 认证 Mac 技术员（ACMT）；Apple 认证 iOS 技术员（ACiT）', when: '已认证', where: 'Apple' },
    { title: '英语 — 剑桥高级英语证书（CAE，C1）', when: '已认证', where: 'Cambridge Assessment' }
  ]
};

export const skillGroupNames = {
  es: ['Agentes e IA', 'Infraestructura y despliegue', 'Desarrollo', 'Oficio', 'Aprendiendo ahora', 'Idiomas'],
  zh: ['智能体与 AI', '基础设施与部署', '开发', '实务', '正在学', '语言']
};

export const contactLabels = {
  es: { Email: 'Correo', Phone: 'Teléfono', LinkedIn: 'LinkedIn', GitHub: 'GitHub', Site: 'Sitio' },
  zh: { Email: '邮件', Phone: '电话', LinkedIn: 'LinkedIn', GitHub: 'GitHub', Site: '网站' }
};

/** Merge the overlay arrays over the English base for a given language. */
export function cvFor(lang) {
  if (lang === 'en') return { headline: person.headline, location: person.location, profile, shipped, experience, education, skills };
  const merge = (base, over) => base.map((b, i) => ({ ...b, ...((over && over[i]) || {}) }));
  return {
    headline: headlineI18n[lang] ?? person.headline,
    location: locationI18n[lang] ?? person.location,
    profile: profileI18n[lang] ?? profile,
    shipped: merge(shipped, shippedI18n[lang]),
    experience: merge(experience, experienceI18n[lang]),
    education: merge(education, educationI18n[lang]),
    skills: skills.map((s, i) => ({ ...s, group: (skillGroupNames[lang] || [])[i] ?? s.group }))
  };
}
