// Data loader: fetches modster's public GitHub repos at build time.
// File location `src/data/repos.json.js` makes `data/repos.json`
// automatically available via FileAttachment("data/repos.json").

import {Octokit} from "octokit";
import process from "node:process";

// Curated fallback list — used if the live API call fails (rate limit, network, auth missing).
const FALLBACK = [
  {name: "photonphotos", description: "Android camera app. CameraX + Jetpack Compose + AGSL shaders. Targeting Google Play.", language: "Kotlin", stars: 0, pushedAt: "2026-08-05T00:00:00Z", url: "https://github.com/modster/photonphotos"},
  {name: "modster", description: "Personal GitHub profile site. Observable Framework + GitHub Pages, custom domain greeffer.com.", language: "JavaScript", stars: 0, pushedAt: "2026-08-06T00:00:00Z", url: "https://github.com/modster/modster"}
];

async function fetchRepos() {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  const octokit = new Octokit(token ? {auth: token} : {});

  try {
    let data;
    if (token) {
      ({data} = await octokit.rest.repos.listForAuthenticatedUser({
        visibility: "public",
        affiliation: "owner",
        per_page: 30,
        sort: "pushed"
      }));
    } else {
      ({data} = await octokit.rest.repos.listForUser({
        username: "modster",
        per_page: 30,
        sort: "pushed"
      }));
    }
    return data
      .filter((r) => !r.fork && !r.archived)
      .slice(0, 12)
      .map((r) => ({
        name: r.name,
        description: r.description || "(no description)",
        language: r.language || "—",
        stars: r.stargazers_count ?? 0,
        pushedAt: r.pushed_at,
        url: r.html_url
      }));
  } catch (err) {
    process.stderr.write(`[repos] live fetch failed (${err.message}); using curated fallback\n`);
    return FALLBACK;
  }
}

const repos = await fetchRepos();
process.stdout.write(JSON.stringify(repos, null, 2));