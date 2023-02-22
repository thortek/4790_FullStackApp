<script>
	import { onMount } from 'svelte'
	import { DataStore } from 'aws-amplify'
	import { Skill } from '../../../models'

	export let data
	let skills = []
	let selectedSkills = []

	$: console.log(selectedSkills)

	onMount(async () => {
		if (!data) return
		const params = new URLSearchParams()
		params.append('limit', 100)
		params.append('q', 'javascript')
		const response = await fetch(
			`https://emsiservices.com/skills/versions/latest/skills?${params}`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${data.access_token}`
				}
			}
		)
		let skillsObject = await response.json()
		//console.log(skillsObject)
		skills = skillsObject.data
	})

	const addSkillsToDataStore = async () => {
		for (let skill of selectedSkills) {
			const foundSkill = skills.find((item) => item.id === skill)
			//console.log(foundSkill)
			await DataStore.save(
				new Skill({
					name: foundSkill.name,
					sourcedId: foundSkill.id
				})
			)
		}
	}
</script>

<table class="table w-full overflow-y-auto">
	<thead>
		<tr>
			<th>
				<div class="flex items-center">
					<p>Select</p>
					<button class="btn btn-primary mx-2" on:click={addSkillsToDataStore}
						>Add Items to DataStore</button>
				</div>
			</th>
			<th class="text-left">Skill</th>
			<th class="text-left">Id</th>
		</tr>
	</thead>
	<tbody>
		{#each skills as skill}
			<tr>
				<td><input type="checkbox" bind:group={selectedSkills} value={skill.id} /></td>
				<td>{skill.name}</td>
				<td>{skill.id}</td>
			</tr>
		{/each}
	</tbody>
</table>
