import React from "react";
import style from "../Card/Card.module.css";

const Card = (props) => {
  const { name, img, hp, attack, speed, height, weight, type } = props;

  return (
    <div className={style.card}>
      <img src={img} alt="pokemon" className={style.image} />

      <div className={style.cardDetails}>
        <p className={style.name}>Name: {name}</p>

        <p>hp: {hp}</p>
        <p>attack: {attack}</p>
        <p>speed: {speed}</p>
        <p>height: {height}</p>
        <p>weight: {weight}</p>
        <p>type: {type + ""}</p>
      </div>
    </div>
  );
};

export default Card;