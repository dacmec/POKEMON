const { getAllPokemon,searchPokemonByName,createPokemon, getPokemonByParams } = require ("../controllers/pokemonControllers")



const getPokemonHandler =  async (req, res) => {
    try{
    const   { name }  = req.query;
    

    const results =  name ?  await searchPokemonByName(name) : await getAllPokemon();
    

    

    res.status(200).json(results);
    }catch (error) {
        res.status(400).json({error: error.message});
    }
  
    

    
    
}








const getPokemonIdHandler =  async (req,res) => {
    const { id } = req.params;

//     const source = isNaN(id) ? 'bdd' : 'api';
// if(isNaN(id)) { 
//     console.log("Tendria que buscar en la BDD");
// }else{
//     console.log("Tendria que buscar en la api");
// }
    try {
        // const pokemon = await getPokemonByParams(id, source); //Esto es para buscar en mi Base de Datos
        const pokemonAll = await getAllPokemon()
        let pokemon;

    const isNumber = !isNaN(id);
    if (isNumber) {
      pokemon = pokemonAll.find(e => e.id == id);
    } else {
      pokemon = pokemonAll.find(
        e => e.name.toLowerCase() === id.toLowerCase()
      );
    }
    if (!pokemon) {
      pokemon = pokemonAll.find(e => e.id.toString() == id.toLowerCase());
    }

    if (!pokemon) throw new Error("Pokemon not found");
        res.status(200).json(pokemon)
    }catch (error){
        console.log(error)
        res.status(400).json({ error: error.message});
    }
     
}

const createPokemonHandler = async (req, res) => {
    try{
    
    const { name, hp, attack, defense, img, speed, height, weight } = req.body;
    const newPokemon = await createPokemon(name, hp, attack, defense, img, speed, height, weight )
    res.status(201).json("CREADO EXITOSAMENTE");
    // res.send(`Estoy por crear un usuario con estos datos : 
    // nombre:${nombre},
    // apellido:${apellido},
    // descripcion:${descripcion},
    // nacionalidad:${nacionalidad}
    // `);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}




module.exports = {
    getPokemonIdHandler,
    getPokemonHandler,
    createPokemonHandler,
    
}