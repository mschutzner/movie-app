export default function MovieDetails(props){
    const { posterUrl, title, rated, runtime, genre, plot, actors, rating } = props;

    return (
        <div className="details-wrapper">
            <img src={posterUrl} className="details-poster" />
            <div className="details-right">
                <div className="details-top">
                    <div className="details-title">{title}</div>
                    <div className="details-rating">{rating}</div>
                </div>
                <div className="details-tags">
                    <div className="details-rated">{rated}</div>
                    <div className="details-runtime">{runtime}</div>
                    <div className="details-genre">{genre}</div>
                </div>
                <div className="details-plot">
                    <div className="details-header">Plot</div>
                    {plot}
                </div>
                <div className="details-actors">
                    <div className="details-header">Actors</div>
                    {actors}
                </div>
            </div>
        </div>
    );
}