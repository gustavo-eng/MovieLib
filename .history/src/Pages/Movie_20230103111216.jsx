import React from "react";

import { useState, useEffect } from "react";

import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'
import { Await, useParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";

import './Movie.css'

//Credentials 
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY; 


const Movie = () => {

    const {id} = useParams()
    
    const [movie, setMovie] = useState(null)

    const getMovies = async (url) => {
        const res =  await fetch(url)
        const data = await res.json()
        console.log(data)
        setMovie(data);
        converterTimer(data)
    }

    const converterTimer = (data) => {
        console.log(data.runtime)
        const horas = Math.floor(data.runtime / 60);
        const minutos = data.runtime % 60 ; 
    }


    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`

        getMovies(movieUrl)
    }, [])

    return (
        <div>
            {movie ? 
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <p className="tagline"> {movie.tagline}</p>
                    <div className="info">
                        <h3>
                            <BsWallet2/> Orçamento 
                        </h3>
                        <p>{movie.budget}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsGraphUp/> Receita  
                        </h3>
                        <p>{movie.revenue}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsHourglassSplit/> Duração  
                        </h3>
                        <p>{movie.runtime}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsWallet2/> Orçamento 
                        </h3>
                    </div>
                </>           
            : null}
        </div>
    )
}

export default Movie;