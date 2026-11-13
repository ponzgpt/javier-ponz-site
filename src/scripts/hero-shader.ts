// The hero's moving background: Paper Shaders' dithering fragment shader
// (Apache-2.0) over a slow "warp" source, amber ink on the page background,
// mixed down so the text in front keeps its contrast (a scrim in CSS does the
// rest). ShaderMount already pauses itself when the canvas leaves the viewport
// or the tab is hidden. If WebGL is unavailable the element keeps its CSS
// fallback (a static glow and dot raster), so the hero is never a blank box.
import {
  ShaderMount,
  ditheringFragmentShader,
  DitheringShapes,
  DitheringTypes,
  ShaderFitOptions,
  getShaderColorFromString
} from '@paper-design/shaders';

const MAX_DPR = 1.5;

function token(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

/** Mix two #rrggbb colours: t=0 gives a, t=1 gives b. */
export function mixHex(a: string, b: string, t: number) {
  const ch = (h: string, i: number) => parseInt(h.slice(1 + i * 2, 3 + i * 2), 16);
  return '#' + [0, 1, 2].map((i) => Math.round(ch(a, i) + (ch(b, i) - ch(a, i)) * t).toString(16).padStart(2, '0')).join('');
}

export function mountHeroShader(host: HTMLElement | null) {
  if (!host) return;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const bg = token('--bg') || '#0b0a10';
  const ink = mixHex(bg, token('--accent') || '#ffb23e', 0.3);
  // Cap the backing store at 1.5x device pixels: render at 1x minimum and let
  // maxPixelCount clip anything denser.
  const cap = () => Math.max(1, host.clientWidth * host.clientHeight) * MAX_DPR * MAX_DPR;
  try {
    const mount = new ShaderMount(
      host,
      ditheringFragmentShader,
      {
        u_colorBack: getShaderColorFromString(bg),
        u_colorFront: getShaderColorFromString(ink),
        u_shape: DitheringShapes.warp,
        u_type: DitheringTypes['4x4'],
        u_pxSize: 3,
        u_fit: ShaderFitOptions.none,
        u_scale: 0.9,
        u_rotation: 0,
        u_offsetX: 0.35,
        u_offsetY: 0,
        u_originX: 0.5,
        u_originY: 0.5,
        u_worldWidth: 0,
        u_worldHeight: 0
      },
      { premultipliedAlpha: false, alpha: false },
      still ? 0 : 0.18, // speed; 0 renders one static frame
      2400,             // fixed starting frame, so the still frame is a good one
      1,
      cap()
    );
    let t = 0;
    addEventListener('resize', () => {
      clearTimeout(t);
      t = window.setTimeout(() => mount.setMaxPixelCount(cap()), 150);
    });
  } catch {
    host.classList.add('no-webgl'); // CSS fallback stays visible
  }
}
