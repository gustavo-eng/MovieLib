import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MovieCard from "../Components/MovieCard";


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY; 


const Home = () => {
    const [topFilmes, setTopFilmes] = useState([])

    const getTopFilmes = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        console.warn(data.results)
        setTopFilmes(data.results)

    }

    useEffect(() => {   
        const topRateUrl = `${moviesURL}top_rated?${apiKey}`
        getTopFilmes(topRateUrl)
        console.log(topRateUrl)
    }, [])


    return (
        <div className="container">
            <h2 className="title"> Melhores Filmes: </h2>
            <div className="movies-container">
                {topFilmes ? topFilmes.map((filme) => <MovieCard movie={filme}/>) : null}
            </div>    
        </div>
    )
}

export default Home;