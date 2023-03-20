<script>
	import { enhance } from '$app/forms'
	import { theme } from '$lib/stores/theme'
	import { DataStore, Auth } from 'aws-amplify'
	import { goto } from '$app/navigation'

	let themeOptions = ['light', 'dark', 'cupcake', 'aqua', 'dracula', 'winter']

	let selectedTheme
	//let localUser = JSON.parse($user)
	//console.log(localUser)

	$: if (selectedTheme && selectedTheme !== 'Theme') $theme = selectedTheme

	let localUser
	console.log('About to try and authenticate user...')
	Auth.currentAuthenticatedUser()
		.then((user) => {
			console.log(`User ${user.attributes.name} authenticated.`)
			localUser = user})
		.catch((err) => console.log(err))

	async function logout() {
		try {
			await DataStore.clear()
			await Auth.signOut()
			console.log(`User ${localUser.attributes.name} signed out.`)
			goto('/')
		} catch (error) {
			console.log('error signing out: ', error)
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
		{#if localUser}
			<h4>Welcome {localUser.attributes.name}! Logged in as: {localUser.attributes.email}</h4>
		{/if}
	</div>
	<div>
		<form method="POST" action="/movies?/search" use:enhance>
			<div class="form-control">
				<input
					class="input input-bordered input-lg w-80"
					type="search"
					name="searchTerms"
					placeholder="Movie Search" />
			</div>
		</form>
	</div>
	<div class="dropdown dropdown-end">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<label tabindex="0" class="btn btn-ghost btn-circle avatar m-1" for="userIcon">
			<div class="w-16 rounded-full">
				<img id="userIcon" src="https://placeimg.com/90/90/people" alt="User icon" />
			</div>
		</label>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<ul
			tabindex="0"
			class="mt-3 p-2 dropdown-content bg-base-100 menu menu-compact shadow rounded-box w-36">
			<li><a href="/user/profile">Profile</a></li>
			<li><a href="/user/settings">Settings</a></li>
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
			<li>
				<a on:click={logout}>Logout</a>
			</li>
		</ul>
	</div>
</header>
