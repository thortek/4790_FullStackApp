<script>
	import { Line, Doughnut } from 'svelte-chartjs'
	import 'chart.js/auto'
	import { chartData } from '../../lib/components/chartData.js'
	import { donutData } from '../../lib/components/donutData.js'

	export let data
	export const prerender = true
	// $: console.log(Object.values(data));
	let pics = Object.values(data)
</script>

<div class="min-h-screen flex flex-wrap">
	<div class="carousel carousel-center p-4 max-h-96 max-w-md space-x-4 bg-neutral rounded-box m-1">
		{#each pics as pic}
			<div class="carousel-item">
				<img class="rounded-box" src={pic.url} alt="Nasa pic" />
			</div>
		{/each}
	</div>
	<Line data={chartData} />
	<Doughnut data={donutData} options={{ responsive: true }} />
</div>
