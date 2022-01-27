import "./Style.css"
import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function NameSandwich() {

    const [name, setName] = useState([]);
    const [redirect, setRedirect] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const body = { name }
            const response = await axios({
                method: 'post',
                url: `http://localhost:5000/sandwiches/2/${name}`,
                data: body
            }).then(setRedirect(true))
        } catch (err) {
            console.error(err.message);
        }
    }

    if (redirect)
        return (<Navigate to="/AddIngredients" />)

    return (
        <form className="body-text" onSubmit={handleSubmit}>
            <h3>Name Your Sandwich:</h3>
            <input type="text" onChange={e => setName(e.target.value)} />
            <br /><br />
            <button type="submit" className="btn btn-primary btn-lg btn-delete">Confirm Sandwich Name</button>
        </form>
    )
}

export default NameSandwich