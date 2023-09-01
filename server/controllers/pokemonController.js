
// import pokemonSchema from "../schemas/pokemonSchema.js";
// import Posts from "../schemas/postSchema.js";
import poke from '../pokedex.json' assert { type: "json" };


import { readFile } from 'fs/promises';
let jsonData = JSON.parse(await readFile(new URL('../pokedex.json', import.meta.url)));

export const getData= (req, res) => {
    res.send(jsonData);
    };

 export const getId= (req, res) => {
        const id = req.params.id;
         res.send(jsonData[1]);
    
    };

    export const getIdName= (req, res) => {
        const info = req.params.id.name;
         res.send(jsonData[1].name);
    
    };   

    