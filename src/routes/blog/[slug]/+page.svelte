<script>
	import { fly } from 'svelte/transition';
	import Metadata from '#/lib/components/Metadata.svelte';
	import { formatDate } from '#/lib/utility/blogs.js';
	import transition from '#/lib/utility/Transition';
	import Button from '#/lib/components/Button.svelte';
	import IconBack from '~icons/tabler/caret-left-filled';
	import IconDate from '~icons/tabler/calendar-filled';
	import IconCategory from '~icons/tabler/category-filled';

	export let data;

	let { default: content, metadata } = data.post;
</script>

<Metadata title={`${metadata.name} - Blog | Vastav Kalia`} description={metadata.description} />

<div class="page">
	<section class="sub-section">
		<div class="region-head">
			<div class="blog-back">
				<Button icon bright href="/blog">
					<svelte:component this={IconBack} slot="icon" width="100%" height="100%" />
					{'All Blogs'}
				</Button>
			</div>
			<h2 in:fly={transition(2)} class="blog-title">
				<!-- <span class="icon"
					><svelte:component
						this={getIcon(metadata.category)}
						slot="icon"
						width="100%"
						height="100%"
					/></span> -->
				{metadata.name}<span>.</span>
			</h2>
			<h3 in:fly={transition(2)} class="blog-teaser">{metadata.description}</h3>
			<div class="more-info">
				<h4 in:fly={transition(2)} class="blog-extra">
					<span><svelte:component this={IconDate} slot="icon" width="100%" height="100%" /></span
					>{formatDate(metadata.date)}
				</h4>
				<h4 in:fly={transition(2)} class="blog-extra">
					<span
						><svelte:component this={IconCategory} slot="icon" width="100%" height="100%" /></span
					>
					{metadata.category}
				</h4>
			</div>
		</div>
		<section in:fly={transition(3)} class="region">
			<div class="blog-content">
				<svelte:component this={content} />
			</div>
		</section>
	</section>
</div>

<style lang="scss">
	.blog-back {
		@include flex(row, start, center);
		width: 100%;
	}

	.region-head {
		@include flex(column);
		width: 100%;
		gap: 1rem;
	}

	.region {
		@include flex(column);
		margin-top: 2.5rem;
		width: 100%;
	}

	.blog-title {
		font-weight: 500;
		letter-spacing: -0.05rem;
		font-size: 3.5rem;

		@media (max-width: $md) {
			font-size: 3.5rem;
		}

		.icon {
			max-height: 2.5rem;
			height: 2.5rem;
			@include flex();
		}

		span {
			color: hsl(var(--acc));
		}
	}

	.blog-teaser {
		font-size: 1.25rem;
		color: hsl(var(--txt2));
		font-weight: 300;
		font-style: italic;
	}

	.more-info {
		@include flex(column);
		gap: 0.5rem;
	}

	.blog-extra {
		@include flex(row, start, center);
		gap: 0.25rem;
		font-feature-settings: var(--typography-extra);
		font-size: 1rem;
		color: hsl(var(--acc));
		font-weight: 500;
		text-transform: capitalize;

		span {
			@include flex();
			max-height: 1rem;
			height: 1rem;
		}
	}
</style>
