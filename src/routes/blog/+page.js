import { getPosts } from '#/lib/utility/blogs.js';

export async function load() {
	const modules = import.meta.glob('/src/md/blogs/*/*.md');
	let posts = await getPosts(modules);

	posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	return {
		posts,
		meta: {
			title: 'Blog | Vastav Kalia',
			description: 'Writing about various things that interst me.'
		}
	};
}
