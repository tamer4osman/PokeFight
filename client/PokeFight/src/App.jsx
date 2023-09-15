import { useState, useEffect } from 'react'
import './App.css'
// import './index.css'
import {Route, Routes, NavLink} from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import SinglePokemon from './pages/SinglePokemon'
import PokemonInfo from './pages/PokemonInfo'
function App() {
const [pokemons, setPokemons] = useState([]);

useEffect(() => {
  getPokemons();
}, [])

const getPokemons = () => {
  axios.get('http://localhost:8000/pokemon').then((res) => { 
   console.log(res.data);
   setPokemons(res.data); 
    })
    .catch 
    {(err) => { 
     console.log(err); };}
   
}

  return (
    <>
 <nav className="nav" style={{cursor:"pointer"}} >
      <ul className="flex justify-around items-start text-lg text-yellow-600 bg-transparent-900 w-full  py-2">
        <li className="">
          <NavLink className="bg-orange-900 h-30 " to="/"> Home </NavLink>
        </li>
        <li>
          <NavLink className="bg-orange-900 h-25  " to="/pokemon/1"> Pokemon </NavLink>
        </li>
        <li>
          <NavLink  className="bg-orange-900 h-25 "  to="/pokemon/1/base">pokemon base Info </NavLink>
        </li>
        <li>
          <NavLink className="bg-orange-900 h-25 "  to="/pokemon/1/type">pokemon type Info </NavLink>
        </li>
        <li>
          <NavLink className="bg-orange-900 h-25 " to="/pokemon/1/name"> pokemon name Info </NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home pokemons={pokemons}/>} />
      <Route path="/pokemon/:id" element={<SinglePokemon/>} />
      <Route path="/pokemon/:id/:info" element={ <PokemonInfo/>} />
    </Routes>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
       </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>  */}
    </>
  )
}

export default App
