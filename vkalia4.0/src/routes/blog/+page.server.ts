import { posts } from '#lib/server/posts.ts';

export const load = () => ({
	posts,
	meta: {
		title: 'Blog | Vastav Kalia',
		description: 'Writing about various things that interest me.'
	}
});
