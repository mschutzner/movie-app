import MovieCard from "./MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function MovieList({movieList, isLoading, setModalId}){
    
    if(isLoading){
        return (
            <div className="loading-spinner-wrapper">
                <FontAwesomeIcon icon={faSpinner} size="3x" className="fa-pulse"/>
            </div>
        );
    } else {
        if(movieList) return (
            <div className="movie-list">
                {movieList.map((movie) => (
                    <MovieCard movie={movie} setModalId={setModalId}/>
                 ))}
            </div>
        );
    }
}