<script>
	export let data;
	export const prerender = true;
	// $: console.log(Object.values(data));
	let pics = Object.values(data);
</script>

<div class="min-h-screen flex flex-wrap">
	<progress class="progress w-56" value="0" max="100" />
	<div class="carousel carousel-center p-4 max-h-96 space-x-4 bg-neutral rounded-box">
		{#each pics as pic}
			<div class="carousel-item">
				<img class="rounded-box" src={pic.url} alt="Nasa pic" />
			</div>
		{/each}
	</div>
</div>
