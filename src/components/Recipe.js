import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import {Card} from "react-bootstrap"

function Recipe({recipe, chef}){
    
    
    return(
        <Card>
            <Link to= {`/recipes/${recipe.id}`}>
                <h2>{recipe.name}</h2>
            </Link>
            
            <h3>{chef.first_name}</h3>
        </Card>
    );
}

export default Recipe;