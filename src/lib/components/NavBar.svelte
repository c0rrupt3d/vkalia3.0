<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	export let routes: RoutesProps;

	import { page } from '$app/stores';
	import ToggleTheme from './ToggleTheme.svelte';
	import { onMount } from 'svelte';
	import { quintOut } from 'svelte/easing';

	$: isSelected = (basePath: string) => {
		const currentPath = $page.url.pathname;

		if (basePath === '/') {
			return currentPath === basePath;
		}
		
		return currentPath === basePath || currentPath.startsWith(`${basePath}/`);
	};

	let ready = false;

	onMount(() => (ready = true));
</script>

{#if ready}
	<div
		class="nav-wrap"
		in:fly={{ opacity: 1, y: '100%', delay: 300, duration: 600, easing: quintOut }}
	>
		<div class="nav">
			<div class="logo">
				<img src="/logo-light.webp" alt="VK Logo" height={'100%'} />
			</div>
			<div class="links-wrap">
				<nav class="links">
					{#each routes as route}
						<a class:selected={isSelected(route.path)} class="link" href={route.path}>
							<div class="link-logo" class:selected={isSelected(route.path)}>
								{#if isSelected(route.path)}
									<span in:fade={{ duration: 300 }}>
										<svelte:component this={route.iconFilled} height="100%" width="100%" />
									</span>
								{:else}
									<span in:fade={{ duration: 300 }}>
										<svelte:component this={route.icon} height="100%" width="100%" />
									</span>
								{/if}
							</div>
							<p class:selected={isSelected(route.path)}>{route.name}</p></a
						>
					{/each}
				</nav>
			</div>
			<ToggleTheme />
		</div>
	</div>
{/if}

<style lang="scss">
	.nav {
		@include flex(row, space-between, center);
		width: 100%;
		height: 100%;
		border-radius: var(--radius-full);
		background-color: hsl(var(--bg2));

		@media (max-width: $md) {
			margin: 0;
			align-items: end;
			height: 5rem;
		}
	}

	.nav-wrap {
		@include flex(row, center, center);
		@include transition();
		z-index: 100;
		bottom: 0;
		height: 4rem;
		position: fixed;
		width: 100%;
		max-width: calc($md + 2rem);
		padding: 0 0 0.5rem 0;
		box-shadow:
			0px -0.125rem 0.188rem 0px hsl(var(--bg)),
			0px -0.063rem 0.125rem 0px hsl(var(--bg));
		border-radius: 2rem 2rem 0 0;
		background-color: hsl(var(--bg));

		@media (max-width: $md) {
			height: 5rem;
			padding: 0;
			border-radius: 0;
		}
	}

	.links-wrap {
		height: 100%;
		width: 100%;
		@include flex(row, $justify: end);

		@media (max-width: $md) {
			min-width: 100%;
		}
	}

	.links {
		border-radius: var(--radius-full);
		background-color: hsl(var(--bg2));
		@include flex(row, space-between, center);
		width: 100%;

		@media (max-width: $md) {
			width: 100%;
			border-radius: 0;
		}
	}

	.link {
		@include flex(row, center, center);
		@include transition(200ms);
		position: relative;
		font-size: 1rem;
		height: 100%;
		color: hsl(var(--txt));
		cursor: pointer;
		width: 100%;
		padding: 1.5rem 1.75rem;
		border-radius: var(--radius-full);

		-webkit-tap-highlight-color: hsl(var(--bg3));

		@media (max-width: $md) {
			width: 100%;
			border-radius: 0;
			flex-direction: column;
			padding: 0;
			margin-top: 0.75rem;
			margin-bottom: 1rem;
		}

		.link-logo {
			height: 1.5rem;
			aspect-ratio: 1 / 1;
			margin-right: 0.25rem;
			cursor: pointer;
			position: relative;
			white-space: nowrap;
			word-wrap: normal;
			@include flex(row, center, center);

			span {
				pointer-events: none;
				height: 100%;
				position: absolute;
				@include flex(row, center, center);

				@media (max-width: $md) {
					height: 1.5rem;
					max-height: 1.5rem;
				}
			}
			@media (max-width: $md) {
				min-height: 2rem;
				margin-bottom: 0.25rem;
				margin-right: 0;
				width: 4rem;

				@include ripple();
			}
		}

		p {
			z-index: 1;
			cursor: pointer;
			font-weight: 500;
			&.selected {
				@media (max-width: $md) {
					font-weight: 700;
				}
			}
		}

		@media (min-width: $md) {
			&:hover {
				background-color: hsl(var(--bg3));
			}

			@include ripple();
		}
	}

	.logo {
		@include flex(row, center, center);
		@include transition();
		height: 100%;
		border-radius: var(--radius-full);
		margin: 0 0.25rem 0 0.25rem;
		padding: 0.25rem;
		background-color: hsl(var(--bg2));

		img {
			pointer-events: none;
			@include transition();
		}

		@media (max-width: $md) {
			display: none;
		}
	}
</style>
