<script lang="ts">
	import IconLink from '~icons/tabler/external-link';
	import type { Project } from '#lib/types.ts';
	import Button from './Button.svelte';

	let { project }: { project: Project } = $props();
</script>

<article class="card">
	<div class="media" style:--brand={project.bg}>
		<enhanced:img
			src={project.logo}
			alt={project.logoAlt}
			class:round={project.round}
			sizes="160px"
			loading="lazy"
		/>
	</div>
	<div class="content">
		<h3 class="title title-sm">{project.title}</h3>
		<p class="text">{project.text}</p>
		<div class="actions">
			<Button href={project.href} icon={IconLink} outline>View live</Button>
			<Button href="/projects" variant="bright">All projects</Button>
		</div>
	</div>
</article>

<style lang="scss">
	.card {
		display: grid;
		grid-template-columns: 1fr 2fr;
		width: 100%;
		min-height: 15rem;
		margin: 1rem 0;
		border-radius: var(--radius-lg);
		overflow: hidden;
		background-color: hsl(var(--bg2));

		@include below($md) {
			grid-template-columns: 1fr;
		}
	}

	.media {
		@include flex(row, center, center);
		min-height: 15rem;
		border-radius: var(--radius-lg);
		background-color: color-mix(in srgb, var(--brand) 15%, transparent);

		:global(img) {
			width: 10rem;
			height: 10rem;
			padding: 1rem;
			object-fit: contain;
		}

		:global(img.round) {
			border-radius: var(--radius-full);
		}
	}

	.content {
		@include flex(column, center);
		padding: 1rem 1.25rem;

		.title {
			font-weight: 600;
		}

		.text {
			margin-top: 1rem;
		}
	}

	.actions {
		@include flex(row, flex-end, flex-end);
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: auto;
		padding-top: 1rem;
	}
</style>
