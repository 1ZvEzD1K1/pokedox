import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { choosePokemon, getPokemons } from "../redux/slices/pokemons";
import PokemonCard from "./PokemonCard";
import Loader from "./Loader";
import Error from "./Error";

const PokemonList = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    dispatch(getPokemons());
    setFilter(null);
  }, []);

  const loadmore = () => {
    dispatch(getPokemons());
    setFilter(null);
  };

  const viewInfo = (pokemon) => {
    dispatch(choosePokemon(pokemon));
  };

  const { loading, error, pokemons, url } = useSelector(
    (state) => state.pokemons
  );

  if (loading == "rejected") {
    return <Error error={error} />;
  } else {
    return (
      <div className="pokemon-list">
        <div className="list">
          {pokemons.filter((pokemon) => {
            return pokemon.types.reduce((acc, el) => {
              return (acc || el.type.name == filter) || !filter
            }, false)
          })
          .map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                img={pokemon.sprites.front_default}
                types={pokemon.types}
                pokemon={pokemon}
                viewInfo={viewInfo}
                setFilter={setFilter}
              />
            );
          })}
        </div>
        {loading == "pending" ? <Loader /> : <div></div>}
        <div className="load-more">
          <button onClick={loadmore}>Load More</button>
        </div>
      </div>
    );
  }
};

export default PokemonList;
