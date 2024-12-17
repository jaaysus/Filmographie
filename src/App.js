// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FilmsPage from './pages/FilmsPage';
import FavoritesPage from './pages/FavoritesPage';
import CreateFilmPage from './pages/CreateFilmPage';
import UpdateFilmPage from './pages/UpdateFilmPage';
import Header from './components/Header';

import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    { title: "Inception", director: "Christopher Nolan", releaseYear: 2010, genre: "Science Fiction", rating: 8.8, favorite: false },
    { title: "The Godfather", director: "Francis Ford Coppola", releaseYear: 1972, genre: "Crime", rating: 9.2, favorite: false },
    { title: "The Dark Knight", director: "Christopher Nolan", releaseYear: 2008, genre: "Action", rating: 9.0, favorite: false },
    { title: "Pulp Fiction", director: "Quentin Tarantino", releaseYear: 1994, genre: "Crime", rating: 8.9, favorite: false },
    { title: "Schindler's List", director: "Steven Spielberg", releaseYear: 1993, genre: "Historical Drama", rating: 9.0, favorite: false },
    { title: "The Shawshank Redemption", director: "Frank Darabont", releaseYear: 1994, genre: "Drama", rating: 9.3, favorite: false },
    { title: "Forrest Gump", director: "Robert Zemeckis", releaseYear: 1994, genre: "Comedy-Drama", rating: 8.8, favorite: false },
    { title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", releaseYear: 1999, genre: "Science Fiction", rating: 8.7, favorite: false },
    { title: "Fight Club", director: "David Fincher", releaseYear: 1999, genre: "Drama", rating: 8.8, favorite: false },
    { title: "The Lord of the Rings: The Return of the King", director: "Peter Jackson", releaseYear: 2003, genre: "Fantasy", rating: 9.0, favorite: false }
  ]);

  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const handleAddFilm = (newFilm) => {
    setMovies([...movies, newFilm]);
  };

  const handleUpdateFilm = (id, updatedFilm) => {
    const updatedMovies = movies.map((m, index) => (index === parseInt(id) ? updatedFilm : m));
    setMovies(updatedMovies);
  };

  const handleFavoriteToggle = (movie) => {
    if (favoriteMovies.includes(movie)) {
      setFavoriteMovies(favoriteMovies.filter((fav) => fav !== movie));
    } else {
      setFavoriteMovies([...favoriteMovies, movie]);
    }
  };

  return (
    <Router>
      <Header />
      <div>
      <nav>
          <ul>
            <li><Link to="/films">Liste des Films</Link></li>
            <li><Link to="/favoris">Films Favoris</Link></li>
            <li><Link to="/createFilm">Ajouter un Film</Link></li>
          </ul>
        </nav>
      <Routes>
        
        <Route path="/films" element={<FilmsPage movies={movies} onFavoriteToggle={handleFavoriteToggle} />} />
        <Route path="/favoris" element={<FavoritesPage favoriteMovies={favoriteMovies} onFavoriteToggle={handleFavoriteToggle} />} />
        <Route path="/createFilm" element={<CreateFilmPage onAddFilm={handleAddFilm} />} />
        <Route path="/updateFilm/:filmId" element={<UpdateFilmPage movies={movies} onUpdateFilm={handleUpdateFilm} />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
