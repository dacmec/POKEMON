import { GET_POKEMONS, GET_POKEMON_ID, FILTER_BY_NAME, CLEAR_POKEMON, ORDER_POKEMONS_UPWARD_ALFAB, ORDER_POKEMONS_FALLING_ALFAB, ORDER_POKEMONS_UPWARD_ATTACK, ORDER_POKEMONS_FALLING_ATTACK, SEARCH_POKEMON_ID, FILTER_BY_TYPE, FILTER_CREATED } from "./actions";

const initialState = {
  pokemons: [],
  pokemonId: null,
  searchedPokemon: [],
  filtered:[],
};


export const getPokemones = (state) => state.pokemons
const rootReducer = (state = initialState, action) => {
  switch (action.type) {


    case SEARCH_POKEMON_ID:
      return { ...state, pokemons: action.payload}

    case GET_POKEMONS:

      return { ...state, pokemons: action.payload, filtered: action.payload  };

    case GET_POKEMON_ID:
      return { ...state, pokemonId: action.payload };
    case CLEAR_POKEMON:
      return { ...state, searchedPokemon: [] };
    case FILTER_BY_NAME:
      const newState = { ...state, searchedPokemon: action.payload };
      console.log('Estado actualizado:', newState);
      return newState;
    case ORDER_POKEMONS_UPWARD_ALFAB:
      console.log(ORDER_POKEMONS_UPWARD_ALFAB)
      return { ...state, pokemons: action.payload };
    case ORDER_POKEMONS_FALLING_ALFAB:
      return { ...state, pokemons: action.payload };
    case ORDER_POKEMONS_UPWARD_ATTACK:
      return { ...state, pokemons: state.pokemons.sort((a, b) => a.attack - b.attack) };
    case ORDER_POKEMONS_FALLING_ATTACK:
      return { ...state, pokemons: state.pokemons.sort((a, b) => b.attack - a.attack) };

      case FILTER_BY_TYPE :
        
        const statusFiletered = [...state.filtered].filter((e) => e.type.map((e) => e).includes(action.payload));
        return {
          ...state,
          pokemons: statusFiletered

        }
        case FILTER_CREATED: {
          const filtrado =
            action.payload === "created"
              ? state.filtered.filter((el) => typeof el.id !== "number")
              : state.filtered.filter((el) => typeof el.id === "number");
          return {
            ...state,
            pokemons: action.payload === "all" ? state.filtered : filtrado,
            

          }}
    default:
      return state;
  }

};



export default rootReducer;




