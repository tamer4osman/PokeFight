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
    axios.get(`http://localhost:3000/pokemon/1/base`).then((res) => {
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
            name: {JSON.stringify(pokemon["base"])}
          </p>
        </div>
      )}
    </div>
  );
};

export default DetailedInfo;
