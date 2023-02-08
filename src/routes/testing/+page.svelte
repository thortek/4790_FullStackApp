<script>
	import { DataStore } from 'aws-amplify'
    import { Post, PostStatus } from '../../models'

	const createPost = async () => {
		await DataStore.save(
			new Post({
				title: 'My Second Post - Wed. Feb 8',
				rating: 5,
				status: PostStatus.ACTIVE
			})
		)
	}
</script>

<div class="w-fit">
	<button class="btn" on:click={createPost}>Save Post</button>
</div>