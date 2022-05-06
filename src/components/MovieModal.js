import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ModalContent from "./ModalContent";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const modalStyles = {
    overlay: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.50)'
    },
    content: {
        position: "relative",
        width: 800,
        height: 600,
        inset: 0,
        padding: 0,
        backgroundColor: '#222'
    },
};

export default function MovieModal({modalID, setModalId}){
    const [movie, setMovie] = useState(Object);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(!modalID) return;
        setIsLoading(true);
        async function handleFetch(){
            const url = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${modalID}`;
            const response = await fetch(url);
            const data = await response.json();
            setMovie(data);
            setIsLoading(false);
        }
        handleFetch();
    }, [modalID]);

    useEffect(() => {
        ReactModal.setAppElement("body");
    }, []);
    



    return (
        <ReactModal isOpen={Boolean(modalID)} style={modalStyles}>
            <div>
                <div className="Modal-CloseButton" onClick={() => setModalId(false)}>
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                </div>
            </div>
            <ModalContent isLoading={isLoading} movie={movie}/>
        </ReactModal>
    );
}