<script lang="ts">
	import IconMoon from '~icons/tabler/moon';
	import IconSun from '~icons/tabler/sun';
</script>

<!--
	Clicks are handled by the inline script in app.html (the site ships no framework JS).
	Both icons are rendered and swapped with CSS based on <html data-theme>.
-->
<button class="toggle" type="button" data-theme-toggle aria-label="Toggle light and dark theme">
	<span class="icon sun"><IconSun width="100%" height="100%" /></span>
	<span class="icon moon"><IconMoon width="100%" height="100%" /></span>
</button>

<style lang="scss">
	.toggle {
		@include flex(row, center, center);
		@include transition();
		@include focus-ring;
		position: relative;
		flex-shrink: 0;
		height: 100%;
		aspect-ratio: 1;
		border-radius: var(--radius-full);
		background-color: hsl(var(--bg2));
		color: hsl(var(--txt));
		-webkit-tap-highlight-color: transparent;

		@include hover {
			background-color: hsl(var(--bg3));
		}

		&:active {
			background-color: hsl(var(--acc));
		}
	}

	.icon {
		position: absolute;
		inset: 0;
		padding: 1rem;
		@include transition((opacity, transform), 300ms);
	}

	// Dark theme shows the sun (switch to light) and vice-versa, as in v3.
	.moon,
	:global([data-theme='light']) .sun {
		opacity: 0;
		transform: scale(0.5);
	}

	:global([data-theme='light']) .moon {
		opacity: 1;
		transform: none;
	}
</style>
