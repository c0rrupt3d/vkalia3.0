import IconArticle from '~icons/tabler/article';
import IconArticleFilled from '~icons/tabler/article-filled';
import IconCv from '~icons/tabler/file-cv';
import IconFolder from '~icons/tabler/folder';
import IconFolderFilled from '~icons/tabler/folder-filled';
import IconGithub from '~icons/tabler/brand-github';
import IconHome from '~icons/tabler/home';
import IconHomeFilled from '~icons/tabler/home-filled';
import IconInfo from '~icons/tabler/info-circle';
import IconInfoFilled from '~icons/tabler/info-circle-filled';
import IconLinkedIn from '~icons/tabler/brand-linkedin';
import IconMail from '~icons/tabler/mail';
import type { Route, SocialLink } from '#lib/types.ts';

export const site = {
	name: 'Vastav Kalia',
	url: 'https://vkalia.com',
	description:
		'Software Engineer specialising in frontend engineering. Welcome to my digital space.'
} as const;

/** Order matters: it drives the direction of page transitions. */
export const routes: Route[] = [
	{ name: 'Home', path: '/', icon: IconHome, iconFilled: IconHomeFilled },
	{ name: 'About', path: '/about', icon: IconInfo, iconFilled: IconInfoFilled },
	{ name: 'Projects', path: '/projects', icon: IconFolder, iconFilled: IconFolderFilled },
	{ name: 'Blog', path: '/blog', icon: IconArticle, iconFilled: IconArticleFilled }
];

export const socials: SocialLink[] = [
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/vastavk/', icon: IconLinkedIn },
	{ label: 'Email', href: 'mailto:business.vkal@gmail.com', icon: IconMail },
	{ label: 'GitHub', href: 'https://github.com/c0rrupt3d', icon: IconGithub },
	{
		label: 'Resume',
		href: 'https://drive.google.com/uc?export=download&id=1ykkby93zFtgfmgRzUV2pmiitulYK1upr',
		icon: IconCv
	}
];

/** Returns the top-level section for a path: `/blog/foo` → `/blog`. */
export const sectionOf = (path: string) => `/${path.split('/')[1] ?? ''}`;

export const isActive = (routePath: string, currentPath: string) =>
	routePath === '/'
		? currentPath === '/'
		: currentPath === routePath || currentPath.startsWith(`${routePath}/`);
