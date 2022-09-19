import { NEWS_APIKEY } from '$env/static/private'
import { error } from '@sveltejs/kit'

//https://api.thenewsapi.com/v1/news/headlines?locale=us&language=en&api_token=YOUR_API_TOKEN

export async function load() {
    try {
        const news_response = await fetch(`https://api.thenewsapi.com/v1/news/top?locale=us&language=en&api_token=${NEWS_APIKEY}`)
        const news_data = await news_response.json()
        return { newsData: news_data.data}
    } catch (err) {
        throw error(404, 'Not found')
    }
}