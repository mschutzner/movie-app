export default function MovieDetails({movie}){
    const { Poster, Title, Rated, Runtime, Genre, Plot, Actors, Rating } = movie;
    return (
        <div className="details-wrapper">
            <img src={Poster} className="details-poster" />
            <div className="details-right">
                <div className="details-top">
                    <div className="details-title">{Title}</div>
                    <div className="details-rating">{Rating}</div>
                </div>
                <div className="details-tags">
                    <div className="details-rated">{Rated}</div>
                    <div className="details-runtime">{Runtime}</div>
                    <div className="details-genre">{Genre}</div>
                </div>
                <div className="details-plot">
                    <div className="details-header">Plot</div>
                    {Plot}
                </div>
                <div className="details-actors">
                    <div className="details-header">Actors</div>
                    {Actors}
                </div>
            </div>
        </div>
    );
}