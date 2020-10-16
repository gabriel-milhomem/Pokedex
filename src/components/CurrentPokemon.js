import React from "react";
import {Link} from "react-router-dom";

export default function CurrentPokemon(props) {
    const {name, id} = props.pokemonInfo;

    return (
        <header className= "current-pokemon line">
            {(id === 1)
                ? <div> ALou </div> : 
                <button className= "next-before">
                    <Link to= {`/pokemon/${parseInt(id) - 1}`}> {'<'} </Link>
                </button>
            }
            
            <div className= "pokemon-icon column">
                <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />

                <div className= "description column"> 
                    <h1> {name} </h1> 
                    <h2> #{id} </h2>
                </div>
            </div>    
            
            {(id === 893)
                ? <div> ALOU </div> : 
                <button className = "next-before">  
                    <Link to= {`/pokemon/${parseInt(id) + 1}`}> {'>'} </Link>
                </button>
            }
            
        </header>
    );
}