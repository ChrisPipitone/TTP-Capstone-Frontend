import './Style.css'
import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
    const [sandwiches, setSandwich] = useState([]);

    try {
        axios
            .get(``)
            .then(response => {
                setSandwich(sandwiches = response.data)
            })
    } catch (err) {
        console.error(err.message)
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4 jumbo-text">Burger HQ!</h1>
                <p className="lead jumbo-text">Create your own specialty sandwiches!</p>

                <p className="jumbo-text-inner">Choose from dozens of choices of ingredients where you can freely mix and match however you want</p>
                <Link className="btn btn-primary btn-lg" to="/Login" role="button">Come On In!</Link>
                <h2>Or</h2>
                <Link className="btn btn-primary btn-lg" to="/Register" role="button">Get Started</Link>

            </div>
            <h3 className="body-text">Check out our popular creations below!</h3>

            {sandwiches.map(sandwich => (


                <div className="d-flex flex-row bd-highlight mb-3" className="body-text">
                    <div className="card" key={sandwich.sandwich_id}>
                        <img src="https://static.onecms.io/wp-content/uploads/sites/9/2013/12/06/2012-r-xl-vegetable-sandwich-with-dill-sauce-2000.jpg"
                            className="card-img-top card-img" alt="Sandwich" />
                        <div className="card-body">
                            <h5 className="card-title">{sandwich.sandwich_name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Ingredient 1</li>
                            <li className="list-group-item">Ingredient 2</li>
                            <li className="list-group-item">Ingredient 3</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Home;