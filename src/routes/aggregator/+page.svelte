<script>
	export let data
	//$: console.log(data.topStories)

	let storyContent = ''

	function getStory(story) {
		storyContent = story.content
	}
</script>

<div class="drawer overflow-x-hidden overflow-y-auto">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<!-- Page content here -->
		<label for="my-drawer-2" class="btn btn-primary drawer-button">Open drawer</label>
		<div class="flex content-center justify-center w-1/2 ">
      <h4 class="bg-slate-100">{storyContent}</h4>
		</div>
	</div>
	<div class="drawer-side ">
		<label for="my-drawer-2" class="drawer-overlay " />
		<ul class="menu p-4 w-80 bg-base-100 text-base-content">
			<!-- Sidebar content here -->
			{#each data.topStories as story}
				<li class="card" on:click={getStory(story)}>
					<figure class="flex flex-col bg-yellow-500 m-1">
						<img src={story.urlToImage} alt="Story pic"/>
						<figcaption>{story.title}</figcaption>
					</figure>
				</li>
			{/each}
		</ul>
	</div>
</div>
