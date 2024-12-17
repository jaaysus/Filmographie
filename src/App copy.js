// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import SortButtons from './components/SortButtons';
import AddFilmForm from './components/AddFilmForm';
import Pagination from './components/Pagination';
import FavoriteMovies from './components/FavoriteMovies';
import Footer from './components/Footer';
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

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
  const displayedMovies = filteredMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page after search
  };

  const handleSort = (criterion) => {
    const sortedMovies = [...movies].sort((a, b) => b[criterion] - a[criterion]);
    setMovies(sortedMovies);
  };

  const handleAddFilm = (newFilm) => {
    setMovies([...movies, { ...newFilm, favorite: false }]);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleFavorite = (title) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.title === title ? { ...movie, favorite: !movie.favorite } : movie
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <SortButtons onSort={handleSort} />
      <MovieList
        movies={displayedMovies}
        onMovieClick={setSelectedMovie}
        onFavoriteToggle={toggleFavorite}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <MovieDetails movie={selectedMovie} />
      <FavoriteMovies
        movies={movies.filter((movie) => movie.favorite)}
        onRemoveFavorite={toggleFavorite}
      />
      <AddFilmForm onAddFilm={handleAddFilm} />
      <Footer />
    </div>
  );
};

export default App;
