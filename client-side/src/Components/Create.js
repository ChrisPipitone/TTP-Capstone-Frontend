import "./Style.css"
import axios from 'axios'
import bread from "./Images/bread.png"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Create() {

    const [ingredients, setIngredients] = useState([]);


    React.useEffect(() => {
        try {
            axios
                .get(`http://localhost:5000/ingredients`)
                .then(data => {
                    console.log(data)
                    setIngredients([data]);
                    console.log(ingredients.data);
                })

        } catch (err) {
            console.error(err.message)
        }
    }, [])

    return (

        <div className="body-text">


            <h3 >Choose Your Bread:</h3>
            {ingredients.map(ingredient => (
                <div className="form-check form-check-inline" key={ingredient.ing_id}>
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1"> {ingredient.ing_name} {/* <img className="menu-img" src={ingredient.image_path} />*/}</label>
                </div>
            ))}

            <br /><br />

            <Link className="btn btn-primary btn-lg btn-delete" to="/UserHome" role="button">Wrap This Up!</Link>
        </div>
    )
}

export default Create;