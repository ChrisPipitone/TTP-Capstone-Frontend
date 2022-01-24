import "./Style.css"
import bread from "./Images/bread.png"
import React from 'react';
import { Link } from 'react-router-dom'

function Create() {
    return (

        <div className="body-text">
            <h3>Choose Your Bread:</h3>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label className="form-check-label" htmlFor="inlineCheckbox1"><img className="menu-img" src={bread} /></label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label className="form-check-label" htmlFor="inlineCheckbox2"><img className="menu-img" src={bread} /></label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label className="form-check-label" htmlFor="inlineCheckbox3"><img className="menu-img" src={bread} /></label>
            </div>

            <h3>Choose Your Meats:</h3>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label className="form-check-label" htmlFor="inlineCheckbox3">3</label>
            </div>

            <h3>Choose Your Cheese:</h3>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label className="form-check-label" htmlFor="inlineCheckbox3">3</label>
            </div>

            <h3>Choose Your Veggies:</h3>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label className="form-check-label" htmlFor="inlineCheckbox3">3</label>
            </div>

            <h3>Choose Your Sauces:</h3>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label className="form-check-label" htmlFor="inlineCheckbox3">3</label>
            </div>

            <br /><br />

            <Link className="btn btn-primary btn-lg btn-delete" to="/UserHome" role="button">Wrap This Up!</Link>
        </div>
    )
}

export default Create;