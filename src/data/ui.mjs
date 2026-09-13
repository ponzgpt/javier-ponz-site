// UI strings and terminal data — English only. This file used to carry a
// three-language system (en/es/zh); it's gone, kept in git history if it's
// ever needed again. Everything here is a flat value now, no lookup.

/** ui.<key> — chrome that appears on more than one section. */
export const ui = {
  nav: ['about', 'projects', 'thoughts', 'now', 'contact'],
  skip: 'Skip to content',
  skinLabel: "Change the site's skin",
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
      sudo: 'Nice try. Leading is serving, not sudo.'
    }
  },
  // page names used by `ls` and `open`
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
