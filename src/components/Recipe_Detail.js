import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom"
import Comment from "./Comment.js"

function Recipe_Detail(){
    const location=useLocation()
    const {recipe} = location.state 
    const [recipeIngredients, setRecipeIngredients]=useState([])
    const [deleted, setDeleted] = useState('')
    
    useEffect(() =>{
        fetch(`http://localhost:9292/recipes/${recipe.id}`)
                .then(res => res.json())
                .then(data => setRecipeIngredients(data))        
    },[])
    function handleDeleteRecipe(){
        fetch(`http://localhost:9292/recipes/${recipe.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res)=> res.json())
        .then((res)=>setDeleted(res))
    }
    if (deleted !== ''){
        return <h2>Recipe Deleted</h2>
    }
    else if (!Array.isArray(recipeIngredients)){
        let chef = recipeIngredients.chef
        return(
            <div key={recipe.id}>
                    <h2>{recipe.recipe_name}</h2>
                    <p>place image tag here</p>
                    <h3>By: Chef <Link to={`/chefs/${recipeIngredients.chef.id}`}state={chef}>{recipeIngredients.chef.first_name}</Link></h3>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipeIngredients.ingredients.length >= 1 ? 
                            recipeIngredients.ingredients.map(ingredient=> {
                                return <li key={ingredient.id}>{ingredient.ingredient}</li> })
                            :<li>empty</li>
                        }
                    </ul>
                    <h3>Cooking Instructions</h3>
                    <p>{recipe.instructions}</p>
                    <h3>Comments</h3>
                    <ul>  
                        {recipeIngredients.comments.map(comment=> {
                                return <Comment comment={comment}/>}
                            )
                        }
                    </ul> 
                    <button type='button' onClick={handleDeleteRecipe}>Delete Recipe</button> 
            </div>
        )
    }else{return null}
}
export default Recipe_Detail;