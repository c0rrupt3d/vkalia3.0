<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Icon as IconType } from '#lib/types.ts';

	interface Props {
		href: string;
		variant?: 'bright' | 'regular' | 'social';
		/** Adds a 1px outline. */
		outline?: boolean;
		/** Opens in a new tab. Defaults to true for absolute URLs. */
		external?: boolean;
		/** On small screens, collapse to an icon-only circle. */
		collapse?: boolean;
		icon?: IconType;
		children: Snippet;
	}

	let {
		href,
		variant = 'regular',
		outline = false,
		external = /^(https?:)?\/\//.test(href),
		collapse = false,
		icon: Icon,
		children
	}: Props = $props();
</script>

<a
	{href}
	class="button {variant}"
	class:outline
	class:collapse
	class:has-icon={Icon}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
>
	{#if Icon}
		<span class="icon" aria-hidden="true"><Icon width="100%" height="100%" /></span>
	{/if}
	<span class="label">{@render children()}</span>
</a>

<style lang="scss">
	.button {
		@include flex(row, center, center);
		@include transition();
		@include focus-ring;
		position: relative;
		height: 2.5rem;
		padding: 0 1.5rem;
		border-radius: var(--radius-full);
		color: hsl(var(--txt));
		white-space: nowrap;
		-webkit-tap-highlight-color: transparent;

		.label {
			font-weight: 500;
		}

		&.has-icon {
			padding: 0 1.5rem 0 1rem;
		}

		.icon {
			height: 1.5rem;
			width: 1.5rem;
			margin-right: 0.5rem;
		}
	}

	.regular {
		background-color: hsl(var(--bg2));

		&.outline {
			border: 1px solid hsl(var(--txt3));
		}

		@include hover {
			background-color: hsl(var(--bg3));
		}
	}

	.social {
		background-color: hsl(var(--bg2));

		&.outline {
			border: 1px solid hsl(var(--acc));
		}

		@include hover {
			background-color: hsla(var(--acc), 0.35);
		}
	}

	.bright {
		background-color: hsl(var(--acc));
		color: hsl(var(--bg));

		@include hover {
			background-color: hsl(var(--acc2));
		}
	}

	@include below($md) {
		.collapse.has-icon {
			aspect-ratio: 1;
			padding: 0;

			.icon {
				margin: 0;
			}

			.label {
				// Keep the accessible name, hide it visually.
				position: absolute;
				width: 1px;
				height: 1px;
				overflow: hidden;
				clip-path: inset(50%);
			}
		}
	}
</style>
