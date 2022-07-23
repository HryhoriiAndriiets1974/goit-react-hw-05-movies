const API_KEY = 'ccff67b17da8d42d9549aa2bea27fbb2';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchMovies(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found'));
};

export function getTrending() {
  return fetchMovies(
    `${BASE_URL}/search/movie/week?api_key=${API_KEY}`
  );
};

export function getMoviesSearch(query) {
  return fetchMovies(
    `${BASE_URL}/trending/movie?query=${query}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  )
}
