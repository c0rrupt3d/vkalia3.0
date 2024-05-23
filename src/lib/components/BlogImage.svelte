<script lang="ts">
	// Exports
	export let img: string; // Path or URL to the image
	export let alt: string | undefined = ''; // Alternative text for accessibility
	export let source: string | undefined = ''; // Optional image source link
	export let width: string | number | undefined = '100%'; // Optional sizes attribute for responsive images
	export let height: string | number | undefined = ''; // Optional sizes attribute for responsive images
	export let loading: 'lazy' | 'eager' | undefined = 'eager'; // Load images lazily by default

	async function importImage(img: string) {
		const pictures = import.meta.glob(`/src/md/*/*/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}`, {
			query: {
				enhanced: true,
				w: '2400;2000;1600;1200;800;400'
			}
		});

		for (const [path, src] of Object.entries(pictures)) {
			if (path.includes(img)) {
				const image: any = await src();
				return image.default;
			}
		}
	}

	function handleLoad(event: Event) {
		if (event.target) {
			const target = event.target as HTMLImageElement;
			target.style.opacity = '1';
		}
	}
</script>

<figure>
	<picture>
		{#await importImage(img) then src}
			<source srcset={src.sources.avif} type="image/avif" {width} {height} />
			<source srcset={src.sources.webp} type="image/webp" {width} {height} />
			<img
				src={src.img.src}
				{alt}
				{loading}
				on:load={handleLoad}
				width={src.img.w}
				height={src.img.h}
			/>
		{/await}
	</picture>
	{#if alt !== ''}
		<figcaption>
			~ {alt} ~
			{#if source !== ''}
				<a href={source}>source</a>{/if}
		</figcaption>
	{/if}
</figure>

<style lang="scss">
	figure {
		width: 100%;
		@include flex(column);

		img {
			width: 100%;
			border-radius: var(--radius-lg);
			opacity: 0;
		}

		figcaption {
			color: hsl(var(--txt3));
			font-size: calc(var(--text) - 0.15rem);
			text-align: center;
			margin-top: 1rem;
			margin-bottom: 2rem;
			font-weight: 300;
		}
	}
</style>
