<script lang="ts">
	import IconSad from '~icons/tabler/file-sad';
	import Button from './Button.svelte';

	let { status, message }: { status: number; message: string } = $props();
</script>

<div class="error-page">
	<span class="icon" aria-hidden="true"><IconSad width="100%" height="100%" /></span>
	<h1 class="title">{status}</h1>
	<p class="title title-md message">{message.toLowerCase()}<span>.</span></p>
	<Button href="/" variant="bright">Take me home</Button>
</div>

<style lang="scss">
	.error-page {
		@include flex(column, center, center);
		gap: 1rem;
		min-height: 80svh;
		text-align: center;
	}

	.icon {
		width: 8rem;
		height: 8rem;
		color: hsl(var(--bg2));
	}

	.title {
		color: hsl(var(--acc));
	}

	.message {
		color: hsl(var(--txt));
		margin-bottom: 1rem;

		&::first-letter {
			text-transform: uppercase;
		}
	}
</style>
