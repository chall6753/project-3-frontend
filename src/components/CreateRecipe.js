import React, {useState} from "react";
import {Card} from 'react-bootstrap'
import AddIngredient from "./AddIngredient.js";

function CreateRecipe({chefs}){
    const[chefId,setChefId]=useState('')
    const[recipeName,setRecipeName]=useState('')
    const[recipeIngredients,setRecipeIngredients]=useState([])
    const[instructions,setInstructions]=useState('')

    function handleAddIngredient(ingredientName,quantity,unit){
        let ingredient = {ingredient:ingredientName, quantity:quantity, unit: unit}
        let updatedIngredients = [...recipeIngredients,ingredient]
        setRecipeIngredients(updatedIngredients)
    }

    function handleSubmitRecipe (e){
        e.preventDefault()
        fetch('http://localhost:9292/submit_recipe', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ingredients: recipeIngredients,
                recipeName: recipeName,
                chefId: chefId,
                instructions: instructions,

            }),
        })
        .then((r)=>r.json())
        .then((res) => window.alert(res));
        }
    
console.log(chefId)
    return(
        <div>
            <h1>Create New Recipe</h1>
            <form>
                <label>Chef: </label>
                <select name='chef' onChange={(e)=>setChefId(e.target.value)} placeholder='chef name'>
                    <option value={null}>Select Chef</option>
                    {chefs.map(chef=>{
                       return <option value={chef.id}>{chef.first_name}</option>
                    })}
                    
                </select>
                <label>Recipe Name</label>
                <input type="text" onChange={(e)=>setRecipeName(e.target.value)}></input>
                <br></br>
                <h2>Ingredients</h2>
                <AddIngredient onAddIngredient={handleAddIngredient}/>
                <ul>
                {recipeIngredients.length>0 && 
                    recipeIngredients.map((ingredient)=>{
                        return <li key={ingredient.ingredient}>{ingredient.ingredient} {ingredient.quantity} {ingredient.unit}</li>
                    }) 
                }
                </ul>
                <h2>Instructions</h2>
                <label>Cooking Instructions: </label>
                <textarea type='paragraph_text' cols='80' onChange={(e)=>setInstructions(e.target.value)}></textarea>
            </form>  
            <button type='submit' onClick={handleSubmitRecipe}>Submit Recipe</button>          
        </div>
    );
}

export default CreateRecipe;