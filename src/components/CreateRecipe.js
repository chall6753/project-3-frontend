import React from "react";
import {Card} from 'react-bootstrap'
import AddIngredients from "./AddIngredients.js";

function CreateRecipe({chefs}){
    function handleSubmitRecipe(e){
        e.preventDefault()
    }
console.log(chefs)
    return(
        <div>
            <h1>Create New Recipe</h1>
            <form>
                <label>Chef: </label>
                <select name='chef'>
                    {chefs.map(chef=>{
                       return <option value={chef.first_name}>{chef.first_name}</option>
                    })}
                    <option value='chefname'>ChefName</option>
                </select>
                <br></br>
                <h2>Ingredients</h2>
                <AddIngredients></AddIngredients>
                <h2>Instructions</h2>
                <label>Cooking Instructions: </label>
                <textarea type='paragraph_text' cols='80'></textarea>
            </form>  
            <button type='submit' onClick={handleSubmitRecipe}>Submit Recipe</button>          
        </div>
    );
}

export default CreateRecipe;