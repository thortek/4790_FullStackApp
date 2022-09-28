import { NASA_APIKEY } from '$env/static/private'
//https://api.nasa.gov/planetary/apod
export async function load() {
    try {
        const nasa_response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_APIKEY}&count=10`)
        const nasaData = await nasa_response.json()
        console.log(nasaData)
        return nasaData
    } catch (err) {
        console.error(err)
    }
}