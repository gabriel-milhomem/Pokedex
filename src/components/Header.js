import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className= "center top-bar"> 
            <Link to= "/">
                <button> 
                    <img src= "./images/logo-pokedex.png" alt= "Logo do Pokédex"/>
                </button>
            </Link>
        </header>
    );
}