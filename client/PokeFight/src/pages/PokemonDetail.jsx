import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getPokemon(id);
  }, [])

  const getPokemon = () => {
    axios.get(`http://localhost:3000/pokemon/${id}`).then((res) => {
    console.log(res.data);
    setPokemon(res.data);
    })
    .catch((err) => {
    console.log(err);})
  }

  return (
    <div>
      <h1>Pokemon Detail</h1>
      {pokemon && (
        <div>
          <h2>Name: {pokemon.name.english}</h2>
          <p>Type: {pokemon.type.join(", ")}</p>
          <p>Base: {JSON.stringify(pokemon.base)}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;
