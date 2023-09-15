
// import pokemonSchema from "../schemas/pokemonSchema.js";
// import Posts from "../schemas/postSchema.js";
import poke from '../pokedex.json' assert { type: "json" };


import { readFile } from 'fs/promises';
let jsonData = JSON.parse(await readFile(new URL('../pokedex.json', import.meta.url)));

export const getPokemonData= (req, res) => {
       res.send(jsonData);
    };

export const getPokemonId = (req, res) => {
    const id = parseInt(req.params.id);
    const result = jsonData.filter(ele => ele.id == id)
    res.send(result);

};

export const getPokemonInfoById = (req, res) => {
     const id = parseInt(req.params.id);
    // const id = req.params.id;
    const info = req.params.info;
    const pokemon = jsonData.find((p) => p.id === id);
    const data = pokemon ? pokemon[info] : undefined;
    data !== undefined
      ? res.send({ [info]: data })
      : res.status(400).send({ message: "Invalid information requested" });
  };
  

// export const getIdName= (req, res) => {
//     const info = req.params.id.name;
//      res.send(jsonData[1].name);
//     // return next();
// };  

// export const getIdType= (req, res) => {
//     const info = req.params.id.type;
//      res.send(jsonData[1].type);

// };  



export const getIdName = (req, res) => {
    const {id, name} = req.params
    console.log(name)
    const result = jsonData.filter(ele => ele.id == id)
    console.log(typeof result)
    res.send(result)
}; 



//     // if(info == "base"){
//     //     res.send(result.base);
//     //     console.log(result.base);
//     // }else if(info == "name"){
//     //     res.send(result.name);
//     //     console.log("name");
//     //     console.log(result[name]);
//     //     console.log(result["name"]);
//     // }else{
//     //     res.send(result.type);
//     //     console.log(result.type);
//     // }
// };   


// export const getIdName = (req, res) => {
//     const {id, info} = req.params
//     console.log(info)
//     const result = jsonData.filter(ele => ele.id == id)
//     console.log(typeof result)

//     const filtered = Object.keys(result).filter(key => key.includes(info)).reduce(
//         (obj, key) => {
//             obj[key] = result[key]
//             return obj
//         }, {}
//     )
// res.send(result)