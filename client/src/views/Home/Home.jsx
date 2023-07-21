import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Searchbar from "../../components/SearchBar/SearchBar";
import style from "../Home/Home.module.css"
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../redux/actions";

const Home = () => {

  
  const dispatch = useDispatch();
  





  useEffect(() => {
    dispatch(getPokemons())


  }, [dispatch])
  // useSelector(state=>state.pokemons)
  return (
    <div className={style.homeContainer}>

      <h1>POKEMONS</h1>


      <Searchbar />


      <CardsContainer ></CardsContainer>

    </div>
  )





}

export default Home;