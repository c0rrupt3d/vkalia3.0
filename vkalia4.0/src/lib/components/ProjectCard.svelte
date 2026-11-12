<script lang="ts">
	import IconGithub from '~icons/tabler/brand-github';
	import IconLink from '~icons/tabler/external-link';
	import type { Project } from '#lib/types.ts';
	import Button from './Button.svelte';

	let { project }: { project: Project } = $props();
</script>

<article class="card">
	<h2 class="title title-md">{project.title}</h2>
	<div class="media" style:--brand={project.bg}>
		<enhanced:img
			src={project.logo}
			alt={project.logoAlt}
			class:round={project.round}
			sizes="72px"
			loading="lazy"
		/>
	</div>
	<p class="text">{project.text}</p>
	<div class="actions">
		<Button href={project.href} icon={IconLink} outline>View live</Button>
		<Button href={project.git} icon={IconGithub} variant="bright">Source</Button>
	</div>
</article>

<style lang="scss">
	.card {
		@include flex(column);
		height: 100%;
		min-height: 30rem;
		padding: 1rem 1.25rem;
		border-radius: var(--radius-lg);
		background-color: hsl(var(--bg2));

		.title {
			font-weight: 500;
		}
	}

	.media {
		@include flex(row, center, center);
		height: 7rem;
		margin-top: 1rem;
		border-radius: var(--radius-full);
		background-color: color-mix(in srgb, var(--brand) 15%, transparent);

		:global(img) {
			width: 4.5rem;
			height: 4.5rem;
			object-fit: contain;
		}

		:global(img.round) {
			border-radius: var(--radius-full);
		}
	}

	.text {
		margin-top: 2rem;
	}

	.actions {
		@include flex(row, flex-end, flex-end);
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: auto;
		padding-top: 1rem;
	}
</style>
