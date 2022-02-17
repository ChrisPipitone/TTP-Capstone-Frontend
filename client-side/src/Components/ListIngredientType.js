import React, { useEffect, useState } from 'react';

const ListIngredientType = (type) => {
    const [ingredients, setIngredients] = useState([]);

    const getIngredients = async () => {
        try {
            //console.log(userId.uId);
            const response = await fetch(`http://localhost:5000/ingredients/${type.type}`)

            const jsonData = await response.json();

            setIngredients(jsonData);


            console.log(ingredients)
            console.log(type)
        } catch (error) {
            console.error(error.message);
        }
    }

    const handleChange = async (event) => {
        // event.preventDefault()

        //if this value is toggled we need to update the state in CreateSandwich
    }
   

    useEffect( () => {
        getIngredients();
    }, []);

    //in this file is where to organize / display ingredients based on type
    //the above request gets all data from the ing table so name, id of that type

    return (
        <div>
            {ingredients.map(ingredient => (
                <div className="form-check form-check-inline" key={ingredient.ing_id}>
                    <input className="form-check-input" type="checkbox" id={ingredient.ing_id} value={ingredient.ing_id} onChange={handleChange} />
                    <label className="form-check-label" htmlFor={ingredient.ing_id}> {ingredient.ing_name}</label>
                </div>
            ))}
        </div>
    )
}

export default ListIngredientType;