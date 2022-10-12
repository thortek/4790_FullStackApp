<script>
	import { Line, Doughnut } from 'svelte-chartjs';
	import 'chart.js/auto';
	import { chartData } from '../../lib/components/chartData.js';
	import { donutData } from '../../lib/components/donutData.js';
	import Stats from '../../lib/components/Stats.svelte';
	import { faker } from '@faker-js/faker';

	export let data;
	export const prerender = true;
	// $: console.log(Object.values(data))
	let pics = Object.values(data);
	const companyName = faker.company.name()
	$: showModal = ''
</script>

<div class="flex flex-wrap">
	<div class="carousel carousel-center p-4 max-h-96 m-4 space-x-4 bg-neutral rounded-box">
		{#each pics as pic}
			<div class="carousel-item">
				<img class="rounded-box" src={pic.url} alt="Nasa pic" />
			</div>
		{/each}
	</div>
	<div class="w-1/2 flex items-center bg-slate-100 shadow-xl">
		<Line data={chartData} />
	</div>
	<div class="w-1/2 bg-slate-100 shadow-xl">
		<Doughnut class="p-16" data={donutData} />
	</div>
	<!-- Stats element begins here-->
	<Stats />
	<!-- Mission statement here -->
	<div class="card w-full bg-base-100 shadow-xl" on:click={() => showModal = 'modal-open'}>
		<div class="card-body">
			<h2 class="card-title">{companyName} Mission Statement</h2>
			<p>
				Our company {companyName} exists to {faker.company.bsBuzz()}
				{faker.company.bsAdjective()}
				{faker.company.bsNoun()} using what we refer to as our "{faker.company.catchPhrase()}"!
			</p>
		</div>
	</div>

	<!-- Put this part before </body> tag -->
	<input type="checkbox" id="my-modal" class="modal-toggle" />
	<label for="my-modal" class="modal cursor-pointer {showModal}" on:click={() => showModal = ''}>
		<label class="modal-box relative" for="my-modal">
			<h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
			<p class="py-4">
				You've been selected for a chance to get one year of subscription to use Wikipedia for free!
			</p>
		</label>
	</label>
</div>
