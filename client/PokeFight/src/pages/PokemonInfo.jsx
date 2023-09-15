import React from 'react'
// import PokemonCard from '../components/PokemonCard'
import {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PokemonInfo = () => {
    const {info, id}= useParams();
    console.log(info, id);

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
  
      getPokemon();
        
    }, [])

    const getPokemon = () => {
        axios.get(`http://localhost:8000/pokemon/${id}/${info}`).then((res) => {
            console.log(res.data);
            setPokemon(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    console.log(pokemon);
  return ( 
    <div>
        <h1> Pokemon Info with specified key</h1>
       
        {pokemon && (
        <div>
          <p>
            {info.toUpperCase()}: 
            <ul key={id}>
              {info == "name" ? Object.keys(pokemon.name).map(language => <li>{language} : {pokemon.name[language]}</li>) : ''}
              {info == "base" ? Object.keys(pokemon.base).map(stat => <li>{stat} : {pokemon.base[stat]}</li>) : ""}
              {info == "type" ? pokemon.type.map(type => <li>{type}</li>) : ''}

            </ul>

          </p>
        </div>
      )}
      
    </div>
  )
}
export default PokemonInfo;



// const PokemonInfo = () => {
//     return (
//         <div>
//         <h1>Pokemon details</h1>
//     {pokemon? && (
//         <div>
//             <p>
//                 {Info}:
//                 <ul>
//                     {info == "name" ? Object.keys(pokemon.name).map(Language  => <li>{Language}: {pokemon.name[Language]}</li>) : ''}
//                     {info == "base" ? Object.keys(pokemon.base).map(stat  => <li>{stat}: {pokemon.base[stat]}</li>) : ""}
//                     {info == "type" ? pokemon.type.map(type => <li>{type}</li>) : ''}
//                 </ul>
//             </p>
//         </div>
//       )}  
//         </div>
//     )
//     }

// export default PokemonInfo