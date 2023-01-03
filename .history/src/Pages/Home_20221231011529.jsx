import React from "react";
import { useState } from "react";
import { useEffect } from "react";


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
        <div className="Home">    
            {
                topFilmes ? null : null
            }
        </div>
    )
}

export default Home;

