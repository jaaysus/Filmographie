// src/pages/FavoritesPage.js
import React from 'react';
import MovieList from '../components/MovieList';

const FavoritesPage = ({ favoriteMovies, onFavoriteToggle }) => {
  return (
    <div className="container mt-4">
      <h2>Films Favoris</h2>
      {favoriteMovies.length > 0 ? (
        <MovieList movies={favoriteMovies} onFavoriteToggle={onFavoriteToggle} />
      ) : (
        <p>Aucun film favori pour le moment.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
