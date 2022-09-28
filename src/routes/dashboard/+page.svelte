<script>
    export let data
    export const prerender = true;
    $: console.log(Object.values(data))
    let pics = Object.values(data)
</script>

<div class="min-h-screen flex flex-wrap">
   <progress class="progress w-56" value="0" max="100"></progress>
    <h1 class="text-5xl font-bold">Example Dashboard</h1>
    {#each pics as pic}
    <img class="max-w-sm" src={pic.url} alt="Nasa pic"/>
    {/each}
</div>