import { dev } from '$app/env';
import type { PostFrontmatter, PostSummary } from '#lib/types.ts';

// Server-only: lists only need frontmatter. Because this runs in `+page.server.ts`
// during prerender, the post components never end up in the client bundle for
// the home and blog index pages — the client just receives a small JSON payload.
const modules = import.meta.glob<PostFrontmatter>('/src/posts/*/index.md', {
	eager: true,
	import: 'metadata'
});

const slugFromPath = (path: string) => path.split('/').at(-2)!;

const byNewest = (a: PostSummary, b: PostSummary) =>
	new Date(b.date).getTime() - new Date(a.date).getTime();

/** Published posts (plus drafts while developing), newest first. */
export const posts: PostSummary[] = Object.entries(modules)
	.map(([path, metadata]) => ({ ...metadata, slug: slugFromPath(path) }))
	.filter((post) => post.live || dev)
	.sort(byNewest);
