const API_KEY = "96cdc4383d7fc1fab6b2703e8075e855";
const BASE_URL = "https://api.themoviedb.org/3";



export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();

    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();

    return data.results;
};