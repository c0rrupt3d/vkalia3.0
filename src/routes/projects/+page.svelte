<script lang="ts">
	import ProjectCard from '#/lib/components/ProjectCard.svelte';
	import transition from '#/lib/utility/Transition';
	import { fly } from 'svelte/transition';

	const projects: {
		image: {
			src: string;
			alt: string;
			bg: string;
			round: boolean;
		};
		content: {
			title: string;
			text: string;
		};
		button: {
			href: string;
			git: string;
		};
	}[] = [
		{
			image: {
				src: '/projects/zerohertz-logo.png',
				alt: 'ZeroHertz Logo',
				bg: '#c7296f',
				round: true
			},
			content: {
				title: 'ZeroHertz',
				text: 'ZeroHertz lets users listen to radio stations online with a curated list of stations from across the world. Created by my love of discovering new music!'
			},
			button: { href: 'https://zerohertz.vkalia.com/', git: 'https://github.com/c0rrupt3d/zeroHertz' }
		},
		{
			image: { src: '/projects/soleil-logo.png', alt: 'Soleil Logo', bg: '#f9953e', round: true },
			content: {
				title: 'Soleil',
				text: 'Weather done, simply. Soleil is a project I undertook to show current and future weather data of a location with minimal aesthetics.'
			},
			button: { href: 'https://soleil.vkalia.com/', git: 'https://github.com/c0rrupt3d/soleil'  }
		},
		{
			image: {
				src: '/projects/vkalia-v2-logo.webp',
				alt: 'VKalia version 2 Logo',
				bg: '#fe4151',
				round: false
			},
			content: {
				title: 'Portfolio v2',
				text: 'This is the old version (v2) of my portfolio website. I wanted to incorporate more animations and motion in my website and cement my new brand logo and colors.'
			},
			button: { href: 'https://v2.vkalia.com/', git: 'https://github.com/c0rrupt3d/vkalia2.0'  }
		}
	];
</script>

<div class="page">
	<div class="sub-section">
		<div class="region-head">
			<h2 in:fly={transition(2)} class="title title-alt">Projects<span>.</span></h2>
		</div>
		<div class="region">
			<div class="card-grid" in:fly={transition(3)}>
				{#each projects as project}
					<div class="project">
						<ProjectCard image={project.image} content={project.content} button={project.button} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.card-grid {
		display: grid;
		grid-template-columns: repeat(12, minmax(0, 1fr));
		width: 100%;
		height: 100%;
		align-items: center;
		position: relative;
		gap: 2.5rem;
		margin: 1rem 0;

		@media (max-width: $md) {
			gap: 2.5rem 0;
		}

		.project {
			grid-column: span 6 / span 6;
			@include flex(row);
			width: 100%;
			height: 100%;

			@media (max-width: $md) {
				grid-column: span 12 / span 12;
			}
		}
	}
</style>
