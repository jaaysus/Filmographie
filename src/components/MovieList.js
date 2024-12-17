import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieClick, onFavoriteToggle }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.title}
          movie={movie}
          onClick={onMovieClick}
          onFavoriteToggle={onFavoriteToggle}
        />
      ))}
    </div>
  );
};

export default MovieList;
