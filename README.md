# @modster

**Eric M. Greeff** — Android developer · Cloudflare/DNS · Obsidian tooling.

Building cameras, organizing thoughts, and shipping software.

Personal GitHub Pages site for [greeffer.com](https://greeffer.com), built with [Observable Framework](https://observablehq.com/framework/) and deployed via GitHub Actions.

## Now

**Photon Photos** (pre-launch / internal testing) — An Android camera app built with CameraX and Jetpack Compose. Apache 2.0, repo public after Play Store launch. Target: Google Play Store, September 2026.

[github.com/modster/photonphotos](https://github.com/modster/photonphotos) · [greeffer.com](https://greeffer.com)

## Background

Manufacturing, then software. Truss designer at Highwood Trusses; 3D modelling across roofing truss plants. Now applying spatial reasoning and CAD-adjacent thinking to mobile imaging, rendering, and infrastructure.

## Elsewhere

- Telegram: [@greeffer](https://t.me/greeffer)
- Email: emg@greeffer.com
- Site: [greeffer.com](https://greeffer.com)

## Stack

| Layer   | Tool                                        |
| ------- | ------------------------------------------- |
| Build   | Observable Framework 1.13+                  |
| Hosting | GitHub Pages (custom domain: greeffer.com)  |
| CI/CD   | GitHub Actions (`npm ci` → `observable build` → `deploy-pages`) |
| Data    | GitHub REST API via `octokit`               |

## Repo layout

```
src/
  index.md            # landing page
  data/repos.json.js  # data loader: fetches modster's public repos at build time
observablehq.config.js
.github/workflows/deploy.yml
```

## Development

```bash
npm ci
npm run dev          # live preview
npm run build        # outputs to dist/
```

Deployment is fully automatic: push to `main` → GitHub Action builds and publishes.

## License

MIT.