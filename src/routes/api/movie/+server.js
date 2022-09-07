import { OMDB_APIKEY } from '$env/static/private'

export async function GET() {
    let movieData
    try {
        const omdb_response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_APIKEY}&s=Avengers`)
        movieData = await omdb_response.json()
    } catch (err) {
        console.error(err)
    }

    return new Response(JSON.stringify({ movies: movieData }), {
        headers: {
            'content-type': 'application/json; charset=utf-8'
        }
    })
}