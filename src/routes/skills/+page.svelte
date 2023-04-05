<script>
	import { onMount } from 'svelte'
	import { Auth, DataStore, Predicates } from 'aws-amplify'
	import { Skill } from '../../models'
	import { goto } from '$app/navigation'

	let skills = []
	let selectedSkills = []
	let allSynced = false
	$: allSelected = selectedSkills.length === skills.length

	onMount(async () => {
		try {
			const user = await Auth.currentAuthenticatedUser()
			console.log('User is authenticated...', user.attributes.email)
			DataStore.observeQuery(Skill).subscribe((snapshot) => {
			const { items, isSynced } = snapshot
			skills = items
			allSynced = isSynced
			console.log(`[Snapshot] item count: ${items.length}, isSynced: ${isSynced}`)
		})
		} catch (err) {
			console.log('Checking for user... ', err)
			goto('/auth/login')
		}
	})

	const toggleAll = () => {
		if (allSelected) {
			selectedSkills = [] // uncheck all
		} else {
			selectedSkills = skills.map((skill) => skill)
		}
	}

	const deleteSelectedSkills = async () => {
		for (let skill of selectedSkills) {
			const skillToDelete = await DataStore.query(Skill, (c) => c.sourcedId.eq(skill.id))
			console.log(skillToDelete)
			if (skillToDelete.length === 0) {
				console.log('skill not found in DataStore')
				return
			} else {
				console.log('skill found in DataStore')
				await DataStore.delete(skillToDelete[0]) // delete the first item in the array
			}
		}
	}
	const deleteAllSkills = async () => {
		try {
			await DataStore.delete(Skill, Predicates.ALL)
		} catch (error) {
			console.log(error)
		}
	}
</script>

<div>
	<button
		class="btn btn-primary m-2"
		class:btn-disabled={selectedSkills.length === 0}
		on:click={deleteSelectedSkills}>Delete Selected Items</button>
	<button class="btn btn-primary m-2" on:click={deleteAllSkills}>Delete all Items</button>
</div>
<table class="table w-full overflow-y-auto">
	<thead>
		<tr>
			<th>
				<label>
					<input type="checkbox" checked={allSelected} on:change={toggleAll} /> Select All ({selectedSkills.length}
					/ {skills.length})</label>
			</th>
			<th class="text-left">Skill</th>
			<th class="text-left">Id</th>
		</tr>
	</thead>
	<tbody>
		{#if !allSynced}
			<h3>Loading...</h3>
		{/if}
		{#each skills as skill}
			<tr>
				<td><input type="checkbox" bind:group={selectedSkills} value={skill} /></td>
				<td>{skill.name}</td>
				<td>{skill.id}</td>
			</tr>
		{:else}
			<h3>0 skills found</h3>
		{/each}
	</tbody>
</table>
