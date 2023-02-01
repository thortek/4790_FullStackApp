import { a as NASA_APIKEY } from "../../../chunks/private.js";
async function load() {
  try {
    const nasa_response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_APIKEY}&count=6`);
    const pic_data = await nasa_response.json();
    return { nasa_pics: pic_data };
  } catch (err) {
    console.error(err);
  }
}
export {
  load
};
