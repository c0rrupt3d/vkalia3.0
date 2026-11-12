<script lang="ts">
	import type { Picture } from '@sveltejs/enhanced-img';

	interface Props {
		/** Import with `?enhanced`, e.g. `import hero from './hero.webp?enhanced'`. */
		src: Picture;
		alt: string;
		/** Shown as a caption; defaults to the alt text, as in v3. */
		caption?: string;
		source?: string;
		eager?: boolean;
	}

	let { src, alt, caption = alt, source, eager = false }: Props = $props();
</script>

<!--
	v3 globbed every blog image at runtime and faded it in after an {#await}, so images
	weren't in the prerendered HTML and caused layout shift. Now the image is resolved at
	build time: AVIF/WebP srcsets, intrinsic width/height (no CLS), lazy-loaded by default.
-->
<figure>
	<enhanced:img
		{src}
		{alt}
		sizes="(min-width: 48rem) 48rem, 100vw"
		loading={eager ? 'eager' : 'lazy'}
		fetchpriority={eager ? 'high' : undefined}
	/>
	{#if caption}
		<figcaption>
			~ {caption} ~
			{#if source}<a href={source} target="_blank" rel="noopener noreferrer">source</a>{/if}
		</figcaption>
	{/if}
</figure>

<style lang="scss">
	figure {
		@include flex(column);
		width: 100%;

		:global(img) {
			width: 100%;
			height: auto;
			border-radius: var(--radius-lg);
		}
	}

	figcaption {
		margin: 1rem 0 2rem;
		color: hsl(var(--txt3));
		font-size: calc(var(--text) - 0.15rem);
		font-weight: 300;
		text-align: center;
	}
</style>
