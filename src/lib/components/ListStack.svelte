<script lang="ts">
	import IconDevices from '~icons/tabler/devices';
	import IconDown from '~icons/tabler/chevron-Down';
	import IconTerminal from '~icons/tabler/terminal-2';
	import IconServer from '~icons/tabler/server-2';
	import IconDb from '~icons/tabler/database';
	import IconMisc from '~icons/tabler/brackets-contain';
	import IconJs from '~icons/cib/javascript';
	import IconTs from '~icons/cib/typescript';
	import IconPython from '~icons/cib/python';
	import IconJava from '~icons/cib/java';
	import IconHtml from '~icons/simple-icons/html5';
	import IconReact from '~icons/cib/react';
	import IconCss from '~icons/simple-icons/css3';
	import IconScss from '~icons/cib/sass';
	import IconSvelte from '~icons/cib/svelte';
	import IconNext from '~icons/cib/next-js';
	import IconDjango from '~icons/cib/django';
	import IconMongo from '~icons/cib/mongodb';
	import IconPostgres from '~icons/cib/postgresql';
	import IconFirebase from '~icons/cib/firebase';
	import IconDocker from '~icons/cib/docker';
	import IconGithub from '~icons/cib/github';
	import IconSupabase from '~icons/simple-icons/supabase';
	import IconVercel from '~icons/simple-icons/vercel';
	import IconRestApi from '~icons/tabler/api';
	// import IconPwa from '~icons/simple-icons/pwa';
	import IconVite from '~icons/simple-icons/vite';
	import IconExpress from '~icons/simple-icons/vercel';
	import IconNode from '~icons/simple-icons/nodedotjs';
	import IconMantine from '~icons/simple-icons/mantine';
	import IconTailwind from '~icons/simple-icons/tailwindcss';
	import IconMissing from '~icons/tabler/square-rotated-filled';
	import IconRedux from '~icons/tabler/brand-redux';

	import type { ComponentType } from 'svelte';
	import { scale } from 'svelte/transition';
	import Chip from './Chip.svelte';

	const items: {
		id: number;
		title: string;
		icon: ComponentType;
		content: { name: string; icon: ComponentType }[];
	}[] = [
		{
			id: 0,
			title: 'Languages',
			icon: IconTerminal,
			content: [
				{ name: 'JavaScript', icon: IconJs },
				{ name: 'TypeScript', icon: IconTs },
				{ name: 'Python', icon: IconPython },
				{ name: 'Java', icon: IconJava },
				{ name: 'HTML', icon: IconHtml }
			]
		},
		{
			id: 1,
			title: 'Frontend',
			icon: IconDevices,
			content: [
				{ name: 'ReactJS', icon: IconReact },
				{ name: 'CSS', icon: IconCss },
				{ name: 'SCSS', icon: IconScss },
				{ name: 'Next.js', icon: IconNext },
				{ name: 'TailwindCSS', icon: IconTailwind },
				{ name: 'Mantine', icon: IconMantine },
				{ name: 'Svelte', icon: IconSvelte },
				{ name: 'Vite', icon: IconVite },
				{ name: 'Redux', icon: IconRedux },
				{ name: 'Zustand', icon: IconMissing }
			]
		},
		{
			id: 2,
			title: 'Backend',
			icon: IconDb,
			content: [
				{ name: 'Node.js', icon: IconNode },
				{ name: 'Express', icon: IconExpress },
				{ name: 'Django', icon: IconDjango },
				{ name: 'REST APIs', icon: IconRestApi },
				{ name: 'PostgreSQL', icon: IconPostgres },
				{ name: 'MongoDB', icon: IconMongo }
			]
		},
		{
			id: 3,
			title: 'Infra and DevOps',
			icon: IconServer,
			content: [
				{ name: 'Vercel', icon: IconVercel },
				{ name: 'Firebase', icon: IconFirebase },
				{ name: 'Docker', icon: IconDocker },
				{ name: 'GitHub', icon: IconGithub },
				{ name: 'Supabase', icon: IconSupabase }
			]
		}
		// { id: 4, title: 'Other Tech', icon: IconMisc, content: [
		//     {name: "Photoshop", icon: IconPhotoshop},
		//     {name: "Figma", icon: IconFigma},
		// ] }
	];

	let expanded = 0;
	$: isExpanded = (id: number) => {
		return expanded === id;
	};
	const handleExpand = (id: number) => {
		if (expanded == id) {
			expanded = -1;
		} else {
			expanded = id;
		}
	};
</script>

<div class="list-stack">
	{#each items as item}
		<button class="item" on:click={() => handleExpand(item.id)}>
			<div class="head">
				<div class="interact">
					<div class="logo"><svelte:component this={item.icon} width="100%" height="100%" /></div>
					<div class="name">{item.title}</div>
				</div>
				<button class="expand" class:expanded={isExpanded(item.id)}>
					<span><IconDown width="100%" height="100%" /></span>
				</button>
			</div>
			<div class="stack" class:expanded={isExpanded(item.id)}>
				<div class="stack-content">
					{#if isExpanded(item.id)}
						<div
							transition:scale={{
								delay: 200,
								duration: 300,
								opacity: 0,
								start: 0.97
							}}
							class="inner"
						>
							{#each item.content as content}
								<Chip icon>
									<svelte:component this={content.icon} slot="icon" width="100%" height="100%" />
									<div class="item-name">{content.name}</div>
								</Chip>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</button>
		{#if item.id + 1 != items.length}
			<div class="divider" />
		{/if}
	{/each}
</div>

<style lang="scss">
	.list-stack {
		@include flex(column, center, center);
		border-radius: var(--radius-lg);
		overflow: hidden;
		position: relative;
		background-color: hsl(var(--bg2));
		margin: 1rem 0rem;

		.divider {
			min-height: 0.1rem;
			background-color: hsl(var(--bg));
			width: 100%;
			@include transition();
		}

		.item {
			font-family: Inter, sans-serif;
			border: none;
			background-color: hsl(var(--bg2));
			width: 100%;
			padding: 1rem 1.25rem;
			position: relative;
			@include flex(column, center, center);
			@include transition();
			cursor: pointer;

			&:hover {
				background-color: hsl(var(--bg3));
			}

			.stack {
				display: grid;
				grid-template-rows: 0fr;
				overflow: hidden;
				width: 100%;
				position: relative;
				@include transition();

				.stack-content {
					@include flex();
					width: 100%;
					height: 100%;
					overflow: hidden;
					@include transition();
					.inner {
						padding: 2.5rem;
						width: 100%;
						flex-wrap: wrap;
						overflow: hidden;
						@include flex();
						height: 100%;
						@include transition();
						gap: 1rem 0.75rem;

						@media (max-width: $md) {
							padding: 1.25rem 0.5rem;
						}

						.item-name {
							
						}
					}
				}

				&.expanded {
					grid-template-rows: 1fr;
				}
			}

			.head {
				cursor: pointer;
				height: 2.5rem;
				min-height: 2.5rem;
				@include flex(row, space-between, center);
				width: 100%;
				position: relative;

				.interact {
					cursor: pointer;
					height: 100%;
					@include flex(row, center, center);
					gap: 0.25rem;

					.name {
						font-size: 1.5rem;
						font-weight: 400;
						cursor: pointer;
						color: hsl(var(--txt));
					}

					.logo {
						cursor: pointer;
						border-radius: var(--radius-full);
						color: hsl(var(--txt2));
						padding: 0.5rem;
						@include flex();
						max-height: 100%;
						aspect-ratio: 1/1;
						@include transition();

						&:first-child {
							pointer-events: none;
						}

						@media (max-width: $md) {
							display: none;
						}
					}
				}

				.expand {
					pointer-events: none;
					border: none;
					cursor: pointer;
					@include flex(row, center, center);
					padding: 0.5rem;
					height: 75%;
					position: relative;
					aspect-ratio: 1/1;
					border-radius: var(--radius-full);
					background-color: hsl(var(--txt3));
					@include transition();
					color: hsl(var(--bg));
					z-index: 1;

					span {
						pointer-events: none;
						width: 100%;
						height: 100%;
						color: hsl(var(--bg));
					}

					&:hover {
						background-color: hsl(var(--acc2));
					}

					&.expanded {
						background-color: hsl(var(--acc));
						transform: rotate(180deg);
					}
				}
			}
		}
	}
</style>
