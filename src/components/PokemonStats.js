import React from "react";

export default function PokemonStats(props) {
    const {weight, height, base_experience, types, abilities} = props.pokemonInfo;

    return (
        <section className= "pokemon-stats column">
            <div className= "number-stats line">
                <div className= "column">
                    <h2> Peso </h2>

                    <h3> {weight} </h3>
                </div>

                <div className= "column">
                    <h2> Altura </h2>

                    <h3> {height} </h3>
                </div>

                <div className= "column">
                    <h2> Exp. Base </h2>

                    <h3> {base_experience} </h3>
                </div>
            </div>

            <div className= "column word-stats">
                <h2> Tipos </h2>

                <ul className= "column">
                    {types.map(t => <li key= {t.slot}> • {t.type.name} </li>)}
                </ul>
            </div>

            <div className= "column word-stats">
                <h2> Habilidades </h2>
                
                <ul className= "column">
                    {abilities.map(a => <li key= {a.slot}> • {a.ability.name} </li>)}
                </ul>
            </div>
        </section>
    );
}