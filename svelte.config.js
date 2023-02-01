import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';

export default {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      autoDeploy: true,
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
