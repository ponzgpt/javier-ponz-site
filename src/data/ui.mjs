// UI strings and terminal data, one object per language. English is `ui.en`,
// Spanish `ui.es` — components read `ui[lang]`. Command *names* the terminal
// accepts (help, whoami, ls, skin, lang…) stay identical in both languages,
// since they are typed, not read; only their descriptions and arguments
// translate.

const EN = {
  nav: ['about', 'experience', 'projects', 'skills', 'achievements', 'newsletter', 'contact'],
  skip: 'Skip to content',
  skinLabel: "Change the site's theme",
  langLabel: 'Change language',
  githubLabel: 'Javier on GitHub',
  menuLabel: 'Menu',
  wsLabel: 'Simulated workspaces',
  wsHint: 'ctrl + n',
  status: 'aberdeen, scotland',
  openToWork: 'open to work',
  footerLinks: ['email', 'github', 'linkedin'],
  pausedTag: '(paused)',
  treeHint: 'real repos — see <b>projects</b> for details.',
  treeThisSite: 'this site',
  musicPlay: 'Play ambient music',
  musicMute: 'Mute',
  musicCredit: 'nova head — "Crown of the Horizon" (CC0)',
  musicTitle: 'Crown of the Horizon',
  musicVolume: 'Volume',
  musicPrev: 'Previous track',
  musicNext: 'Next track',
  musicVolDown: 'Volume down',
  musicVolUp: 'Volume up',
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
          ['PC', 'custom build'],
          ['CPU', 'AMD Ryzen 9 9900X3D (24) @ 5.58 GHz'],
          ['GPU', 'AMD Radeon Graphics'],
          ['GPU', 'NVIDIA GeForce RTX 5090'],
          ['Display', '3840x2160 @ 1.25x in 72", 60 Hz'],
          ['Disk', '127.13 GiB / 1.82 TiB (7%) - btrfs'],
          ['Disk', '5.81 GiB / 5.81 GiB (100%) - iso'],
          ['Memory', '9.36 GiB / 60.46 GiB (15%)'],
          ['Swap', '0 B / 120.91 GiB (0%)']
        ]
      },
      {
        title: 'Software',
        color: 'accent',
        rows: [
          ['OS', 'Omarchy 4.0.3-1'],
          ['Channel', 'stable'],
          ['Kernel', 'Linux 7.2.3-arch1-3'],
          ['WM', 'Hyprland 0.56.2 (Wayland)'],
          ['Terminal', 'foot 1.28.0'],
          ['Packages', '1045 (pacman)'],
          ['Theme', 'Tokyo Night'],
          ['Font', 'JetBrainsMono Nerd Font (12pt)']
        ]
      },
      {
        title: 'Age / Uptime / Update',
        color: 'rainbow-7',
        rows: [
          ['OS Age', '0 days'],
          ['Uptime', '36 years, still compiling'],
          ['Update', 'open to technical support & customer-facing roles']
        ]
      }
    ],
    help: [
      ['whoami', 'the short version'],
      ['ls', 'pages on this site'],
      ['open <page>', 'go to one of them'],
      ['projects', 'what I built, and who wrote it'],
      ['running', 'what I run every day'],
      ['skills', 'demonstrated, learning, and direction'],
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
    ['about', '#about', 'who I am, and the principle under it'],
    ['experience', '#experience', 'Apple Retail, the transition, the study'],
    ['projects', '#projects', 'what I run, what I built, and the case study'],
    ['skills', '#skills', 'demonstrated, learning, and direction'],
    ['achievements', '#achievements', 'milestones and proof'],
    ['newsletter', '#newsletter', 'Machines Do It Better — the signal'],
    ['contact', '#contact', 'how to reach me']
  ]
};

const ES = {
  nav: ['perfil', 'experiencia', 'proyectos', 'competencias', 'logros', 'newsletter', 'contacto'],
  skip: 'Ir al contenido',
  skinLabel: 'Cambiar el aspecto del sitio',
  langLabel: 'Cambiar de idioma',
  githubLabel: 'Javier en GitHub',
  menuLabel: 'Menú',
  wsLabel: 'Espacios de trabajo simulados',
  wsHint: 'ctrl + n',
  status: 'aberdeen, escocia',
  openToWork: 'disponible',
  footerLinks: ['correo', 'github', 'linkedin'],
  pausedTag: '(pausado)',
  treeHint: 'repos reales — mira <b>projects</b> para más detalles.',
  treeThisSite: 'este sitio',
  musicPlay: 'Reproducir música ambiental',
  musicMute: 'Silenciar',
  musicCredit: 'nova head — "Crown of the Horizon" (CC0)',
  musicTitle: 'Crown of the Horizon',
  musicVolume: 'Volumen',
  musicPrev: 'Pista anterior',
  musicNext: 'Pista siguiente',
  musicVolDown: 'Bajar volumen',
  musicVolUp: 'Subir volumen',
  term: {
    title: 'jpp — ~',
    online: 'en línea',
    hint: 'Escribe <b>help</b> para ver la lista de comandos.',
    factGroups: [
      {
        title: 'Hardware',
        color: 'accent2',
        rows: [
          ['PC', 'montaje propio'],
          ['CPU', 'AMD Ryzen 9 9900X3D (24) @ 5,58 GHz'],
          ['GPU', 'AMD Radeon Graphics'],
          ['GPU', 'NVIDIA GeForce RTX 5090'],
          ['Display', '3840x2160 @ 1,25x en 72", 60 Hz'],
          ['Disk', '127,13 GiB / 1,82 TiB (7%) - btrfs'],
          ['Disk', '5,81 GiB / 5,81 GiB (100%) - iso'],
          ['Memory', '9,36 GiB / 60,46 GiB (15%)'],
          ['Swap', '0 B / 120,91 GiB (0%)']
        ]
      },
      {
        title: 'Software',
        color: 'accent',
        rows: [
          ['OS', 'Omarchy 4.0.3-1'],
          ['Channel', 'stable'],
          ['Kernel', 'Linux 7.2.3-arch1-3'],
          ['WM', 'Hyprland 0.56.2 (Wayland)'],
          ['Terminal', 'foot 1.28.0'],
          ['Packages', '1045 (pacman)'],
          ['Theme', 'Tokyo Night'],
          ['Font', 'JetBrainsMono Nerd Font (12pt)']
        ]
      },
      {
        title: 'Age / Uptime / Update',
        color: 'rainbow-7',
        rows: [
          ['OS Age', '0 días'],
          ['Uptime', '36 años, seguimos compilando'],
          ['Update', 'soporte técnico y puestos de cara al cliente']
        ]
      }
    ],
    help: [
      ['whoami', 'la versión breve'],
      ['ls', 'páginas de este sitio'],
      ['open <página>', 'ir a una de ellas'],
      ['projects', 'lo que he hecho, y quién lo escribió'],
      ['running', 'lo que uso a diario'],
      ['skills', 'demostrado, aprendiendo, y hacia dónde voy'],
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
    ['about', '#about', 'quién soy, y el principio que hay debajo'],
    ['experience', '#experience', 'Apple Retail, el cambio de rumbo, la formación'],
    ['projects', '#projects', 'lo que uso, lo que he hecho, y el caso práctico'],
    ['skills', '#skills', 'demostrado, aprendiendo, y hacia dónde voy'],
    ['achievements', '#achievements', 'hitos y pruebas'],
    ['newsletter', '#newsletter', 'Machines Do It Better — the signal'],
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
  PC: '▣',
  OS: '⌘',
  Channel: '⌂',
  Kernel: '⚙',
  WM: '⊞',
  Swap: '⇅',
  Terminal: '◫',
  Packages: '▥',
  Theme: '◐',
  Font: '◨',
  CPU: '▧',
  GPU: '◆',
  Display: '▭',
  Disk: '▨',
  Memory: '◧',
  'OS Age': '◷',
  Uptime: '◔',
  Update: '↻'
};
