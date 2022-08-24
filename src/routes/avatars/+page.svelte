<script>
    export let data
    $: console.log(data)
</script>

<main>
{#each data.allNames as name }

<p>{name.name}</p>
    
{/each}
</main>

<style>
    main {
        height: 50vh;
        background-color: bisque;
    }
</style>

