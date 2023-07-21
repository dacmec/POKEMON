const { Router } = require("express");

const pokemonRouter = Router();

const { getPokemonIdHandler,getPokemonHandler,createPokemonHandler } = require('../handlers/pokemonHandlers')



pokemonRouter.get('/', getPokemonHandler);



pokemonRouter.get('/:id', getPokemonIdHandler);






pokemonRouter.post('/', createPokemonHandler)

module.exports = pokemonRouter;