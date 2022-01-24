import './Style.css'
import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)

    const handleEmail = (event) => {
        setUsername(event.target.value)
    }

    const handleUsername = (event) => {
        setUsername(event.target.value)
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
                    <nav className="navbar navbar-expand-lg navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link class="btn btn-primary btn-lg" to="/" role="button">Home</Link>
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
                    <input type="text" placeHolder="Email" name="email" onChange={handleEmail} />
                </div>
                <div>
                    <label htmlFor="text">  </label>
                    <input type="text" placeHolder="Username" name="username" onChange={handleUsername} />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="text" placeHolder="Password" name="password" onChange={handlePassword} />
                </div>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default Register;