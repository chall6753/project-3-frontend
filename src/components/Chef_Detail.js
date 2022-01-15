import React, {useEffect, useState} from "react";
import {useParams, useLocation, Link} from "react-router-dom"


function Chef_Details(){
    const location=useLocation()
    const {chef} = location.state
    const [recipes, setRecipes]=useState([])

    useEffect(() =>{
        fetch(`http://localhost:9292/chefs/${chef.id}`)
        .then(res => res.json())
        .then(data => setRecipes(data))
        
      },[])
console.log(recipes)
    return(
        <div>
            <div key={chef.id} className="box" >
                <h2>{chef.first_name}</h2>
                <p>{chef.last_name}</p>
            </div> 
            <div>
                <h2>{`${chef.first_name}'s Recipes`}</h2>
                <ul>
                    {recipes.length >= 1 ? recipes.map(recipe => {
                        return <Link to={`/recipes/${recipe.id}`} state={{recipe}}><li key={recipe.id}>{recipe.recipe_name}</li>
                        </Link>})
                        : <li>{recipes.recipe_name}</li>
                    }
                </ul>
            </div>
        </div>
        
        
    );
}

export default Chef_Details;
