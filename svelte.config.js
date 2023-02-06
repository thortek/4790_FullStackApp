import { adapter } from 'sveltekit-adapter-aws'
import preprocess from 'svelte-preprocess'

const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(
			{
				autoDeploy: true
			}
		)
	}
}


export default config
