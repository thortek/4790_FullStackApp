import { O as OMDB_APIKEY } from "../../../../chunks/private.js";
let allMovies = [];
async function GET() {
  let movieData;
  let searchTerms = "Avengers";
  try {
    const omdb_response = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_APIKEY}&s=${searchTerms}`);
    movieData = await omdb_response.json();
    allMovies = await getAllMovies(movieData, searchTerms);
  } catch (err) {
    console.error(err);
  }
  return new Response(JSON.stringify({ movies: allMovies }), {
    headers: {
      "content-type": "application/json; charset=utf-8"
    }
  });
}
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
  GET
};
