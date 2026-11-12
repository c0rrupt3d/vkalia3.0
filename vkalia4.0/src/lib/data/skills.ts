import IconDb from '~icons/tabler/database';
import IconDevices from '~icons/tabler/devices';
import IconMissing from '~icons/tabler/square-rotated-filled';
import IconRedux from '~icons/tabler/brand-redux';
import IconRestApi from '~icons/tabler/api';
import IconServer from '~icons/tabler/server-2';
import IconTerminal from '~icons/tabler/terminal-2';
import IconCloudflare from '~icons/cib/cloudflare';
import IconDjango from '~icons/cib/django';
import IconDocker from '~icons/cib/docker';
import IconFirebase from '~icons/cib/firebase';
import IconGithub from '~icons/cib/github';
import IconJava from '~icons/cib/java';
import IconJs from '~icons/cib/javascript';
import IconMongo from '~icons/cib/mongodb';
import IconNext from '~icons/cib/next-js';
import IconPostgres from '~icons/cib/postgresql';
import IconPython from '~icons/cib/python';
import IconReact from '~icons/cib/react';
import IconScss from '~icons/cib/sass';
import IconSvelte from '~icons/cib/svelte';
import IconTs from '~icons/cib/typescript';
import IconCss from '~icons/simple-icons/css3';
import IconExpress from '~icons/simple-icons/express';
import IconHtml from '~icons/simple-icons/html5';
import IconMantine from '~icons/simple-icons/mantine';
import IconNode from '~icons/simple-icons/nodedotjs';
import IconSupabase from '~icons/simple-icons/supabase';
import IconTailwind from '~icons/simple-icons/tailwindcss';
import IconVercel from '~icons/simple-icons/vercel';
import IconVite from '~icons/simple-icons/vite';
import type { Icon } from '#lib/types.ts';

export interface SkillGroup {
	title: string;
	icon: Icon;
	items: { name: string; icon: Icon }[];
}

export const skills: SkillGroup[] = [
	{
		title: 'Languages',
		icon: IconTerminal,
		items: [
			{ name: 'JavaScript', icon: IconJs },
			{ name: 'TypeScript', icon: IconTs },
			{ name: 'Python', icon: IconPython },
			{ name: 'Java', icon: IconJava },
			{ name: 'HTML', icon: IconHtml }
		]
	},
	{
		title: 'Frontend',
		icon: IconDevices,
		items: [
			{ name: 'ReactJS', icon: IconReact },
			{ name: 'CSS', icon: IconCss },
			{ name: 'SCSS', icon: IconScss },
			{ name: 'Next.js', icon: IconNext },
			{ name: 'TailwindCSS', icon: IconTailwind },
			{ name: 'Mantine', icon: IconMantine },
			{ name: 'Svelte', icon: IconSvelte },
			{ name: 'Vite', icon: IconVite },
			{ name: 'Redux', icon: IconRedux },
			{ name: 'Zustand', icon: IconMissing }
		]
	},
	{
		title: 'Backend',
		icon: IconDb,
		items: [
			{ name: 'Node.js', icon: IconNode },
			{ name: 'Express', icon: IconExpress },
			{ name: 'Django', icon: IconDjango },
			{ name: 'REST APIs', icon: IconRestApi },
			{ name: 'PostgreSQL', icon: IconPostgres },
			{ name: 'MongoDB', icon: IconMongo }
		]
	},
	{
		title: 'Infra and DevOps',
		icon: IconServer,
		items: [
			{ name: 'Vercel', icon: IconVercel },
			{ name: 'Firebase', icon: IconFirebase },
			{ name: 'Cloudflare', icon: IconCloudflare },
			{ name: 'Docker', icon: IconDocker },
			{ name: 'GitHub', icon: IconGithub },
			{ name: 'Supabase', icon: IconSupabase }
		]
	}
];
