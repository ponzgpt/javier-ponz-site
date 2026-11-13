// UI strings and terminal data, one object per language. English is `ui.en`,
// Spanish `ui.es` — components read `ui[lang]`. Command *names* the terminal
// accepts (help, whoami, ls, read, lang…) stay identical in both languages,
// since they are typed, not read; only their descriptions and arguments
// translate.

const EN = {
  // Path-style labels; the anchors themselves (#now …) are the same in every language.
  nav: ['/now', '/work', '/rig', '/story', '/notes', '/connect'],
  skip: 'Skip to content',
  langLabel: 'Change language',
  githubLabel: 'Javier on GitHub',
  menuLabel: 'Menu',
  pausedTag: '(paused)',
  treeHint: 'real repos — see <b>projects</b> for details.',
  treeThisSite: 'this site',
  musicOpen: 'Music player',
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
    title: 'javier@techn0ir: ~',
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
          ['GPU', 'NVIDIA GeForce RTX 5090'],
          ['Display', '3840x2160 @ 120 Hz in 42"'],
          ['Disk', '127.13 GiB / 1.82 TiB (7%) - btrfs'],
          ['Disk', '0 B / 1.82 TiB (0%) - btrfs'],
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
        color: 'fg',
        rows: [
          ['OS Age', '36 years'],
          // Placeholder only — the client script in Terminal.astro
          // overwrites this every second with HH:MM:SS elapsed since a
          // fixed 5:30am Europe/London reference.
          ['Uptime', '00:00:00'],
          ['Update', 'Sunday, September 13 2026 at 20:51']
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
      ['read [topic]', 'the longer notes: about, apple, newsletter'],
      ['cv', 'profile and the PDF'],
      ['contact', 'LinkedIn, X, GitHub'],
      ['lang [code]', 'switch language: en, es'],
      ['fastfetch', 'portrait, wordmark and machine specs'],
      ['btop', 'a simulated resource monitor'],
      ['tree', 'the real repos, as a file tree'],
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
      topics: 'Topics:',
      noTopic: 'read: no topic called ',
      langsCurrent: 'Languages (current: ',
      langsHint: '  lang <code>   or use the switch in the header',
      noLang: 'lang: no language called ',
      sudo: 'Nice try. Leading is serving, not sudo.'
    }
  },
  // page names used by `ls` and `open` — the id (first item) is a slug, kept
  // identical across languages so `open about` works either way.
  pages: [
    ['now', '#now', 'two Hermes plugins, with their sources'],
    ['work', '#work', 'what I built, and who wrote it'],
    ['rig', '#rig', 'the machine, the server, what I run daily'],
    ['story', '#story', 'Apple Retail, the transition, the study, skills'],
    ['notes', '#notes', 'ASI, neuroscience, post-labor economics; milestones'],
    ['connect', '#connect', 'this terminal, and how to reach me']
  ],
  // `read <topic>`: the longer essays from pages.mjs, printed as text.
  // Value is the pages.mjs block the topic reads.
  topics: [
    ['about', 'about', 'who I am, the principle, what I believe'],
    ['apple', 'experience', 'ten years at Apple Retail, then Aberdeen'],
    ['newsletter', 'newsletter', 'Machines Do It Better, and the notes behind it']
  ]
};

const ES = {
  nav: ['/ahora', '/trabajo', '/equipo', '/historia', '/notas', '/contacto'],
  skip: 'Ir al contenido',
  langLabel: 'Cambiar de idioma',
  githubLabel: 'Javier en GitHub',
  menuLabel: 'Menú',
  pausedTag: '(pausado)',
  treeHint: 'repos reales — mira <b>projects</b> para más detalles.',
  treeThisSite: 'este sitio',
  musicOpen: 'Reproductor de música',
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
    title: 'javier@techn0ir: ~',
    online: 'en línea',
    hint: 'Escribe <b>help</b> para ver la lista de comandos.',
    factGroups: [
      {
        title: 'Hardware',
        color: 'accent2',
        rows: [
          ['PC', 'montaje propio'],
          ['CPU', 'AMD Ryzen 9 9900X3D (24) @ 5,58 GHz'],
          ['GPU', 'NVIDIA GeForce RTX 5090'],
          ['Display', '3840x2160 @ 120 Hz en 42"'],
          ['Disk', '127,13 GiB / 1,82 TiB (7%) - btrfs'],
          ['Disk', '0 B / 1,82 TiB (0%) - btrfs'],
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
        color: 'fg',
        rows: [
          ['OS Age', '36 años'],
          // Solo un valor provisional — el script cliente en Terminal.astro
          // lo sustituye cada segundo por las HH:MM:SS transcurridas desde
          // una referencia fija de las 5:30am hora de Europe/London.
          ['Uptime', '00:00:00'],
          ['Update', 'domingo, 13 de septiembre de 2026 a las 20:51']
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
      ['read [tema]', 'las notas largas: about, apple, newsletter'],
      ['cv', 'perfil y el PDF'],
      ['contact', 'LinkedIn, X, GitHub'],
      ['lang [código]', 'cambiar de idioma: en, es'],
      ['fastfetch', 'retrato, logotipo y especificaciones'],
      ['btop', 'un monitor de recursos simulado'],
      ['tree', 'los repos reales, como árbol de ficheros'],
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
      topics: 'Temas:',
      noTopic: 'read: no hay ningún tema llamado ',
      langsCurrent: 'Idiomas (actual: ',
      langsHint: '  lang <código>   o usa el selector de la cabecera',
      noLang: 'lang: no hay ningún idioma llamado ',
      sudo: 'Buen intento. Liderar es servir, no sudo.'
    }
  },
  pages: [
    ['now', '#now', 'dos plugins de Hermes, con sus fuentes'],
    ['work', '#work', 'lo que he hecho, y quién lo escribió'],
    ['rig', '#rig', 'la máquina, el servidor, lo que uso a diario'],
    ['story', '#story', 'Apple Retail, el cambio de rumbo, la formación, competencias'],
    ['notes', '#notes', 'ASI, neurociencia, economía post-laboral; hitos'],
    ['connect', '#connect', 'este terminal, y cómo contactarme']
  ],
  topics: [
    ['about', 'about', 'quién soy, el principio, en lo que creo'],
    ['apple', 'experience', 'diez años en Apple Retail, luego Aberdeen'],
    ['newsletter', 'newsletter', 'Machines Do It Better, y las notas detrás']
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
