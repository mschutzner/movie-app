import MovieCard from "./MovieCard";

export default function MovieList({movieList}){
    return (
        <div className="movie-list">
            {movieList.map((movie) => (
                <MovieCard movie={movie} />
             ))}
        </div>
    );
}