<script>
	import { theme } from '$lib/stores/theme'
	import { Auth, DataStore, Storage } from 'aws-amplify'
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte'
	import { localUser } from '$lib/stores/localUser'
	import ProfilePicModal from '$lib/components/ProfilePicModal/ProfilePicModal.svelte'

	let themeOptions = ['light', 'dark', 'cupcake', 'aqua', 'dracula', 'winter']

	let selectedTheme
	let open = false

	$: if (selectedTheme && selectedTheme !== 'Theme') $theme = selectedTheme

	onMount(async () => {
		console.log($localUser)
		Auth.currentAuthenticatedUser()
		.then(async (user) => {
			console.log('User is authenticated as', user.attributes.email)
			try {
				const imageFile = await Storage.list('profilePic/', { level: 'protected', pageSize: 1})
				//console.log(imageFile)
				const signedURL = await Storage.get(imageFile.results[0].key, { level: 'protected' })
				//console.log(signedURL)
				user.attributes.picture = signedURL
			} catch (err) {
				console.log('It is likely that the user has not yet uploaded a profile pic.', err)
			}
			$localUser = user
		})
		.catch((err) => {
			console.log(err)
			$localUser = null
			goto('/auth/login')
		})
	})
	
	async function logInOut() {
		if ($localUser) {
			try {
				await Auth.signOut()
				//if (DataStore.state === 'Running') await DataStore.clear()
				await DataStore.clear()
				$localUser = null
				goto('/')
			} catch (error) {
				console.log('error signing out: ', error)
			}
		} else {
			goto('/auth/login')
		}
	}
</script>

<header class="navbar bg-base-100">
	<div class="flex-1">
		<a href="/" class="btn btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
			</svg>
		</a>
		<a href="/avatars" class="btn btn-ghost normal-case text-xl">Avatars</a>
		<a href="/movies" class="btn btn-ghost normal-case text-xl">Movies</a>
		<a href="/dashboard" class="btn btn-ghost normal-case text-xl">Dashboard</a>
		<a href="/aggregator" class="btn btn-ghost normal-case text-xl">News Aggregator</a>

		{#if $localUser}
			<a href="/skills" class="btn btn-ghost normal-case text-xl">Skills</a>
		{/if}
	</div>

	<div class="dropdown dropdown-end">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<!-- svelte-ignore a11y-label-has-associated-control -->

		<div class="avatar" class:online={$localUser}>
			<div class="bg-neutral-focus text-neutral-content rounded-xl w-24">
				{#if $localUser?.attributes?.picture}
				<img src={$localUser?.attributes?.picture} alt='Profile Pic of User' tabIndex="0"/>
				{:else}
				<label tabindex="0" class="block w-full h-full text-center">{$localUser?.attributes?.name ?? 'Login'}</label>
				{/if}
			</div>
		</div>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<ul
			tabindex="0"
			class="mt-3 p-2 dropdown-content bg-base-100 menu menu-compact shadow rounded-box w-36">
			{#if $localUser}
				<li>Welcome {$localUser?.attributes?.name}!</li>
			{/if}
			<li><a on:click={() => open = !open}>ProfilePic</a></li>
			<li>
				<select bind:value={selectedTheme} class="select w-full max-x-xs">
					<option disabled selected>Theme</option>
					{#each themeOptions as theme}
						<option value={theme}>
							{theme}
						</option>
					{/each}
				</select>
			</li>
			<li><a on:click={logInOut}>{$localUser ? 'Logout' : 'Login'}</a></li>
		</ul>
	</div>
</header>

<ProfilePicModal isModalOpen={open} imagePath='profilePic/' folderLevel='protected' multipleItems='false'/>
