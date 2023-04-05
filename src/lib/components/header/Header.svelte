<script>
	import { enhance } from '$app/forms'
	import { theme } from '$lib/stores/theme'
	import { Auth, DataStore } from 'aws-amplify'
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
			console.log('User is authenticated...', user.attributes.email)
			localUser = user
		})
		.catch((err) => console.log('Checking for user... ', err))

	async function logInOut() {
		if (localUser) {
			try {
				await Auth.signOut()
				//if (DataStore.state === 'Running') await DataStore.clear()
				await DataStore.clear()
				localUser = null
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
		<a href="/skills" class="btn btn-ghost normal-case text-xl">Skills</a>
		<!-- 		<p>{#if localUser}
			{localUser.attributes.email}
		{/if}</p> -->
	</div>

	<div class="dropdown dropdown-end">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<!-- svelte-ignore a11y-label-has-associated-control -->

		<div class="avatar placeholder" class:online={localUser}>
			<div class="bg-neutral-focus text-neutral-content rounded-full w-16">
				<label tabindex="0" class="btn m-1">{localUser?.attributes?.name ?? '?'}</label>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<ul
			tabindex="0"
			class="mt-3 p-2 dropdown-content bg-base-100 menu menu-compact shadow rounded-box w-36">
			{#if localUser}
				<li>Welcome {localUser.attributes.name}!</li>
			{/if}
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
			<li><a on:click={logInOut}>{localUser ? 'Logout' : 'Login'}</a></li>
		</ul>
	</div>
</header>
