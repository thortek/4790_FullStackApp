import { NEWS_APIKEY } from '$env/static/private'
import { error } from '@sveltejs/kit'

export async function load() {
    try {
        const news_response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_APIKEY}`)
        const news_data = await news_response.json()
        return { topStories: news_data.articles }
    } catch (err) {
        throw error(404, 'Not found')
    }
}
