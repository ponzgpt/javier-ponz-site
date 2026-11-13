// The Rig section's centrepiece: a lit torus knot rendered by three.js and
// re-drawn as text by AsciiEffect (three/examples, MIT), amber via CSS.
// Lit and flat-shaded rather than a true wireframe: at AsciiEffect's sampling
// resolution one-pixel wire lines mostly fall between samples and vanish,
// while flat facets keep the faceted, wire-like read.
//
// Rules it follows: drag (or arrow keys) to spin, with inertia; slow idle
// rotation unless reduced motion is asked for (then one frame per
// interaction, no idle movement); rendering stops while the box is off-screen
// or the tab is hidden; ~30 fps cap; the WebGL canvas itself is never shown,
// so its pixel ratio stays at 1.
import {
  Scene, PerspectiveCamera, WebGLRenderer, TorusKnotGeometry,
  MeshPhongMaterial, Mesh, PointLight, AmbientLight, Color
} from 'three';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';

export function mountRig(host: HTMLElement) {
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const renderer = new WebGLRenderer({ antialias: false, alpha: false });
  renderer.setPixelRatio(1);
  renderer.setClearColor(new Color(0x000000), 1);

  const scene = new Scene();
  const camera = new PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 5.2;
  const knot = new Mesh(
    new TorusKnotGeometry(1.25, 0.42, 140, 18),
    new MeshPhongMaterial({ color: 0xffffff, flatShading: true, shininess: 30 })
  );
  scene.add(knot);
  const key = new PointLight(0xffffff, 60, 0, 1.6);
  key.position.set(3, 3, 4);
  scene.add(key, new AmbientLight(0xffffff, 0.15));

  const effect = new AsciiEffect(renderer, ' .:-=+*#%@', { invert: true, resolution: 0.17 });
  effect.domElement.setAttribute('aria-hidden', 'true');
  host.appendChild(effect.domElement);

  const size = () => {
    const w = host.clientWidth, h = host.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    effect.setSize(w, h);
  };
  size();
  host.classList.add('live');

  let rx = 0.4, ry = 0, vx = still ? 0 : 0.0016, vy = still ? 0 : 0.0042;
  let visible = true, raf = 0, last = 0, dragging = false, px = 0, py = 0;

  const draw = () => {
    knot.rotation.set(rx, ry, 0);
    effect.render(scene, camera);
  };
  const loop = (now: number) => {
    raf = 0;
    if (!visible || document.hidden) return;
    if (now - last >= 33) {
      last = now;
      if (!dragging) {
        rx += vx; ry += vy;
        // Inertia decays back toward the idle drift (or to rest).
        const idleX = still ? 0 : 0.0016, idleY = still ? 0 : 0.0042;
        vx += (idleX - vx) * 0.04; vy += (idleY - vy) * 0.04;
      }
      draw();
    }
    const moving = dragging || Math.abs(vx) > 1e-4 || Math.abs(vy) > 1e-4;
    if (moving) raf = requestAnimationFrame(loop);
  };
  const kick = () => { if (!raf) raf = requestAnimationFrame(loop); };

  host.addEventListener('pointerdown', (e) => {
    dragging = true; px = e.clientX; py = e.clientY;
    host.setPointerCapture(e.pointerId); kick();
  });
  host.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - px, dy = e.clientY - py;
    px = e.clientX; py = e.clientY;
    ry += dx * 0.01; rx += dy * 0.01;
    vy = dx * 0.002; vx = dy * 0.002;
  });
  const end = () => { dragging = false; kick(); };
  host.addEventListener('pointerup', end);
  host.addEventListener('pointercancel', end);
  host.addEventListener('keydown', (e) => {
    const step = { ArrowLeft: [0, -0.2], ArrowRight: [0, 0.2], ArrowUp: [-0.2, 0], ArrowDown: [0.2, 0] }[e.key];
    if (!step) return;
    e.preventDefault();
    rx += step[0]; ry += step[1];
    draw();
  });

  new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    if (visible) kick();
  }).observe(host);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) kick(); });
  let t = 0;
  addEventListener('resize', () => { clearTimeout(t); t = window.setTimeout(() => { size(); draw(); }, 150); });

  draw();
  kick();
}
