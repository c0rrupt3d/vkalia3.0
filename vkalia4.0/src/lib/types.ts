import type { Component } from 'svelte';
import type { Picture } from '@sveltejs/enhanced-img';

export type Icon = Component<{ width?: string; height?: string; [key: string]: unknown }>;

export interface PageMeta {
	title: string;
	description: string;
	type?: 'website' | 'article';
	/** Absolute or root-relative URL of the Open Graph image. */
	image?: string;
	published?: string;
	noindex?: boolean;
}

export interface Route {
	name: string;
	path: string;
	icon: Icon;
	iconFilled: Icon;
}

export interface SocialLink {
	label: string;
	href: string;
	icon: Icon;
}

export interface Project {
	title: string;
	text: string;
	logo: Picture;
	logoAlt: string;
	/** Brand colour; rendered at low opacity behind the logo. */
	bg: string;
	round: boolean;
	href: string;
	git: string;
	featured?: boolean;
}

export interface PostFrontmatter {
	name: string;
	description: string;
	category: string;
	date: string;
	live: boolean;
}

export interface PostSummary extends PostFrontmatter {
	slug: string;
}
