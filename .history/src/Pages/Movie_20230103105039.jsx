import React from "react";

import { useState, useEffect } from "react";

import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'
import { Await, useParams } from "react-router-dom";

import './Movie.css'

//Credentials 
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY; 
//https://api.themoviedb.org/3/movie/ (moviesURL)

//123

//cd5970e7ebab476cf4a758cb7af3041b


const Movie = () => {

    const {id} = useParams()
    
    const [movie, setMovie] = useState(null)

    const getMovies = async (url) => {
        const res =  await fetch(url)
        const data = await res.json()

        setMovie(data.results[0]);
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`

        getMovies(movieUrl)
    }, [])

    return (
        <div>
            {movie ? <p>{movie.title}</p> : null}
        </div>
    )
}

export default Movie;