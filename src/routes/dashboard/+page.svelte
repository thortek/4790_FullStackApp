<script>
	import { Line, Doughnut } from 'svelte-chartjs'
	import 'chart.js/auto'
	import { chartData } from '../../lib/components/chartData.js'
	import { donutData } from '../../lib/components/donutData.js'
	import Stats from '../../lib/components/Stats.svelte'
	import { faker } from '@faker-js/faker'
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import { fly } from 'svelte/transition'

	export let data
	export const prerender = true
	// $: console.log(Object.values(data))
	let pics = Object.values(data)
	const companyName = faker.company.name()

	const progress = tweened(Number.parseInt(faker.finance.amount(1, 100, 0)), {
		duration: 400,
		easing: cubicOut
	})

	let finalProgress = 0
	let visible = false

	const handleClick = async () => {
		await progress.set(Number.parseInt(faker.finance.amount(1, 100, 0)))
		finalProgress = $progress
	}
</script>

<div class="flex flex-wrap bg-slate-300 h-screen">
	<!-- Mission statement here -->
	<div class="card w-full bg-base-100 shadow-xl m-4 h-28">
		<div class="card-body">
			<h2 class="card-title">{companyName} Mission Statement</h2>
			<p>
				Our company {companyName} exists to {faker.company.bsBuzz()}
				{faker.company.bsAdjective()}
				{faker.company.bsNoun()} using what we refer to as our "{faker.company.catchPhrase()}"!
			</p>
		</div>
	</div>
	<div class="carousel carousel-center p-4 h-96 max-w-md m-4 space-x-4 bg-neutral rounded-box">
		{#each pics as pic}
			<div class="carousel-item">
				<img class="rounded-box" src={pic.url} alt="Nasa pic" />
			</div>
		{/each}
	</div>
	<div class="w-96 flex items-center">
		<Line data={chartData} />
	</div>
	<div class="w-96">
		<Doughnut class="p-16" data={donutData} />
	</div>
	<div>
		<!-- Stats element begins here-->
		<Stats />
		<button class="btn" on:click={() => (visible = !visible)}>Show Financial Performance</button>
		{#if visible}
			<div class="flex bg-slate-200 rounded-xl m-4" transition:fly={{ x: 1200, duration: 2000 }}>
				<div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="radial-progress bg-primary text-primary-content border-4 border-primary m-2"
						style="--value:{$progress}; --size:6rem;"
						on:click={handleClick}>
						{finalProgress}%
					</div>
					<h4 class="text-center text-primary font-bold">Stocks</h4>
				</div>
				<div>
					<div
						class="radial-progress bg-primary text-primary-content border-4 border-primary m-2"
						style="--value:{$progress}; --size:6rem;"
						on:click={handleClick}>
						{finalProgress}%
					</div>
					<h4 class="text-center text-primary font-bold">Home</h4>
				</div>
				<div>
					<div
						class="radial-progress bg-primary text-primary-content border-4 border-primary m-2"
						style="--value:{$progress}; --size:6rem;"
						on:click={handleClick}>
						{finalProgress}%
					</div>
					<h4 class="text-center text-primary font-bold">401k</h4>
				</div>
				<div>
					<div
						class="radial-progress bg-primary text-primary-content border-4 border-primary m-2"
						style="--value:{$progress}; --size:6rem;"
						on:click={handleClick}>
						{finalProgress}%
					</div>
					<h4 class="text-center text-primary font-bold">Cyrpto</h4>
				</div>
			</div>
		{/if}
	</div>
</div>
