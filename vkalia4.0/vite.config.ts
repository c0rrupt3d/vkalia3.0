import { fileURLToPath } from 'node:url';
import adapter from '@sveltejs/adapter-static';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';

// One shared highlighter, created once per build with only the grammars the blog uses.
// (v3 called `codeToHtml`, which spins up a fresh highlighter for every code block.)
const highlighter = await createHighlighter({
	themes: ['material-theme-palenight'],
	langs: ['javascript', 'jsx', 'typescript', 'svelte', 'html', 'css', 'scss', 'bash', 'json']
});

const highlight = (code: string, lang?: string | null) => {
	const html = highlighter.codeToHtml(code, {
		lang: lang && highlighter.getLoadedLanguages().includes(lang) ? lang : 'text',
		theme: 'material-theme-palenight',
		colorReplacements: { '#292d3e': 'none' }
	});
	return `{@html \`${escapeSvelte(html)}\`}`;
};

// mdsvex still emits Svelte 4's `<script context="module">`; rewrite it to Svelte 5's `<script module>`.
const mdsvexModuleScript = {
	name: 'mdsvex-module-script',
	markup: ({ content, filename }: { content: string; filename?: string }) =>
		filename?.endsWith('.md')
			? { code: content.replace('<script context="module">', '<script module>') }
			: undefined
};

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit({
			compilerOptions: {
				// Runes everywhere except third-party libraries. Can be removed in Svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			extensions: ['.svelte', '.md'],
			preprocess: [
				vitePreprocess(),
				mdsvex({ extensions: ['.md'], highlight: { highlighter: highlight } }),
				mdsvexModuleScript
			],
			adapter: adapter(),
			// Absolute asset URLs, so 404.html (served by the host for any unknown path) works.
			paths: { relative: false },
			// The whole site's CSS is small: inline it to remove the render-blocking stylesheet request.
			inlineStyleThreshold: Infinity
		}),
		Icons({ compiler: 'svelte' })
	],
	css: {
		preprocessorOptions: {
			scss: {
				// Mixins + breakpoints are available in every <style lang="scss"> block (emit no CSS).
				additionalData: '@use "tools" as *;\n',
				loadPaths: [fileURLToPath(new URL('./src/styles', import.meta.url))]
			}
		}
	}
});
