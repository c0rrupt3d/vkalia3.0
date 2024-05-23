import { nameFromPath, importMetaImage } from '#/lib/utility/blogs.js';
import { error } from '@sveltejs/kit';
import { dev } from '$app/environment';

export async function load({ params }) {
	const modules = import.meta.glob('/src/md/blogs/*/*.md');

	let match = {};

	for (const [path, resolver] of Object.entries(modules)) {
		if (nameFromPath(path) === params.slug) {
			match = { path, resolver };
			break;
		}
	}

	const post = await match?.resolver?.();

	if (!post || (!post.metadata.live && !dev)) {
		throw error(404, 'post not found');
	}

	let imagePath = match.path.split('/').slice(0, -1).join('/') + '/' + post.metadata.ogImage;
	let image = await importMetaImage(imagePath);

	return {
		post,
		meta: {
			title: `${post.metadata.name} - Blog | Vastav Kalia`,
			description: post.metadata.description,
			type: 'article',
			image
		}
	};
}
