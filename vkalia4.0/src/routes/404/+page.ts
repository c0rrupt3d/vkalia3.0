// Prerendered to build/404.html, which static hosts (Cloudflare Pages, Netlify, GitHub Pages)
// serve for any unknown URL — a real page with zero JS, rather than an SPA fallback shell.
export const load = () => ({
	meta: { title: '404 | Vastav Kalia', description: 'Page not found', noindex: true }
});
