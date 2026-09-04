# Deployment

## Target

- URL canónica: `https://javierponz.technoir.cloud`
- Legacy URL: `https://nouscandidate.technoir.cloud` → permanent redirect to `/nous-application/`
- Runtime: Astro static build + `nginx:1.27-alpine`
- Edge: Hostinger VPS → Traefik/Dokploy → container port 80

## Local verification

```bash
npm ci
npm run check
npm run build
```

## Dokploy / Swarm

- Branch: `main`
- Build: Dockerfile
- Container port: `80`
- Domain: `javierponz.technoir.cloud`
- HTTPS: Let's Encrypt
- Health path: `/healthz`

El despliegue consolidado debe sustituir al sitio personal anterior solo después de verificar el build y el smoke test. Los dominios antiguos pueden conservarse como redirect temporal; no deben seguir sirviendo dos identidades distintas.

## Rollback

Conservar la imagen o deployment anterior en Dokploy. Si el nuevo servicio falla healthcheck, volver a la revisión anterior. No borrar los servicios antiguos hasta confirmar la migración y decidir los redirects.

## Verificación pública

```bash
curl -fsS https://javierponz.technoir.cloud/healthz
curl -fsSI https://javierponz.technoir.cloud/
```
