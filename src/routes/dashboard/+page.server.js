import { NASA_APIKEY } from '$env/static/private'
//https://api.nasa.gov/planetary/apod?api_key=jA8i7yzZJ35sqXJv0FwTH6vGvcP0lJE1nyKjUWUJ
export async function load() {
    try {
        const nasa_response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_APIKEY}&count=3`)
        const nasaData = await nasa_response.json()
        console.log(nasaData)
        return nasaData
    } catch (err) {
        console.error(err)
    }
}