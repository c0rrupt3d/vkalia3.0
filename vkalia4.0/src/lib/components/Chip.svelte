<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { Icon as IconType } from '#lib/types.ts';

	let {
		icon: Icon,
		muted = false,
		children
	}: { icon?: IconType; muted?: boolean; children: Snippet } = $props();
</script>

<span class="chip" class:muted class:has-icon={Icon}>
	{#if Icon}
		<span class="icon" aria-hidden="true"><Icon width="100%" height="100%" /></span>
	{/if}
	{@render children()}
</span>

<style lang="scss">
	.chip {
		@include flex(row, center, center);
		height: 2.25rem;
		padding: 0.25rem 1rem;
		border-radius: var(--radius-md);
		background-color: hsla(var(--acc), 0.35);
		color: hsl(var(--txt));
		font-size: var(--text);
		font-weight: 500;
		text-transform: capitalize;
		white-space: nowrap;

		&.has-icon {
			padding-left: 0.5rem;
		}

		&.muted {
			background-color: hsl(var(--bg));
		}
	}

	.icon {
		height: 1.125rem;
		width: 1.125rem;
		margin-right: 0.5rem;
	}
</style>
