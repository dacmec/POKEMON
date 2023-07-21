import React from "react";
import style from "../Landing/Landing.module.css"
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/poker.jpg"



const Landing = () => {
    return (
        <div className={style.body} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Link to="/home">
                <button className={style.button}>PRESS START</button>
            </Link>
        </div>
    );
};

export default Landing;