import React from 'react'
import PokemonCard from '../components/PokemonCard'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SinglePokemon = () => {
    const {id} = useParams();
    console.log(id);

    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        if (id) {
            
            getPokemon(id);
        }
    }, [id])

    const getPokemon = (id) => {
        axios.get(`http://localhost:8000/pokemon/${id}`).then((res) => {
            console.log(res.data);
            setPokemon(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
  return (
    <div>
        <h1>Single Pokemon</h1>
        {
            !pokemon ? <h2> Loading... </h2> : 
            <PokemonCard pokemon={pokemon[0]} /> 
        }
      
    </div>
  )
}
export default SinglePokemon