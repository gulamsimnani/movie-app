import React, { useState, useEffect } from "react";
import { fetchMovies } from "../api/tmdbApi";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const loadMovies = async (query = "") => {
    const data = await fetchMovies(query);
    setMovies(data);
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={loadMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
