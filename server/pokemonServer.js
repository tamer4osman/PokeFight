import express from 'express';
import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import pokemonRouter from "./routes/pokemonRouter.js";
import poke from './pokedex.json' assert { type: "json" };


import { readFile } from 'fs/promises';
let jsonData = JSON.parse(await readFile(new URL('./pokedex.json', import.meta.url)));



const app = express();
dotenv.config();
const port = process.env.PORT || 5000;
 app.use(cors())
// app.use(bodyParser.json());



app.use(pokemonRouter);

// app.get('/pokemon', (req, res) => {
//     res.send(jsonData);
//     });


// export const getAllPosts = (req, res) => {
//     Posts.find({})
//     .then(results => {
//         res.status(200).send(jsonData)
//     })
//     .catch(err => {
//         console.log(err);
//     })
// };


    app.listen(port, () => console.log(`Server Running on Port: http://localhost:${port}`))

// app.get('/pokemon/:id', (req, res) => {
//     const id = req.params.id;
//      //res.send("Vijaya GET SINGLE post WITH ID OF " + id);
//     // res.jsonp(jsonData({id : 1}));
//      res.send(jsonData[1]);

// });

// app.get('/pokemon/:id/:info', (req, res) => {
//     const info = req.params.id.base;
//      //res.send("Vijaya GET SINGLE post WITH ID OF " + id);
//     // res.jsonp(jsonData({id : 1}));
//      res.send(jsonData[0].base);

// });