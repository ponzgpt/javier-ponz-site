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
  wsLabel: 'Simulated workspaces',
  status: 'aberdeen, scotland',
  openToWork: 'open to work',
  footerLinks: ['email', 'github', 'linkedin'],
  pausedTag: '(paused)',
  treeHint: 'real repos — see <b>projects</b> for details.',
  treeThisSite: 'this site',
  musicPlay: 'Play ambient music',
  musicMute: 'Mute',
  musicCredit: 'nova head — "Crown of the Horizon" (CC0)',
  // terminal
  term: {
    title: 'jpp — ~',
    online: 'online',
    hint: 'Type <b>help</b> to see the list of commands.',
    // The real category boxes Javier's own fastfetch prints (Hardware /
    // Software / Age·Uptime·Update) — confirmed against an actual screenshot
    // of his terminal, not guessed. Same three boxes, same field order, our
    // own values.
    factGroups: [
      {
        title: 'Hardware',
        color: 'accent2',
        rows: [
          ['CPU', 'Human (1) @ full attention'],
          ['GPU', '2 × local inference rigs — paused'],
          ['Display', '27" external, plenty of screen time'],
          ['Disk', 'a decade of notes, mostly Markdown'],
          ['Memory', '10 years / always more to learn']
        ]
      },
      {
        title: 'Software',
        color: 'accent',
        rows: [
          ['OS', 'Omarchy'],
          ['Host', 'Genius Bar, Madrid → homelab, Aberdeen'],
          ['Kernel', 'leading-is-serving 10.0-lts'],
          ['WM', 'Hyprland'],
          ['Shell', 'fzf'],
          ['Terminal', 'you are in it'],
          ['Packages', 'whatever ships (git)'],
          ['Theme', 'Tokyo Night (Omakase)']
        ]
      },
      {
        title: 'Age / Uptime / Update',
        color: 'rainbow-7',
        rows: [
          ['OS Age', 'since Aug 2024'],
          ['Uptime', '35 years, still compiling'],
          ['Update', 'open to support & customer-facing roles']
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
      ['fastfetch', 'the banner again (workspace 1)'],
      ['btop', 'a simulated resource monitor (workspace 2)'],
      ['tree', 'the real repos, as a file tree (workspace 3)'],
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
  wsLabel: 'Espacios de trabajo simulados',
  status: 'aberdeen, escocia',
  openToWork: 'disponible',
  footerLinks: ['correo', 'github', 'linkedin'],
  pausedTag: '(pausado)',
  treeHint: 'repos reales — mira <b>projects</b> para más detalles.',
  treeThisSite: 'este sitio',
  musicPlay: 'Reproducir música ambiental',
  musicMute: 'Silenciar',
  musicCredit: 'nova head — "Crown of the Horizon" (CC0)',
  term: {
    title: 'jpp — ~',
    online: 'en línea',
    hint: 'Escribe <b>help</b> para ver la lista de comandos.',
    factGroups: [
      {
        title: 'Hardware',
        color: 'accent2',
        rows: [
          ['CPU', 'Humano (1) @ atención plena'],
          ['GPU', '2 × equipos de inferencia local — pausados'],
          ['Display', '27" externo, pantalla de sobra'],
          ['Disk', 'una década de notas, casi todo en Markdown'],
          ['Memory', '10 años / siempre queda más por aprender']
        ]
      },
      {
        title: 'Software',
        color: 'accent',
        rows: [
          ['OS', 'Omarchy'],
          ['Host', 'Genius Bar, Madrid → homelab en Aberdeen'],
          ['Kernel', 'liderar-es-servir 10.0-lts'],
          ['WM', 'Hyprland'],
          ['Shell', 'fzf'],
          ['Terminal', 'estás dentro de ella'],
          ['Packages', 'lo que llega a producción (git)'],
          ['Theme', 'Tokyo Night (Omakase)']
        ]
      },
      {
        title: 'Age / Uptime / Update',
        color: 'rainbow-7',
        rows: [
          ['OS Age', 'desde agosto de 2024'],
          ['Uptime', '35 años, seguimos compilando'],
          ['Update', 'abierto a soporte técnico y roles de cara al cliente']
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
      ['fastfetch', 'el banner otra vez (espacio 1)'],
      ['btop', 'un monitor de recursos simulado (espacio 2)'],
      ['tree', 'los repos reales, como árbol de ficheros (espacio 3)'],
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

// Icons for the terminal's fastfetch card, keyed by the (language-invariant)
// field label. Real fastfetch uses Nerd Font glyphs, which render as blank
// boxes without that font installed — nearly every visitor here. These are
// plain Unicode (Geometric Shapes / Miscellaneous Technical), the same
// blocks the site's own project icons (➤▣⌁▤◈▦◉⌘) already use successfully,
// so no new font dependency and no risk of missing glyphs.
export const fastfetchIcons = {
  OS: '⌘',
  Host: '⌂',
  Kernel: '⚙',
  WM: '⊞',
  Shell: '❯',
  Terminal: '◫',
  Packages: '▥',
  Theme: '◐',
  CPU: '▧',
  GPU: '◆',
  Display: '▭',
  Disk: '▨',
  Memory: '◧',
  'OS Age': '◷',
  Uptime: '◔',
  Update: '↻'
};
