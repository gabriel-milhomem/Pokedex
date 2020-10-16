import React from "react";
import axios from "axios";
import PokemonIcon from "./PokemonIcon";

export default function Main() {
    const [listPokemon, setListPokemon] = React.useState([]);

    React.useEffect(() => {
        const request = axios.get("https://pokeapi.co/api/v2/pokemon?limit=893");
        request.then(response => setListPokemon(response.data.results));
    }, []);

    return (
        <main>
            <ul className= "line">
                {(listPokemon.length) 
                    ? "":
                    <img className= "loading" src= "./images/loading.gif"
                />}

                {listPokemon.map((pokemon, i) => (
                    <PokemonIcon pokemon = {pokemon} index= {i} key= {i} />
                ))}
            </ul>
        </main>
    );
}