export const prerender = true;

export const load = ({ url }) => {
	const { pathname } = url;

	return {
		pathname,
		meta: {
			title: 'Vastav kalia',
			description: 'Welcome to my portfolio'
		}
	};
};
