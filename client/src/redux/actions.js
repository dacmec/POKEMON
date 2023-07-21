import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS"
export const GET_POKEMON_ID = "GET_POKEMON_ID"
export const FILTER_BY_NAME = "FILTER_BY_NAME"
export const CLEAR_POKEMON = "CLEAR_POKEMON"
export const ORDER_POKEMONS_UPWARD_ALFAB = "ORDER_POKEMONS_UPWARD_ALFAB";
export const ORDER_POKEMONS_FALLING_ALFAB = "ORDER_POKEMONS_FALLING_ALFAB";
export const ORDER_POKEMONS_UPWARD_ATTACK = "ORDER_POKEMONS_UPWARD_ATTACK";
export const ORDER_POKEMONS_FALLING_ATTACK = "ORDER_POKEMONS_FALLING_ATTACK";
export const SEARCH_POKEMON_ID = "SEARCH_POKEMON_ID"
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_CREATED = "FILTER_CREATED";



export const searchPokemonId = (name) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`http://localhost:3001/pokemon?name=${name}`)

      const pokemonId = apiData.data;
      dispatch({ type: SEARCH_POKEMON_ID, payload: Array.of(pokemonId[1]) })
    } catch (error) {
      console.error("Error Fetching Pokemon:", error)
    }
  }
}

export const getPokemons = () => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/pokemon`
    );
    const pokemons = apiData.data;
    dispatch({ type: GET_POKEMONS, payload: pokemons })

  }

}

export const getPokemonId = (id) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`http://localhost:3001/pokemon/${id}`)

      const pokemonId = apiData.data;
      dispatch({ type: GET_POKEMON_ID, payload: pokemonId })
    } catch (error) {
      console.error("Error Fetching Pokemon:", error)
    }
  }
}

export const filterByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/pokemon?name=${name}`);
      const filteredPokemons = response.data;
      dispatch({ type: FILTER_BY_NAME, payload: filteredPokemons });
    } catch (error) {
      console.error("Error filtering Pokemon by name:", error);
    }
  };
};

export const clearPokemon = () => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/pokemon`
    );
    const pokemons = apiData.data;
    dispatch({ type: GET_POKEMONS, payload: pokemons })

  }
};

export const orderThePokemons = (type) => {

  if (type === "upward") {

    return {
      type: "ORDER_POKEMONS_UPWARD_ALFAB",
    };
  }
  if (type === "falling") {
    return {
      type: "ORDER_POKEMONS_FALLING_ALFAB",
    };
  }
  if (type === "+attack") {
    return {
      type: "ORDER_POKEMONS_UPWARD_ATTACK",
    };
  }
}

export const orderPokemonAlpha = (list) => {

  return async function (dispatch) {

    const pokemons = list.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    dispatch({ type: GET_POKEMONS, payload: [...pokemons] })
  }
}

export const orderPokemonAlphant = (list) => {

  return async function (dispatch) {

    const pokemons = list.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    })
    dispatch({ type: GET_POKEMONS, payload: [...pokemons] })
  }
}

export const orderPokemonAttack = (list) => {

  return async function (dispatch) {

    const pokemons = list.sort(function (a, b) {
      return     b.attack - a.attack
    })
    dispatch({ type: GET_POKEMONS, payload: [...pokemons] })
  }
}

export const orderPokemonAttacknt = (list) => {

  return async function (dispatch) {

    const pokemons = list.sort(function (a, b) {
      return       a.attack - b.attack
    })
    dispatch({ type: GET_POKEMONS, payload: [...pokemons] })
  }
}


export const filterByType = (type) => {
  return {
    type: "FILTER_BY_TYPE", payload: type
  };

};

export const filterCreated = (createdDb) => {
  return{
    type:"FILTER_CREATED", payload: createdDb
  
  }
}



