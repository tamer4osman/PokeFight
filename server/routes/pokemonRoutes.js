const express = require("express");
const router = express.Router();
const { body, param } = require("express-validator");
const {
  getAllPokemon,
  getPokemonById,
  getPokemonInfoById,
} = require("../controllers/pokemonController.js");

router.get("/", getAllPokemon);
router.get("/:id", getPokemonById);
router.get("/:id/:info", getPokemonInfoById);

module.exports = router;
