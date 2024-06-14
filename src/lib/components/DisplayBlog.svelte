<script lang="ts">
	import IconDate from '~icons/tabler/calendar-filled';
	import IconCategory from '~icons/tabler/category-filled';
	import IconExternal from '~icons/tabler/external-link';
	import Chip from './Chip.svelte';

	import { formatDate } from '../utility/blogs';
	import getIcon from '../utility/getIcon';

	export let title: string;
	export let teaser: string;
	export let href: string;
	export let date: string;
	export let category: string;
</script>

<a class="display-blog" {href}>
	<div class="head">
		<div class="blog-details">
			<h3 class="title title-sm">
				<div class="icon">
					<svelte:component this={getIcon(category)} slot="icon" width="100%" height="100%" />
				</div>
				<div>{title}<span>.</span></div>
			</h3>
			<p class="text teaser">
				{teaser}
			</p>
		</div>
		<!-- <div class="blog-icon">
			<div class="icon"><IconCategory width="100%" height="100%" /></div>
		</div> -->
	</div>
	<div class="tail">
		<div class="chips">
			<Chip icon blog>
				<svelte:component this={IconDate} slot="icon" width="100%" height="100%" />
				{formatDate(date)}</Chip
			>
			<Chip icon blog>
				<svelte:component this={IconCategory} slot="icon" width="100%" height="100%" />
				{category}</Chip
			>
		</div>
		<div class="etc">
			<span><svelte:component this={IconExternal} width="100%" height="100%" /></span>
		</div>
	</div>
</a>

<style lang="scss">
	.display-blog {
		@include flex(column, space-between, start);
		overflow: hidden;
		position: relative;
		width: 100%;
		max-height: 12rem;
		height: 100%;
		min-height: 12rem;
		background-color: hsl(var(--bg2));
		border-radius: var(--radius-lg);
		@include transition();
		cursor: pointer;
		margin: 1rem 0rem;
		padding: 1rem;

		@media (max-width: $md) {
			max-height: 20rem;
		}

		.head {
			pointer-events: none;
			width: 100%;
			height: 100%;
			max-height: 100%;
			// display: grid;
			// grid-template-columns: 3fr 1fr;
			@include flex();
			overflow: hidden;
			position: relative;

			.blog-details {
				@include flex(column);
				.title {
					font-weight: 600;
					color: hsl(var(--txt));
					@include flex(row, start, center);
					gap: 0.5rem;
					.icon {
						@include flex(row, center, center);
						height: 1.75rem;
					}
				}

				.text {
					overflow-y: auto;
					pointer-events: all;
					cursor: pointer;
					scrollbar-width: thin;
					scrollbar-color: hsla(var(--acc), 0.85) transparent;
				}
			}

			.blog-icon {
				@include flex(row, end, start);
				position: relative;
				height: 100%;
				width: 100%;
				overflow: hidden;

				.icon {
					background-color: hsla(var(--acc));
					height: 100%;
					padding: 1.5rem;
					border-radius: var(--radius-lg);
					color: hsl(var(--bg2));
				}
			}
		}

		.tail {
			@include flex(row, space-between, end);
			margin-top: 1rem;
			position: relative;
			width: 100%;
			gap: 0rem 0.5rem;
			cursor: pointer;

			.chips {
				pointer-events: none;
				@include flex();
				gap: 0rem 0.5rem;
				overflow-x: auto;

				@media (max-width: $xs) {
					flex-direction: column;
					gap: 0.5rem 0rem;
				}
			}
			.etc {
				cursor: pointer;
				pointer-events: inherit;
				height: 2.25rem;
				width: 2.25rem;
				min-width: 2.25rem;
				max-height: 2.25rem;
				border-radius: var(--radius-full);
				padding: 0.5rem;
				color: hsl(var(--bg));
				background-color: hsl(var(--acc));
				@include transition();

				span {
					pointer-events: none;
				}
			}
		}

		&:hover {
			background-color: hsl(var(--bg3));

			.etc {
				background-color: hsl(var(--acc2));
			}
		}
	}
</style>
