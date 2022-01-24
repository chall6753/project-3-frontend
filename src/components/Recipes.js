import React, {useEffect, useState} from "react";
import Recipe from "./Recipe.js"
import {Card} from "react-bootstrap"

function Recipes({recipes,chefs}){
const[filteredRecipes,setFilteredRecipes]=useState([])
    
    function filterRecipes(e){
        let searchedRecipe=e.target.value
        console.log(searchedRecipe)
        if(searchedRecipe == ''){setFilteredRecipes(recipes)}else{//if no search text display all recipes
          setFilteredRecipes(recipes.filter((recipe)=>{
           return recipe.recipe_name.toLowerCase() == searchedRecipe.toLowerCase() //right now has to match whole word
        }))  
        }    
    }
    function filterRecipesByIngredient(e){
        console.log(e)
    }
    useEffect(()=>{window.onload = setFilteredRecipes(recipes)},[])
    return(
        <div>

            <h1>Find a Recipe</h1>
            <form>
                <input type="text" onChange={filterRecipes} placeholder="search by recipe"></input>
                {/* <input type="text" onChange={filterRecipesByIngredient} placeholder="search by ingredient"></input> */}
            </form>
            {filteredRecipes.map((recipe) =>{
                return <Recipe recipe={recipe} chefs={chefs}/>
            })}

        </div>
        
        
    );
}

export default Recipes;