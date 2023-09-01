import {Router} from "express";
// // import { getAllPosts, getSinglePost, createPost, editSinglePost, deleteSinglePost } from "../controllers/ecaControllers.js";
import { getData, getId, getIdName } from "../controllers/pokemonController.js";
 const app = Router();

//  GET /getData
 app.get("/pokemon", getData);

// GET /getPokemon/:id
 app.get("/pokemon/:id", getId);

// Get /pokemon/:id/:info 
app.get("/pokemon/:id/:info", getIdName);

//  PUT /editSinglePost/:id
//  app.put("/editSinglePost/:id", editSinglePost);

//  DELETE /deleteSinglePost/:id
// app.delete("/deleteSinglePost/:id", deleteSinglePost);
 export default app;