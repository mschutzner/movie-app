import { useState, useEffect } from "react";
import MovieDetails from './components/MovieDetails'
import './App.css';
import MovieList from "./components/MovieList";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

function App() {
  const [searchTerm, setSearchTerm] = useState("batman");
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`;
    fetch(url)
      .then(async (response) => {
        const data = await response.json();
        setMovieList(data.Search)
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setMovieList([])
        setIsLoading(false);
      });
  }, [searchTerm]);

  return (
    <div className="App">
      <MovieList movieList={movieList}/>
    </div>
  );
}

export default App;
