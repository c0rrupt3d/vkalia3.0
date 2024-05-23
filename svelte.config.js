import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { codeToHtml } from 'shiki';

const mdsvexConfig = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = await codeToHtml(code, {
				lang,
				theme: 'material-theme-palenight',
				colorReplacements: {
					'#292d3e': 'none'
				}
			});
			const escaped = escapeSvelte(html);
			return `{@html \`${escaped}\` }`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
	kit: {
		adapter: adapter(),
		paths: {
			relative: false
		},
		prerender: {
			entries: [
				'*',
				'/',
				'/about',
				'/projects',
				'/blog',
				'/blog/f1-logistics',
				'/blog/react-vs-svelte'
			]
		},
		inlineStyleThreshold: Infinity,
		alias: {
			'#/*': './src/*'
		}
	}
};

export default config;
