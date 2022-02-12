import './Style.css'
import React, { useState } from 'react';
import axios from 'axios'
import { Navigate, Link } from 'react-router-dom';

function Register( {setAuth} ) {
    const [inputs, setInputs] = useState( {
        email: "",
        password: "",
        name: ""
    })

    const { email, password, name} = inputs;

    const onChange = (e) => {
        setInputs( { ...inputs, [e.target.name] : e.target.value });
    };


    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const body = { email, password, name };

            const response = await fetch("http://localhost:5000/auth/register",
                {
                    method: "POST",
                    headers: {
                    "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );

            //the jwt token -vvvvvv-
            const parseRes = await response.json();
            
            localStorage.setItem("token", parseRes.token);

            setAuth(true);

        } catch (error) {
            console.error(error.message);
        }
    };

    return (

        <div className="form body-text">
            <form onSubmit={onSubmitForm}>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="btn btn-primary btn-lg" to="/" role="button">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="btn btn-primary btn-lg" to="/Login" role="button">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <h1>Burger HQ</h1>
                    <img className="form-img" src="https://dcassetcdn.com/design_img/2808265/132070/132070_15359255_2808265_834eb78a_image.jpg" alt="Burger HQ Logo" />

                    <label htmlFor="email">  </label>
                    <input type="text" placeholder="Email" name="email" value={email} onChange={e => onChange(e)} />
                </div>
                <div>
                    <label htmlFor="text">  </label>
                    <input type="text" placeholder="Username" name="name" value={name} onChange={e => onChange(e)}/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" placeholder="Password" name="password" value={password}onChange={e => onChange(e)}/>
                </div>
                <button className="btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default Register;