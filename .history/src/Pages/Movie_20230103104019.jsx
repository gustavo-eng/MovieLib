import React from "react";

import { useState, useEffect } from "react";

import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'
import { useParams } from "react-router-dom";

import './Movie.css'

//Credentials 
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY; 



const Movie = () => {
    const {id} = useParams()
    
    return (
        <div>Movie </div>
    )
}

export default Movie;