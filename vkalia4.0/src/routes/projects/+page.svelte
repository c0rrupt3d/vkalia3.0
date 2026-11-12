<script lang="ts">
	import ProjectCard from '#lib/components/ProjectCard.svelte';
	import { projects } from '#lib/data/projects.ts';
</script>

<div class="page">
	<section class="sub-section" aria-labelledby="projects-title">
		<div class="region-head">
			<h1 id="projects-title" class="title title-alt reveal" style:--i="0">
				Projects<span>.</span>
			</h1>
		</div>
		<div class="region">
			<ul class="grid reveal" style:--i="1">
				{#each projects as project (project.title)}
					<li><ProjectCard {project} /></li>
				{/each}
			</ul>
		</div>
	</section>
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
		gap: 2.5rem;
		margin: 1rem 0;
	}
</style>
