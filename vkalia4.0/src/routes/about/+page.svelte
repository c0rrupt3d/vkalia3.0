<script lang="ts">
	import IconCheck from '~icons/tabler/discount-check-filled';
	import Logo from '#lib/components/Logo.svelte';
	import { timeline } from '#lib/data/timeline.ts';
</script>

<div class="page">
	<section class="sub-section" aria-labelledby="about-title">
		<div class="region-head">
			<h1 id="about-title" class="title title-alt reveal" style:--i="0">About me<span>.</span></h1>
		</div>
		<div class="region">
			<div class="split reveal" style:--i="1">
				<div>
					<p class="text">
						👋 Hi, I'm Vastav. From a very early age, my fascination with computers ignited a
						passion for exploration and experimentation, which eventually led me to pursue a degree
						in Computer Science.
					</p>
					<p class="text">
						I take pride in creating software that seamlessly communicates desired outcomes while
						optimizing usability and logic.
					</p>
					<p class="text">
						Always exploring new technologies and methodologies. This enables me to adapt and thrive
						in diverse environments and tech stacks.
					</p>
					<p class="text">
						In my free time, I like to go to the gym 🏃‍♂️, gaming 🎧 and watching Formula 1 🏎️.
					</p>
				</div>
				<div class="portrait">
					<Logo />
				</div>
			</div>
		</div>
	</section>

	<section class="sub-section reveal" style:--i="2" aria-labelledby="facts-title">
		<div class="region-head">
			<h2 id="facts-title" class="title title-md">Quick facts<span>.</span></h2>
		</div>
		<div class="region">
			<ul class="list">
				<li>Born and brought up in India.</li>
				<li>
					I love listening to music. Here's my
					<a
						class="text-link"
						href="https://open.spotify.com/playlist/6raYXIgsi5xFWvsPfQH94l"
						target="_blank"
						rel="noopener noreferrer">playlist</a
					> that I often listen to while coding.
				</li>
				<li>I make some amazing butter chicken, my own recipe of course.</li>
				<li>Hiking is one of my favorite ways to unwind.</li>
				<li>My average typing speed is around 96wpm. Highest so far is a 110wpm!</li>
				<li>
					Bucket list items:
					<ul class="list">
						<li>Building my own car.</li>
						<li>Backpacking around the world.</li>
						<li>Visiting all the iconic F1 tracks!</li>
					</ul>
				</li>
			</ul>
		</div>
	</section>

	<section class="sub-section" aria-labelledby="timeline-title">
		<div class="region-head">
			<h2 id="timeline-title" class="title title-md">Timeline<span>.</span></h2>
		</div>
		<div class="region">
			<ol class="timeline">
				{#each timeline as group (group.year)}
					<li class="group">
						<h3 class="title title-sm year">{group.year}</h3>
						<ul>
							{#each group.events as event, i (event.name)}
								<li class="event">
									<h4 class="event-name title title-xs">
										<span class="check" aria-hidden="true"
											><IconCheck width="100%" height="100%" /></span
										>
										{event.name}
									</h4>
									{#if event.desc}
										<p class="text desc" class:line={i < group.events.length - 1}>{event.desc}</p>
									{/if}
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ol>
		</div>
	</section>
</div>

<style lang="scss">
	.split {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 1.25rem;
		align-items: center;

		@include below($md) {
			grid-template-columns: 1fr;
			gap: 4rem;
		}
	}

	.portrait {
		justify-self: center;
		width: 100%;
		max-width: 12rem;
		padding: 1rem;
		border: 2px solid hsl(var(--acc));
		border-radius: var(--radius-lg);
		box-shadow: 0 0 0.75rem hsla(var(--acc), 0.5);
		color: hsl(var(--acc));
	}

	.list .list {
		margin-top: 1rem;
	}

	.timeline {
		@include flex(column);
		gap: 1rem;
		width: 100%;
	}

	.year {
		margin: 2rem 0 1rem;
	}

	.event {
		margin-top: 0.5rem;
	}

	.event-name {
		@include flex(row, flex-start, center);
		gap: 0.5rem;
	}

	.check {
		flex-shrink: 0;
		width: 1.5rem;
		height: 1.5rem;
		color: hsl(var(--acc));
	}

	.desc {
		margin: 0.25rem 0 0 0.7rem;
		padding: 0.5rem 0 0 1.75rem;
		border-left: 2px solid transparent;

		&.line {
			margin-bottom: 0.25rem;
			padding-bottom: 1rem;
			border-color: hsla(var(--acc2), 0.35);
		}
	}
</style>
