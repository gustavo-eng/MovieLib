import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY; 


const Home = () => {
    const [topFilmes, setTopFilmes] = useState([])


    return (

        <div className="Home">   Home 

        </div>
    )
}

export default Home;

