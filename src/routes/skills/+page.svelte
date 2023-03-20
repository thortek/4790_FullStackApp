<script>
    import { onMount } from "svelte"
    import { DataStore, Predicates } from "aws-amplify"
    import { Skill } from "../../models"

    let skills = []
    let selectedSkills = []
	$: allSelected = selectedSkills.length === skills.length

    const toggleAll = () => {
		if (allSelected) {
			selectedSkills = [] // uncheck all
		} else {
			selectedSkills = skills.map((skill) => skill)
		}
	}

    onMount(async () => {
        skills = await DataStore.query(Skill)
    })

    const deleteSelectedSkills = async () => {
		for (let skill of selectedSkills) {
			const skillToDelete = await DataStore.query(Skill, c => c.sourcedId.eq(skill.id))
			console.log(skillToDelete)
			await DataStore.delete(skillToDelete[0]) // delete the first item in the array
		}
	}

    const deleteAllSkills = async () => {
		await DataStore.delete(Skill, Predicates.ALL)
	}

</script>

<div>
	<button class="btn btn-primary m-2" class:btn-disabled="{selectedSkills.length === 0}" on:click={deleteSelectedSkills}>Delete Selected Items</button>
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
		{#each skills as skill}
			<tr>
				<td><input type="checkbox" bind:group={selectedSkills} value={skill} /></td>
				<td>{skill.name}</td>
				<td>{skill.id}</td>
			</tr>
		{/each}
	</tbody>
</table>