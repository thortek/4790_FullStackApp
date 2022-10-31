<script>
	import { onMount } from 'svelte'

	let allPokemon = []

	onMount(async () => {
		const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1200`)
		const pokeData = await response.json()
		allPokemon = pokeData.results
	})
</script>

<h1 class="text-xl">Pokemon Grid</h1>

<div class="w-full grid grid-cols-8 gap-2 p-2">
	{#each allPokemon as pokemon}
		<figure>
			<img src={`https://via.Placeholder.com/150/abcdef`} alt={pokemon.name} />
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	{:else}
		<p>Loading...</p>
	{/each}
</div>
