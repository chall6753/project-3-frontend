import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import {Card} from "react-bootstrap"

function Recipe({recipe, chefs}){
    let chef = chefs.filter(chef=> chef.id === recipe.chef_id)[0]
    
    return(
        <Card>
            <Link 
            to={`/recipes/${recipe.id}`}
            state={{recipe,chefs}}
            >
                <div key={recipe.id}>
                    <h3 >{recipe.recipe_name}</h3>
                </div>
            </Link>
                <h3>Chef: {chef.first_name}</h3>
        </Card>
    );
}

export default Recipe;