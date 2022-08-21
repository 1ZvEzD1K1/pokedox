import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PokemonInfo = () => {
  const { loading, error, targetPokemon } = useSelector(
    (state) => state.pokemons
  );

  if (Object.keys(targetPokemon).length !== 0) {
    return (
      <div className="pokemon-info">
        <div className="pokemon-info-card">
          <img src={targetPokemon.sprites.front_default} alt="pokemonimg" />
          <div className="info-name">
            {targetPokemon.name} #{targetPokemon.id}
          </div>
          <div className="info-table">
            <div className="info-row">
              <div className="info-col-name">Type</div>
              <div className="info-col-quantity">
                {targetPokemon.types.map((type, id) => {
                  return (
                    <div className="type-info" key={id}>
                      {type.type.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="info-row">
              <div className="info-col-name">Attack</div>
              <div className="info-col-quantity">{targetPokemon.stats[0].base_stat}</div>
            </div>
            <div className="info-row">
              <div className="info-col-name">Defense</div>
              <div className="info-col-quantity">{targetPokemon.stats[1].base_stat}</div>
            </div>
            <div className="info-row">
              <div className="info-col-name">HP</div>
              <div className="info-col-quantity">{targetPokemon.stats[2].base_stat}</div>
            </div>
            <div className="info-row">
              <div className="info-col-name">SP Attack</div>
              <div className="info-col-quantity">{targetPokemon.stats[3].base_stat}</div>
            </div>
            <div className="info-row">
              <div className="info-col-name">SP Defense</div>
              <div className="info-col-quantity">{targetPokemon.stats[4].base_stat}</div>
            </div>
            <div className="info-row">
              <div className="info-col-name">Speed</div>
              <div className="info-col-quantity">{targetPokemon.stats[5].base_stat}</div>
            </div>
            <div className="info-row">
              <div className="info-col-name">Weight</div>
              <div className="info-col-quantity">{targetPokemon.weight}</div>
            </div>
            <div className="info-row">
              <div className="info-col-name">Total moves</div>
              <div className="info-col-quantity">{targetPokemon.moves.length}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PokemonInfo;
