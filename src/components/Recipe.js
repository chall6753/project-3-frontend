import React from "react";
import {Link} from "react-router-dom"
import {Card} from "react-bootstrap"

function Recipe({recipe}){
    console.log(recipe)
    
    return(
        <Card>
            <Link to= {`/recipes/${recipe.id}`}>
                <h2>{recipe.name}</h2>
            </Link>
            
            <h3>{recipe.user.first_name}</h3>
        </Card>
    );
}

export default Recipe;