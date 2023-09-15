
// import PokemonCard from '../components/PokemonCard';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

const Home = ({}) => {
  // const [pokemon, getPokemon] = useState([])
    const [pokemons, setPokemons] = useState([])


 
    //  const [pokeDex,setPokeDex]=useState();
    // const url= 'https://pokeapi.co/api/v2/pokemon';
    // https://pokeapi.co/api/v2/pokemon/{id or name}/



    

    useEffect(() => {
      getPokemons();
    }, [])
  
    const getPokemons = () => {
      axios.get("http://localhost:8000/pokemon").then((res) => {
      console.log(res.data);
      setPokemons(res.data);
      })
      .catch((err) => {
      console.log(err);})
    }
    return (
        <div>
     {/* <h1>Pokemon List</h1> */}
      <h2>Click on a pokemon to see more details</h2> <br />
      {!pokemons ? (
        <p>Loading...</p>
      ) : (
        
        <ul>
          {pokemons.map((pokemon) =>{ return(
            <div className="container mx-auto ">
            
              <h2 >{pokemon.id}</h2>
            
            <li className=""key={pokemon.id}>
              <Link to={`/pokemon/${pokemon.id}`} className="bg-slate-900 h-50 w-20 p-1 border-2 text-yellow-500  " >{pokemon.name.english}</Link>
            </li>
            
              {/* <img src={url.sprites.front_default} alt="" /> */}
          

            </div>
          )})}
        </ul>
      )}
     
        </div>
    )
}

export default Home