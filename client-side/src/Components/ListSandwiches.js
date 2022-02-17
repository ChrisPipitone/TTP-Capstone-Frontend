import React, {Fragment, useEffect, useState} from 'react';
import SandwichCard from './SandwichCard';

const ListSandwiches = (userId) => {
    const [sandwiches, setSandwiches] = useState([]);
    const [uid, setUid] = useState();

    ///need to do this
    const deleteSandwich = async (id) => {
        try {
            const deleteSandwich = await fetch(`http://localhost:5000/sandwiches/${id}`, {
                method: "DELETE"
            });
            setSandwiches(sandwiches.filter(sandwich => sandwiches.sandwich_id !== id));

            console.log(deleteSandwich);
        } catch (error) {
            console.error(error.mesasge)
        }
    }

    const getSandwiches = async (id) => {
        try {
            //console.log(userId.uId);
            const response = await fetch(`http://localhost:5000/sandwiches/${userId.uId}`)

            //this needs to return all sandwiches and ingredients in the body

           // const response = await fetch(`http://localhost:5000/sandwiches`)
            const jsonData = await response.json();
            setSandwiches(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect( () => {
        getSandwiches();
        setUid(userId.uId);
    }, [userId]);

    return (
        <div className="d-flex flex-row bd-highlight mb-3">
             {
                sandwiches.map(element => 
                    <div key= { element.sandwich_id} >
                            <SandwichCard sandwich={element} />
                    </div>    
                )
            }
        </div>
    )
}

export default ListSandwiches;