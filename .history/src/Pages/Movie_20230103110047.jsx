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
                    </div>
                </>           
            : null}
        </div>
    )
}

export default Movie;