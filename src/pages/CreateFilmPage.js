// src/pages/CreateFilmPage.js
import React from 'react';
import AddFilmForm from '../components/AddFilmForm';

const CreateFilmPage = ({ onAddFilm }) => {
  return (
    <div className="container mt-4">
      <h2>Ajouter un Nouveau Film</h2>
      <AddFilmForm onAddFilm={onAddFilm} />
    </div>
  );
};

export default CreateFilmPage;
