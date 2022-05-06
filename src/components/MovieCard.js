export default function MovieCard({movie, setModalId}){
    const poster = (movie.Poster !== "N/A") ? movie.Poster : "https://i.imgur.com/sF5fZtJ.jpg";
    
    return (
        <div className="movie-card" onClick={() => setModalId(movie.imdbID)}>
            <img src={poster} className="movie-card-poster" />
            <div className="movie-card-title">{movie.Title}</div>
            <div className="movie-card-tag">{movie.Type}</div>
        </div>
    );
}