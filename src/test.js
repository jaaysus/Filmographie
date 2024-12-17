import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import FavoritesList from "./components/FavoritesList";
import AddFilmForm from "./components/AddFilmForm";
import UpdateFilmForm from "./components/UpdateFilmForm";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", director: "Christopher Nolan", releaseYear: 2010, genre: "Science Fiction", rating: 8.8, favorite: false },
    { id: 2, title: "The Godfather", director: "Francis Ford Coppola", releaseYear: 1972, genre: "Crime", rating: 9.2, favorite: false },
    { id: 3, title: "The Dark Knight", director: "Christopher Nolan", releaseYear: 2008, genre: "Action", rating: 9.0, favorite: false },
  ]);

  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  };

  const addMovie = (newMovie) => {
    setMovies((prev) => [...prev, { ...newMovie, id: movies.length + 1 }]);
  };

  const updateMovie = (updatedMovie) => {
    setMovies((prev) =>
      prev.map((movie) => (movie.id === updatedMovie.id ? updatedMovie : movie))
    );
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<MovieList movies={movies} onAddFavorite={addToFavorites} />}
          />
          <Route
            path="/favoris"
            element={
              <FavoritesList
                favorites={favorites}
                onRemoveFavorite={removeFromFavorites}
              />
            }
          />
          <Route path="/createFilm" element={<AddFilmForm onAddMovie={addMovie} />} />
          <Route
            path="/updateFilm/:filmId"
            element={<UpdateFilmForm movies={movies} onUpdateMovie={updateMovie} />}
          />
          <Route
            path="*"
            element={<h2 style={{ textAlign: "center" }}>404: Page Not Found</h2>}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
