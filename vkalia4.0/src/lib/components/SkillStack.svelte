<script lang="ts">
	import IconDown from '~icons/tabler/chevron-down';
	import { skills } from '#lib/data/skills.ts';
	import Chip from './Chip.svelte';
</script>

<!--
	Native exclusive accordion: <details name="…"> lets only one group be open at a time,
	with no JavaScript, built-in keyboard support and correct semantics.
	The open/close animation uses ::details-content where supported; elsewhere it simply snaps.
-->
<div class="stack">
	{#each skills as group, i (group.title)}
		<details name="skills" open={i === 0}>
			<summary>
				<span class="group-icon" aria-hidden="true"><group.icon width="100%" height="100%" /></span>
				<span class="group-name">{group.title}</span>
				<span class="chevron" aria-hidden="true"><IconDown width="100%" height="100%" /></span>
			</summary>
			<ul class="chips">
				{#each group.items as item (item.name)}
					<li><Chip icon={item.icon}>{item.name}</Chip></li>
				{/each}
			</ul>
		</details>
	{/each}
</div>

<style lang="scss">
	.stack {
		@include flex(column);
		gap: 0.1rem;
		margin: 1rem 0;
		border-radius: var(--radius-lg);
		overflow: hidden;
		background-color: hsl(var(--bg));
	}

	details {
		background-color: hsl(var(--bg2));
		interpolate-size: allow-keywords;

		&::details-content {
			block-size: 0;
			overflow: clip;
			opacity: 0;
			transition:
				block-size 300ms var(--timing-standard),
				opacity 300ms var(--timing-standard),
				content-visibility 300ms allow-discrete;
		}

		&[open]::details-content {
			block-size: auto;
			opacity: 1;
		}
	}

	summary {
		@include flex(row, flex-start, center);
		@include transition(background-color);
		gap: 0.25rem;
		height: 4.5rem;
		padding: 1rem 1.25rem;
		list-style: none;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;

		&::-webkit-details-marker {
			display: none;
		}

		@include hover {
			background-color: hsl(var(--bg3));
		}

		&:focus-visible {
			outline: 2px solid hsl(var(--acc));
			outline-offset: -2px;
		}
	}

	.group-icon {
		width: 2.5rem;
		height: 2.5rem;
		padding: 0.5rem;
		color: hsl(var(--txt2));

		@include below($md) {
			display: none;
		}
	}

	.group-name {
		flex: 1;
		font-size: 1.5rem;
		font-weight: 400;
	}

	.chevron {
		@include transition((background-color, transform));
		width: 1.875rem;
		height: 1.875rem;
		padding: 0.4rem;
		border-radius: var(--radius-full);
		background-color: hsl(var(--txt3));
		color: hsl(var(--bg));

		summary:hover & {
			background-color: hsl(var(--acc2));
		}

		details[open] & {
			background-color: hsl(var(--acc));
			transform: rotate(180deg);
		}
	}

	.chips {
		@include flex(row, flex-start, center);
		flex-wrap: wrap;
		gap: 1rem 0.75rem;
		padding: 1.5rem 2.5rem 2.5rem;

		@include below($md) {
			padding: 1.25rem 1.25rem 1.75rem;
		}
	}
</style>
