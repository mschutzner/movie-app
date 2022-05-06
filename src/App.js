import { useState, useEffect } from "react";
import MovieDetails from './components/MovieDetails'
import './App.css';
import MovieList from "./components/MovieList";
import SearchForm from "./components/SearchForm";
import MovieModal from "./components/MovieModal";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalID, setModalId] = useState(false);

  return (
    <div className="App">
      <SearchForm
        setMovieList={setMovieList}
        setIsLoading={setIsLoading}
        setError={setError}
      />
      <div className="error-message">{error}</div>
      <MovieList
        movieList={movieList}
        isLoading={isLoading}
        setModalId={setModalId}
      />
      <MovieModal modalID={modalID} setModalId={setModalId} />
    </div>
  );
}

export default App;
