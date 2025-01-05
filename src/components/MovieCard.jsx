import React from "react";

const MovieCard = ({ movie }) => (
  <div className="bg-gray-800 text-white p-4 rounded-md">
    <img
      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      alt={movie.title}
      className="rounded-t-md"
    />
    <h2 className="text-lg font-bold mt-2">{movie.title}</h2>
    <p className="text-sm">{movie.release_date}</p>
  </div>
);

export default MovieCard;
