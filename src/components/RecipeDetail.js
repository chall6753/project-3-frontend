import React, {useState, useEffect} from "react";
import {Link, useLocation, useParams} from "react-router-dom"


function RecipeDetail(){
    const [recipe, setRecipe]=useState('')
   
let recipe_id = useParams().id
    useEffect(()=>{
        fetch(`http://localhost:9292/recipes/${recipe_id}`)
        .then((res)=>res.json())
        .then((data)=>setRecipe(data))
    },[])
   function deleteRecipe(){
    fetch(`http://localhost:9292/recipes/${recipe_id}/delete_recipe`,{
        method: 'DELETE',
    })
    .then((res)=>res.json())
    .then((res)=>console.log(res))
   }
   console.log(recipe)
   if (recipe !=''){
    return(
        <div >
                <h2>{recipe.name}</h2>
                <p>place image tag here</p>
                <h3>By: {recipe.user.first_name + " " + recipe.user.last_name} </h3>
                <h3>Ingredients</h3>
                    
                    <ul>
                        {recipe.ingredients.map((ingredient)=>{
                            return <li key={ingredient.id}>{ingredient.name}</li>
                        })}
                    </ul>
                <ul>
                    {/* {recipeIngredients.ingredients.length >= 1 ? 
                        recipeIngredients.ingredients.map(ingredient=> {
                            return <li key={ingredient.id}>{ingredient.ingredient}</li> })
                        :<li>empty</li>
                    } */}
                </ul>
                <h3>Cooking Instructions</h3>
                <p>{recipe.instructions}</p>
                <h3>Comments</h3>
                
                <button type='button' onClick={deleteRecipe}>Delete</button>
        </div>
    )
   }else return (<p>loading...</p>)
    
   
}
export default RecipeDetail;