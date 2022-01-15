import React, {useEffect, useState} from "react";
import Recipe from "./Recipe.js"

function Recipes({recipes,chefs}){


  console.log(chefs)
    return(
        <div>

            <h1>Find a Recipe</h1>
            {recipes.map((recipe) =>{
                                
                return <Recipe recipe={recipe} chefs={chefs}/>
            })}
        </div>
        
        
    );
}

export default Recipes;