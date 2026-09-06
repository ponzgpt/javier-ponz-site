// Site data. Each record carries `es` and `zh` overlays holding only the fields
// that change; pick(item, lang) in i18n.mjs merges them over the English base.
// Tool names (Docker, Traefik, Hermes Agent) are left alone in every language —
// translating a proper noun makes a CV harder to search, not easier to read.

// `by` states authorship explicitly. Three of these were specified by me and
// written by an agent, or forked from someone else's work, and a page headed
// "things I am making" has to say so rather than let the reader assume.
export const projects = [
  {
    title: 'Memento Mori', kind: 'web app', status: 'shipped', by: 'written & deployed by me',
    description: 'A Spanish-first web app turning life-expectancy data into perspective and one intentional action for today. Live in production on my own VPS.',
    url: 'https://github.com/ponzgpt/memento-mori', live: 'https://memento.technoir.cloud/',
    es: { kind: 'aplicación web', status: 'entregado', by: 'escrita y desplegada por mí',
      description: 'Una aplicación web pensada en español que convierte datos de esperanza de vida en perspectiva y en una acción concreta para hoy. En producción sobre un VPS mío.' },
    zh: { kind: 'Web 应用', status: '已交付', by: '由我编写并部署',
      description: '一个以西班牙语为先的 Web 应用，把预期寿命数据转化为一种视角，以及今天的一个具体行动。已在我自己的 VPS 上运行。' }
  },
  {
    title: 'Hermes PKM Toolkit', kind: 'MCP tools', status: 'active', by: 'specified by me, agent-written',
    description: 'MCP server and agent skills for working safely with local Markdown vaults, with path-traversal protection and a tested filesystem layer.',
    url: 'https://github.com/ponzgpt/hermes-pkm-toolkit',
    es: { kind: 'herramientas MCP', status: 'activo', by: 'especificado por mí, escrito por un agente',
      description: 'Servidor MCP y habilidades de agente para trabajar con seguridad sobre carpetas locales de Markdown, con protección frente a recorrido de rutas y una capa de ficheros probada.' },
    zh: { kind: 'MCP 工具', status: '进行中', by: '由我定规格，智能体编写',
      description: '用于安全操作本地 Markdown 库的 MCP 服务器与智能体技能，带路径穿越防护和经过测试的文件系统层。' }
  },
  {
    title: 'Mental Models Toolkit', kind: 'skill pack', status: 'active', by: 'models mine, agent-packaged',
    description: '30 machine-readable mental models for decisions and risk checks, packaged as an agent skill pack.',
    url: 'https://github.com/ponzgpt/mental-models-toolkit',
    es: { kind: 'paquete de habilidades', status: 'activo', by: 'los modelos son míos, el empaquetado no',
      description: 'Treinta modelos mentales legibles por máquina para decisiones y comprobaciones de riesgo, empaquetados como habilidades de agente.' },
    zh: { kind: '技能包', status: '进行中', by: '模型是我的，打包不是',
      description: '三十个机器可读的思维模型，用于决策与风险检查，打包成智能体技能包。' }
  },
  {
    title: 'Hermes Agent Site', kind: 'landing page', status: 'shipped', by: 'written & deployed by me',
    description: 'An unofficial landing page for Hermes Agent that behaves like the CLI it describes: real slash-command palette, six skins, zero build step.',
    url: 'https://github.com/ponzgpt/hermes-agent-site',
    es: { kind: 'página de aterrizaje', status: 'entregado', by: 'escrita y desplegada por mí',
      description: 'Una página no oficial para Hermes Agent que se comporta como la CLI que describe: paleta real de comandos, seis aspectos y ningún paso de compilación.' },
    zh: { kind: '着陆页', status: '已交付', by: '由我编写并部署',
      description: '一个非官方的 Hermes Agent 着陆页，它的行为就像它所描述的 CLI：真实的斜杠命令面板、六套外观、零构建步骤。' }
  },
  {
    title: 'The Aberdeen Daily', kind: 'news agent', status: 'active', by: 'fork of vaelkeep/hermes-paper-agent, adapted by me',
    description: 'A nightly local paper for Aberdeen. Data desks compute every figure in Python so the model is never in a position to invent one. The architecture is upstream; my contribution is the city, the feeds and the editorial rules.',
    url: 'https://github.com/ponzgpt/aberdeen-daily',
    es: { kind: 'agente de noticias', status: 'activo', by: 'bifurcación de vaelkeep/hermes-paper-agent, adaptada por mí',
      description: 'Un periódico local nocturno para Aberdeen. Las mesas de datos calculan cada cifra en Python, de modo que el modelo nunca está en posición de inventarse una. La arquitectura viene del proyecto original; lo mío es la ciudad, las fuentes y las normas editoriales.' },
    zh: { kind: '新闻智能体', status: '进行中', by: 'fork 自 vaelkeep/hermes-paper-agent，由我改造',
      description: '一份面向阿伯丁的夜间地方报。数据台用 Python 算出每一个数字，因此模型没有机会编造。架构来自上游；我的贡献是城市、信息源和编辑规则。' }
  }
];

// Things I run every day but did not write. Kept separate from `projects` for
// the same reason `projects` carries a `by` field: operating something and
// authoring it are different claims.
export const running = [
  {
    title: 'Hermes Agent', kind: 'agent harness', status: 'daily', by: 'Nous Research · I operate it',
    description: 'Scheduled workflows, automations and agents with permission to touch real files. Skills are Markdown I can edit, tools are servers I can read. Wired to a model served from my own GPU.',
    url: 'https://github.com/NousResearch/hermes-agent',
    es: { kind: 'armazón de agentes', status: 'a diario', by: 'de Nous Research · yo lo uso',
      description: 'Flujos programados, automatizaciones y agentes con permiso para tocar ficheros reales. Las habilidades son Markdown que puedo editar; las herramientas, servidores que puedo leer. Conectado a un modelo servido desde mi propia GPU.' },
    zh: { kind: '智能体框架', status: '每天', by: 'Nous Research 出品 · 我在用',
      description: '定时工作流、自动化，以及有权限操作真实文件的智能体。技能是我能编辑的 Markdown，工具是我能读懂的服务。接到一个由我自己 GPU 提供的模型上。' }
  },
  {
    title: 'Omarchy', kind: 'operating system', status: 'daily', by: 'Basecamp / DHH · I run it',
    description: 'My daily driver alongside Arch and Fedora. A desktop that expects to be edited rather than tolerated, and the other half of the argument in my thesis: the machine has to be shapeable before an agent can do much with it.',
    url: 'https://omarchy.org',
    es: { kind: 'sistema operativo', status: 'a diario', by: 'de Basecamp / DHH · yo lo uso',
      description: 'Mi sistema principal, junto a Arch y Fedora. Un escritorio que espera que lo edites en vez de que lo aguantes, y la otra mitad del argumento de mi tesis: la máquina tiene que ser moldeable antes de que un agente pueda hacer gran cosa con ella.' },
    zh: { kind: '操作系统', status: '每天', by: 'Basecamp / DHH 出品 · 我在用',
      description: '我的主力系统，与 Arch 和 Fedora 并用。一个期待被编辑而不是被忍受的桌面，也是我论点的另一半：机器得先可塑，智能体才谈得上做事。' }
  },
  {
    title: 'llama.cpp on an RTX 5090', kind: 'local inference', status: 'daily', by: 'set up and maintained by me',
    description: 'A dense Qwen3 27B, GGUF at Q6, served from this room as an API and wired into Hermes. Nothing in that loop leaves the house. I have also run Ollama and LM Studio.',
    url: 'https://github.com/ggml-org/llama.cpp',
    es: { kind: 'inferencia local', status: 'a diario', by: 'montado y mantenido por mí',
      description: 'Un Qwen3 27B denso, en GGUF a Q6, servido desde esta habitación como API y conectado a Hermes. Nada de ese circuito sale de casa. También he usado Ollama y LM Studio.' },
    zh: { kind: '本地推理', status: '每天', by: '由我搭建与维护',
      description: '一个稠密的 Qwen3 27B，GGUF 格式 Q6 量化，从这个房间以 API 形式提供并接入 Hermes。这个回路里的任何东西都不出家门。我也用过 Ollama 和 LM Studio。' }
  }
];

export const timeline = [
  {
    date: 'Sep 2014 — Feb 2018', title: 'Specialist, then Technical Specialist · Apple Retail',
    text: 'Parquesur, Madrid. Foundations in diagnosis, consultative support and daily execution under pressure.',
    es: { date: 'Sep 2014 — Feb 2018', title: 'Specialist y después Technical Specialist · Apple Retail',
      text: 'Parquesur, Madrid. Los cimientos: diagnóstico, atención consultiva y ejecución diaria bajo presión.' },
    zh: { date: '2014年9月 — 2018年2月', title: 'Specialist，之后 Technical Specialist · Apple Retail',
      text: '马德里 Parquesur。打基础的阶段：诊断、顾问式支持，以及高压下的日常执行。' }
  },
  {
    date: 'Mar 2018 — Aug 2024', title: 'Genius · Apple Retail',
    text: 'Parquesur, Leganés. Six and a half years as the technical baseline of the store: advanced diagnosis on the cases nobody else had resolved, translating them for people with very different levels of understanding, and bringing newer technicians onto the bench.',
    es: { date: 'Mar 2018 — Ago 2024', title: 'Genius · Apple Retail',
      text: 'Parquesur, Leganés. Seis años y medio como referencia técnica de la tienda: diagnóstico avanzado en los casos que nadie más había resuelto, traducirlos para personas con niveles de conocimiento muy distintos, y formar a los técnicos nuevos en el banco de trabajo.' },
    zh: { date: '2018年3月 — 2024年8月', title: 'Genius · Apple Retail',
      text: '莱加内斯 Parquesur。六年半作为门店的技术基准：处理别人解决不了的疑难诊断，把它们翻译给理解水平差异极大的人，并带新技师上手。' }
  },
  {
    date: 'Mar — Jun 2020', title: 'AppleCare Support Advisor · Apple',
    text: 'Remote, during COVID, as a volunteer. Concurrent cases under structured troubleshooting and documentation standards, working without a floor around me.',
    es: { date: 'Mar — Jun 2020', title: 'Asesor de soporte de AppleCare · Apple',
      text: 'En remoto, durante la COVID, como voluntario. Casos simultáneos bajo estándares estructurados de diagnóstico y documentación, trabajando sin una tienda alrededor.' },
    zh: { date: '2020年3月 — 6月', title: 'AppleCare 支持顾问 · Apple',
      text: '疫情期间以志愿者身份远程工作。在结构化的排障与文档标准下并行处理多个案例，身边没有门店可依靠。' }
  },
  {
    date: 'Feb — Aug 2023 · Feb — Aug 2024', title: 'Lead In-Store Experience · Apple Retail (secondment, twice)',
    text: 'Xanadú first, then Parquesur. Two seven-month leadership secondments taken while holding the Genius role: planning, resourcing, events, coordination and the situations that fit no procedure. Led by removing obstacles, then went back to the bench.',
    es: { date: 'Feb — Ago 2023 · Feb — Ago 2024', title: 'Responsable de experiencia en tienda · Apple Retail (dos comisiones de servicio)',
      text: 'Primero Xanadú y después Parquesur. Dos comisiones de siete meses asumidas sin dejar el puesto de Genius: planificación, recursos, eventos, coordinación y las situaciones que no encajan en ningún procedimiento. Lideré despejando obstáculos, y luego volví al banco de trabajo.' },
    zh: { date: '2023年2—8月 · 2024年2—8月', title: '店内体验主管 · Apple Retail（两次借调）',
      text: '先是 Xanadú，之后是 Parquesur。在保留 Genius 职位的同时接下两段七个月的管理借调：规划、排班、活动、协调，以及那些不符合任何流程的状况。靠清除障碍来带队，结束后回到工作台。' }
  },
  {
    date: 'Aug 2024', title: 'Aberdeen, Scotland',
    text: 'Moved to the UK and started a deliberate transition into AI systems and full stack development.',
    es: { date: 'Ago 2024', title: 'Aberdeen, Escocia',
      text: 'Me mudé al Reino Unido y empecé una transición deliberada hacia los sistemas de IA y el desarrollo full stack.' },
    zh: { date: '2024年8月', title: '苏格兰，阿伯丁',
      text: '搬到英国，开始有计划地转向 AI 系统与全栈开发。' }
  },
  {
    date: 'Aug 2024 — now', title: 'AI systems, automation, and building in public',
    text: 'Studying at Universidad Rey Juan Carlos via Racks University, founding Machines Do It Better, running local inference on my own hardware, and shipping small products that reach production.',
    es: { date: 'Ago 2024 — actualidad', title: 'Sistemas de IA, automatización y construir en público',
      text: 'Estudiando en la Universidad Rey Juan Carlos a través de Racks University, fundando Machines Do It Better, ejecutando inferencia local en mi propio equipo y entregando productos pequeños que llegan a producción.' },
    zh: { date: '2024年8月 — 至今', title: 'AI 系统、自动化，以及公开地构建',
      text: '在胡安卡洛斯国王大学通过 Racks University 学习，创办 Machines Do It Better，在自己的硬件上跑本地推理，并交付能上生产环境的小产品。' }
  }
];

// Group names are translated; the items are mostly proper nouns and stay put.
export const skillGroups = [
  {
    en: 'Agents & AI tooling', es: 'Agentes y utilidades de IA', zh: '智能体与 AI 工具',
    items: ['Hermes Agent', 'OpenClaw', 'MCP servers', 'OpenRouter', 'llama.cpp', 'local inference on own GPU', 'agent workflows', 'prompt and workflow QA'],
    itemsEs: ['Hermes Agent', 'OpenClaw', 'servidores MCP', 'OpenRouter', 'llama.cpp', 'inferencia local en GPU propia', 'flujos con agentes', 'control de calidad de flujos'],
    itemsZh: ['Hermes Agent', 'OpenClaw', 'MCP 服务器', 'OpenRouter', 'llama.cpp', '自有 GPU 本地推理', '智能体工作流', '提示词与流程质检']
  },
  {
    en: 'Infrastructure & deployment', es: 'Infraestructura y despliegue', zh: '基础设施与部署',
    items: ['Docker', 'Dokploy', 'Traefik', 'nginx', 'VPS (Hostinger, Hetzner)', 'GitHub Actions', 'Linux — Arch, Fedora, Omarchy', 'PC building & overclocking'],
    itemsEs: ['Docker', 'Dokploy', 'Traefik', 'nginx', 'VPS (Hostinger, Hetzner)', 'GitHub Actions', 'Linux — Arch, Fedora, Omarchy', 'montaje de PC y overclocking'],
    itemsZh: ['Docker', 'Dokploy', 'Traefik', 'nginx', 'VPS（Hostinger、Hetzner）', 'GitHub Actions', 'Linux — Arch、Fedora、Omarchy', '装机与超频']
  },
  {
    en: 'Development', es: 'Desarrollo', zh: '开发',
    items: ['JavaScript / TypeScript', 'Astro', 'Python', 'Swift (menu bar app)', 'HTML / CSS', 'Git'],
    itemsEs: ['JavaScript / TypeScript', 'Astro', 'Python', 'Swift (app de barra de menús)', 'HTML / CSS', 'Git'],
    itemsZh: ['JavaScript / TypeScript', 'Astro', 'Python', 'Swift（菜单栏应用）', 'HTML / CSS', 'Git']
  },
  {
    en: 'Practice', es: 'Oficio', zh: '实务',
    items: ['Technical support', 'Customer success', 'Technical troubleshooting', 'Failure-mode investigation', 'Structured documentation', 'Testing and release gates', 'Customer operations', 'Mentoring', 'Team leadership'],
    itemsEs: ['Soporte técnico', 'Atención y éxito del cliente', 'Diagnóstico técnico', 'Investigación de modos de fallo', 'Documentación estructurada', 'Pruebas y puertas de publicación', 'Operativa de atención', 'Mentorización', 'Dirección de equipos'],
    itemsZh: ['技术支持', '客户成功', '技术排障', '故障模式调查', '结构化文档', '测试与发布关卡', '客户运营', '带教', '团队管理']
  },
  {
    en: 'Learning now', es: 'Aprendiendo ahora', zh: '正在学',
    items: ['vLLM', 'Proxmox', 'self-hosted homelab', 'OSINT', 'GrapheneOS', 'de-Googling'],
    itemsEs: ['vLLM', 'Proxmox', 'homelab autoalojado', 'OSINT', 'GrapheneOS', 'salir de Google'],
    itemsZh: ['vLLM', 'Proxmox', '自托管家庭实验室', 'OSINT', 'GrapheneOS', '去谷歌化']
  }
];

/** Backwards-compatible shape for anything that still expects a plain object. */
export const skills = Object.fromEntries(skillGroups.map((g) => [g.en, g.items]));

/** skillsFor('es') → [{ group, items }] in that language. */
export function skillsFor(lang: string) {
  return skillGroups.map((g) => ({
    group: (g as Record<string, any>)[lang] ?? g.en,
    items: lang === 'es' ? g.itemsEs : lang === 'zh' ? g.itemsZh : g.items
  }));
}

export const credentials = [
  {
    title: 'Specialist in Artificial Intelligence', org: 'Universidad Rey Juan Carlos, via Racks University (IUNIT-affiliated)', date: 'Oct 2024 — Dec 2026', status: 'in progress',
    es: { title: 'Especialista en Inteligencia Artificial', org: 'Universidad Rey Juan Carlos, a través de Racks University (adscrita a IUNIT)', date: 'Oct 2024 — Dic 2026', status: 'en curso' },
    zh: { title: '人工智能专业方向', org: '胡安卡洛斯国王大学，通过 Racks University（IUNIT 合作）', date: '2024年10月 — 2026年12月', status: '在读' }
  },
  {
    title: 'Full Stack AI Developer', org: 'Universidad Rey Juan Carlos, via Racks University (IUNIT-affiliated)', date: 'Sep 2025 — Dec 2026', status: 'in progress',
    es: { title: 'Desarrollador Full Stack de IA', org: 'Universidad Rey Juan Carlos, a través de Racks University (adscrita a IUNIT)', date: 'Sep 2025 — Dic 2026', status: 'en curso' },
    zh: { title: '全栈 AI 开发', org: '胡安卡洛斯国王大学，通过 Racks University（IUNIT 合作）', date: '2025年9月 — 2026年12月', status: '在读' }
  },
  {
    title: 'Industrial Engineering (Electronics & Automation)', org: 'Universidad Politécnica de Madrid', date: '80 ECTS completed', status: 'degree not finished',
    es: { title: 'Ingeniería Industrial (Electrónica y Automática)', org: 'Universidad Politécnica de Madrid', date: '80 ECTS superados', status: 'carrera sin terminar' },
    zh: { title: '工业工程（电子与自动化）', org: '马德里理工大学', date: '已修 80 ECTS', status: '未完成学位' }
  },
  {
    title: 'Apple Certified Mac Technician (ACMT) · Apple Certified iOS Technician (ACiT)', org: 'Apple', date: '', status: 'certified',
    es: { status: 'certificado' },
    zh: { status: '已认证' }
  },
  {
    title: 'English — Cambridge CAE (C1)', org: 'Cambridge Assessment', date: '', status: 'certified',
    es: { title: 'Inglés — Cambridge CAE (C1)', status: 'certificado' },
    zh: { title: '英语 — 剑桥 CAE（C1）', status: '已认证' }
  }
];
