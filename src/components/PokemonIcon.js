import React from "react";
import {Link} from "react-router-dom";

export default function PokemonIcon(props) {
    var {pokemon, index} = props;
    
    return (
        <Link to= {`/pokemon/${index + 1}`}>
            <li className= "column">
                <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />

                <div className= "description column"> 
                    <h1> {pokemon.name} </h1> 
                    <span> #{index} </span>
                </div>
            </li>
        </Link>
    );
}