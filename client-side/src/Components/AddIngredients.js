import "./Style.css"
import axios from 'axios'
import React, { useState } from 'react'

function AddIngredients(props) {

    const [breads, setBreads] = useState([]);
    const [meats, setMeats] = useState([]);
    const [cheeses, setCheeses] = useState([]);
    const [veggies, setVeggies] = useState([]);
    const [sauces, setSauces] = useState([]);
    let ingredientList = [];

    React.useEffect(() => {
        try {
            axios
                .get(`http://localhost:5000/ingredients/Bread`)
                .then(response => {
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

    const handleChange = async (event) => {
        event.preventDefault()

        const response = await axios({
            method: 'post',
            url: `http://localhost:5000/sandwiches/sandwich/25/${event.target.value}`,
        })
        console.log(response.data)
    }

    console.log(ingredientList);

    return (

        <form className="body-text" onSubmit>

            <h3 >Choose Your Bread:</h3>
            {breads.map(bread => (
                <div className="form-check form-check-inline" key={bread.ing_id}>
                    <input className="form-check-input" type="checkbox" id={bread.ing_id} value={bread.ing_id} onChange={handleChange} />
                    <label className="form-check-label" htmlFor={bread.ing_id}> {bread.ing_name}</label>
                </div>
            ))}

            <h3 >Choose Your Meats:</h3>
            {meats.map(meat => (
                <div className="form-check form-check-inline" key={meat.ing_id}>
                    <input className="form-check-input" type="checkbox" id={meat.ing_id} value={meat.ing_id} onChange={handleChange} />
                    <label className="form-check-label" htmlFor={meat.ing_id}> {meat.ing_name}</label>
                </div>
            ))}

            <h3 >Choose Your Cheese:</h3>
            {cheeses.map(cheese => (
                <div className="form-check form-check-inline" key={cheese.ing_id}>
                    <input className="form-check-input" type="checkbox" id={cheese.ing_id} value={cheese.ing_id} onChange={handleChange} />
                    <label className="form-check-label" htmlFor={cheese.ing_id}> {cheese.ing_name} </label>
                </div>
            ))}

            <h3 >Choose Your Veggies:</h3>
            {veggies.map(veggie => (
                <div className="form-check form-check-inline" key={veggie.ing_id}>
                    <input className="form-check-input" type="checkbox" id={veggie.ing_id} value={veggie.ing_id} onChange={handleChange} />
                    <label className="form-check-label" htmlFor={veggie.ing_id}> {veggie.ing_name} </label>
                </div>
            ))}

            <h3 >Choose Your Sauce:</h3>
            {sauces.map(sauce => (
                <div className="form-check form-check-inline" key={sauce.ing_id}>
                    <input className="form-check-input" type="checkbox" id={sauce.ing_id} value={sauce.ing_id} onChange={handleChange} />
                    <label className="form-check-label" htmlFor={sauce.ing_id}> {sauce.ing_name} </label>
                </div>
            ))}

            <br /><br />
            <button type="submit" className="btn btn-primary btn-lg btn-delete">Wrap It Up!</button>
        </form>
    )
}

export default AddIngredients;