export function formatDate(date) {
	const d = new Date(date);
	const options = { timeZone: 'UTC', day: '2-digit', month: 'short', year: 'numeric' };
	return d.toLocaleDateString(undefined, options);
}

export function nameFromPath(path) {
	return path.split('/').slice(-1)[0].split('.')[0].replace(/^\++/, '');
}

export async function getPosts(modules) {
	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then((post) => ({
			slug: nameFromPath(path),
			...post.metadata
		}))
	);

	const posts = await Promise.all(postPromises);
	const filtered = posts.filter((post) => post.live);

	return filtered;
}

export async function importMetaImage(imagePath) {
	const images = import.meta.glob(`/src/content/*/*/*.{jpg,png,webp}`, {
		import: 'default',
		query: {
			enhanced: true,
			w: '1200',
			format: 'jpg;png;webp'
		}
	});
	for (const [path, src] of Object.entries(images)) {
		if (path.includes(imagePath)) {
			return await src();
		}
	}
}
