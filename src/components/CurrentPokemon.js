import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

export default function CurrentPokemon(props) {
    const {name, id} = props.pokemonInfo;

    return (
        <header className= "current-pokemon line">
            {(id === 1) ?
                <div> </div> :
                 
                <button>
                    <Link to= {`/pokemon/${parseInt(id) - 1}`}> 
                        <FontAwesomeIcon className= "icon" icon= {faChevronLeft} />
                    </Link>
                </button>
            }
            
            <div className= "pokemon-icon column">
                <img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />

                <div className= "description column"> 
                    <h1> {name} </h1> 
                    <h2> #{id} </h2>
                </div>
            </div>    
            
            {(id === 893) ? 
                <div> </div> :

                <button>  
                    <Link to= {`/pokemon/${parseInt(id) + 1}`}>
                        <FontAwesomeIcon className= "icon" icon= {faChevronRight} />
                    </Link>
                </button>
            }
        </header>
    );
}