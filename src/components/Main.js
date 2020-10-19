import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import PokemonIcon from "./PokemonIcon";

export default function Main() {
    const [listPokemon, setListPokemon] = React.useState([]);
    const [inputUser, setInputUser] = React.useState("");

    React.useEffect(() => {
        const request = axios.get("https://pokeapi.co/api/v2/pokemon?limit=893");
        request.then(response => {
            setListPokemon(response.data.results);
        });
    }, []);

    if(listPokemon.length === 0) {
        return <main> <img className= "loading" src= "./images/loading.gif" /> </main>;
    }

    const filteredPokemon = listPokemon.filter(pokemon => (
            pokemon.name.includes(inputUser.trim().toLowerCase())
    ));

    return (
        <main>
            <form>
                <input onChange= {event => setInputUser(event.target.value)}
                    type= "text" value= {inputUser}
                    placeholder= "Pesquise pelo nome..."
                    max-length= "35"
                />
                <FontAwesomeIcon className= "search" icon= {faSearch}/>
            </form>

            {filteredPokemon.length === 0 && <p className= "error-message"> Não encontramos o pokemon :( <br /> Digite Novamente! </p>}

            <ul className= "line">
                {filteredPokemon.map(pokemon => {
                    const id = pokemon.url.split("/")[6];
                    return (<PokemonIcon name = {pokemon.name} id= {id} key= {id} />);
                })}
            </ul>
        </main>
    );
}
