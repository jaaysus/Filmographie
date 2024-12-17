import React from 'react';

const FavoriteMovies = ({ movies, onRemoveFavorite }) => {
  return (
    <div className="favorite-movies">
      <h2>Favorites</h2>
      {movies.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.title}>
              {movie.title}
              <button
                onClick={() => onRemoveFavorite(movie.title)}
                className="remove-favorite"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteMovies;
