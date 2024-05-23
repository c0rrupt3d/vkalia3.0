<script lang="ts">
	import Button from './Button.svelte';
	import IconLink from '~icons/tabler/external-link';

	export let image: {
		src: string;
		alt: string;
		bg: string;
	} = {
		src: '',
		alt: '',
		bg: ''
	};

	export let content: {
		title: string;
		text: string;
	};

	export let button: {
		href: string;
	};
</script>

<div class="display-card">
	<div class="image" style={`background-color: ${image.bg}25;`}>
		<img src={image.src} alt={image.alt} />
	</div>
	<div class="content">
		<h3 class="title title-sm">{content.title}</h3>
		<p class="text">{content.text}</p>
		<div class="buttons">
			<Button icon externalLink alt regular href={button.href}>
				<svelte:component this={IconLink} slot="icon" width="100%" height="100%" />
				{'View live'}
			</Button>
			<Button bright href={'/projects'}>All projects</Button>
		</div>
	</div>
</div>

<style lang="scss">
	.display-card {
		width: 100%;
		min-width: 100%;
		min-height: 15rem;
		max-height: 15rem;
		height: 100%;
		@include flex(row, center, center);
		overflow: hidden;
		position: relative;
		border-radius: var(--radius-lg);
		margin: 1rem 0rem;
		background-color: hsl(var(--bg2));

		@media (max-width: $md) {
			@include flex(column);
			max-height: 100%;
			min-height: 100%;
		}

		.image {
			border-radius: var(--radius-lg);
			overflow: hidden;
			min-height: 15rem;
			height: 100%;
			position: relative;
			max-height: 100%;
			width: 33.5%;
			object-fit: contain;
			@include flex(row, center, center);

			@media (max-width: $md) {
				height: 100%;
				width: 100%;
			}
			img {
				height: 10rem;
				object-fit: contain;
				@include flex(row, center, center);
				max-height: 100%;
				max-width: 100%;
				padding: 1rem;
				border-radius: var(--radius-full);

				@media (max-width: $md) {
					height: 100%;
					max-height: 12rem;
				}
			}
		}

		.content {
			height: 100%;
			max-height: 100%;
			width: 66.5%;
			padding: 1rem 1.25rem;
			@include flex(column, center);

			@media (max-width: $md) {
				width: 100%;
				max-height: 100%;
			}

			.title {
				font-weight: 600;
			}

			.buttons {
				height: 100%;
				@include flex(row, end, end);
				padding-top: 1rem;
				width: 100%;
				gap: 1rem;
				@media (max-width: $xs) {
					@include flex(column, end, end);
				}
			}

			.text {
				margin-top: 1rem;
			}
		}
	}
</style>
