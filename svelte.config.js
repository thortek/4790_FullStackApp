import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
		autoDeploy: true,
		FQDN: 'main.d1yxpnooq62isg.amplifyapp.com',
		stackName: 'amplify-4790backend-staging-220634-auth4790backend2a543687-2T7CUMC3CT2R'
    }),
  },
}




/* import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'


const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		})
	},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
}

export default config */
