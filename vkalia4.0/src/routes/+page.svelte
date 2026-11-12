<script lang="ts">
	import Button from '#lib/components/Button.svelte';
	import FeaturedProject from '#lib/components/FeaturedProject.svelte';
	import PostCard from '#lib/components/PostCard.svelte';
	import SkillStack from '#lib/components/SkillStack.svelte';
	import { featuredProject } from '#lib/data/projects.ts';
	import { socials } from '#lib/data/site.ts';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="page">
	<section class="hero" aria-labelledby="hero-title">
		<p class="subtitle eyebrow reveal" style:--i="0">Hi, I'm-</p>
		<h1 id="hero-title" class="title reveal" style:--i="0">Vastav Kalia<span>.</span></h1>
		<p class="subtitle intro reveal" style:--i="1">
			<b>Software Engineer.</b>
			<span>
				Always developing. Continuously learning. Currently specializing in Frontend Engineering.
				Welcome to my digital space.
			</span>
		</p>
		<ul class="socials reveal" style:--i="2">
			{#each socials as social (social.label)}
				<li>
					<Button href={social.href} icon={social.icon} variant="social" collapse>
						{social.label}
					</Button>
				</li>
			{/each}
		</ul>
	</section>

	<section class="sub-section quote-section">
		<blockquote class="quote">
			<b aria-hidden="true">“</b>As technology evolves, it is critical that we put people first and
			make sure it enhances the human experience rather than detracts from it.<b aria-hidden="true"
				>”</b
			>
		</blockquote>
	</section>

	<section class="sub-section" aria-labelledby="skills-title">
		<div class="region-head">
			<h2 id="skills-title" class="title title-md">My growing skillset<span>.</span></h2>
		</div>
		<div class="region">
			<SkillStack />
		</div>
	</section>

	<section class="sub-section" aria-labelledby="project-title">
		<div class="region-head">
			<h2 id="project-title" class="title title-md">Featured project<span>.</span></h2>
		</div>
		<div class="region">
			<FeaturedProject project={featuredProject} />
		</div>
	</section>

	{#if data.latestPost}
		<section class="sub-section" aria-labelledby="blog-title">
			<div class="region-head">
				<h2 id="blog-title" class="title title-md">Latest blog<span>.</span></h2>
			</div>
			<div class="region">
				<PostCard post={data.latestPost} />
			</div>
		</section>
	{/if}
</div>

<style lang="scss">
	.hero {
		@include flex(column, center, flex-start);
		width: 100%;
		max-width: $md;
		height: calc(100svh - var(--nav-height));
		min-height: 32rem;
		max-height: 56rem;

		.title {
			line-height: 1;
		}
	}

	.subtitle {
		b {
			color: hsl(var(--acc));
		}

		span {
			color: hsl(var(--txt2));
		}
	}

	.eyebrow {
		margin-bottom: 1.25rem;
	}

	.intro {
		margin-top: 1.25rem;
		line-height: 1.6;
	}

	.socials {
		@include flex(row);
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 2rem;

		@include below($md) {
			gap: 0.75rem;
		}
	}

	.quote-section {
		margin-block: 2rem 8rem;
	}

	.quote {
		font-size: 1.75rem;
		font-weight: 200;
		font-style: italic;
		line-height: 1.6;
		letter-spacing: 0.05rem;

		b {
			color: hsl(var(--acc));
			font-size: 2rem;
			font-style: normal;
			font-weight: 600;
			font-feature-settings: 'ss08' 1;
		}
	}
</style>
