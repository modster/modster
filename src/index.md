---
title: Home
keywords:
  - modster
  - eric-m-greeff
  - photon-photos
  - camera
  - android
  - jetpack-compose
  - camerax
  - cloudflare
  - obsidian
description: Eric M. Greeff. Building cameras, organizing thoughts, and shipping software. Currently shipping Photon Photos to Google Play.
toc: false
sidebar: false
---

<div style="text-align: center;">

# @modster

**Eric M. Greeff** — Android developer · Cloudflare/DNS · Obsidian tooling.

Building cameras, organizing thoughts, and shipping software.

</div>

## Now

**Photon Photos** (pre-launch / internal testing) — An Android camera app built with CameraX and Jetpack Compose. Apache 2.0, repo public after Play Store launch. Target: Google Play Store, September 2026.

[github.com/modster/photonphotos](https://github.com/modster/photonphotos) · [greeffer.com](https://greeffer.com)

## Background

Manufacturing, then software. Truss designer at Highwood Trusses; 3D modelling across roofing truss plants. Now applying spatial reasoning and CAD-adjacent thinking to mobile imaging, rendering, and infrastructure.

## Featured projects

```js
const repos = FileAttachment("data/repos.json").json();
```

```js
display(Inputs.table(repos, {
  columns: ["name", "description", "language", "stars", "pushedAt"],
  header: {
    name: "Project",
    description: "Description",
    language: "Lang",
    stars: "★",
    pushedAt: "Last push"
  },
  format: {
    stars: (d) => d.toLocaleString(),
    pushedAt: (d) => new Date(d).toISOString().slice(0, 10),
    name: (d, i) => html`<a href=${repos[i].url} target="_blank">${d}</a>`
  },
  sort: "stars",
  reverse: true
}));
```

## Elsewhere

- Telegram: [@greeffer](https://t.me/greeffer)
- Email: emg@greeffer.com
- Site: [greeffer.com](https://greeffer.com)