import React from 'react';

const MovieCard = ({ movie, onClick, onFavoriteToggle }) => {
  return (
    <div className="movie-card" onClick={() => onClick(movie)}>
      <h3>{movie.title}</h3>
      <button
        className="favorite-button"
        onClick={(e) => {
          e.stopPropagation();
          onFavoriteToggle(movie.title);
        }}
      >
        {movie.favorite ? '♥ Unfavorite' : '♡ Favorite'}
      </button>
    </div>
  );
};

export default MovieCard;
