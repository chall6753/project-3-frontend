import React, {useEffect, useState} from "react";
import Recipe from "./Recipe.js"

function Recipes({recipes}){
const[filteredRecipes,setFilteredRecipes]=useState(recipes)
console.log(recipes)

    function filterRecipes(e){
        console.log(e)
        let searchedRecipe=e.target.value
        console.log(searchedRecipe)
        if(searchedRecipe === ''){setFilteredRecipes(recipes)}else{//if no search text display all recipes
          setFilteredRecipes(recipes.filter((recipe)=>{
           return recipe.name.toLowerCase() === searchedRecipe.toLowerCase() //right now has to match whole word
        }))  
        }    
    }
    // useEffect(()=>{window.onload = setFilteredRecipes(recipes)},[])
    return(
        <div>

            <h1>Find a Recipe</h1>
            <form>
                <input type="text" onChange={filterRecipes} placeholder="search by recipe"></input>
            </form>
            {filteredRecipes.map((recipe) =>{
                
                console.log(recipe)
                return <Recipe recipe={recipe}/>
            })}

        </div>
        
        
    );
}

export default Recipes;