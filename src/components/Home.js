import React from "react";
import {Container} from "react-bootstrap"
import Recipe from "./Recipe.js"


function Home({recipes, chefs}){  
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
      }
      let randNumRecipe = getRandomInt(0,recipes.length)
      let randNumChef = getRandomInt(0,chefs.length)
      let randRecipe = recipes[randNumRecipe]
      let chef = chefs[randNumChef]
    if(randRecipe != undefined){
        return(
            <Container>
                <h1>The Social Chef</h1>
                <div>
                    <h2>Recipe of the Day</h2>
                    <Recipe  chef={chef} recipe={randRecipe}/>
                </div>
                
            </Container>
        );
    }else{return null} 
}
export default Home;