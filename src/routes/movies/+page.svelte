<script>
	export let form, errors
	//$: console.log(data, form);
	//let firstMovie = data.movies.Search[0];
</script>

{#if errors?.title}
<p class="error">{errors.title}</p>
{/if}

<main class="flex flex-wrap justify-center">
<!-- {#if form.length === 0}
		<div class="card">
			<div class="card-body">
				<h2 class="card-title">No movies loaded. Enter a valid movie title in the search box.</h2>
			</div>
		</div>
	{/if} -->
	{#each form as movie}
		<div class="card w-96 bg-base-100 shadow-xl m-4">
			<figure>
				<img src={movie.Poster} alt="Movie poster" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">{movie.Title}</h2>
				<p>{movie.Year}</p>
				<div class="card-actions justify-end">
					<button class="btn btn-primary">Buy Now</button>
				</div>
			</div>
		</div>
	{/each}
</main>
