<script lang="ts">
	import Button from './Button.svelte';
	import IconLink from '~icons/tabler/external-link';
	import IconGithub from '~icons/tabler/brand-github';

	export let image: {
		src: string;
		alt: string;
		bg: string;
		round: boolean;
	} = {
		src: '',
		alt: '',
		bg: '',
		round: true,
	};

	export let content: {
		title: string;
		text: string;
	};

	export let button: {
		href: string;
        git: string
	};
</script>

<div class="project-card">
	<div class="head">
		<h3 class="title title-md">{content.title}</h3>
	</div>
	<div class="image">
		<div class="image-cover" style={`background-color: ${image.bg}25;`}>
			<img src={image.src} class:round={image.round} alt={image.alt} />
		</div>
	</div>
	<div class="content">
		<p class="text">{content.text}</p>
		<div class="buttons">
			<Button icon externalLink alt regular href={button.href}>
				<svelte:component this={IconLink} slot="icon" width="100%" height="100%" />
				{'View live'}
			</Button>
			<Button bright icon externalLink href={button.git}>
				<svelte:component this={IconGithub} slot="icon" width="100%" height="100%" />
				Source</Button>
		</div>
	</div>
</div>

<style lang="scss">
	.project-card {
		width: 100%;
		height: 30rem;
		max-height: 30rem;
		@include flex(column);
		border-radius: var(--radius-lg);
		position: relative;
		overflow: hidden;
		background-color: hsl(var(--bg2));

		@media (max-width: $md) {
		}

		.head {
			display: flex;
			width: 100%;
			padding: 1rem 1.25rem;

			.title {
				font-weight: 500;
			}
		}

		.image {
			width: 100%;
			min-height: 7rem;
			height: 7rem;

			@include flex(row, center, center);

			.image-cover {
				width: 100%;
				@include flex(row, center, center);
				height: 100%;
				margin: 0 1rem;
				border-radius: var(--radius-full);
				img {
					object-fit: contain;
					height: 4.5rem;
					&.round {
						border-radius: var(--radius-full);
					}
				}
			}
		}

		.content {
			width: 100%;
			height: 100%;
			padding: 1rem 1.25rem;
			@include flex(column, space-between);

			.buttons {
				width: 100%;
				@include flex(row, end, end);
				padding-top: 1rem;
				gap: 1rem;
			}

			.text {
				margin-top: 1rem;
			}
		}
	}
</style>
