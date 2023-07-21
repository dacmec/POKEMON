import style from "../SearchBar/SearchBar.module.css"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearPokemon, searchPokemonId } from "../../redux/actions";


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  useSelector((state) => state.searchedPokemon[1]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchPokemonId(searchTerm));
  };

  const handleClear = () => {
    dispatch(clearPokemon());
    setSearchTerm("");
  };

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search By Name"
        />
        <button
          className={style.searchButton}
          type="submit"
          disabled={searchTerm === ""}
        >
          Search
        </button>
        <button
          className={style.clearButton}
          onClick={handleClear}
          disabled={searchTerm === ""}
        >
          BRING ALL
        </button>
      </form>
    </div>
  );
};

export default SearchBar;