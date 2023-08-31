const pokemonsData = require("../data/pokemonData.json");

const getAllPokemon = (req, res) => {
  res.json(pokemonsData);
};

const getPokemonById = (req, res) => {
  const id = parseInt(req.params.id);
  const pokemon = pokemonsData.find((p) => p.id === id);
  pokemon
    ? res.json(pokemon)
    : res.status(404).json({ message: "Pokemon not found" });
};

const getPokemonInfoById = (req, res) => {
  const id = parseInt(req.params.id);
  const info = req.params.info;
  const pokemon = pokemonsData.find((p) => p.id === id);
  const data = pokemon ? pokemon[info] : undefined;
  data !== undefined
    ? res.json({ [info]: data })
    : res.status(400).json({ message: "Invalid information requested" });
};

module.exports = {
  getAllPokemon,
  getPokemonById,
  getPokemonInfoById,
};
