import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className= "center"> 
            <Link to= "/">
                <img src= "./images/logo-pokedex.png" alt= "Logo do Pokédex"/>
            </Link>
        </header>
    );
}