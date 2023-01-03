import React from "react";

import { useState, useEffect } from "react";

// Parametros das rotas 
import { Await, useSearchParams } from "react-router-dom";

//Componente 
import MovieCard from "../Components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import '../Components/MovieCard.css'

const Search = () => {

    const [searchParams] = useSearchParams()    
    const [filmes, setFilmes] = useState([])
    const query = searchParams.get("q")


    // Functions 
    const getSearchMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        
        setFilmes(data.results); 
    }

    useEffect(() => {

        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`
        console.log(data)
        getSearchMovies(searchWithQueryURL)
    }, [searchWithQueryURL])

    return (
        <div className="container">
            <h2 className="title"> 
                Resultados para :  <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
                {filmes ? filmes.map((filme) => <MovieCard movie={filme} key={filme.id}/>) : null}
            </div>    
        </div>
    )
}

export default Search;