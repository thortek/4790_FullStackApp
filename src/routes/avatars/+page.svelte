<script>
    export let data
    $: console.log(data)
</script>

<main class="flex flex-wrap justify-center">
{#each data.allNames as name }

<div class="card w-96 bg-base-100 shadow-xl m-4">
    <div class="card-body">
        <a class="card-title box" alt="Avatar name" href="#">{name.name}</a>
    </div>
</div>
    
{/each}
</main>

<style>
    /* main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    } */
    .box {
        padding: 0.25;
        margin: 1.5rem;
        color: red;
        box-shadow: 4px 5px 11px 2px lightgray;
    }
    .box:hover {
        box-shadow: 4px 5px 11px 10px lightgray;
    }
</style>

