<script>
	import { onMount } from 'svelte'
	import { DataStore } from 'aws-amplify'
	import { Skill } from '../../../models'

	export let data
	let skills = []
	let selectedSkills = []
	$: allSelected = selectedSkills.length === skills.length

	$: console.log(selectedSkills)

	const toggleAll = () => {
		if (allSelected) {
			selectedSkills = []
		} else {
			selectedSkills = skills.map((skill) => skill.id)
		}
	}

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

	/* 	const addSkillsToDataStore = async () => {
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
	} */

	const findOrCreateSkill = async () => {
		for (let skill of selectedSkills) {
			console.log(skill)
			const foundSkill = await DataStore.query(Skill, (c) => c.sourcedId("eq", skill.id))
			if (foundSkill.length > 0) {
				return foundSkill[0]
			} else {
				const newSkill = await DataStore.save(
					new Skill({
						name: skill.name,
						sourcedId: skill.id
					})
				)
				return newSkill
			}
		}
	}
</script>

<table class="table w-full overflow-y-auto">
	<thead>
		<tr>
			<th>
				<div class="flex items-center">
					<p>Select</p>
					<button class="btn btn-primary mx-2" on:click={findOrCreateSkill}
						>Add Items to DataStore</button>
				</div>
			</th>
			<th class="text-left">Skill</th>
			<th class="text-left">Id</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<label>
					<input type="checkbox" checked={allSelected} on:click={toggleAll} />
					Select All ({selectedSkills.length} / {skills.length})
				</label>
			</td>
			<td />
			<td />
		</tr>
		{#each skills as skill}
			<tr>
				<td><input type="checkbox" bind:group={selectedSkills} value={skill} /></td>
				<td>{skill.name}</td>
				<td>{skill.id}</td>
			</tr>
		{/each}
	</tbody>
</table>
