<script lang="ts">
	import '#/sass/app.scss';

	import IconHome from '~icons/tabler/home';
	import IconHomeFilled from '~icons/tabler/homeFilled';
	import IconArticle from '~icons/tabler/article';
	import IconArticleFilled from '~icons/tabler/articleFilled';
	import IconFolder from '~icons/tabler/folder';
	import IconFolderFilled from '~icons/tabler/folderFilled';
	import IconInfo from '~icons/tabler/info-circle';
	import IconInfoFilled from '~icons/tabler/info-circle-filled';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { expoOut } from 'svelte/easing';
	import Mounting from '#/lib/components/Mounting.svelte';
	import Fab from '#/lib/components/Fab.svelte';
	import NavBar from '#/lib/components/NavBar.svelte';
	import Metadata from '#/lib/components/Metadata.svelte';

	export let data;
	let navigateDiv: HTMLElement;

	afterNavigate(() => {
		setTimeout(() => {
			if (navigateDiv) {
				navigateDiv.scrollTop = 0;
			}
		}, 250);
	});

	const routes: RoutesProps = [
		{ index: 0, name: 'Home', path: '/', icon: IconHome, iconFilled: IconHomeFilled },
		{
			index: 1,
			name: 'About',
			path: '/about',
			icon: IconInfo,
			iconFilled: IconInfoFilled
		},
		{
			index: 2,
			name: 'Projects',
			path: '/projects',
			icon: IconFolder,
			iconFilled: IconFolderFilled
		},
		{
			index: 3,
			name: 'Blog',
			path: '/blog',
			icon: IconArticle,
			iconFilled: IconArticleFilled
		}
	];

	const isBasePath = (path: string) => {
		const basePaths = routes.map((route) => route.path);
		return basePaths.includes(path);
	};

	const getBasePath = (path: string) => {
		const segments = path.split('/');
		return `/${segments[1]}`; // returns the base path ('/blog', '/about')
	};

	let prevPages = ['', ''];
	$: {
		prevPages = [prevPages[1], data.pathname];
	}
	$: transitionEvent = (path: string, isIn: boolean = true) => {
		const newRoute = routes.find((route) => route.path === path);
		const oldRoute = routes.find((route) => route.path === prevPages[0]);
		const disp = '2rem';

		const isOldSlug = !isBasePath(prevPages[0]); // check previous page is a slug
		const isNewBase = isBasePath(path); // check new page is a base path

		// If going from slug path to base path
		if (isOldSlug && isNewBase) {
			return isIn ? `-${disp}` : `${disp}`; // if going from slug to base
		}

		//comparing new and old route index
		if (newRoute && oldRoute) {
			if (newRoute.index > oldRoute.index) {
				return isIn ? `${disp}` : `-${disp}`;
			} else return isIn ? `-${disp}` : `${disp}`;
		} else {
			return isIn ? `${disp}` : `-${disp}`;
		}
	};
</script>

<head>
	<link rel="preconnect" as="font" href="https://rsms.me/" />
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Source+Code+Pro:ital@0;1&display=swap"
		rel="stylesheet"
	/>
</head>

<Metadata
	title={$page.error ? $page.status : $page.data.meta.title}
	description={$page.error ? $page.error.message : $page.data.meta.description}
	type={$page.data.meta.type}
	image={$page.data.meta.image}
/>

<main bind:this={navigateDiv}>
	<Fab />
	<NavBar {routes} />
	<Mounting>
		{#key data.pathname}
			<div
				class="wrap"
				in:fly={{
					x: transitionEvent(data.pathname, true),
					duration: 300,
					delay: 300,
					easing: expoOut
				}}
				out:fly={{ x: transitionEvent(data.pathname, false), duration: 300 }}
			>
				<div class="inner">
					<slot />
				</div>
			</div>
		{/key}
	</Mounting>
</main>

<style lang="scss">
	main {
		@include flex(row, center, start);
		min-height: 100%;
		min-width: 100%;
		overflow-x: hidden;
		position: relative;
		scrollbar-width: thin;
		scrollbar-color: hsla(var(--acc), 0.85) transparent;
		scrollbar-gutter: stable;
	}

	.wrap {
		@include flex(column);
		width: 100%;
		max-width: $lg;
		position: absolute;
		min-height: 100%;
		overflow-x: hidden;
		padding: 0 1rem;

		@media (max-width: $md) {
			max-width: 100vw;
			padding: 0 1.5rem;
		}
	}

	.inner {
		@include flex(row);
		width: 100%;
		height: 100%;
		margin-bottom: 5rem;
	}
</style>
