import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getPokemons,
  filterCreated,
  filterByType,
  orderPokemonAlpha,
  orderPokemonAlphant,
  orderPokemonAttack,
  orderPokemonAttacknt,
} from "../../redux/actions";

const NavBar = () => {
  const pokemonListRedux = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  const handleOrderChange = (e) => {
    const selectedOrder = e.target.value;

    switch (selectedOrder) {
      case "upward":
        dispatch(orderPokemonAlpha(pokemonListRedux));
        break;
      case "falling":
        dispatch(orderPokemonAlphant(pokemonListRedux));
        break;
      case "attack":
        dispatch(orderPokemonAttack(pokemonListRedux));
        break;
      case "attacknt":
        dispatch(orderPokemonAttacknt(pokemonListRedux));
        break;
      default:
        break;
    }
  };

  const handleClear = event =>{
    event.preventDefault();
    dispatch(getPokemons(pokemonListRedux))
  }
  const handleFilterCreated = (el) => {
    

    
    dispatch(filterCreated(el.target.value));
  };

  const handleFilterType = (e) => {
    

    // Dispatch the filterByType action
    dispatch(filterByType(e.target.value));
  };

  return (
    <div className={style.mainContainer}>
      <div>
      <select onChange={handleFilterCreated}>
      <option value="all">POKEMONS</option>
          
          <option value="created">DATABASE POKEMONS</option>
          <option value="api">API POKEMONS</option>
          
          </select>




        <select onChange={handleFilterType}>
          
          <option value="normal">NORMAL</option>
          <option value="fighting">FIGHTING</option>
          <option value="flying">FLYING</option>
          <option value="poison">POISON</option>
          <option value="ground">GROUND</option>
          <option value="rock">ROCK</option>
          <option value="bug">BUG</option>
          <option value="ghost">GHOST</option>
          <option value="steel">STEEL</option>
          <option value="fire">FIRE</option>
          <option value="water">WATER</option>
          <option value="grass">GRASS</option>
          <option value="electric">ELECTRIC</option>
          <option value="psychic">PSYCHIC</option>
          <option value="ice">ICE</option>
          <option value="dragon">DRAGON</option>
          <option value="dark">DARK</option>
          <option value="fairy">FAIRY</option>
          <option value="unknown">UNKNOWN</option>
          <option value="shadow">SHADOW</option>

          
        </select>
      </div>

      <Link to="/about">ABOUT</Link>
      <Link to="/home">HOME</Link>
      <Link to="/form">FORM</Link>

      <div>
        <select onChange={handleOrderChange}>
          <option value="upward">Order A-Z</option>
          <option value="falling">Order Z-A</option>
          <option value="attack">Order ATTACK +</option>
          <option value="attacknt">Order ATTACK -</option>
        </select>

        <button onClick={handleClear}>CLEAR</button>
      </div>
    </div>
  );
};

export default NavBar;