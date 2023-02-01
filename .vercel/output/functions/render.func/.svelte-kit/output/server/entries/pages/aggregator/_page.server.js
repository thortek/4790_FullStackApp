import { N as NEWS_APIKEY } from "../../../chunks/private.js";
import { e as error } from "../../../chunks/index.js";
async function load() {
  try {
    const news_response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_APIKEY}`);
    const news_data = await news_response.json();
    return { topStories: news_data.articles };
  } catch (err) {
    throw error(404, "Not found");
  }
}
export {
  load
};
