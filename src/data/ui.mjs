// UI strings and terminal data, one object per language. English is `ui.en`,
// Spanish `ui.es` — components read `ui[lang]`. Command *names* the terminal
// accepts (help, whoami, ls, skin, lang…) stay identical in both languages,
// since they are typed, not read; only their descriptions and arguments
// translate.

const EN = {
  nav: ['about', 'projects', 'thoughts', 'now', 'contact'],
  skip: 'Skip to content',
  skinLabel: "Change the site's theme",
  langLabel: 'Change language',
  githubLabel: 'Javier on GitHub',
  menuLabel: 'Menu',
  status: 'aberdeen, scotland',
  openToWork: 'open to work',
  footerLinks: ['email', 'github', 'linkedin'],
  // terminal
  term: {
    title: 'jpp — ~',
    online: 'online',
    hint: 'Type <b>help</b> for what this understands. Everything here is also a normal page — the links below work without it.',
    // Real fastfetch module vocabulary and order (OS/Host/Kernel/Uptime/
    // Packages/Shell/Display/WM/Theme/Terminal/CPU/GPU/Memory) — one box,
    // titled like fastfetch's own "user@host" separator rather than an
    // invented category heading. The humour is in the values, not the labels.
    factGroups: [
      {
        title: 'jpp@aberdeen',
        color: 'accent2',
        rows: [
          ['OS', 'Omarchy'],
          ['Host', 'Genius Bar, Madrid → homelab, Aberdeen'],
          ['Kernel', 'leading-is-serving 10.0-lts'],
          ['Uptime', '35 years, still compiling'],
          ['Packages', 'whatever ships (git)'],
          ['Shell', 'fzf'],
          ['Display', '27" external, plenty of screen time'],
          ['WM', 'Hyprland'],
          ['Theme', 'Tokyo Night (Omakase)'],
          ['Terminal', 'you are in it'],
          ['CPU', 'Human (1) @ full attention'],
          ['GPU', '2 × local inference rigs — currently paused'],
          ['Memory', '10 years / always more to learn']
        ]
      }
    ],
    help: [
      ['whoami', 'the short version'],
      ['ls', 'pages on this site'],
      ['open <page>', 'go to one of them'],
      ['projects', 'what I built, and who wrote it'],
      ['running', 'what I run every day'],
      ['skills', 'grouped, with what I am still learning'],
      ['cv', 'profile and the PDF'],
      ['contact', 'email, GitHub, LinkedIn'],
      ['skin [name]', 'change the look, or list the options'],
      ['lang [code]', 'switch language: en, es'],
      ['fastfetch', 'the banner again'],
      ['clear', 'wipe the scrollback']
    ],
    strings: {
      commands: 'Commands:',
      notFound: ': command not found. Try help.',
      noPage: 'open: no page named ',
      tryLs: '. Try ls.',
      opening: 'opening ',
      source: 'source ↗',
      upstream: 'upstream ↗',
      dlPdf: 'download the PDF ↓',
      skinsCurrent: 'Skins (current: ',
      skinsHint: '  skin <name>   or use the picker in the header',
      noSkin: 'skin: no skin called ',
      langsCurrent: 'Languages (current: ',
      langsHint: '  lang <code>   or use the picker in the header',
      noLang: 'lang: no language called ',
      sudo: 'Nice try. Leading is serving, not sudo.'
    }
  },
  // page names used by `ls` and `open` — the id (first item) is a slug, kept
  // identical across languages so `open about` works either way.
  pages: [
    ['about', '#about', 'experience and the transition'],
    ['timeline', '#timeline', 'a concise chronology'],
    ['agents', '#agents', 'the working notebook'],
    ['projects', '#projects', 'what I run, what I built, and the case study'],
    ['thoughts', '#thoughts', 'the malleable machine'],
    ['now', '#now', 'what has my attention'],
    ['contact', '#contact', 'how to reach me']
  ]
};

const ES = {
  nav: ['perfil', 'proyectos', 'ideas', 'ahora', 'contacto'],
  skip: 'Ir al contenido',
  skinLabel: 'Cambiar el aspecto del sitio',
  langLabel: 'Cambiar de idioma',
  githubLabel: 'Javier en GitHub',
  menuLabel: 'Menú',
  status: 'aberdeen, escocia',
  openToWork: 'disponible',
  footerLinks: ['correo', 'github', 'linkedin'],
  term: {
    title: 'jpp — ~',
    online: 'en línea',
    hint: 'Escribe <b>help</b> para ver qué entiende esta terminal. Todo esto es también una página normal — los enlaces de abajo funcionan sin ella.',
    factGroups: [
      {
        title: 'jpp@aberdeen',
        color: 'accent2',
        rows: [
          ['OS', 'Omarchy'],
          ['Host', 'Genius Bar, Madrid → homelab en Aberdeen'],
          ['Kernel', 'liderar-es-servir 10.0-lts'],
          ['Uptime', '35 años, seguimos compilando'],
          ['Packages', 'lo que llega a producción (git)'],
          ['Shell', 'fzf'],
          ['Display', '27" externo, pantalla de sobra'],
          ['WM', 'Hyprland'],
          ['Theme', 'Tokyo Night (Omakase)'],
          ['Terminal', 'estás dentro de ella'],
          ['CPU', 'Humano (1) @ atención plena'],
          ['GPU', '2 × equipos de inferencia local — pausados por ahora'],
          ['Memory', '10 años / siempre queda más por aprender']
        ]
      }
    ],
    help: [
      ['whoami', 'la versión breve'],
      ['ls', 'páginas de este sitio'],
      ['open <página>', 'ir a una de ellas'],
      ['projects', 'lo que he hecho, y quién lo escribió'],
      ['running', 'lo que uso a diario'],
      ['skills', 'por grupos, con lo que aún estoy aprendiendo'],
      ['cv', 'perfil y el PDF'],
      ['contact', 'correo, GitHub, LinkedIn'],
      ['skin [nombre]', 'cambiar el aspecto, o ver las opciones'],
      ['lang [código]', 'cambiar de idioma: en, es'],
      ['fastfetch', 'el banner otra vez'],
      ['clear', 'limpiar la pantalla']
    ],
    strings: {
      commands: 'Comandos:',
      notFound: ': no existe ese comando. Prueba help.',
      noPage: 'open: no hay ninguna página llamada ',
      tryLs: '. Prueba ls.',
      opening: 'abriendo ',
      source: 'código ↗',
      upstream: 'proyecto original ↗',
      dlPdf: 'descargar el PDF ↓',
      skinsCurrent: 'Aspectos (actual: ',
      skinsHint: '  skin <nombre>   o usa el selector de la cabecera',
      noSkin: 'skin: no hay ningún aspecto llamado ',
      langsCurrent: 'Idiomas (actual: ',
      langsHint: '  lang <código>   o usa el selector de la cabecera',
      noLang: 'lang: no hay ningún idioma llamado ',
      sudo: 'Buen intento. Liderar es servir, no sudo.'
    }
  },
  pages: [
    ['about', '#about', 'la experiencia y el cambio de rumbo'],
    ['timeline', '#timeline', 'una cronología breve'],
    ['agents', '#agents', 'el cuaderno de trabajo'],
    ['projects', '#projects', 'lo que uso, lo que he hecho, y el caso práctico'],
    ['thoughts', '#thoughts', 'la máquina moldeable'],
    ['now', '#now', 'qué me ocupa ahora'],
    ['contact', '#contact', 'cómo contactarme']
  ]
};

export const ui = { en: EN, es: ES };
