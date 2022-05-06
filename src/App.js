import { useState, useEffect } from "react";
import MovieDetails from './components/MovieDetails'
import './App.css';
import MovieList from "./components/MovieList";
import SearchForm from "./components/SearchForm";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <SearchForm
        setMovieList={setMovieList}
        setIsLoading={setIsLoading}
        setError={setError}
      />
      <MovieList
        movieList={movieList}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
