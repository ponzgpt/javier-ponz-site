# Deployment

**Production:** https://javierponz.technoir.cloud: Hostinger VPS (`ssh hoid`), Swarm service `personal-site-javierponz` on `dokploy-network`, Traefik route `/etc/dokploy/traefik/dynamic/personal-site-javierponz.yml`, Let's Encrypt. The Dockerfile runs `npm run check`, builds Astro and serves `dist/` with `nginx:1.27-alpine`; `nginx.conf` also 301s the old `/nous*` paths to https://nousresearch.technoir.cloud.

```bash
./scripts/deploy.sh                                             # check, build <sha> on the VPS, roll out, wait for /healthz
ssh hoid docker service rollback personal-site-javierponz       # undo
```
