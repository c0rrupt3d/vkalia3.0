<script lang="ts">
	import { page } from '$app/state';
	import { site } from '#lib/data/site.ts';
	import type { PageMeta } from '#lib/types.ts';

	let { meta }: { meta: PageMeta } = $props();

	// page.url is a placeholder origin while prerendering, so build absolute URLs from site.url.
	const canonical = $derived(new URL(page.url.pathname, site.url).href);
	const image = $derived(meta.image ? new URL(meta.image, site.url).href : undefined);
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	{#if meta.noindex}
		<meta name="robots" content="noindex" />
	{:else}
		<link rel="canonical" href={canonical} />
	{/if}

	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:type" content={meta.type ?? 'website'} />
	<meta property="og:url" content={canonical} />
	<meta name="twitter:card" content={image ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:title" content={meta.title} />
	<meta name="twitter:description" content={meta.description} />

	{#if image}
		<meta property="og:image" content={image} />
		<meta property="og:image:alt" content={meta.title} />
		<meta name="twitter:image" content={image} />
		<meta name="twitter:image:alt" content={meta.title} />
	{/if}
	{#if meta.published}
		<meta property="article:published_time" content={meta.published} />
	{/if}
</svelte:head>
