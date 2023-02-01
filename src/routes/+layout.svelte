<script>
	import '../app.css'
	import { theme } from '$lib/stores/theme'
	import { Amplify } from 'aws-amplify'
	import awsconfig from '../aws-exports'
	Amplify.configure(awsconfig)

</script>

<div data-theme={$theme}>

<slot />

<footer class="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0">
	<div>
		<p>Copyright © 2022 Thor Anderson Designs</p>
	</div>
</footer>
</div>
