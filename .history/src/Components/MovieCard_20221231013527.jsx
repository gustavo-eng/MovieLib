import React from "react";

//Icons
import {FaStar} from 'react-icons/fa'
//Api
const imageUrl = import.meta.env.VITE_IMG;

// Rotas 
import { Link } from "react-router-dom";

const MovieCard = ({movie, showLink = true}) => {
    return (
        <div className="movie-card">
            <img src={imageUrl + movie.poster_path} alt={movie.title}/>
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {showLink ? <Link to={`/movie/${movie.id}`}>Detalhes</Link> : null}
        </div>
    )
}

export default MovieCard