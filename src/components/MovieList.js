import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieClick, onFavoriteToggle }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id || movie.title + movie.releaseYear} // Use a unique ID if available, else combine title and year
          movie={movie}
          onClick={onMovieClick}
          onFavoriteToggle={onFavoriteToggle}
        />
      ))}
    </div>
  );
};

export default MovieList;
