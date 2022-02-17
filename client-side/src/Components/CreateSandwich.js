import React, {useState} from "react";
import ListIngredientType from "./ListIngredientType";
import ListSandwiches from "./ListSandwiches";

const CreatSandwich = (userId) => {

    //ingredients for the sandwich
    const [ingredients, setIngredients] = useState([]);

    //ingredients lists
    const [breads, setBreads] = useState([]);
    const [meats, setMeats] = useState([])
    const [cheeses, setCheeses] = useState([]);
    const [veggies, setVeggies] = useState([]);
    const [sauces, setSauces] = useState([]);

    const [sandwichName, setName] = useState([]); // where to put sandwich name
        

    // const handleChange = async (event) => {
    //     event.preventDefault()
    // }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const body = {ingredients};
            const newRes = await fetch(`http://localhost:5000/sandwiches/${userId.uId}`, {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(body) //idk about this part
            });
            
             window.location = "/userHome"; // /idk might need it change/ ??

        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div>
            <form className="body-text" onSubmit={onSubmitForm}>
                <h3>Name Your Sandwich:</h3>
                <input type="text" onChange={e => setName(e.target.value)} />
                <br /><br />

                <h3 >Choose Your Bread:</h3>
                <ListIngredientType type="bread" />

                <h3 >Choose Your Meats:</h3>
                <ListIngredientType type="meat" />

                <h3 >Choose Your Cheese:</h3>
                <ListIngredientType type="cheese" />

                <h3 >Choose Your Veggies:</h3>
                <ListIngredientType type="veggie" />

                {/* <h3 >Choose Your Sauce:</h3>          
                <ListIngredientType type="sauce" /> */}

                {/*
                 i didnt bother to put any sauces in my local db
                    just remove the comments from above 
                */}

                <br /><br />
                <button type="submit" className="btn btn-primary btn-lg btn-delete">Wrap It Up!</button>
            </form>
        </div>
    )
}

export default CreatSandwich;