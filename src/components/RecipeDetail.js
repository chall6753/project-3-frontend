import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom"


function RecipeDetail({deleteRecipe}){
    const [recipe, setRecipe]=useState('')
    const navigate = useNavigate()
   
let recipe_id = parseInt(useParams().id)
console.log(recipe_id)
    useEffect(()=>{
        fetch(`http://localhost:9292/recipes/${recipe_id}`)
        .then((res)=>res.json())
        .then((data)=>setRecipe(data))
        
    },[])
   function handleRecipeDelete(){
    fetch(`http://localhost:9292/recipes/${recipe_id}/delete_recipe`,{
        method: 'DELETE',
    })
    .then((res)=>res.json())
    .then((data)=>{
        deleteRecipe(data)
        navigate('/recipes')
    })
    
   }
   console.log(recipe)
   if (recipe !=''){
    return(
        <div >
                <h2>{recipe.name}</h2>
                <h3>By: {recipe.user.username} </h3>
                <h3>Ingredients</h3>
                    <ul>
                        {recipe.recipe_ingredients.map((ingredient)=>{
                            return <li key={ingredient.id}>{ingredient.quantity + ' ' + ingredient.unit + ' ' + ingredient.ingredient.name}</li>
                        })}
                    </ul>
                <h3>Cooking Instructions</h3>
                <p>{recipe.instructions}</p>
                <button type='button' onClick={handleRecipeDelete}>Delete</button>
        </div>
    )
   }else return (<p>loading...</p>)
    
   
}
export default RecipeDetail;