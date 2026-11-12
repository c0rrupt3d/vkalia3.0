import soleil from '#lib/assets/projects/soleil.png?enhanced';
import vkaliaV2 from '#lib/assets/projects/vkalia-v2.png?enhanced';
import zerohertz from '#lib/assets/projects/zerohertz.png?enhanced';
import type { Project } from '#lib/types.ts';

export const projects: Project[] = [
	{
		title: 'ZeroHertz',
		text: 'ZeroHertz lets users listen to radio stations online with a curated list of stations from across the world. Created by my love of discovering new music!',
		logo: zerohertz,
		logoAlt: 'ZeroHertz logo',
		bg: '#c7296f',
		round: true,
		href: 'https://zerohertz.vkalia.com/',
		git: 'https://github.com/c0rrupt3d/zeroHertz',
		featured: true
	},
	{
		title: 'Soleil',
		text: 'Weather done, simply. Soleil is a project I undertook to show current and future weather data of a location with minimal aesthetics.',
		logo: soleil,
		logoAlt: 'Soleil logo',
		bg: '#f9953e',
		round: true,
		href: 'https://soleil.vkalia.com/',
		git: 'https://github.com/c0rrupt3d/soleil'
	},
	{
		title: 'Portfolio v2',
		text: 'This is the old version (v2) of my portfolio website. I wanted to incorporate more animations and motion in my website and cement my new brand logo and colors.',
		logo: vkaliaV2,
		logoAlt: 'VKalia version 2 logo',
		bg: '#fe4151',
		round: false,
		href: 'https://v2.vkalia.com/',
		git: 'https://github.com/c0rrupt3d/vkalia2.0'
	}
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];
