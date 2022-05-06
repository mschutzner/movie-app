import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import MovieDetails from "./MovieDetails";

export default function ModalContent({isLoading, movie}){
    if(isLoading) {
        return (
            <div className="loading-spinner-wrapper">
                <FontAwesomeIcon icon={faSpinner} size="3x" className="fa-pulse"/>
            </div>
        );
    } else {
        return (
            <MovieDetails movie={movie}/>
        );
    }
}