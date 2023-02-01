import { O as OMDB_APIKEY } from "../../../chunks/private.js";
const actions = {
  search: async ({ request }) => {
    const data = await request.formData();
    const searchTerms = data.get("searchTerms");
    try {
      const omdb_response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_APIKEY}&s=${searchTerms}`);
      const movieData = await omdb_response.json();
      const allMovies = await getAllMovies(movieData, searchTerms);
      return allMovies;
    } catch (err) {
      console.error(err);
    }
  },
  details: async ({ request }) => {
    const data = await request.formData();
    const movieID = data.get("movieID");
    try {
      const omdb_response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_APIKEY}&i=${movieID}`);
      const movieData = await omdb_response.json();
      return movieData;
    } catch (err) {
      console.log("Error trying to fetch movie details", err);
    }
  }
};
async function getAllMovies(pageOne, searchTerms) {
  let allTheMovies = [];
  const totalResults = parseInt(pageOne.totalResults);
  if (totalResults === 0)
    return;
  if (totalResults > 0 && totalResults < 11) {
    return pageOne.Search;
  }
  allTheMovies = [...pageOne.Search];
  let counter = Math.ceil(totalResults / 10);
  for (let i = 2; i <= counter; i++) {
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_APIKEY}&s=${searchTerms}&page=${i}`);
      const pageData = await response.json();
      allTheMovies = [...allTheMovies, ...pageData.Search];
    } catch (err) {
      console.error(err);
    }
  }
  return allTheMovies.filter((movie) => movie.Type === "movie" && movie.Poster !== "N/A");
}
export {
  actions
};
