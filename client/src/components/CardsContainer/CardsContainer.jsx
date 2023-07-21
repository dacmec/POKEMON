import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Card from "../Card/Card";
import style from "../CardsContainer/CardsContainer.module.css";
import { useSelector } from "react-redux";
import { getPokemones } from "../../redux/reducer";
import Paginado from "../Paginado/Paginado";

const CardsContainer = () => {
  const pokemonRedux = useSelector(getPokemones);
  const [currentPage, setCurrentPage] = useState(1);
  const pokemonsPerPage = 12; // Número de pokémones a mostrar por página

  // Calcula el índice del último pokémon en la página actual
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  // Calcula el índice del primer pokémon en la página actual
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  // Obtiene los pokémones a mostrar en la página actual
  const currentPokemons = pokemonRedux.slice(indexOfFirstPokemon, indexOfLastPokemon);

  // Función para cambiar de página
  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Si cambia la lista de pokémones en el estado redux, reseteamos la página actual a la primera
    setCurrentPage(1);
  }, [pokemonRedux]);

  return (
    <div>
      <div className={style.card}>
        {currentPokemons.map((pokemon) => {
          return (
            <Link key={pokemon.id} to={`/detail/${pokemon.id}`}>
              <Card
                id={pokemon.id}
                name={pokemon.name}
                img={pokemon.img}
                hp={pokemon.hp}
                attack={pokemon.attack}
                speed={pokemon.speed}
                height={pokemon.height}
                weight={pokemon.weight}
                type={pokemon.type}
              />
            </Link>
          );
        })}
      </div>
      
      <Paginado
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={pokemonRedux.length}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default CardsContainer;