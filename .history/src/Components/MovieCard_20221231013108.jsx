import React from "react";

//Icons
import {FaStar} from 'react-icons/fa'
//Api
const imageUrl = import.meta.env.VITE_IMG;


const MovieCard = () => {
    return (
        <div className="movie-card">
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
        </div>
    )
}

export default MovieCard