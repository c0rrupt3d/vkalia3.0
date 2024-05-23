<script>
	import { page } from '$app/stores';
	import IconSad from '~icons/tabler/file-sad';
</script>

<main class="error-page">
	{#if $page.error}
		<div class="error-icon">
			<IconSad height="100%" width="100%" />
		</div>
		<h1 class=" error-title title">{$page.status}</h1>
		<h2 class=" error-text title title-md">{$page.error.message.toLowerCase()}<span>.</span></h2>
	{/if}
</main>

<style lang="scss">
	.error-page {
		.error-icon {
			height: 8rem;
			margin: 1rem 0;
			overflow: hidden;
			color: hsl(var(--bg2));
		}
		width: 100%;
		height: 80vh;
		@include flex(column, center, center);
		text-align: center;
		margin: 2rem;
		.error-title {
			color: hsl(var(--acc));
		}
		.error-text {
			text-transform: capitalize;
		}
	}
</style>
