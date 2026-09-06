// Visual skins for the site.
//
// A skin is four colours and two typefaces. Everything else in the stylesheet
// is derived from those with color-mix(), so adding a skin means adding an
// object here and nothing else — no new CSS, no new components.
//
// ── Adding a skin ────────────────────────────────────────────────────────────
//   1. Append an object below. `id` becomes the [data-skin] attribute value and
//      the localStorage value, so keep it short, lowercase and stable.
//   2. If it needs a typeface that isn't already loaded, add the family to the
//      Google Fonts <link> in src/layouts/Layout.astro. Faces already loaded:
//      Courier Prime, JetBrains Mono, Cormorant Garamond, Chakra Petch.
//   3. Check contrast. `fg`, `accent` and `accent2` must each reach 4.5:1
//      against `bg`, and the derived --muted (fg mixed 28% toward bg) must too.
//      That last one is the trap: a mid-grey body colour that passes on a black
//      ground fails on a navy one.
//
// The first entry is the default for a visitor who has never chosen.

// Each skin carries a `sprite`: a tiny pixel character that crosses the screen
// now and then while you scroll. Grids are rows of digits, '.' meaning empty,
// each digit indexing `ink`. Kept as strings because that is the cheapest thing
// to read, diff and edit by hand.
//
// Names are referential rather than literal — Caduceus for the Hermes CLI,
// Omakase for Omarchy, HL for Half-Life — because a skin that borrows a look
// should not also borrow the name.

export const skins = [
  {
    id: 'hermes',
    name: 'Caduceus',
    note: 'The Hermes Agent CLI',
    sprite: {
      // The caduceus — wings, staff, twined snakes. The Hermes CLI draws one in
      // ASCII on startup (HERMES_CADUCEUS in banner.py), which is where the
      // skin's name comes from. Not Nous's mark: it is Hermes' own, and older.
      ink: { 1: 'var(--accent)', 2: 'var(--accent2)' },
      grid: [
        '.1.......1.',
        '11...2...11',
        '.1..212..1.',
        '....121....',
        '...12.21...',
        '....121....',
        '...12.21...',
        '....121....',
        '.....2.....'
      ]
    },
    // Values taken from the CLI's own built-in "default" skin,
    // hermes_cli/skin_engine.py → _BUILTIN_SKINS["default"].
    bg: '#0E1216',
    fg: '#FFF8DC',       // banner_text / prompt
    accent: '#FFD700',   // banner_title, response_border
    accent2: '#CD7F32',  // banner_border, input_rule
    display: "'Courier Prime','Courier New',Courier,monospace",
    body: "'Courier Prime','Courier New',Courier,monospace"
  },
  {
    id: 'omarchy',
    name: 'Omakase',
    note: 'Tokyo Night, the Omarchy default',
    sprite: {
      // A chef's hat. Omakase is "I leave it up to you" — the chef chooses,
      // which is the whole argument for an opinionated distribution.
      ink: { 1: 'var(--fg)', 2: 'var(--accent)' },
      grid: [
        '..11.11...',
        '.111111111',
        '1111111111',
        '.111111111',
        '..2222222.',
        '..2222222.'
      ]
    },
    // From the Omarchy site's own :root — --bg --fg --accent --green.
    bg: '#1a1b26',
    fg: '#a9b1d6',
    accent: '#7aa2f7',
    accent2: '#9ece6a',
    display: "'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,monospace",
    body: "'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,monospace"
  },
  {
    id: 'stormlight',
    name: 'Stormlight',
    note: 'Roshar after a highstorm',
    sprite: {
      // Syl: a windspren, a ribbon of light with a bright core and a trail.
      ink: { 1: 'var(--accent)', 2: '#FFFFFF' },
      grid: [
        '.......121',
        '....11221.',
        '..11221...',
        '.1122.....',
        '112.......',
        '1.........'
      ]
    },
    // Stormlight held in a sphere: a cold blue-white glow on storm-dark night,
    // with Radiant gold. Not from a published palette — this one is mine.
    bg: '#0C1120',
    fg: '#DCE3EC',
    accent: '#8FE3F5',
    accent2: '#C9A227',
    display: "'Cormorant Garamond',Garamond,Georgia,serif",
    body: "'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif",
    scale: 1.06
  },
  {
    id: 'halflife',
    name: 'HL',
    note: 'Black Mesa, 1998',
    sprite: {
      // Headcrab. Four legs, two eyes, a very bad attitude.
      ink: { 1: 'var(--accent)', 2: 'var(--bg)', 3: 'var(--accent2)' },
      grid: [
        '...1111...',
        '..111111..',
        '.11111111.',
        '1121111211',
        '1111111111',
        '.11111111.',
        '3.1....1.3',
        '.3.....3..'
      ]
    },
    // Valve orange on tarmac, with the hazard amber off the HEV suit HUD.
    bg: '#0B0A08',
    fg: '#D6CFC4',
    accent: '#F5821F',
    accent2: '#FFB000',
    display: "'Chakra Petch','Arial Narrow',Impact,sans-serif",
    body: "'Courier Prime','Courier New',Courier,monospace"
  }
];

export const defaultSkin = skins[0].id;

/** The [data-skin] blocks, generated so the data file stays the only source. */
export function skinCss() {
  const vars = (s) =>
    `--bg:${s.bg};--fg:${s.fg};--accent:${s.accent};--accent2:${s.accent2};` +
    `--font-display:${s.display};--font-body:${s.body};--scale:${s.scale ?? 1}`;
  return [
    `:root{${vars(skins[0])}}`,
    ...skins.map((s) => `[data-skin="${s.id}"]{${vars(s)}}`)
  ].join('\n');
}
