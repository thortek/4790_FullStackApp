import adapter from '@sveltejs/adapter-node'
//import preprocess from 'svelte-preprocess'

const config = {
	kit: {
		adapter: adapter()
	}
}

/* const config = {
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
} */


export default config
