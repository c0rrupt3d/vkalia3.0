<script lang="ts">
	export let href: string;
	export let bright: boolean | undefined = false;
	export let regular: boolean | undefined = false;
	export let alt: boolean | undefined = false;
	export let icon: boolean | undefined = false;
	export let externalLink: boolean | undefined = false;
	export let respName: boolean | undefined = false;
	export let respIcon: boolean | undefined = false;
	export let social: boolean | undefined = false;
	export let aria: string | undefined;

	// let animate = false;

	// function handleClick() {
	// 	animate = true;
	// 	setTimeout(() => {
	// 		animate = false;
	// 	}, 300);
	// }
</script>

<!-- on:click={handleClick} class:clicked={animate}  -->
<a
	{href}
	target={externalLink ? '_blank' : ''}
	rel={externalLink ? 'noopener noreferrer' : ''}
	class="button"
	class:bright
	class:regular
	class:alt
	class:icon
	class:social
	class:resp-name={respName}
	class:resp-icon={respIcon}
	aria-label={aria ? aria : undefined}
>
	{#if $$slots.icon}
		<span><slot name="icon" /></span>
	{/if}
	<div class="name"><slot /></div>
</a>

<style lang="scss">
	.button {
		color: hsl(var(--txt));
		@include transition();
		@include flex(row, center, center);
		height: 2.5rem;
		position: relative;
		border-radius: var(--radius-full);
		color: hsl(var(--txt));
		cursor: pointer;
		text-wrap: nowrap;


		padding: 0 1.5rem 0 1.5rem;

		.name {
			font-weight: 500;
		}

		&.regular {
			background-color: hsl(var(--bg2));
			&:hover {
				background-color: hsl(var(--bg3));
			}

			&.alt {
				border: 1px solid hsl(var(--txt3));
			}
		}

		&.social {
			background-color: hsla(var(--bg2));
			color: hsla(var(--txt));

			&:hover {
				background-color: hsla(var(--acc), 0.35);
			}

			&.alt {
				border: 1px solid hsla(var(--acc), 1);
			}
		}

		&.icon {
			padding: 0 1.5rem 0 1rem;
			span {
				pointer-events: none;
				height: 1.5rem;
				padding-right: 0.5rem;
			}

			@media (max-width: $md) {
				&.resp-name {
					aspect-ratio: 1/1;
					padding: 0;
					span {
						padding: 0;
					}
				}
			}
		}

		&.bright {
			background-color: hsl(var(--acc));
			color: hsl(var(--bg));
			&:hover {
				background-color: hsl(var(--acc2));
			}
		}

		span,
		.name {
			z-index: 1;
			cursor: pointer;
		}

		@media (max-width: $md) {
			&.regular, &.social {
				&.icon {
					&.resp-name {
						.name {
							display: none;
						}
					}
				}
			}
			&.resp-icon {
				span {
					display: none;
				}
			}
		}
	}
</style>
