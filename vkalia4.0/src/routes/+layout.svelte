<script lang="ts">
	import '@fontsource-variable/inter/wght.css';
	import '../styles/app.scss';
	import interLatin from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url';
	import { page } from '$app/state';
	import NavBar from '#lib/components/NavBar.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { routes, site } from '#lib/data/site.ts';
	import type { PageMeta } from '#lib/types.ts';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const meta: PageMeta = $derived(
		page.error
			? { title: `${page.status} | ${site.name}`, description: page.error.message }
			: (page.data.meta ?? { title: site.name, description: site.description })
	);

	// Prefetch + prerender same-site pages on hover/touch (Chromium), so navigations are
	// near-instant without a client-side router. Other browsers just navigate normally.
	const speculationRules = JSON.stringify({
		prerender: [{ where: { href_matches: '/*' }, eagerness: 'moderate' }]
	});

	// Page transitions are native cross-document View Transitions (see styles/_motion.scss).
	// This tags each one with a direction: forwards when moving right along the nav or into
	// a post, backwards otherwise — the same rule v3 implemented with JS fly transitions.
	const transitionDirection = `(() => {
	const order = ${JSON.stringify(routes.map((r) => r.path))};
	const section = (p) => '/' + (p.split('/')[1] || '');
	const dir = (from, to) =>
		!order.includes(from) && order.includes(to) ? 'back'
		: order.indexOf(section(to)) < order.indexOf(section(from)) ? 'back' : 'forward';
	addEventListener('pagereveal', (e) => {
		const a = window.navigation?.activation;
		if (!e.viewTransition || !a?.from?.url || !a.entry?.url) return;
		e.viewTransition.types.add(dir(new URL(a.from.url).pathname, new URL(a.entry.url).pathname));
	});
})();`;

	// Split the closing tag so it can't terminate this <script> block.
	const end = '</' + 'script>';
	const headScripts = `<script type="speculationrules">${speculationRules}${end}<script>${transitionDirection}${end}`;
</script>

<svelte:head>
	<!-- Self-hosted Inter (latin subset preloaded). Replaces 3 third-party font origins. -->
	<link rel="preload" href={interLatin} as="font" type="font/woff2" crossorigin="anonymous" />
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- static, build-time strings -->
	{@html headScripts}
</svelte:head>

<Seo {meta} />

<a class="skip-link" href="#content">Skip to content</a>

<main id="content" tabindex="-1">
	{@render children()}
</main>

<NavBar />

<style lang="scss">
	main {
		width: 100%;
		max-width: $lg;
		margin-inline: auto;
		padding: 0 var(--gutter) calc(var(--nav-height) + 1rem);
		view-transition-name: page;

		&:focus {
			outline: none;
		}
	}
</style>
