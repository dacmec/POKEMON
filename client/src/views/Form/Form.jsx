import style from "./Form.module.css";
import axios from "axios";
import { useState } from "react";






const Form = () => { 
    const [form, setForm] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        img: "",
        speed: "",
        height: "",
        weight: "",
        // type: ""
        
    });

    const [errors, setErrors] = useState({
        name: "",
        hp: "",
        attack: "",
        defense: "",
        img: "",
        speed: "",
        height: "",
        weight: "",
        // type: ""
    });
    

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
      
        validate({ ...form, [property]: value });
      
        setForm({ ...form, [property]: value });
      };

    const validate = (form) => {
        const newErrors = { ...errors };

        if (/^[A-Za-z]+$/.test(form.name)) {
            newErrors.name = "";
        } else {
            newErrors.name = "No se permiten números en el name";
        }

        if (form.name === "") {
            newErrors.name = "";
        }

        if (/^\d+$/.test(form.hp)) {
            newErrors.hp = "";
        } else {
            newErrors.hp = "No se permiten letras en el Hp";
        }

        if (form.hp === "") {
            newErrors.hp = "";
        }

        if (/^\d+$/.test(form.attack)) {
            newErrors.attack = "";
        } else {
            newErrors.attack = "No se permiten letras en el Attack";
        }

        if (form.attack === "") {
            newErrors.attack = "";
        }

        if (/^\d+$/.test(form.defense)) {
            newErrors.defense = "";
        } else {
            newErrors.defense = "No se permiten letras en el Defense";
        }

        if (form.defense === "") {
            newErrors.defense = "";
        }

        if (/^\d+$/.test(form.speed)) {
            newErrors.speed = "";
        } else {
            newErrors.speed = "No se permiten letras en el Speed";
        }

        if (form.speed === "") {
            newErrors.speed = "";
        }

        if (/^\d+$/.test(form.height)) {
            newErrors.height = "";
        } else {
            newErrors.height = "No se permiten letras en el Height";
        }

        if (form.height === "") {
            newErrors.height = "";
        }
        if (/^\d+$/.test(form.weight)) {
            newErrors.weight = "";
        } else {
            newErrors.weight = "No se permiten letras en el Weight";
        }

        if (form.weight === "") {
            newErrors.weight = "";
        }


        setErrors(newErrors);
    }



    const submitHandler = (event) => {
        event.preventDefault();

        const requiredFields = ["name", "hp", "attack", "defense", "img", "speed", "height", "weight"];
        const hasMissingFields = requiredFields.some((field) => form[field] === "" && field !== "img");
        if (hasMissingFields) {
            alert("Por favor, complete todos los campos obligatorios");
            return;
        }
        axios
            .post("http://localhost:3001/pokemon", form)
            .then((res) => alert('Creado con exito'))
            .catch((err) => alert('ERROR'));
    };




    return (
        <div className={style.body}>
            <form className={style.form} onSubmit={submitHandler}>
                <div>
                    <label>Name : </label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={changeHandler}
                        name="name"
                    />
                    <span>{errors.name}</span>
                </div>

                <div>
                    <label>Hp : </label>
                    <input
                        type="text"
                        value={form.hp}
                        onChange={changeHandler}
                        name="hp"
                    />
                    <span>{errors.hp}</span>
                </div>
                <div>
                    <label>Attack : </label>
                    <input
                        type="text"
                        value={form.attack}
                        onChange={changeHandler}
                        name="attack"
                    />
                    <span>{errors.attack}</span>
                </div>

                <div>
                    <label>Defense : </label>
                    <input
                        type="text"
                        value={form.defense}
                        onChange={changeHandler}
                        name="defense"
                    />
                    <span>{errors.defense}</span>
                </div>

                <div>
                    <label>Image : </label>
                    <input
                        type="text"
                        value={form.img}
                        onChange={changeHandler}
                        name="img"
                    />
                </div>

                <div>
                    <label>Speed : </label>
                    <input
                        type="text"
                        value={form.speed}
                        onChange={changeHandler}
                        name="speed"
                    />
                    <span>{errors.speed}</span>
                </div>

                <div>
                    <label>Height : </label>
                    <input
                        type="text"
                        value={form.height}
                        onChange={changeHandler}
                        name="height"
                    />
                    <span>{errors.height}</span>
                </div>

                <div>
                    <label>Weight : </label>
                    <input
                        type="text"
                        value={form.weight}
                        onChange={changeHandler}
                        name="weight"
                    />

                    <span>{errors.weight}</span>
                </div>
                <div>
                     <label>AVAILABLE TYPES:  </label>
                <select name="type" >
          
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
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
};

export default Form;