// See https://observablehq.com/framework/config for documentation.
export default {
  title: "@modster — Photon Photos, Android, Cloudflare",
  description: "Building cameras, organizing thoughts, and shipping software. Currently shipping Photon Photos to Google Play.",
  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  pages: [
    {
      name: "Home",
      pages: [
        {name: "Overview", path: "/"}
      ]
    }
  ],
  // Content to add to the head of the page, e.g. for a favicon and OpenGraph:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">'
       + '<meta property="og:title" content="@modster — Photon Photos, Android, Cloudflare">'
       + '<meta property="og:description" content="Building cameras, organizing thoughts, and shipping software.">'
       + '<meta property="og:url" content="https://greeffer.com">',
  // The path to the source root.
  root: "src",
  footer: '<div style="text-align: center;">Built with Observable. © @modster</div>',
  sidebar: true,
  toc: true,
  pager: true,
  output: "dist",
  search: true,
  linkify: true,
  typographer: true,
};
