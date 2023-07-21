import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonId } from "../../redux/actions";
import style from "../Detail/Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonId);
  console.log(id)

  useEffect(() => {
    dispatch(getPokemonId(id));
  }, [dispatch, id]);

  return (
    <div className={style.body}>
      <div className={style.card}>
        <h2>POKEMON DETAIL</h2>

        {pokemon && (
          <div className={style.pokemonDetails}>
            <div className={style.pokemonImage}>
              <img src={pokemon.img} alt="Pokemon" />
            </div>

            <div className={style.details}>
              <p className={style.detailItem}>Name: {pokemon.name}</p>
              <p className={style.detailItem}>hp: {pokemon.hp}</p>
              <p className={style.detailItem}>attack: {pokemon.attack}</p>
              <p className={style.detailItem}>speed: {pokemon.speed}</p>
              <p className={style.detailItem}>height: {pokemon.height}</p>
              <p className={style.detailItem}>weight: {pokemon.weight}</p>
              <p className={style.detailItem}>type: {pokemon.type}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;