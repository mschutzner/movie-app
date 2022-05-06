import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export default function SearchForm({setIsLoading, setMovieList, setError}){
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!searchTerm) return;
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
    };
  
     return (
            <form onSubmit={handleSubmit}>
                <div className="search-wrapper">
                    <input
                        className="search-bar"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit" className="search-button">Search</button>
                </div>
            </form>
     );
}