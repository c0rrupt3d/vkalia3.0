<script lang="ts">
	import { page } from '$app/state';
	import { isActive, routes } from '#lib/data/site.ts';
	import Logo from './Logo.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<!-- Part of the prerendered HTML (v3 waited for onMount), so it's visible on first paint. -->
<div class="nav-wrap">
	<nav class="nav" aria-label="Main">
		<a class="logo" href="/" aria-label="Vastav Kalia — home">
			<Logo />
		</a>
		<ul class="links">
			{#each routes as route (route.path)}
				{@const active = isActive(route.path, page.url.pathname)}
				<li>
					<a class="link" class:active href={route.path} aria-current={active ? 'page' : undefined}>
						<span class="link-icon" aria-hidden="true">
							<span class="outline"><route.icon width="100%" height="100%" /></span>
							<span class="filled"><route.iconFilled width="100%" height="100%" /></span>
						</span>
						<span class="link-name">{route.name}</span>
					</a>
				</li>
			{/each}
		</ul>
		<div class="theme">
			<ThemeToggle />
		</div>
	</nav>
</div>

<style lang="scss">
	.nav-wrap {
		@include flex(row, center, center);
		position: fixed;
		bottom: 0;
		// Centred without transforms: a transformed ancestor would trap the fixed-position FAB below.
		inset-inline: 0;
		margin-inline: auto;
		z-index: 100;
		width: 100%;
		max-width: calc($md + 2rem);
		height: var(--nav-height);
		padding-bottom: 0.5rem;
		border-radius: 2rem 2rem 0 0;
		background-color: hsl(var(--bg));
		box-shadow: 0 -0.125rem 0.2rem 0 hsl(var(--bg));
		// Its own view-transition layer, so it stays still while the page slides.
		view-transition-name: nav;

		@include below($md) {
			padding: 0 0 env(safe-area-inset-bottom);
			height: calc(var(--nav-height) + env(safe-area-inset-bottom));
			border-radius: 0;
			background-color: hsl(var(--bg2));
		}
	}

	.nav {
		@include flex(row, space-between, center);
		width: 100%;
		height: 100%;
		border-radius: var(--radius-full);
		background-color: hsl(var(--bg2));
	}

	.logo {
		@include flex(row, center, center);
		@include focus-ring;
		flex-shrink: 0;
		height: 100%;
		aspect-ratio: 1;
		margin: 0 0.25rem;
		padding: 0.6rem;
		border-radius: var(--radius-full);
		color: hsl(var(--acc));

		@include below($md) {
			display: none;
		}
	}

	.links {
		@include flex(row, space-between, center);
		width: 100%;
		height: 100%;

		li {
			flex: 1;
			height: 100%;
		}
	}

	.link {
		@include flex(row, center, center);
		@include transition(background-color, 200ms);
		@include focus-ring;
		position: relative;
		height: 100%;
		padding: 0 1.25rem;
		border-radius: var(--radius-full);
		color: hsl(var(--txt));
		font-weight: 500;
		-webkit-tap-highlight-color: transparent;

		// The selected "pill" — animated with transform/opacity only (compositor-friendly).
		&::before {
			content: '';
			position: absolute;
			inset: 0;
			border-radius: var(--radius-full);
			background-color: hsl(var(--acc));
			opacity: 0;
			transform: scaleX(0.32);
			@include transition((opacity, transform, background-color), 300ms);
		}

		&.active::before {
			opacity: 1;
			transform: none;
		}

		@include above($md) {
			@include hover {
				background-color: hsl(var(--bg3));

				&.active::before {
					background-color: hsl(var(--acc2));
				}
			}
		}

		@include below($md) {
			flex-direction: column;
			gap: 0.25rem;
			padding: 0;
			border-radius: 0;

			// On mobile the pill sits behind the icon only (Material-style).
			&::before {
				inset: 0.75rem auto auto 50%;
				width: 4rem;
				height: 2rem;
				translate: -50% 0;
			}

			&.active .link-name {
				font-weight: 700;
			}
		}
	}

	.link-icon {
		position: relative;
		z-index: 1;
		width: 1.5rem;
		height: 1.5rem;
		margin-right: 0.25rem;

		> span {
			position: absolute;
			inset: 0;
			@include transition(opacity, 300ms);
		}

		@include below($md) {
			margin: 0 0 0.25rem;
		}
	}

	.filled,
	.active .outline {
		opacity: 0;
	}

	.active .filled {
		opacity: 1;
	}

	.link-name {
		position: relative;
		z-index: 1;
	}

	.theme {
		height: 100%;

		// On mobile the same toggle floats above the nav as a FAB.
		@include below($md) {
			position: fixed;
			right: 1rem;
			bottom: calc(var(--nav-height) + 1rem + env(safe-area-inset-bottom));
			width: 3.5rem;
			height: 3.5rem;
			view-transition-name: theme-fab;

			:global(.toggle) {
				border-radius: var(--radius-lg);
				box-shadow: 0 0.25rem 1rem hsla(var(--bg), 0.6);
			}
		}
	}
</style>
