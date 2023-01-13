import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			autoDeploy: true,
			FQDN: 'www.thoranderson.site',
		})
	},

};

export default config;
