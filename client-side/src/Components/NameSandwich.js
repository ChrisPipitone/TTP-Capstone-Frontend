import "./Style.css"
import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function NameSandwich() {

    const [name, setName] = useState([]);
    const [redirect, setRedirect] = useState(false)
    const [id, setId] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const body = { name }
            const response = await axios({
                method: 'post',
                url: `http://localhost:5000/sandwiches/2/${name}`,
                data: body
               
            })// }).then(setRedirect(true))
            console.log(response.data[0].sandwich_id)
            setId(response.data[0].sandwich_id)
            setRedirect(true)
        } catch (err) {
            console.error(err.message);
        }
    }
    console.log("saf sadf::: " + id);
    if (redirect)
        return (<Navigate to="/AddIngredients" sId = {id}/>)

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