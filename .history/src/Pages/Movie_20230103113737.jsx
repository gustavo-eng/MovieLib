import React from "react";

import { useState, useEffect } from "react";

import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillInfoSquareFill
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
        setMovie(data);
    }

    const converterTimer = (tempoMinutos) => {
        const horas = Math.floor(tempoMinutos / 60);
        const minutos = tempoMinutos % 60 ; 

        return {horas, minutos}
    }

    const formatCurrency = (number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        })
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
                        <p>{`${converterTimer(movie.runtime).horas} Horas e ${converterTimer(movie.runtime).minutos} minutos`}</p>
                    </div>
                    <div className="info description">
                        <h3>
                            <BsFillInfoSquareFill/> Descrição   
                        </h3>
                        <p>{movie.overview}</p>
                    </div>
                </>           
            : null}
        </div>
    )
}

export default Movie;