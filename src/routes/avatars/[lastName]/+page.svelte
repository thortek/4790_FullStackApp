<script>
    export let data
</script>

<main class="m-8">
    <h2>{data.firstName} {data.lastName}</h2>
    <img src="{data.avatar}" alt="An avatar"/>
    <ul>
        <li>Title: {data.title}</li>
        <li>Phone: {data.phone}</li>
        <li>Email: {data.email}</li>
    </ul>
</main>

<style>
    img {
        width: 15rem;
    }
</style>