const { Pokemon } = require("../db")
const axios = require("axios"); //Libreria para hacer peticiones http con bases en promesas

function CleanIdPoke(pokemon) {
    return {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.other.dream_world.front_default,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        speed: pokemon.stats[2].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
        type: pokemon.types.map((type) => type.type.name) //Hago este map para que me traiga el nombre de cada tipo
    }


}
const CleanArray = async () => {
    const getApiInfo = (
        await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100`)).data.results;

    const pokeInfo = await Promise.all(getApiInfo.map(async (pokemon) => { // las promesas son objetos que representan la eventual falla o exito de una operacion asincrona
        const dataPoke = await axios.get(pokemon.url) //objeto que te permite ver el estado de una actividad asincrona


        return {
            id: dataPoke.data.id,
            name: dataPoke.data.name,
            img: dataPoke.data.sprites.other.dream_world.front_default,
            hp: dataPoke.data.stats[0].base_stat,
            attack: dataPoke.data.stats[1].base_stat,
            speed: dataPoke.data.stats[2].base_stat,
            height: dataPoke.data.height,
            weight: dataPoke.data.weight,
            type: dataPoke.data.types.map((type) => type.type.name),
            created: false
        }
    }))
    return pokeInfo;

}


const getPokemonById = async (id, source) => {

    const pokemon = source === 'api'
        ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data

        : await Pokemon.findByPk(id);
    let CleanId = CleanIdPoke(pokemon)

    // console.log(pokemon);

    return CleanId;

}








const getPokemonByParams = async (id, source) => { //para se convierta y empiece a aceptar actividades asincronas, permite que el programa tome la peticion pero que siga siendo responsiva a otras cosas
    console.log(id)

    if (id == parseInt(id)) {

        console.log("Buscando por numero")
        return getPokemonById(id, source)
    }

    else {
        console.log("Buscando por nombre")



        return searchPokemonByName(id)


    }


}


const getAllPokemon = async () => {
    const getDbInfo = await Pokemon.findAll();



    const apiPokemon = await CleanArray();

    return [...getDbInfo, ...apiPokemon]










};


const searchPokemonByName = async (name) => {
    const databasePokemon = await Pokemon.findAll({ where: { name: name } }); // AWAIT Espera a que la promesa se resuelva
    let getApiInfo = undefined

    if (!databasePokemon.length) {

        getApiInfo = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data;
    }


    let CleanId = getApiInfo ? CleanIdPoke(getApiInfo) : ''





    return [databasePokemon, CleanId]
};


const createPokemon = async (name, hp, attack, defense, img, speed, height, weight) => {
    await Pokemon.create({ name, hp, attack, defense, img, speed, height, weight });

}













module.exports = {

    getAllPokemon,
    searchPokemonByName,
    createPokemon,
    getPokemonByParams
}