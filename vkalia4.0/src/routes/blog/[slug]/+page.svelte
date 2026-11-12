<script lang="ts">
	import '../../../styles/prose.scss';
	import IconBack from '~icons/tabler/caret-left-filled';
	import IconCategory from '~icons/tabler/category-filled';
	import Button from '#lib/components/Button.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const Content = $derived(data.content);
</script>

<article class="page">
	<div class="sub-section">
		<header class="region-head">
			<Button href="/blog" icon={IconBack} variant="bright">All Blogs</Button>
			<h1 class="post-title reveal" style:--i="0">{data.post.name}<span>.</span></h1>
			<p class="teaser reveal" style:--i="0">{data.post.description}</p>
			<p class="category reveal" style:--i="0">
				<span class="icon" aria-hidden="true"><IconCategory width="100%" height="100%" /></span>
				{data.post.category}
			</p>
		</header>
		<div class="region prose reveal" style:--i="1">
			<Content />
		</div>
	</div>
</article>

<style lang="scss">
	.region-head {
		@include flex(column, null, flex-start);
		gap: 1rem;
	}

	.region {
		margin-top: 1rem;
	}

	.post-title {
		font-size: 3.5rem;
		font-weight: 500;
		letter-spacing: -0.05rem;
		font-feature-settings: var(--typography-alt);

		@include below($sm) {
			font-size: 2.75rem;
		}

		span {
			color: hsl(var(--acc));
		}
	}

	.teaser {
		color: hsl(var(--txt2));
		font-size: 1.25rem;
		font-weight: 300;
		font-style: italic;
		line-height: 1.5;
	}

	.category {
		@include flex(row, flex-start, center);
		gap: 0.25rem;
		color: hsl(var(--acc));
		font-size: 1rem;
		font-weight: 500;
		font-feature-settings: var(--typography-extra);
		line-height: 1;
		text-transform: capitalize;

		.icon {
			width: 1rem;
			height: 1rem;
		}
	}
</style>
