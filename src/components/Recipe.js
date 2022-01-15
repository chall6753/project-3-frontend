import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"

function Recipe({recipe,chefs}){
    let chef = chefs.filter(chef=> chef.id === recipe.chef_id)

    return(
        <div>
        <Link 
        to={`/recipes/${recipe.id}`}
        state={{recipe,chefs}}
        >
            <div key={recipe.id}>
                <h2 >{recipe.recipe_name}</h2>
                
            </div>
        </Link>
        <h3>Chef: {chef[0].first_name}</h3>
        </div>
    );
}

export default Recipe;