// src/pages/FilmsPage.js
import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import MovieDetails from '../components/MovieDetails';
import SearchBar from '../components/SearchBar';
import SortButtons from '../components/SortButtons';
import Pagination from '../components/Pagination';

const FilmsPage = ({ movies, onFavoriteToggle }) => {
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

  return (
    <div className="container mt-4">
      <h2>Liste des Films</h2>
      <SearchBar onSearch={setSearchTerm} />
      <SortButtons onSort={(criterion) => console.log(criterion)} />
      <MovieList
        movies={displayedMovies}
        onMovieClick={setSelectedMovie}
        onFavoriteToggle={onFavoriteToggle}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      {selectedMovie && <MovieDetails movie={selectedMovie} />}
    </div>
  );
};

export default FilmsPage;
