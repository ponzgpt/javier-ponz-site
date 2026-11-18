# Deployment

**Production:** https://javierponz.technoir.cloud: Hostinger VPS (`ssh hoid`), Swarm service `personal-site-javierponz` on `dokploy-network`, Traefik route `/etc/dokploy/traefik/dynamic/personal-site-javierponz.yml`, Let's Encrypt. The Dockerfile runs `npm run check && npm run build` (the build ends with `scripts/check-site.mjs`) and serves `dist/` with `nginx:1.27-alpine`. `nginx.conf` makes HTML and the CV PDF revalidate on every load, serves the PDF inline (`Content-Disposition: inline`) and repeats the security headers in every location that sets its own.

```bash
./scripts/deploy.sh                                             # check, build <sha> on the VPS, roll out, wait for /healthz
ssh hoid docker service rollback personal-site-javierponz       # undo
```
