# [`vkalia.com`](https://vkalia.com) — v4

My personal portfolio website. Built using:

- [`Svelte 5`](https://svelte.dev/) + [`SvelteKit 3`](https://svelte.dev/docs/kit) (static prerender)
- [`SCSS`](https://sass-lang.com/documentation/syntax/)
- [`mdsvex`](https://github.com/pngwn/MDsveX) + [`Shiki`](https://shiki.style/) for the blog

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site → build/
npm run deploy   # build + Cloudflare Pages
```

## How it's put together

| Path                 | What lives there                                                   |
| -------------------- | ------------------------------------------------------------------ |
| `src/routes`         | Pages. All prerendered; each page's `load` provides its `meta`.    |
| `src/lib/components` | UI components (Svelte 5 runes + snippets).                         |
| `src/lib/data`       | Site content — routes, socials, projects, skills, timeline.        |
| `src/posts/<slug>/`  | Blog posts: `index.md` + images + optional `og-image.webp`.        |
| `src/styles`         | Global SCSS. `_tools.scss` (mixins, breakpoints) is auto-injected. |

**Writing a post:** create `src/posts/my-post/index.md` with `name`, `description`, `category`,
`date` and `live` frontmatter. Import images with `?enhanced` and render them with `<BlogImage>`.
Drafts (`live: false`) only appear in `npm run dev`.

## What changed from v3

**Performance**

- **Zero framework JavaScript.** Pages are prerendered with `csr = false`; the only JS is a small
  inline theme script. Page transitions use native cross-document View Transitions, and
  hover-prerendering uses Speculation Rules. Set `csr = true` in `src/routes/+layout.ts` if a page
  ever needs client-side interactivity.
- **Content is in the HTML.** v3 hid the whole page behind a spinner until JS mounted; v4 paints real
  content on first paint (home-page LCP ~2.1 s → ~0.4 s on throttled mobile, 27 → 3 requests).
- **Self-hosted Inter** (latin subset preloaded) replaces three third-party font origins; the code font
  loads only on blog posts. Inconsolata was loaded but unused, so it's gone.
- **Images** go through `@sveltejs/enhanced-img` (AVIF/WebP, intrinsic sizes, lazy-loading → no layout
  shift). The logo is a 512-byte inline SVG (v3 used a 138 KB favicon).
- **CSS** transitions target explicit properties instead of `all`; blog prose CSS is split out.
- Shiki reuses one highlighter for the whole build instead of creating one per code block.

**Fixes**

- Blog OG images now work (v3 globbed a non-existent `/src/content` folder).
- `og:site_name` / Twitter tags no longer reference another site; canonical URLs, sitemap and a real
  `404.html` were added.
- No theme flash on load; Express shows the Express icon; the skills accordion is a native, accessible
  `<details>` group (v3 nested buttons); skip link, focus rings and `prefers-reduced-motion` support.

**Toolchain:** Vite 8, ESLint flat config, `sass-embedded`, Kit 3 subpath imports (`#lib/*`).
