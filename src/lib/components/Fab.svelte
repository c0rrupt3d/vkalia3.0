<script>
	import { fly } from 'svelte/transition';
	import ToggleTheme from './ToggleTheme.svelte';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	let ready = false;

	onMount(() => (ready = true));
</script>

{#if ready}
	<div in:fly={{ opacity: 1, x: '125%', delay: 300, duration: 600, easing: quintOut }} class="fab">
		<ToggleTheme />
	</div>
{/if}

<style lang="scss">
	.fab {
		width: 3.5rem;
		height: 3.5srem;
		position: fixed;
		bottom: 6rem;
		right: 1rem;
		z-index: 100;

		@media (min-width: $md) {
			display: none;
		}
	}
</style>
