import { posts } from '#lib/server/posts.ts';
import { site } from '#lib/data/site.ts';

export const load = () => ({
	latestPost: posts[0],
	meta: { title: site.name, description: site.description }
});
