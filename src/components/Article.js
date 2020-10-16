import React from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import CurrentPokemon from "./CurrentPokemon";
import PokemonStats from "./PokemonStats";

export default function Article() {
    const [pokemonInfo, setPokemonInfo] = React.useState(null);
    const {id} = useParams();

    React.useEffect(() => {
        const request = axios.get("https://pokeapi.co/api/v2/pokemon/" + id);
        request.then(response => setPokemonInfo(response.data));
    }, [id]);

    /* .id, .name, img, .base_experience, .height, .weight, .types[i].type.name, .abilities[i].ability.name*/

    return (
        <article>
            {(pokemonInfo)
                ? <>
                    <CurrentPokemon pokemonInfo= {pokemonInfo} /> 
                    <PokemonStats pokemonInfo= {pokemonInfo} />
                </> :
                <img className= "loading" src= "../images/loading.gif" />
            }
        </article>
    );
}