import React, {useState, useEffect} from "react";
import {useParams, useLocation} from "react-router-dom"
import Comment from "./Comment.js"

function Recipe_Detail(){
    const location=useLocation()
    const {recipe} = location.state //using destructuring 
    const [recipeIngredients, setRecipeIngredients]=useState([])

    useEffect(() =>{
        fetch(`http://localhost:9292/recipes/${recipe.id}`)
                .then(res => res.json())
                .then(data => setRecipeIngredients(data))
    },[1])
        
        
    
    
    
    console.log(recipeIngredients)
    if (!Array.isArray(recipeIngredients)){console.log('yeet')}
    if (!Array.isArray(recipeIngredients)){
        return(
            <div>
                    <h2>{recipe.recipe_name}</h2>
                    <h3>By: Chef {recipeIngredients.chef.first_name}</h3>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipeIngredients.ingredients.length >= 1 ? 
                            recipeIngredients.ingredients.map(ingredient=> {
                                return <li>{ingredient.ingredient}</li> })
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
               
                
            </div>
        )

    }else{return null}
   
}

export default Recipe_Detail;