import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';
import { dev } from '$app/env';
import type { PostFrontmatter } from '#lib/types.ts';
import type { EntryGenerator, PageLoad } from './$types';

type PostModule = { default: Component; metadata: PostFrontmatter };

// Lazy: each post compiles to its own chunk, fetched only when that post is opened.
const modules = import.meta.glob<PostModule>('/src/posts/*/index.md');

// Convention: a post's social card lives next to it as og-image.{webp,png,jpg}.
const ogImages = import.meta.glob<string>('/src/posts/*/og-image.{webp,png,jpg}', {
	eager: true,
	query: '?url',
	import: 'default'
});

const isPublished = (meta: PostFrontmatter) => meta.live || dev;

/** Tells the prerenderer about every published post, even ones not linked from anywhere yet. */
export const entries: EntryGenerator = async () => {
	const found = await Promise.all(
		Object.entries(modules).map(async ([path, load]) => ({
			slug: path.split('/').at(-2)!,
			live: isPublished((await load()).metadata)
		}))
	);
	return found.filter((p) => p.live).map(({ slug }) => ({ slug }));
};

export const load: PageLoad = async ({ params }) => {
	const post = await modules[`/src/posts/${params.slug}/index.md`]?.();
	if (!post || !isPublished(post.metadata)) error(404, 'Post not found');

	const { metadata } = post;
	const image = Object.entries(ogImages).find(([path]) =>
		path.startsWith(`/src/posts/${params.slug}/`)
	)?.[1];

	return {
		content: post.default,
		post: metadata,
		meta: {
			title: `${metadata.name} - Blog | Vastav Kalia`,
			description: metadata.description,
			type: 'article' as const,
			image,
			published: new Date(metadata.date).toISOString()
		}
	};
};
