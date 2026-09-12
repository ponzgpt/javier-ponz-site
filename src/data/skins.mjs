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
    id: 'omarchy',
    name: 'Omakase',
    note: 'Tokyo Night, the Omarchy default',
    sprite: {
      // The Omarchy icon itself (icon.png in omacom/omarchy), traced to a grid
      // by sampling its pixels — a single-stroke maze/spiral square. Its own
      // green is #9ece6a, which is exactly this skin's accent2, so the sprite
      // needs no colour of its own beyond that token.
      ink: { 1: 'var(--accent2)' },
      grid: [
        '1111111111111',
        '1.....1.....1',
        '1.11111...1.1',
        '1.1.......1.1',
        '1.1.......1.1',
        '1.1.......1.1',
        '111.......1.1',
        '1.1.......1.1',
        '1.1.......1.1',
        '1.1.......1.1',
        '1.111111111.1',
        '1.....1.....1',
        '1111111.11111'
      ]
    },
    // Omarchy's own tokyo-night theme, themes/tokyo-night/colors.toml in
    // omacom/omarchy — background/foreground/accent/green, verbatim.
    bg: '#1a1b26',
    fg: '#a9b1d6',
    accent: '#7aa2f7',
    accent2: '#9ece6a',
    // Optional: the rest of that same colors.toml, for spots with several
    // items side by side (currently just .tag) where one accent reads as
    // flat. Not part of the 4-token contract — a skin with no `rainbow`
    // just gets accent2 repeated, so this is opt-in for skins that want it.
    rainbow: ['#f7768e', '#eb927b', '#e0af68', '#9ece6a', '#449dab', '#7aa2f7', '#ad8ee6'],
    display: "'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,monospace",
    body: "'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,monospace"
  },
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

// Fixed slot count so the CSS that consumes --rainbow-N (Layout.astro) can be
// written once as literal :nth-of-type rules. A skin with no `rainbow` gets
// accent2 in every slot, which is the same flat look as before it existed.
const RAINBOW_SLOTS = 7;

/** The [data-skin] blocks, generated so the data file stays the only source. */
export function skinCss() {
  const vars = (s) => {
    const rainbow = s.rainbow ?? [s.accent2];
    const rainbowVars = Array.from(
      { length: RAINBOW_SLOTS },
      (_, i) => `--rainbow-${i + 1}:${rainbow[i % rainbow.length]}`
    ).join(';');
    return `--bg:${s.bg};--fg:${s.fg};--accent:${s.accent};--accent2:${s.accent2};` +
      `--font-display:${s.display};--font-body:${s.body};--scale:${s.scale ?? 1};${rainbowVars}`;
  };
  return [
    `:root{${vars(skins[0])}}`,
    ...skins.map((s) => `[data-skin="${s.id}"]{${vars(s)}}`)
  ].join('\n');
}
