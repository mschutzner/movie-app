export default function MovieCard({movie}){
    return (
        <div className="movie-card">
            <img src={movie.Poster} className="movie-card-poster" />
            <div className="movie-card-title">{movie.Title}</div>
            <div className="movie-card-tag">{movie.Type}</div>
        </div>
    );
}