// The site's one palette: "tech noir". Night, sodium street light, rain on
// glass. Dark only.
//
// Four colours and the fonts. Everything else in the stylesheet derives from
// these with color-mix(), so changing the look means editing this object and
// nothing else: no new CSS, no new components. (There used to be five
// selectable skins; they were retired in favour of one identity.)
//
// Contrast rule, enforced by `npm run check:skins`: `fg`, `accent`, `accent2`
// and the derived --muted (fg mixed MUTED_TOWARD_BG toward bg) each keep at
// least 4.5:1 against `bg`.

export const palette = {
  bg: '#0B0A10',       // warm near-black with a violet tint
  fg: '#ECE6DA',       // bone
  accent: '#FFB23E',   // sodium amber
  accent2: '#A58BFF',  // electric violet
  display: "'Big Shoulders Display','Arial Narrow',Impact,sans-serif",
  mono: "'JetBrains Mono',ui-monospace,SFMono-Regular,Menlo,monospace",
  body: "Inter,'Helvetica Neue',Arial,sans-serif"
};

/** --muted is fg mixed this far toward bg. One number, read by the CSS and the check. */
export const MUTED_TOWARD_BG = 0.28;

/** The :root block, generated so this file stays the only source. */
export function paletteCss() {
  const p = palette;
  const fgShare = Math.round((1 - MUTED_TOWARD_BG) * 100);
  return `:root{--bg:${p.bg};--fg:${p.fg};--accent:${p.accent};--accent2:${p.accent2};` +
    `--font-display:${p.display};--font-mono:${p.mono};--font-body:${p.body};` +
    `--muted:color-mix(in srgb, var(--fg) ${fgShare}%, var(--bg))}`;
}
