import './Style.css'
import React from 'react';
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Burger HQ!</h1>
                <p className="lead">Create your own specialty sandwiches!</p>

                <p>Choose from dozens of choices of ingredients where you can freely mix and match however you want</p>
                <Link className="btn btn-primary btn-lg" to="/Login" role="button">Come On In!</Link>
                <h2><strong>Or</strong></h2>
                <Link className="btn btn-primary btn-lg" to="/Register" role="button">Get Started</Link>

            </div>
            <h3>Check out our popular creations below!</h3>
            <div class="d-flex flex-row bd-highlight mb-3">
                <div className="card">
                    <img src="https://static.onecms.io/wp-content/uploads/sites/9/2013/12/06/2012-r-xl-vegetable-sandwich-with-dill-sauce-2000.jpg"
                        className="card-img-top card-img" alt="Sandwich" />
                    <div className="card-body">
                        <h5 className="card-title">Sandwich Name Here</h5>
                        <p className="card-text">Possible description here</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Ingredient 1</li>
                        <li className="list-group-item">Ingredient 2</li>
                        <li className="list-group-item">Ingredient 3</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Home;