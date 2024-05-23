<script lang="ts">
	export let icon: boolean | undefined = false;
	export let blog: boolean | undefined  = false;
</script>

<div class="chip" class:icon class:blog>
	{#if $$slots.icon}
		<span><slot name="icon" /></span>
	{/if}
	<div class="name"><slot /></div>
</div>

<style lang="scss">
	.chip {

		font-family: Inter, sans-serif;
		pointer-events: none;
		min-height: 2.25rem;
		height: 2.25rem;
		@include transition();

		@include flex(row, center, center);
		padding-right: 1rem;
		font-size: var(--text);
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		position: relative;
		padding-left: 1rem;
		font-weight: 500;
		color: hsl(var(--txt));
		background-color: hsla(var(--acc), 0.35);

		// border: 1px solid hsla(var(--acc));
		border-radius: var(--radius-md);

		.name {
			text-transform: capitalize;
		}

		&.icon {
			padding-left: 0.5rem;

			span {
				color: hsl(var(--txt));
				@include flex(row, center, center);
				padding-right: 0.5rem;
				height: 1.125rem;
				min-height: 1.125rem;
			}
		}

		&.blog {
			background-color: hsl(var(--bg));

			// @media(max-width: $md) {
			// 	padding-left: 1rem;
			// 	span {
			// 		display: none;
			// 	}
			// }
		}
	}
</style>
