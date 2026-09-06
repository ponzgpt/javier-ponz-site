// Three languages, built as real routes rather than swapped in the browser.
//
// English lives at /, Spanish at /es/, Chinese at /zh/. Each is a separate
// static page with its own <html lang> and its own crawlable text, because the
// first reader of this site is often an ATS filter or an agent, and a
// JavaScript-swapped translation is invisible to both.
//
// ── Adding a language ────────────────────────────────────────────────────────
//   1. Add the code to `locales` below with its label and <html lang> value.
//   2. Add its column to every entry in `ui`, in src/data/pages.mjs, and to the
//      `es`/`zh` overlays in cv.mjs and site.ts.
//   3. `npm run check:i18n` will tell you exactly what you missed.
//
// Spanish is peninsular and deliberately free of anglicisms: "correo" not
// "email", "programas" not "software" where the sentence allows it, "puesto"
// not "rol". Chinese is Simplified.

export const locales = [
  { code: 'en', label: 'EN', name: 'English', html: 'en-US', dir: '/' },
  { code: 'es', label: 'ES', name: 'Español', html: 'es-ES', dir: '/es/' },
  { code: 'zh', label: '中文', name: '简体中文', html: 'zh-Hans', dir: '/zh/' }
];

export const defaultLocale = 'en';
export const codes = locales.map((l) => l.code);

/** Prefix a site-absolute path with the locale directory. */
export function href(path, lang) {
  const p = path.startsWith('/') ? path.slice(1) : path;
  return lang === defaultLocale ? `/${p}` : `/${lang}/${p}`;
}

/** Pick the localised fields off a data record, falling back to English. */
export function pick(item, lang) {
  return lang === defaultLocale ? item : { ...item, ...(item[lang] || {}) };
}

/** ui.<key>[lang] — chrome that appears on more than one page. */
export const ui = {
  nav: {
    en: ['about', 'cv', 'workbench', 'case-study', 'thesis', 'now', 'contact'],
    es: ['perfil', 'cv', 'taller', 'caso', 'tesis', 'ahora', 'contacto'],
    zh: ['关于', '简历', '工作台', '案例', '论点', '现在', '联系']
  },
  brandNote: { en: '--field-notes', es: '--cuaderno-de-campo', zh: '--实地笔记' },
  skip: { en: 'Skip to content', es: 'Saltar al contenido', zh: '跳到正文' },
  skinLabel: { en: "Change the site's skin", es: 'Cambiar el aspecto del sitio', zh: '切换外观' },
  langLabel: { en: 'Change language', es: 'Cambiar de idioma', zh: '切换语言' },
  status: {
    en: 'aberdeen, scotland',
    es: 'aberdeen, escocia',
    zh: '苏格兰 阿伯丁'
  },
  openToWork: { en: 'open to work', es: 'disponible', zh: '正在求职' },
  footerLinks: {
    en: ['email', 'github', 'linkedin', 'nous application'],
    es: ['correo', 'github', 'linkedin', 'candidatura a nous'],
    zh: ['邮件', 'github', 'linkedin', 'Nous 求职信']
  },
  // terminal
  term: {
    title: {
      en: 'javier@aberdeen — ~/field-notes',
      es: 'javier@aberdeen — ~/cuaderno-de-campo',
      zh: 'javier@aberdeen — ~/实地笔记'
    },
    online: { en: 'online', es: 'en línea', zh: '在线' },
    hint: {
      en: 'Type <b>help</b> for what this understands. Everything here is also a normal page — the links below work without it.',
      es: 'Escribe <b>help</b> para ver lo que entiende. Todo esto es además una página normal: los enlaces de abajo funcionan sin la terminal.',
      zh: '输入 <b>help</b> 查看可用命令。这些内容同样是普通网页——下面的链接不依赖终端也能用。'
    },
    facts: {
      en: [
        ['OS', 'Arch Linux · Omarchy · Fedora'],
        ['Host', 'ex-Apple Genius, ten years'],
        ['Role', 'technical support · customer success'],
        ['Uptime', 'two years on this stack'],
        ['Shell', 'Hermes Agent'],
        ['WM', 'Hyprland'],
        ['GPU', 'RTX 5090 — llama.cpp, Qwen3 27B GGUF Q6'],
        ['Deploy', 'Docker · Traefik · a VPS I administer'],
        ['Terminal', 'you are in it'],
        ['Open to', 'support and customer-facing roles, remote']
      ],
      es: [
        ['SO', 'Arch Linux · Omarchy · Fedora'],
        ['Origen', 'ex-Genius de Apple, diez años'],
        ['Puesto', 'soporte técnico · atención al cliente'],
        ['Activo', 'dos años con esta pila'],
        ['Shell', 'Hermes Agent'],
        ['WM', 'Hyprland'],
        ['GPU', 'RTX 5090 — llama.cpp, Qwen3 27B GGUF Q6'],
        ['Despliegue', 'Docker · Traefik · un VPS que administro yo'],
        ['Terminal', 'estás dentro de ella'],
        ['Busco', 'soporte y trato con clientes, en remoto']
      ],
      zh: [
        ['系统', 'Arch Linux · Omarchy · Fedora'],
        ['出身', '前苹果 Genius，十年'],
        ['方向', '技术支持 · 客户成功'],
        ['运行', '接触这套技术栈两年'],
        ['Shell', 'Hermes Agent'],
        ['窗口管理', 'Hyprland'],
        ['显卡', 'RTX 5090 — llama.cpp，Qwen3 27B GGUF Q6'],
        ['部署', 'Docker · Traefik · 自己维护的 VPS'],
        ['终端', '你正在用它'],
        ['求职', '技术支持与客户面向岗位，远程']
      ]
    },
    help: {
      en: [
        ['whoami', 'the short version'],
        ['ls', 'pages on this site'],
        ['open <page>', 'go to one of them'],
        ['projects', 'what I built, and who wrote it'],
        ['running', 'what I run every day'],
        ['skills', 'grouped, with what I am still learning'],
        ['cv', 'profile and the PDF'],
        ['contact', 'email, GitHub, LinkedIn'],
        ['skin [name]', 'change the look, or list the options'],
        ['lang [code]', 'switch language: en, es, zh'],
        ['neofetch', 'the banner again'],
        ['clear', 'wipe the scrollback']
      ],
      es: [
        ['whoami', 'la versión breve'],
        ['ls', 'páginas de este sitio'],
        ['open <página>', 'abrir una de ellas'],
        ['projects', 'lo que he hecho, y quién lo escribió'],
        ['running', 'lo que uso a diario'],
        ['skills', 'por grupos, con lo que aún estoy aprendiendo'],
        ['cv', 'perfil y el PDF'],
        ['contact', 'correo, GitHub, LinkedIn'],
        ['skin [nombre]', 'cambiar el aspecto, o ver las opciones'],
        ['lang [código]', 'cambiar de idioma: en, es, zh'],
        ['neofetch', 'el rótulo otra vez'],
        ['clear', 'limpiar la pantalla']
      ],
      zh: [
        ['whoami', '简短版本'],
        ['ls', '本站页面'],
        ['open <页面>', '打开其中一页'],
        ['projects', '我做过什么，以及是谁写的'],
        ['running', '我每天在用什么'],
        ['skills', '分组技能，含仍在学习的部分'],
        ['cv', '个人简介与 PDF'],
        ['contact', '邮件、GitHub、LinkedIn'],
        ['skin [名称]', '切换外观，或列出选项'],
        ['lang [代码]', '切换语言：en、es、zh'],
        ['neofetch', '再打印一次横幅'],
        ['clear', '清屏']
      ]
    },
    strings: {
      commands: { en: 'Commands:', es: 'Comandos:', zh: '命令：' },
      notFound: { en: ': command not found. Try help.', es: ': no existe ese comando. Prueba help.', zh: '：找不到该命令。试试 help。' },
      noPage: { en: 'open: no page named ', es: 'open: no hay ninguna página llamada ', zh: 'open：没有名为 ' },
      tryLs: { en: '. Try ls.', es: '. Prueba ls.', zh: ' 的页面。试试 ls。' },
      opening: { en: 'opening ', es: 'abriendo ', zh: '正在打开 ' },
      source: { en: 'source ↗', es: 'código ↗', zh: '源码 ↗' },
      upstream: { en: 'upstream ↗', es: 'proyecto original ↗', zh: '上游项目 ↗' },
      fullCv: { en: 'full CV →', es: 'CV completo →', zh: '完整简历 →' },
      dlPdf: { en: 'download the PDF ↓', es: 'descargar el PDF ↓', zh: '下载 PDF ↓' },
      skinsCurrent: { en: 'Skins (current: ', es: 'Aspectos (actual: ', zh: '外观（当前：' },
      skinsHint: { en: '  skin <name>   or use the picker in the header', es: '  skin <nombre>   o usa el selector de la cabecera', zh: '  skin <名称>   或使用页首的选择器' },
      noSkin: { en: 'skin: no skin called ', es: 'skin: no hay ningún aspecto llamado ', zh: 'skin：没有名为 ' },
      langsCurrent: { en: 'Languages (current: ', es: 'Idiomas (actual: ', zh: '语言（当前：' },
      noLang: { en: 'lang: no language called ', es: 'lang: no hay ningún idioma llamado ', zh: 'lang：没有名为 ' },
      sudo: { en: 'Nice try. Leading is serving, not sudo.', es: 'Buen intento. Liderar es servir, no sudo.', zh: '想得美。领导是服务，不是 sudo。' }
    }
  },
  // page names used by `ls` and `open`
  pages: {
    en: [
      ['about', '/about', 'experience and the transition'],
      ['cv', '/cv', 'full curriculum vitae, and the PDF'],
      ['workbench', '/workbench', 'what I run and what I built'],
      ['case-study', '/memento-mori', 'shipping one thing to production'],
      ['thesis', '/thesis', 'the malleable machine'],
      ['now', '/now', 'what has my attention'],
      ['contact', '/contact', 'how to reach me']
    ],
    es: [
      ['about', '/about', 'experiencia y el cambio de rumbo'],
      ['cv', '/cv', 'currículum completo, y el PDF'],
      ['workbench', '/workbench', 'lo que uso y lo que he hecho'],
      ['case-study', '/memento-mori', 'llevar una cosa a producción'],
      ['thesis', '/thesis', 'la máquina moldeable'],
      ['now', '/now', 'qué me ocupa ahora'],
      ['contact', '/contact', 'cómo localizarme']
    ],
    zh: [
      ['about', '/about', '经历与转向'],
      ['cv', '/cv', '完整简历与 PDF'],
      ['workbench', '/workbench', '我用什么，我做了什么'],
      ['case-study', '/memento-mori', '把一件东西送上生产环境'],
      ['thesis', '/thesis', '可塑的机器'],
      ['now', '/now', '当下的关注'],
      ['contact', '/contact', '如何联系我']
    ]
  }
};

/** t(ui.something, lang) — English is the fallback for anything untranslated. */
export function t(entry, lang) {
  if (!entry) return '';
  return entry[lang] ?? entry[defaultLocale] ?? '';
}
