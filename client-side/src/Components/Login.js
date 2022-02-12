import './Style.css'
import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';


function Login( {setAuth} ) {
    const[inputs, setInputs] = useState( {
        email: "",
        password: ""
    }
    )

    const { email, password } = inputs;

    const onChange = (e) => {
        setInputs( { ...inputs, [e.target.name] : e.target.value });
    };


    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const body = { email, password};

            const response = await fetch("http://localhost:5000/auth/login",
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
            <form onSubmit={handleSubmit}>
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
                                <Link className="btn btn-primary btn-lg" to="/Register" role="button">Register</Link>
                            </ul>
                        </div>
                    </nav>
                    <h1>Burger HQ</h1>
                    <img className="form-img" src="https://dcassetcdn.com/design_img/2808265/132070/132070_15359255_2808265_834eb78a_image.jpg" alt="Burger HQ Logo" />

                    <label htmlFor="email">  </label>
                    <input type="text" placeholder="Email" name="email" value={email} onChange={e => onChange(e) }/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="text" placeholder="Password" name="password" value={password} onChange={e => onChange(e)} />
                </div>
                <button className="btn-primary">Log In</button>

            </form>
        </div>
    )
}

export default Login 