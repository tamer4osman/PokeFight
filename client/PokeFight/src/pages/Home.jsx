import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
const Home = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons();
  }, [])

  const getPokemons = () => {
    axios.get("http://localhost:3000/pokemon").then((res) => {
    console.log(res.data);
    setPokemons(res.data);
    })
    .catch((err) => {
    console.log(err);})
  }
  return (
    <div>
      <h1>Pokemon List</h1>
      <h2>Click on a pokemon to see more details</h2>
      {!pokemons ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name.english}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
