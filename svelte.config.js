import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	experimental: {
		inspector: true
	},
	kit: {
		csp: {
			mode: 'auto',
			directives: {
				'script-src': ['self']
			}
		},
		adapter: vercel()
	}
};

export default config;
