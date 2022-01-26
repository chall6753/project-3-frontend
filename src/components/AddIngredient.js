import React, {useState} from "react";

function AddIngredient({onAddIngredient}){
    const[ingredientName,setIngredientName]=useState('')
    const[quantity,setQuantity]=useState('')
    const[unit,setUnit]=useState('')
    
    function handleSubmitRecipe(e){
        e.preventDefault()
        onAddIngredient(ingredientName, quantity, unit)
    }
    return(
        <div>
                <label>Ingredient: </label>
                <input type="text" onChange={(e)=>setIngredientName(e.target.value)}></input>
                <label>Quantity:</label>
                <input type="text" onChange={(e)=>setQuantity(e.target.value)}></input>
                <label>Unit:</label>
                <input type='text' onChange={(e)=>setUnit(e.target.value)}></input>
                <button type="submit" onClick={handleSubmitRecipe}>Add Ingredient</button>
                
        </div>
    );
}

export default AddIngredient;