import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import PokemonIcon from "./PokemonIcon";

export default function Main() {
    const [listPokemon, setListPokemon] = React.useState(null);
    const [inputUser, setInputUser] = React.useState("");

    React.useEffect(() => {
        const request = axios.get("https://pokeapi.co/api/v2/pokemon?limit=893");
        request.then(response => setListPokemon(response.data.results));
    }, []);

    return (
        <main>
            <form>
                <input onChange= {(event) => setInputUser(event.target.value)}
                    type= "text" value= {inputUser}
                    placeholder= "Pesquise pelo nome..."
                    max-length= "35"
                />
                <FontAwesomeIcon className= "search" icon= {faSearch}/>
            </form>

            <ul className= "line">
                {(listPokemon === null) ?
                    <img className= "loading" src= "./images/loading.gif" /> :

                    listPokemon.map(pokemon => {
                        const id = pokemon.url.split("/")[6];
                        return (<PokemonIcon name = {pokemon.name} id= {id} key= {id} />);
                    })  
                }
            </ul>
        </main>
    );
}
