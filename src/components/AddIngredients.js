import React, {useState} from "react";
import { Card } from "react-bootstrap";

function AddIngredients(){
    const[ingredientName,setIngredientName]=useState('')
    const[quantity,setQuantity]=useState('')
    const[unit,setUnit]=useState('')
    const[ingredients,setIngredients]=useState([])
    
    console.log(ingredients)
    function handleAddIngredient(e){
        e.preventDefault()
        let ingredient = {ingredient:ingredientName, quantity:quantity, unit: unit}
        console.log(ingredient)
        
        let updatedIngredients = [...ingredients,ingredient]
        console.log(updatedIngredients)
        setIngredients(updatedIngredients)
    }
    console.log(ingredients)
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
                {ingredients.length>0 && 
                ingredients.map((ingredient)=>{
                    return <li key={ingredient.ingredient}>{ingredient.ingredient} {ingredient.quantity} {ingredient.unit}</li>
                }) 
            }
            </ul>
            
        </div>
    
        
    );
}

export default AddIngredients;