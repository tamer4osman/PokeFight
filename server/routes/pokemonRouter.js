import {Router} from "express";
// // import { getAllPosts, getSinglePost, createPost, editSinglePost, deleteSinglePost } from "../controllers/ecaControllers.js";
import { getPokemonData, getPokemonId, getPokemonInfoById } from "../controllers/pokemonController.js";
 const app = Router();

//  GET /getData
 app.get("/pokemon", getPokemonData);

// GET /getPokemon/:id
 app.get("/pokemon/:id", getPokemonId);

// Get /pokemon/:id/:info 
app.get("/pokemon/:id/:info", getPokemonInfoById );

//  PUT /editSinglePost/:id
//  app.put("/editSinglePost/:id", editSinglePost);

//  DELETE /deleteSinglePost/:id
// app.delete("/deleteSinglePost/:id", deleteSinglePost);
 export default app;