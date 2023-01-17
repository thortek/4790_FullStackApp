import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			autoDeploy: true,
			FQDN: 'www.thoranderson.site',
			stackName: 'AWSAdapterStack-Default' // need to revisit this config issue later
		})
	},

};

export default config;
