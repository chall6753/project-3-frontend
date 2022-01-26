import React, {useState} from "react";

function AddIngredients(){
    const[ingredientName,setIngredientName]=useState('')
    const[quantity,setQuantity]=useState('')
    const[unit,setUnit]=useState('')
    const[recipeIngredients,setRecipeIngredients]=useState([])
    
    function handleAddIngredient(e){
        e.preventDefault()
        let ingredient = {ingredient:ingredientName, quantity:quantity, unit: unit}
        let updatedIngredients = [...recipeIngredients,ingredient]
        setRecipeIngredients(updatedIngredients)
    }
    return(
        <div>
            <form>
                <label>Ingredient: </label>
                <input type="text" onChange={(e)=>setIngredientName(e.target.value)}></input>
                <label>Quantity:</label>
                <input type="text" onChange={(e)=>setQuantity(e.target.value)}></input>
                <label>Unit:</label>
                <input type='text' onChange={(e)=>setUnit(e.target.value)}></input>
                <button type="submit" onClick={handleAddIngredient}>Add Ingredient</button>
            </form>     
            <ul>
                {recipeIngredients.length>0 && 
                    recipeIngredients.map((ingredient)=>{
                        return <li key={ingredient.ingredient}>{ingredient.ingredient} {ingredient.quantity} {ingredient.unit}</li>
                }) 
            }
            </ul>
        </div>
    );
}
export default AddIngredients;