import "./Style.css"
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Create() {

    const [breads, setBreads] = useState([]);
    const [meats, setMeats] = useState([]);
    const [cheeses, setCheeses] = useState([]);
    const [veggies, setVeggies] = useState([]);
    const [sauces, setSauces] = useState([]);

    React.useEffect(() => {
        try {
            axios
                .get(`http://localhost:5000/ingredients/Bread`)
                .then(response => {
                    console.log(response.data)
                    setBreads(response.data);
                })

        } catch (err) {
            console.error(err.message)
        }
    }, [])

    React.useEffect(() => {
        try {
            axios
                .get(`http://localhost:5000/ingredients/Meat`)
                .then(response => {
                    setMeats(response.data);
                })

        } catch (err) {
            console.error(err.message)
        }
    }, [])

    React.useEffect(() => {
        try {
            axios
                .get(`http://localhost:5000/ingredients/Cheese`)
                .then(response => {
                    setCheeses(response.data);
                })

        } catch (err) {
            console.error(err.message)
        }
    }, [])

    React.useEffect(() => {
        try {
            axios
                .get(`http://localhost:5000/ingredients/Veggies`)
                .then(response => {
                    setVeggies(response.data);
                })

        } catch (err) {
            console.error(err.message)
        }
    }, [])

    React.useEffect(() => {
        try {
            axios
                .get(`http://localhost:5000/ingredients/Sauce`)
                .then(response => {
                    setSauces(response.data);
                })

        } catch (err) {
            console.error(err.message)
        }
    }, [])

    return (

        <div className="body-text">

            <h3 >Choose Your Bread:</h3>
            {breads.map(bread => (
                <div className="form-check form-check-inline" key={bread.ing_id}>
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1"> {bread.ing_name}</label>
                </div>
            ))}

            <h3 >Choose Your Meats:</h3>
            {meats.map(meat => (
                <div className="form-check form-check-inline" key={meat.ing_id}>
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1"> {meat.ing_name}</label>
                </div>
            ))}

            <h3 >Choose Your Cheese:</h3>
            {cheeses.map(cheese => (
                <div className="form-check form-check-inline" key={cheese.ing_id}>
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1"> {cheese.ing_name} </label>
                </div>
            ))}

            <h3 >Choose Your Veggies:</h3>
            {veggies.map(veggie => (
                <div className="form-check form-check-inline" key={veggie.ing_id}>
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1"> {veggie.ing_name} </label>
                </div>
            ))}

            <h3 >Choose Your Sauce:</h3>
            {sauces.map(sauce => (
                <div className="form-check form-check-inline" key={sauce.ing_id}>
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineCheckbox1"> {sauce.ing_name} </label>
                </div>
            ))}

            <br /><br />
            <h3>Name Your Sandwich:</h3>
            <input type="text" />
            <br /><br />
            <Link className="btn btn-primary btn-lg btn-delete" to="/UserHome" role="button">Wrap This Up!</Link>
        </div>
    )
}

export default Create;