import React from "react";
import {Link} from "react-router-dom"
import {Card} from "react-bootstrap"

function Recipe({recipe}){
    
    return(
        <Card key={recipe.id}>
            <Link to= {`/recipes/${recipe.id}`}>
                <h2>{recipe.name}</h2>
            </Link>
            
            <h3>By: {recipe.user.username}</h3>
        </Card>
    );
}

export default Recipe;