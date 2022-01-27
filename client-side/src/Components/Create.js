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
    const [name, setName] = useState([]);
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

    const handleSubmit = (event) => {
        event.preventDefault()
        try {
            const body = { name }
            const response = axios({
                method: 'post',
                url: `http://localhost:5000/sandwiches/1/${name}`,
                data: body
            })

        } catch (err) {
            console.error(err.message);
        }

        for (let i = 0; i < ingredientList.length; i++) {
            try {
                const body = ingredientList[i]
                const response = axios({
                    method: 'post',
                    url: `http://localhost:5000/sandwiches/sandwich/17/${i}`,
                    data: body
                })
            } catch (err) {
                console.error(err.message);
            }
        }
    }

    return (

        <form className="body-text" onSubmit={handleSubmit}>

            <h3 >Choose Your Bread:</h3>
            {breads.map(bread => (
                <div className="form-check form-check-inline" key={bread.ing_id}>
                    <input className="form-check-input" type="checkbox" id={bread.ing_id} value={bread.ing_id} onChange={e => ingredientList.push(e.target.value)} />
                    <label className="form-check-label" htmlFor={bread.ing_id}> {bread.ing_name}</label>
                </div>
            ))}

            <h3 >Choose Your Meats:</h3>
            {meats.map(meat => (
                <div className="form-check form-check-inline" key={meat.ing_id}>
                    <input className="form-check-input" type="checkbox" id={meat.ing_id} value={meat.ing_id} onChange={e => ingredientList.push(e.target.value)} />
                    <label className="form-check-label" htmlFor={meat.ing_id}> {meat.ing_name}</label>
                </div>
            ))}

            <h3 >Choose Your Cheese:</h3>
            {cheeses.map(cheese => (
                <div className="form-check form-check-inline" key={cheese.ing_id}>
                    <input className="form-check-input" type="checkbox" id={cheese.ing_id} value={cheese.ing_id} onChange={e => ingredientList.push(e.target.value)} />
                    <label className="form-check-label" htmlFor={cheese.ing_id}> {cheese.ing_name} </label>
                </div>
            ))}

            <h3 >Choose Your Veggies:</h3>
            {veggies.map(veggie => (
                <div className="form-check form-check-inline" key={veggie.ing_id}>
                    <input className="form-check-input" type="checkbox" id={veggie.ing_id} value={veggie.ing_id} onChange={e => ingredientList.push(e.target.value)} />
                    <label className="form-check-label" htmlFor={veggie.ing_id}> {veggie.ing_name} </label>
                </div>
            ))}

            <h3 >Choose Your Sauce:</h3>
            {sauces.map(sauce => (
                <div className="form-check form-check-inline" key={sauce.ing_id}>
                    <input className="form-check-input" type="checkbox" id={sauce.ing_id} value={sauce.ing_id} onChange={e => ingredientList.pushBack(e.target.value)} />
                    <label className="form-check-label" htmlFor={sauce.ing_id}> {sauce.ing_name} </label>
                </div>
            ))}

            <br /><br />
            <h3>Name Your Sandwich:</h3>
            <input type="text" onChange={e => setName(e.target.value)} />
            <br /><br />
            <button type="submit" className="btn btn-primary btn-lg btn-delete">Wrap This Up!</button>
        </form>
    )
}

export default Create;