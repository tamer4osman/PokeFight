import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const DetailedInfo = () => {
  const { id, info } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getPokemon();
  }, [])

  const getPokemon = () => {
    axios.get(`http://localhost:3000/pokemon/${id}/${info}`).then((res) => {
    console.log(res.data);
    setPokemon(res.data);
    })
    .catch((err) => {
    console.log(err);})
  }

  return (
    <div>
      <h1>Super Detailed View</h1>
      {pokemon && (
        <div>
          <p>
            {info.toUpperCase()}: 
            <ul>
              {info == "name" ? Object.keys(pokemon.name).map(language => <li>{language} : {pokemon.name[language]}</li>) : ''}
              {info == "base" ? Object.keys(pokemon.base).map(stat => <li>{stat} : {pokemon.base[stat]}</li>) : ""}
              {info == "type" ? pokemon.type.map(type => <li>{type}</li>) : ''}
            </ul>

          </p>
        </div>
      )}
    </div>
  );
};

export default DetailedInfo;
