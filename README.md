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

## Desarrollo

```bash
npm install
npm run check
npm run build
npm run dev
```

## Producción

La imagen es estática: Astro genera HTML y Nginx lo sirve detrás de Traefik. Consulta [DEPLOYMENT.md](DEPLOYMENT.md).
