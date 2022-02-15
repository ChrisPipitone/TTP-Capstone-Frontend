import "./Style.css"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function UserHome( {setAuth} ) {

    const [sandwichName, setSandwichName] = useState ();
    const [sandwich_id, setsandwichId] = useState();

    async function getName () {
        try {
            const response = await fetch("http://localhost:5000/userHome/",{
                method: "GET",
                headers: { token: localStorage.token }
            })

            const parseRes = await response.json();

            //this response contains an array of objects that are key values pairs with 
            //the sandwich name's and id's of the user logged in
            //use the name as the title for the sandwich card
            //use the id in a second fetch to get all the ingredients of each id
            //make a 2d array that first holds the ids then second holds the ingredients for each

            //use that 2d array? should use a better data structure? to be parsed by the html for each card
            //use card code from gif assignment to do this part
            
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect( () => {
        getName();
    },);

    const logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Burger HQ!</h1>
                <p className="lead">Welcome!</p>
                <Link className="btn btn-primary btn-lg" to="/NameSandwich" role="button">Get To Makin'!</Link>
                <Link className="btn btn-primary btn-lg" to="/" role="button" onClick={ e => logout(e) }>Sign Out</Link>
            </div>
            <h3 className="body-text">Here's your previous creations!</h3>
            <div className="d-flex flex-row bd-highlight mb-3">
                <div className="card body-text">
                    <img src="https://static.onecms.io/wp-content/uploads/sites/9/2013/12/06/2012-r-xl-vegetable-sandwich-with-dill-sauce-2000.jpg"
                        className="card-img-top card-img" alt="Sandwich" />
                    <div className="card-body">
                        <h5 className="card-title">Sandwich Name Here</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Ingredient 1</li>
                        <li className="list-group-item">Ingredient 2</li>
                        <li className="list-group-item">Ingredient 3</li>
                    </ul>
                    <div className="card-body">
                        <button className="btn btn-danger" /*onClick={() => deleteSandwich(sandwich.sandwich_id)}*/>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHome;