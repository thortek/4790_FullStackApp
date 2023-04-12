<script>
	import { onMount } from 'svelte'
	import { goto } from '$app/navigation'
	import { localUser } from '$lib/stores/localUser'
	import { Storage } from 'aws-amplify'

	let files = []

	onMount(async () => {
		if (!localUser) {
			goto('/login')
		}
	})

	async function submitHandler(event) {
        event.preventDefault()
		try {
            console.log(files[0])
			await Storage.put(`profilePics/${files[0].name}`, files[0])
		} catch (err) {
			console.log(err)
		}
	}
</script>

<div class="mt-32 ml-32 w-1/3 border-2 shadow-xl p-8">
	<form on:submit={submitHandler}>
		<div class="form-control">
			<label class="label" for="file-upload">Select a file</label>
			<input
				class="input input-bordered input-lg w-full p-2"
				type="file"
				name="file-upload"
				id="file-upload"
				accept="image/png, image/jpeg"
				required
				bind:files />
		</div>
		{#if files.length > 0}
			<img class="mt-4" src={URL.createObjectURL(files[0])} alt="preview" />
		{/if}
		<div class="form-control">
			<button class="btn btn-primary btn-lg m-8" type="submit">Upload</button>
		</div>
	</form>
</div>
