import { NASA_APIKEY } from '$env/static/private'
//https://api.nasa.gov/planetary/apod
export async function load() {
    try {
        const nasa_response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_APIKEY}&count=6`)
        return await nasa_response.json()
    } catch (err) {
        console.error(err)
    }
}