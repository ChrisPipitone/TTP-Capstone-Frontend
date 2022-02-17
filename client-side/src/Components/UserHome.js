import "./Style.css"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import SandwichCard from "./SandwichCard";
import ListSandwiches from "./ListSandwiches";

function UserHome( {setAuth} ) {

    const [userId, setuserId] = useState();

    async function getName () {
        try {
            const response = await fetch("http://localhost:5000/userHome/",{
                method: "GET",
                headers: { token: localStorage.token }
            })

            const parseRes = await response.json();
            setuserId( parseRes.user_id);

        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect( () => {
        getName();
    },[]);

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
                <Link className="btn btn-primary btn-lg" to="/CreateSandwich" role="button">Get To Makin'!</Link>
                <Link className="btn btn-primary btn-lg" to="/" role="button" onClick={ e => logout(e) }>Sign Out</Link>
            </div>
            <h3 className="body-text">Here's your previous creations!</h3>
            <div>
               <ListSandwiches uId={userId}/>
            </div>
        </div>
    )
}

export default UserHome;