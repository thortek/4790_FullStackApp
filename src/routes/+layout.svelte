<script>
	import '../app.css'
	import { theme } from '$lib/stores/theme'
	import { onMount } from 'svelte'
	import { Skill } from '../models'
	import { Amplify, AuthModeStrategyType, DataStore } from 'aws-amplify'
	import awsconfig from '../aws-exports'
	Amplify.configure({
		...awsconfig,
		DataStore: { authModeStrategyType: AuthModeStrategyType.MULTI_AUTH }
	})
	
	onMount(async () => {
		await DataStore.start(Skill)
	})
	
</script>

<div data-theme={$theme}>
	<slot />

	<footer class="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0">
		<div>
			<p>Copyright © 2022 Thor Anderson Designs</p>
		</div>
	</footer>
</div>
