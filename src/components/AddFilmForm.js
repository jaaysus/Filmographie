import React, { useState } from 'react';
  
const AddFilmForm = ({ onAddFilm }) => {
  const [formState, setFormState] = useState({
    title: '',
    director: '',
    releaseYear: '',
    genre: 'Drama',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!formState.title || !formState.director || !formState.releaseYear || !formState.rating) {
      alert('All fields are required!');
      return;
    }

    if (formState.rating < 0 || formState.rating > 10) {
      alert('Rating must be between 0 and 10.');
      return;
    }

    onAddFilm(formState);
    setFormState({ title: '', director: '', releaseYear: '', genre: 'Drama', rating: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Titre"
        value={formState.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="director"
        placeholder="Director"
        value={formState.director}
        onChange={handleChange}
      />
      <input
        type="number"
        name="releaseYear"
        placeholder="Release Year"
        value={formState.releaseYear}
        onChange={handleChange}
      />
      <select name="genre" value={formState.genre} onChange={handleChange}>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Fantasy">Fantasy</option>
      </select>
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={formState.rating}
        onChange={handleChange}
      />
      <button type="submit">Add Film</button>
      <button type="reset" onClick={() => setFormState({ title: '', director: '', releaseYear: '', genre: 'Drama', rating: '' })}>
        Reset
      </button>
    </form>
  );
};

export default AddFilmForm;