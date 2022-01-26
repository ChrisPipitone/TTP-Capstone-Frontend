import './Style.css'
import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
    const [sandwiches, setSandwich] = useState([]);
    const [usedIngredients, setUsedIngredients] = useState([]);

    React.useEffect(() => {
        try {
            axios
                .get(`http://localhost:5000/sandwiches/1`)
                .then(response => {
                    setSandwich(response.data)
                })
            fetchIngredients();
        } catch (err) {
            console.error(err.message)
        }
    }, [])

    console.log(sandwiches.length)

    const fetchIngredients = async () => {
        for (let i = 0; i < sandwiches.length; i++) {
            try {
                axios
                    .get(`http://localhost:5000/sandwiches/sandwich/${i}`)
                    .then(response => {
                        setUsedIngredients(response.data)
                    })

            } catch (err) {
                console.error(err.message)
            }
        }
    }

    console.log(sandwiches);
    console.log(usedIngredients);

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


            <div className="d-flex flex-row bd-highlight mb-3" className="body-text">
                {sandwiches.map(sandwich => (
                    <div className="card" >
                        <img src="https://static.onecms.io/wp-content/uploads/sites/9/2013/12/06/2012-r-xl-vegetable-sandwich-with-dill-sauce-2000.jpg"
                            className="card-img-top card-img" alt="Sandwich" />


                        <div>
                            <div className="card-body" key={sandwich.sandwich_id}>
                                <h5 className="card-title">{sandwich.sandwich_name}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{sandwich.ingredient_id}</li>
                            </ul>
                        </div>

                    </div>))}
            </div>

        </div>
    )
}

export default Home;