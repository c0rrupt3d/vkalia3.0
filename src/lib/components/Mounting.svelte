<script lang="ts">
	import { onMount } from 'svelte';
	import { quintIn, quintInOut, quintOut } from 'svelte/easing';
	import { fly, fade } from 'svelte/transition';
	let ready = false;
	onMount(() => (ready = true));
</script>

{#if ready}
	<div in:fly={{ y: '-1rem', duration: 400, delay: 200, easing: quintIn }} class="mounted">
		<slot />
	</div>
{:else}
	<div class="mounting" out:fade={{ duration: 100, easing: quintOut }}>
		<div class="logo" >
			<img width="100%" height="100%" src="/logo-light.webp" alt="" />
		</div>
		<svg class="loader" viewBox="0 0 40 40" height="3rem" width="3rem">
			<circle
				class="track"
				cx="20"
				cy="20"
				r="17.5"
				pathLength="100"
				stroke-width="0.25rem"
				fill="none"
			/>
			<circle
				class="car"
				cx="20"
				cy="20"
				r="17.5"
				pathLength="100"
				stroke-width="0.25rem"
				fill="none"
			/>
		</svg>
	</div>
{/if}

<style lang="scss">
	.mounting {
		position: absolute;
		width: 100%;
		height: 100%;
		@include flex(column, center, center);

		.logo {
			@include flex();
			width: 1.5rem;
			position: absolute;
		}
	}

	.mounted {
		width: 100%;
		height: 100%;
		@include flex(row, center);
	}

	.loader {
		--uib-size: 3rem;
		--uib-color: hsl(var(--acc));
		--uib-speed: 2s;
		--uib-bg-opacity: 0;
		height: var(--uib-size);
		width: var(--uib-size);
		transform-origin: center;
		animation: rotate var(--uib-speed) linear infinite;
		will-change: transform;
		overflow: visible;

		.car {
			fill: none;
			stroke: var(--uib-color);
			stroke-dasharray: 1, 200;
			stroke-dashoffset: 0;
			stroke-linecap: round;
			animation: stretch calc(var(--uib-speed) * 0.75) ease-in-out infinite;
			will-change: stroke-dasharray, stroke-dashoffset;
			transition: stroke 0.5s ease;
		}

		.track {
			fill: none;
			stroke: var(--uib-color);
			opacity: var(--uib-bg-opacity);
			transition: stroke 0.5s ease;
		}

		@keyframes rotate {
			100% {
				transform: rotate(360deg);
			}
		}

		@keyframes stretch {
			0% {
				stroke-dasharray: 0, 150;
				stroke-dashoffset: 0;
			}
			50% {
				stroke-dasharray: 75, 150;
				stroke-dashoffset: -25;
			}
			100% {
				stroke-dashoffset: -100;
			}
		}
	}
</style>
