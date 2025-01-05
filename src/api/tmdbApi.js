import axios from "axios";

const API_KEY = "";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query = "") => {
  const endpoint = query
    ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    : `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
  const { data } = await axios.get(endpoint);
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return data;
};
