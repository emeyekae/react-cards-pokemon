import React from "react";
import { useAxios } from "./hooks";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

/* Renders a list of playing cards.
 * Can also remove all cards,
 * and add a new card, either at random
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon] = useAxios(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(card => (
          <PokemonCard
          key={card.id}
          back={card.sprites.back_default}
          front={card.sprites.front_default}
          name={card.name}
          stats={card.stats.map(stat => ({
            value: stat.base_stat,
            name: stat.stat.name
          }))}
        />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
