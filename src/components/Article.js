import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CurrentPokemon from "./CurrentPokemon";
import PokemonStatus from "./PokemonStatus";

export default function Article() {
    const [pokemonInfo, setPokemonInfo] = React.useState(null);
    const {id} = useParams();

    React.useEffect(() => {
        setPokemonInfo(null);
        const request = axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
        request.then(response => setPokemonInfo(response.data));
    }, [id]);

    if(pokemonInfo === null) {
        return <article> <img className= "loading" src= "../images/loading.gif" /> </article>;
    }

    return (
        <article>
            <CurrentPokemon pokemonInfo= {pokemonInfo} /> 
            <PokemonStatus pokemonInfo= {pokemonInfo} />
        </article>
    );
}