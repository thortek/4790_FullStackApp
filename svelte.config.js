import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			autoDeploy: true,
			FQDN: 'main.d1yxpnooq62isg.amplifyapp.com',
			stackName: 'amplify-4790backend-staging-220634'
		})
	},

};

export default config;
