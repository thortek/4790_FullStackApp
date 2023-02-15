<script>
    import { onMount } from 'svelte'

    export let data
    let skills = []

    onMount(async () => {
        if (!data) return
        const params = new URLSearchParams()
        params.append('limit', 100)
        params.append('q', 'javascript')
        const response = await fetch(`https://emsiservices.com/skills/versions/latest/skills?${params}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${data.access_token}`,
            }
        })
        let skillsObject = await response.json()
        console.log(skillsObject)
        skills = skillsObject.data
    })
</script>

<table class="table w-full overflow-y-auto">
    <thead>
        <tr>
            <th class="text-left">Skill</th>
            <th class="text-left">Id</th>    
        </thead>
    <tbody>
        {#each skills as skill}
            <tr>
                <td>{skill.name}</td>
                <td>{skill.id}</td>
            </tr>
        {/each}
        </tbody>
    </table>