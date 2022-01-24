import "./Style.css"
import React from 'react';
import { Link } from 'react-router-dom'

function UserHome() {
    /*
        const [sandwiches, setSandwich] = useState([]);
    
        //delete function
        const deleteSandwich = async (id) => {
            try {
                const deleteSandwich = await fetch(``, {
                    method: "DELETE"
                });
                setSandwich(sandwiches.filter(sandwich => sandwiches.sandwich_id !== id));
                window.location = "/UserHome";
            } catch (err) {
                console.error(err.message)
            }
        }
    
        const getSandwiches = async () => {
            try {
                const response = await fetch("")
                const jsonData = await response.json();
                setGames(jsonData);
                console.log(jsonData)
            } catch (err) {
                console.error(err.message);
            }
        }
    
        useEffect(() => {
            getSandwich();
        }, []);
    */
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Burger HQ!</h1>
                <p className="lead">Welcome!</p>
                <Link className="btn btn-primary btn-lg" to="/Create" role="button">Get To Makin'!</Link>

            </div>
            <h3>Here's your previous creations!</h3>
            <div class="d-flex flex-row bd-highlight mb-3">
                <div className="card">
                    <img src="https://static.onecms.io/wp-content/uploads/sites/9/2013/12/06/2012-r-xl-vegetable-sandwich-with-dill-sauce-2000.jpg"
                        className="card-img-top card-img" alt="Sandwich" />
                    <div className="card-body">
                        <h5 className="card-title">Sandwich Name Here</h5>
                        <p className="card-text">Possible description here</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Ingredient 1</li>
                        <li className="list-group-item">Ingredient 2</li>
                        <li className="list-group-item">Ingredient 3</li>
                    </ul>
                    <div class="card-body">
                        <button className="btn btn-danger" /*onClick={() => deleteSandwich(sandwich.sandwich_id)}*/>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHome;