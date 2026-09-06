# Javier Ponz — personal site

Una única referencia pública para el perfil profesional, proyectos, aprendizaje, notas e intereses de Javier Ponz.

## Rutas

- `/` — overview.
- `/about` — experiencia y transición.
- `/timeline` — cronología.
- `/workbench` — proyectos.
- `/now` — foco actual.
- `/agents` — laboratorio de agentes.
- `/nous-application` — candidatura personal a Nous Research.
- `/contact` — contacto.

## Skins

El site tiene cuatro pieles seleccionables desde el header. Se guardan en
`localStorage`, se aplican antes del primer pintado (sin parpadeo), y se pueden
forzar por URL con `?skin=<id>` — así se envía un enlace que abre directamente
en una piel concreta:

| id | Nombre | De dónde salen los colores |
|---|---|---|
| `hermes` | Hermes | El skin `default` del CLI de Hermes Agent (`hermes_cli/skin_engine.py`) |
| `omarchy` | Omarchy | Tokyo Night, el tema por defecto de Omarchy |
| `stormlight` | Stormlight | Original: luz de tormenta sobre noche de Roshar |
| `halflife` | Half-Life | Naranja Valve sobre asfalto, ámbar del HUD del traje HEV |

Ejemplo: <https://javierponz.technoir.cloud/?skin=omarchy>

### Añadir una piel

Una piel son **cuatro colores y dos tipografías**. Todo lo demás en la hoja de
estilos se deriva de ahí con `color-mix()`, así que añadir una piel es añadir un
objeto a [`src/data/skins.mjs`](src/data/skins.mjs) — sin CSS nuevo, sin
componentes nuevos.

1. Añade el objeto (`id`, `name`, `note`, `bg`, `fg`, `accent`, `accent2`,
   `display`, `body`, y `scale` opcional).
2. Si usa una tipografía que aún no se carga, añádela al `<link>` de Google
   Fonts en `src/layouts/Layout.astro`. Ya cargadas: Courier Prime, JetBrains
   Mono, Cormorant Garamond, Chakra Petch.
3. Comprueba el contraste: `fg`, `accent` y `accent2` deben alcanzar 4.5:1
   contra `bg`, y también el `--muted` derivado (`fg` mezclado un 28 % hacia
   `bg`). Ese último es la trampa — un gris de cuerpo que pasa sobre negro
   puede fallar sobre azul marino.

## Desarrollo

```bash
npm install
npm run check
npm run build
npm run dev
```

## Producción

La imagen es estática: Astro genera HTML y Nginx lo sirve detrás de Traefik. Consulta [DEPLOYMENT.md](DEPLOYMENT.md).
