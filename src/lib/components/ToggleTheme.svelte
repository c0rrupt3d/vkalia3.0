<script lang="ts">
	import { scale, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	import IconMoon from '~icons/tabler/moon';
	import IconSun from '~icons/tabler/sun';

	let theme: string;

	function toggleTheme() {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		theme = newTheme;
		localStorage.setItem('theme', newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
	}

	onMount(() => {
		const storedTheme = localStorage.getItem('theme');

		if (storedTheme) {
			theme = storedTheme;
			document.documentElement.setAttribute('data-theme', storedTheme);
		} else {
			theme = 'dark';
			localStorage.setItem('theme', 'dark');
			document.documentElement.setAttribute('data-theme', 'dark');
		}
	});
</script>

	<button class="toggle-theme" on:click={toggleTheme}>
		{#if theme == 'dark'}
			<span
				in:scale={{ start: 0.75, duration: 300, delay: 200 }}
				out:scale={{ start: 0.5, duration: 300 }}><IconSun height="100%" width="100%" /></span
			>
		{:else}
			<span
				in:scale={{ start: 0.75, duration: 300, delay: 200 }}
				out:scale={{ start: 0.5, duration: 300 }}><IconMoon height="100%" width="100%" /></span
			>
		{/if}
	</button>

<style lang="scss">
	.toggle-theme {
		@include flex(row, center, center);
		position: relative;
		border-radius: 100%;
		height: 100%;

		aspect-ratio: 1/1;
		cursor: pointer;
		margin-left: 0.25rem;
		@include transition();
		border: none;
		background-color: hsl(var(--bg2));
		color: hsl(var(--txt));
		padding: 1rem;

		&:hover {
			background-color: hsl(var(--bg3));
			color: hsl(var(--txt));
		}

		&:active {
			background-color: hsl(var(--acc));
		}

		span {
			position: absolute;
			padding: 1rem;
			pointer-events: none;
			z-index: 1;
			width: 100%;
			height: 100%;
		}

		@media (max-width: $md) {
			border-radius: var(--radius-lg);
			border: 0px;
			width: 100%;
		}
	}
</style>
