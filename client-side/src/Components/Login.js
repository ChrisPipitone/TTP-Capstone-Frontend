import './Style.css'
import React, { useState } from 'react';
import axios from 'axios'
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
        // try {
        //     const body = { email, password }
        //     const response = axios({
        //         method: 'POST',
        //         url: ``,
        //         data: body
        //     })

        //     
        // } catch (err) {
        //     console.error(err.message)
        // }

    }

    if (redirect)
        return (<Navigate to="/UserHome" />)

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
                    <input type="text" placeholder="Email" name="email" onChange={handleEmail} />
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="text" placeholder="Password" name="password" onChange={handlePassword} />
                </div>
                <button className="btn-primary">Log In</button>

            </form>
        </div>
    )
}

export default Login 