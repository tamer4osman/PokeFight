import React from "react";
import Home from "./pages/Home";
import PokemonDetail from "./pages/PokemonDetail";
import DetailedInfo from "./pages/detailedInfo";
import { Route, Routes, NavLink } from 'react-router-dom'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pokemon/1">First pokemon</NavLink>
          </li>
          <li>
            <NavLink to="/pokemon/1/base">First Pokemon base</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/pokemon/:id" element={<PokemonDetail/>} />
        <Route path="/pokemon/:id/:info" element={<DetailedInfo/>} />
      </Routes>
    </>
  );
}

export default App;
