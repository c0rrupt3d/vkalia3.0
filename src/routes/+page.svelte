<script lang="ts">
	import Button from '../lib/components/Button.svelte';
	import { onMount, type ComponentType } from 'svelte';
	import { fly } from 'svelte/transition';
	import IconLinkedIn from '~icons/tabler/brand-linkedin';
	import IconGithub from '~icons/tabler/brand-github';
	import IconMail from '~icons/tabler/mail';
	import IconCv from '~icons/tabler/file-cv';
	import DisplayCard from '#/lib/components/DisplayCard.svelte';
	import ListStack from '#/lib/components/ListStack.svelte';
	import transition from '#/lib/utility/Transition';
	import DisplayBlog from '#/lib/components/DisplayBlog.svelte';

	let ready = false;

	export let data;
	onMount(() => (ready = true));

	const buttons: { id: number; href: string; icon: ComponentType; text: string }[] = [
		{ id: 0, href: 'https://www.linkedin.com/in/vastavk/', icon: IconLinkedIn, text: 'LinkedIn' },
		{ id: 1, href: 'mailto:business.vkal@gmail.com', icon: IconMail, text: 'Email' },
		{ id: 2, href: 'https://github.com/c0rrupt3d', icon: IconGithub, text: 'GitHub' },
		// {
		// 	id: 3,
		// 	href: 'https://open.spotify.com/playlist/6raYXIgsi5xFWvsPfQH94l',
		// 	icon: IconCv,
		// 	text: 'Resume'
		// }
	];
</script>

<div class="page">
	<section class="hero">
		{#if ready}
			<h1 in:fly={transition(2)} class="subtitle spaced-bottom"><span>Hi, I'm-</span></h1>
			<h2 in:fly={transition(2)} class="title">Vastav Kalia<span>.</span></h2>
			<p in:fly={transition(3)} class="subtitle spaced-top">
				<b>Software Engineer.</b>
				<span
					>Always developing. Continuously learning. Currently specializing in Frontend Engineering.
					Welcome to my digital space.</span
				>
			</p>
			<div in:fly={transition(4)} class="buttons">
				{#each buttons as button}
					<Button externalLink respName social icon href={button.href}>
						<svelte:component this={button.icon} slot="icon" width="100%" height="100%" />
						{button.text}
					</Button>
				{/each}
			</div>
		{/if}
	</section>
	<section class="sub-section quote-section">
		<p class="quote">
			<b>“</b>As technology evolves, it is critical that we put people first and make sure it
			enhances the human experience rather than detracts from it.<b>”</b>
		</p>
	</section>
	<section class="sub-section" in:fly={transition(4)}>
		<div class="region-head">
			<h2 class="title title-md">My growing skillset<span>.</span></h2>
		</div>
		<div class="region">
			<ListStack />
		</div>
	</section>
	<section class="sub-section">
		<div class="region-head">
			<h2 class="title title-md">Featured project<span>.</span></h2>
		</div>
		<div class="region">
			<DisplayCard
				image={{ src: '/projects/zerohertz-logo.png', alt: 'ZeroHertz Logo', bg: '#c7296f' }}
				content={{
					title: 'ZeroHertz',
					text: 'ZeroHertz lets users listen to radio stations online with a curated list of stations from across the world. Created by my love of discovering new music!'
				}}
				button={{ href: 'https://zerohertz.vkalia.com/' }}
			/>
		</div>
	</section>
	<section class="sub-section">
		<div class="region-head">
			<h2 class="title title-md">Latest blog<span>.</span></h2>
		</div>
		<div class="region">
			<DisplayBlog
				category={data.topPost.category}
				href={'/blog/' + data.topPost.slug}
				date={data.topPost.date}
				title={data.topPost.name}
				teaser={data.topPost.description}
			/>
		</div>
	</section>
</div>

<style lang="scss">
	.hero {
		--space: 1.25rem;
		height: calc(100svh - 5rem);
		max-height: 56rem;
		width: 100%;
		@include flex(column, center, start);

		.buttons {
			@include flex();
			margin-top: 2rem;
			width: 100%;
			flex-wrap: wrap;
			gap: 1rem;

			@media (max-width: $md) {
				max-width: 100vw;
				gap: 0.75rem;
			}
		}
	}

	.quote-section {
		display: inline-flex;
		font-size: 1.75rem;
		font-weight: 200;
		font-style: italic;
		letter-spacing: 0.05rem;
		margin-block-start: 2rem;
		margin-block-end: 8rem;
		max-width: $lg;

		.quote {
			font-size: 1.75rem;
			font-weight: 200;

			b {
				color: hsl(var(--acc));
				font-feature-settings: 'ss08' 1;
				font-weight: 600;
				font-size: 2rem;
				font-style: normal;
			}
		}
	}

	.title {
		line-height: 1;
		// font-size: max()
	}

	.subtitle {
		&.spaced-top {
			margin-top: var(--space);
		}

		&.spaced-bottom {
			margin-bottom: var(--space);
		}

		b {
			font-weight: 600;
			color: hsl(var(--acc));
		}

		span {
			color: hsl(var(--txt2));
		}
	}
</style>
