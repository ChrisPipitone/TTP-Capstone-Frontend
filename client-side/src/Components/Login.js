import './Style.css'
import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setRedirect(true)
    }

    if (redirect)
        return (<Navigate to="/UserHome" />)

    return (

        <div className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-dark ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="btn btn-primary btn-lg" to="/" role="button">Home</Link>
                                </li>
                                <Link class="btn btn-primary btn-lg" to="/Register" role="button">Register</Link>
                            </ul>
                        </div>
                    </nav>
                    <h1>Burger HQ</h1>
                    <img class="form-img" src="https://dcassetcdn.com/design_img/2808265/132070/132070_15359255_2808265_834eb78a_image.jpg" alt="Burger HQ Logo" />

                    <label htmlFor="email">  </label>
                    <input type="text" placeHolder="Email" name="email" onChange={handleEmail} />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="text" placeHolder="Password" name="password" onChange={handlePassword} />
                </div>
                <button>Log In</button>

            </form>
        </div>
    )
}

export default Login 