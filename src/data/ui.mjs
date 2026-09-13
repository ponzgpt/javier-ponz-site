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
  footerLinks: ['email', 'github', 'linkedin', 'nous application'],
  // terminal
  term: {
    title: 'jpp — ~',
    online: 'online',
    hint: 'Type <b>help</b> for what this understands. Everything here is also a normal page — the links below work without it.',
    // fastfetch-style groups — Omarchy Quattro ships fastfetch, not neofetch,
    // with output boxed into titled sections (see etc/fastfetch/config.jsonc
    // in omacom/omarchy). Same shape here, Javier's own values.
    factGroups: [
      {
        title: 'Hardware',
        color: 'accent2',
        rows: [
          ['PC', 'Aberdeen, Scotland'],
          ['CPU', 'Human (1) @ full attention'],
          ['GPU', 'RTX 5090 — llama.cpp, Qwen3 27B GGUF Q6'],
          ['Memory', '10 years / always more to learn']
        ]
      },
      {
        title: 'Software',
        color: 'accent',
        rows: [
          ['OS', 'Omarchy BTW'],
          ['Kernel', 'leading-is-serving 10.0-lts'],
          ['WM', 'Hyprland'],
          ['Terminal', 'you are in it'],
          ['Shell', 'fzf'],
          ['Packages', 'whatever ships (git)'],
          ['Theme', 'Tokyo Night (Omakase)']
        ]
      },
      {
        title: 'Uptime / Update',
        color: 'rainbow-7',
        rows: [
          ['OS Age', 'since Aug 2024'],
          ['Uptime', 'two years on this stack'],
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
