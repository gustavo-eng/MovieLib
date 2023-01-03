import React from "react";

import { useState } from "react";
//Rotas
import { Link, useNavigate } from "react-router-dom";

//css
import './NavBar.css'  


//Icons 
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

const Navbar = () => {

    const [search, setSearch] = useState()

    const navigate = useNavigate();

    const submissao = (e) => {
        console.log(e)
    }

    return (
       <nav id="navbar">
            <h2>
                <Link to={'/'}><BiCameraMovie /> MovieLib </Link>
            </h2>
            <form onSubmit={submissao}>
                <input type="text" placeholder="Busque um filme"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    
                />
                <button type="submit"> <BiSearchAlt2 /></button>
            </form>
       </nav>
    )    
} 

export default Navbar;


