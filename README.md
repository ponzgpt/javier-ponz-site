# Javier Ponz — personal site

Una única referencia pública para el perfil profesional, proyectos, aprendizaje, notas e intereses de Javier Ponz.

## Estructura

Una sola página larga (`src/pages/index.astro`), no rutas separadas. Cada
sección antigua es ahora un `id` con el que navegar por ancla:

- `#about` — experiencia y transición.
- `#timeline` — cronología.
- `#agents` — laboratorio de agentes.
- `#projects` / `#case-study` — proyectos y el caso Memento Mori.
- `#thoughts` — la tesis.
- `#now` — foco actual.
- `#contact` — contacto.

`src/data/routes.mjs` centraliza esos anchors: la prosa usa placeholders como
`{about}` o `{now}` en vez de rutas escritas a mano.

## Idiomas

Inglés en `/`, español en `/es/` — dos rutas reales, cada una su propio
`<html lang>`, su `hreflang` y su contenido rastreable, no un selector que
cambia texto en el navegador. `src/components/HomePage.astro` es la página
entera parametrizada por `lang`; `src/pages/index.astro` y
`src/pages/es/index.astro` son envoltorios de una línea alrededor de ella.

### Dónde vive el texto

- `src/data/ui.mjs` y `src/data/pages.mjs` — un objeto `{ en, es }` por
  bloque de texto; los componentes leen `ui[lang]` / `pages.<sección>[lang]`.
- `src/data/site.ts` — proyectos, timeline, competencias y titulaciones en
  inglés, con una capa `es` opcional por registro que solo nombra los campos
  que cambian; `pick(item, lang)` (`src/data/i18n.mjs`) la funde sobre el
  inglés.
- `src/data/cv.mjs` — el CV en inglés (única fuente del PDF, ver abajo), más
  `personEs`/`profileEs` con las dos líneas que sí aparecen en la página en
  español.

### Añadir un idioma

1. Añádelo a `locales` en `src/data/i18n.mjs`.
2. Traduce `ui.mjs` y `pages.mjs` (un bloque completo, no hay atajo: es prosa).
3. Añade capas `es`-equivalentes donde haga falta en `site.ts`/`cv.mjs`.
4. Crea `src/pages/<code>/index.astro` con `<HomePage lang="<code>" />`.

El PDF del CV se mantiene **solo en inglés** a propósito: es el documento que
las empresas reenvían, y una única versión canónica mantiene limpio ese
rastro — se genera desde `src/data/cv.mjs` (`npm run cv:pdf`), y esa es la
única pieza de `cv.mjs` que el idioma no toca.

## Skins

El site tiene cuatro pieles seleccionables desde el header. Se guardan en
`localStorage`, se aplican antes del primer pintado (sin parpadeo), y se pueden
forzar por URL con `?skin=<id>` — así se envía un enlace que abre directamente
en una piel concreta:

| id | Nombre | De dónde salen los colores |
|---|---|---|
| `hermes` | Caduceus | El skin `default` del CLI de Hermes Agent (`hermes_cli/skin_engine.py`) |
| `omarchy` | Omakase | Tokyo Night, el tema por defecto de Omarchy |
| `stormlight` | Stormlight | Original: luz de tormenta sobre noche de Roshar |
| `halflife` | HL | Naranja Valve sobre asfalto, ámbar del HUD del traje HEV |

Ejemplo: <https://javierponz.technoir.cloud/?skin=omarchy>

### Añadir una piel

Una piel son **cuatro colores y dos tipografías**. Todo lo demás en la hoja de
estilos se deriva de ahí con `color-mix()`, así que añadir una piel es añadir un
objeto a [`src/data/skins.mjs`](src/data/skins.mjs) — sin CSS nuevo, sin
componentes nuevos.

Los nombres son referenciales, no literales: una piel que toma prestado un
aspecto no debería además tomar prestado el nombre.

Cada piel lleva además un `sprite` — un personaje en pixel art que cruza la
pantalla de vez en cuando al hacer scroll. Se define como una rejilla de dígitos
(`.` = vacío) y un mapa `ink` de dígito a color.

1. Añade el objeto (`id`, `name`, `note`, `bg`, `fg`, `accent`, `accent2`,
   `display`, `body`, `sprite`, y `scale` opcional).
2. Si usa una tipografía que aún no se carga, añádela al `<link>` de Google
   Fonts en `src/layouts/Layout.astro`. Ya cargadas: Courier Prime, JetBrains
   Mono, Cormorant Garamond, Chakra Petch.
3. Comprueba el contraste: `fg`, `accent` y `accent2` deben alcanzar 4.5:1
   contra `bg`, y también el `--muted` derivado (`fg` mezclado un 28 % hacia
   `bg`). Ese último es la trampa — un gris de cuerpo que pasa sobre negro
   puede fallar sobre azul marino.
4. Ejecuta `npm run check:skins`. Comprueba las tres cosas anteriores de forma
   automática: claves obligatorias, rejilla rectangular con tinta para cada
   dígito, y contraste de `fg`/`accent`/`accent2`/`--muted` contra `bg`.

## La terminal

La home no es una estética de terminal: es una terminal. Los comandos
(`help`, `whoami`, `ls`, `open`, `projects`, `running`, `skills`, `cv`,
`contact`, `skin`, `lang`, `fastfetch`, `clear`) leen los mismos ficheros de
datos que renderizan las páginas, así que no pueden desincronizarse. La
salida de `fastfetch` se renderiza en el servidor, de modo que sin JavaScript
la página sigue siendo un `<pre>` con texto real.

## Desarrollo

```bash
npm install
npm run check
npm run build
npm run dev
```

## Producción

La imagen es estática: Astro genera HTML y Nginx lo sirve detrás de Traefik. Consulta [DEPLOYMENT.md](DEPLOYMENT.md).
