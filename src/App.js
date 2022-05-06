import logo from './logo.svg';
import MovieDetails from './components/MovieDetails'
import './App.css';
import { movieData } from './avengers'

function App() {
  return (
    <div className="App">
      <MovieDetails posterUrl={movieData.Poster} title={movieData.Title} rated={movieData.Rated} runtime={movieData.Runtime} genre={movieData.Genre} plot={movieData.Plot} actors={movieData.Actors} rating={movieData.imdbRating}/>
    </div>
  );
}

export default App;
