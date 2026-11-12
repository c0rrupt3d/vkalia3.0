// Every page is static: prerender the whole site to plain HTML at build time.
export const prerender = true;

// Ship zero framework JavaScript. Nothing on the site needs client-side Svelte: the skills
// accordion is native <details>, the theme toggle is a tiny inline script (app.html), page
// transitions are native cross-document View Transitions and link preloading is handled by
// Speculation Rules (+layout.svelte). Svelte still renders every page — at build time.
// Set this to `true` if a future page needs client-side interactivity.
export const csr = false;
