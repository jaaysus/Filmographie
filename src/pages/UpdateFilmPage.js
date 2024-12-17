// src/pages/UpdateFilmPage.js
import React, { useState, useEffect } from 'react';

const UpdateFilmPage = ({ movies, onUpdateFilm, filmId }) => {
  const [filmData, setFilmData] = useState({
    title: '',
    director: '',
    releaseYear: '',
    genre: '',
    rating: '',
  });

  useEffect(() => {
    const movie = movies.find((m, index) => index === parseInt(filmId));
    if (movie) {
      setFilmData(movie);
    }
  }, [movies, filmId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilmData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateFilm(filmId, filmData);
  };

  return (
    <div className="container mt-4">
      <h2>Modifier le Film</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Titre</label>
          <input type="text" name="title" value={filmData.title} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Réalisateur</label>
          <input type="text" name="director" value={filmData.director} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Année de sortie</label>
          <input type="number" name="releaseYear" value={filmData.releaseYear} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Genre</label>
          <input type="text" name="genre" value={filmData.genre} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Note</label>
          <input type="number" name="rating" value={filmData.rating} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Modifier</button>
      </form>
    </div>
  );
};

export default UpdateFilmPage;
