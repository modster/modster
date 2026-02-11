// See https://observablehq.com/framework/config for documentation.
export default {
  title: "Modster",
  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  // pages: [
  //   {
  //     name: "Examples",
  //     pages: [
  //       {name: "Location", path: "/example-location"},
  //       {name: "Iframes", path: "/example-iframes"}
  //     ]
  //   }
  // ],
  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  // The path to the source root.
  root: "src",
  // Some additional configuration options and their defaults:
  // theme: "default", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  footer: '<div style="text-align: center;">Built with Observable.</div>', // what to show in the footer (HTML)
  sidebar: true, // whether to show the sidebar
  toc: true, // whether to show the table of contents
  // pager: false, // whether to show previous & next links in the footer
  output: "dist", // path to the output root for build
  search: true, // activate search
  linkify: true, // convert URLs in Markdown to links
  typographer: true, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs
};
