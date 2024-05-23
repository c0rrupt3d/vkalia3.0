<script>
	import transition from '#/lib/utility/Transition';
	import { fly } from 'svelte/transition';
	import IconCheckmark from '~icons/tabler/discount-check-filled';

	const timelines = [
		{
			year: '2022',
			events: [
				{
					name: 'Climbing the ladder 🪜',
					desc: 'I was promoted to Manager and Lead Frontend Developer @ ROKiT. My responsibilities now included the day to day management of most web projects. This spanned from maintenance of live projects to platform design and development of new upcoming projects.'
				},
				{
					name: 'Health Update 🍎',
					desc: 'I successfully lost over 25kgs in a year and a half. This was a huge achievement as it gave me confidence that consistent steps can lead to huge outcomes!'
				}
			]
		},
		{
			year: '2021',
			events: [
				{
					name: 'New opportunities ✨',
					desc: 'I joined as a Frontend Developer @ ROKiT, USA. Completely remote due to the pandemic. I got to work with teams from all across the world ranging from Europe to the Americas. Worked on numerous projects in-house and for the world to see.'
				}
			]
		},
		{
			year: '2020',
			events: [
				{
					name: 'Into the unknown 📦',
					desc: 'I joined as a Frontend Intern at Decision Tree Analytics. Learning team dynamics and meeting project deadlines. My first job as a graduate.'
				},
				{
					name: 'Finishing my Bachelors 🎓',
					desc: 'Graduated from college! A wonderful four year adventure comes to a close. Eager to continue growing with the knowledge in hand.'
				}
			]
		},
		{
			year: '2019',
			events: [
				{
					name: 'First Job 💻',
					desc: 'I interned as as Software Programmer during my 3rd year of college. This was my first ever full paid job!'
				}
			]
		},
		{
			year: '2016',
			events: [
				{
					name: 'First steps into the tech world 👨‍💻',
					desc: 'After completing school, I joined Bennet University as a Computer Science student, starting my tech journey. So much to learn!'
				}
			]
		},
		{ year: '2014', events: [{ name: 'Began my schooling in higher secondary 🎒' }] },
		{ year: '1997', events: [{ name: 'A star is born ⭐' }] }
	];
</script>

<div class="page">
	<section class="sub-section">
		<div class="region-head">
			<h2 in:fly={transition(2)} class="title title-alt">About me<span>.</span></h2>
		</div>
		<div class="region">
			<div class="split" in:fly={transition(3)}>
				<div class="split-1">
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
				<div class="split-2">
					<img src="/logo-light.webp" alt="" />
				</div>
			</div>
		</div>
	</section>
	<section class="sub-section" in:fly={transition(4)}>
		<div class="region-head">
			<h2 class="title title-md">Quick facts<span>.</span></h2>
		</div>
		<div class="region">
			<ul class="list">
				<li>Born and brought up in India.</li>
				<li>
					I love listening to music. Here's my <a
						rel="noopener noreferrer"
						target="_blank"
						href="https://open.spotify.com/playlist/6raYXIgsi5xFWvsPfQH94l">playlist</a
					> that I often listen to while coding.
				</li>
				<li>I make some amazing butter chicken, my own recipe of course.</li>
				<li>Hiking is one of my favorite ways to unwind.</li>
				<li>My average typing speed is around 96wpm. Highest so far is a 110wpm!</li>
				<li>
					Bucket list items:
					<ul class="list" style="margin-top: 1rem;">
						<li>Building my own car.</li>
						<li>Backpacking around the world.</li>
						<li>Visiting all the iconic F1 tracks!</li>
					</ul>
				</li>
			</ul>
		</div>
	</section>
	<section class="sub-section">
		<div class="region-head">
			<div class="title title-md">Timeline<span>.</span></div>
		</div>
		<div class="region">
			<div class="timeline">
				{#each timelines as timeline}
					<div class="group">
						<h4 class="title title-sm year">{timeline.year}</h4>
						{#each timeline.events as event, index}
							<div class="event">
								<div class="event-name">
									<span class="check">
										<svelte:component this={IconCheckmark} width="100%" height="100%" />
									</span>
									<h5 class="title title-xs">{event.name}</h5>
								</div>
								{#if event.desc}
									<div class="desc" class:line={index < timeline.events.length - 1}>
										<p class="text">{event.desc}</p>
									</div>
								{/if}
							</div>
						{/each}
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	.split {
		display: grid;
		grid-template-columns: 2fr 1fr;
		grid-template-rows: 1fr;
		gap: 0px 1.25rem;

		@media (max-width: $md) {
			@include flex(column, center, center);
		}

		.split-1 {
			@include flex(column, center, center);
			width: 100%;
			height: 100%;

			@media (max-width: $md) {
				margin-bottom: 4rem;
			}
		}

		.split-2 {
			@include flex(column, center, center);
			width: 100%;
			height: 100%;
			position: relative;
			padding: 0 2rem;

			img {
				width: 100%;
				// background-color: hsl(var(--txt));
				border-radius: var(--radius-lg);
				border: 2px solid hsl(var(--acc));
				padding: 1rem;
				box-shadow: hsl(var(--acc), 0.5) 0 0 0.75rem;
				@include transition();
				max-width: 12rem;
			}

			@media (max-width: $md) {
				padding: 0 4rem;
				max-width: 18rem;
			}
		}
	}

	.timeline {
		@include flex(column, center, start);
		width: 100%;
		gap: 1rem;

		.group {
			@include flex(column, center, start);
			width: 100%;
			.year {
				margin-top: 2rem;
				margin-bottom: 1rem;
			}

			.event {
				@include flex(column, center, start);
				margin-top: 0.5rem;
				width: 100%;
				.event-name {
					@include flex(row, start, center);
					gap: 0.5rem;

					.check {
						@include flex(row, center, center);
						position: relative;
						height: 100%;
						width: 100%;
						max-width: 1.5rem;
						max-height: 1.5rem;
						aspect-ratio: 1/1;
						color: hsl(var(--acc));
					}
				}

				.desc {
					width: 100%;
					@include flex();
					margin-left: 0.7rem;
					padding-left: 1.75rem;
					margin-top: 0.25rem;
					padding-top: 0.5rem;
					border-left: 2px solid transparent;

					&.line {
						border-color: hsla(var(--acc2), 0.35);
						padding-bottom: 1rem;

						margin-bottom: 0.25rem;
					}

					.text {
						margin-block-start: 0rem;
						margin-block-end: 0rem;
					}
				}
			}
		}
	}
</style>
