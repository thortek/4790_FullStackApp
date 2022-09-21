<script>
    export let data
    $: console.log(data)
</script>

<div class="min-h-screen">
   <progress class="progress w-56" value="0" max="100"></progress>
    <h1 class="text-5xl font-bold">Example Dashboard</h1>
    {#each data as pic}
    <img src={pic.url} alt="Nasa pic"/>
    {/each}
</div>