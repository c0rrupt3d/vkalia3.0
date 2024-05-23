import { getPosts } from '#/lib/utility/blogs.js';
import { dev } from '$app/environment';

export async function load() {
	// Import all Markdown blog posts
	const modules = import.meta.glob('/src/md/blogs/*/*.md');

	let posts = await getPosts(modules);

	if (!dev) {
		posts = posts.filter((post) => post.live);
	}

	posts.sort((a, b) => new Date(b.date) - new Date(a.date));

	const topPost = posts[0];

	return {
		topPost,
		meta: {
			title: 'Vastav kalia',
			description: 'Welcome to my portfolio'
		}
	};
}
