import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const SandwichCard = ( sandwich ) => {

    const renderCardInfo = () => (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{sandwich.sandwich.sandwich_name}</Card.Title>
                <Card.Img 
                    src="https://static.onecms.io/wp-content/uploads/sites/9/2013/12/06/2012-r-xl-vegetable-sandwich-with-dill-sauce-2000.jpg" 
                    className="card-img-top card-img" alt="Sandwich" 
                />
                <ul className="list-group list-group-flush">
                    {/* <li className='list-group-item'>sandwich.sandwich.ingredient</li> */}
                    <li className='list-group-item'>sandwich.sandwich.ingredient</li>
                </ul>

                <button className="btn btn-danger" /*onClick={() => deleteSandwich(sandwich.sandwich_id)}*/>Delete</button>
            </Card.Body>
        </Card>
    )

    return (
        <div className="container">
             {sandwich ? renderCardInfo() : <p> Failed to load user sandwich</p>}
        </div>
    )

}


export default SandwichCard;