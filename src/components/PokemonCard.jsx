import React, { useEffect } from "react";
import axios from "axios";

// const pokemon = async (url) => {
//     const res = await axios.get(url)
//     console.log(res)
//   };

const PokemonCard = ({ name, types, img, pokemon, viewInfo, setFilter }) => {
  //   useEffect(() => {
  //     pokemon(url)
  //   }, [])

  return (
    <div className="card" onClick={()=>viewInfo(pokemon)}>
      <img src={img} alt="pokemon" />
      <div className="name">{name}</div>
      <div className="types">
        {types.map((type, id) => {
          return <div className={`type ${type.type.name}`} key={id} onClick={()=>setFilter(type.type.name)}>{type.type.name}</div>
        })}
      </div>
    </div>
  );
};

export default PokemonCard;
