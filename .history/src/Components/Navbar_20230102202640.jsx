import React from "react";

import { useState } from "react";
//Rotas
import { Link } from "react-router-dom";

//css
import './NavBar.css'  
// import '../Components/N'

//Icons 
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'

const Navbar = () => {

    const [search, setSearch] = useState()

    return (
       <nav id="navbar">
            <h2>
                <Link to={'/'}><BiCameraMovie /> MovieLib </Link>
            </h2>
            <form>
                <input type="text" placeholder="Busque um filme"/>
                <button type="submit"> <BiSearchAlt2 /></button>
            </form>
       </nav>
    )    
} 

export default Navbar;