import "./Style.css"
import axios from 'axios'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function UserHome() {

    const [sandwiches, setSandwich] = useState([]);
    const [usedIngredients, setUsedIngredients] = useState([]);
    const ingredients = [];
    React.useEffect(() => {
        try {
            axios
                .get(`http://localhost:5000/sandwiches/2`)
                .then(response => {
                    setSandwich(response.data)
                })

        } catch (err) {
            console.error(err.message)
        }
    }, [])

    const deleteSandwich = async (id) => {


        try {
            await axios.delete(`http://localhost:5000/sandwiches/sandwich/${id}`, {

            });
            setSandwich(sandwiches.filter(sandwich => sandwich.sandwich_id !== id));
            window.location = "/UserHome";
        } catch (err) {
            console.error(err.message)
        }
    }

    console.log(sandwiches.length)

    console.log(sandwiches);
    console.log(usedIngredients);
    console.log(ingredients);

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Burger HQ!</h1>
                <p className="lead">Welcome!</p>
                <Link className="btn btn-primary btn-lg" to="/NameSandwich" role="button">Get To Makin'!</Link>
                <Link className="btn btn-primary btn-lg" to="/" role="button">Sign Out</Link>
            </div>
            <h3 className="body-text">Here's your previous creations!</h3>
            <div className="d-flex flex-row bd-highlight mb-3" >
                {sandwiches.map(sandwich => (
                    <div className="body-text" key={sandwich.sandwich_id}>
                        <div className="card">
                            <img src="https://static.onecms.io/wp-content/uploads/sites/9/2013/12/06/2012-r-xl-vegetable-sandwich-with-dill-sauce-2000.jpg"
                                className="card-img-top card-img" alt="Sandwich" />

                            <div className="card-body" key={sandwich.sandwich_id}>
                                <h5 className="card-title">{sandwich.sandwich_name}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{sandwich.ingredient_id}</li>
                                <li className="list-group-item"><button className="btn btn-danger" onClick={() => deleteSandwich(sandwich.sandwich_id)}>Delete</button></li>
                            </ul>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default UserHome;