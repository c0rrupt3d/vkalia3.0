<script lang="ts">
	import IconCategory from '~icons/tabler/category-filled';
	import IconArrow from '~icons/tabler/external-link';
	import type { PostSummary } from '#lib/types.ts';
	import { categoryIcon } from '#lib/utils/category-icon.ts';
	import Chip from './Chip.svelte';

	let { post, heading = 'h3' }: { post: PostSummary; heading?: 'h2' | 'h3' } = $props();

	const CategoryIcon = $derived(categoryIcon(post.category));
</script>

<a class="card" href="/blog/{post.slug}">
	<svelte:element this={heading} class="title title-sm">
		<span class="icon" aria-hidden="true"><CategoryIcon width="100%" height="100%" /></span>
		<span class="name">{post.name}<span>.</span></span>
	</svelte:element>
	<p class="text">{post.description}</p>
	<div class="footer">
		<Chip icon={IconCategory} muted>{post.category}</Chip>
		<span class="go" aria-hidden="true"><IconArrow width="100%" height="100%" /></span>
	</div>
</a>

<style lang="scss">
	.card {
		@include flex(column);
		@include transition(background-color);
		@include focus-ring;
		width: 100%;
		min-height: 12rem;
		margin: 1rem 0;
		padding: 1rem;
		border-radius: var(--radius-lg);
		background-color: hsl(var(--bg2));

		@include hover {
			background-color: hsl(var(--bg3));

			.go {
				background-color: hsl(var(--acc2));
			}
		}
	}

	.title {
		@include flex(row, flex-start, center);
		gap: 0.5rem;
		font-weight: 600;

		// Override the global `.title span` accent colour for these wrappers.
		.icon,
		.name {
			color: hsl(var(--txt));
		}

		.icon {
			flex-shrink: 0;
			width: 1.75rem;
			height: 1.75rem;
		}
	}

	.text {
		// Clamp long teasers instead of v3's nested scroll area.
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.footer {
		@include flex(row, space-between, flex-end);
		gap: 0.5rem;
		margin-top: auto;
		padding-top: 1rem;
	}

	.go {
		@include transition(background-color);
		flex-shrink: 0;
		width: 2.25rem;
		height: 2.25rem;
		padding: 0.5rem;
		border-radius: var(--radius-full);
		background-color: hsl(var(--acc));
		color: hsl(var(--bg));
	}
</style>
