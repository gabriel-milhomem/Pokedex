import React from "react";
import { Link } from "react-router-dom";

export default function PokemonIcon(props) {
    const {name, id} = props;
    
    return (
        <li className= "pokemon-icon column">
            <Link to= {`/pokemon/${id}`}>
                <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />

                <div className= "description column"> 
                    <h1> {name} </h1> 
                    <h2> #{id} </h2>
                </div>
            </Link>
        </li>
    );
}