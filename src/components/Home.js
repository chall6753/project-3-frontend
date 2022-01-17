import React, {useState,useEffect} from "react";
import Recipe from "./Recipe.js"
import Chef from "./Chef.js"

function Home({recipes, chefs}){
    console.log(recipes)
    console.log(chefs)   
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
      }
      let randNumRecipe = getRandomInt(0,recipes.length)
      let randNumChef = getRandomInt(0,chefs.length)
      let randRecipe = recipes[randNumRecipe]
      let chef = chefs[randNumChef]
      console.log(chef)
      console.log(randRecipe)
    if(randRecipe != undefined){
        
        return(
            <div>
                <h1>The Recipe Community</h1>
                <div>
                    <h1>Recipe of the Day</h1>
                    <Recipe  chefs={chefs} recipe={randRecipe}/>
                </div>
                <div>
                    <h1>Chef of the Day</h1>
                    <Chef chef={chef}/>
                </div>
            </div>
        );
    }else{return null}
    
}

export default Home;