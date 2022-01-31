import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home.js";
import NavBar from "./NavBar.js"
import Recipes from "./Recipes.js"
import RecipeDetail from "./RecipeDetail.js"
import Chefs from './Chefs.js'
import ChefDetail from './ChefDetail.js'
import RecipeCreate from './RecipeCreate.js'

function App() {
  const [chefs, setChefs]=useState([])
  const [recipes, setRecipes]=useState([])

  useEffect(() =>{
    fetch("http://localhost:9292/chefs")
    .then(res => res.json())
    .then(data => setChefs(data))
    .then(()=>fetch("http://localhost:9292/recipes"))
    .then(res => res.json())
    .then(data=>setRecipes(data))
  },[])
  console.log(recipes)
  function deleteRecipe(recipe){
    console.log('recipe from recipeDetail to be deleted', recipe)
    setRecipes(recipes.filter(r => r.id !== recipe.id))
  }
  return (
    <div className="main">
      <div className="sidenav">
        <NavBar/>
      </div>
      
      <div className="body"> 
        <Routes>
           <Route exact path='/' element={<Home recipes={recipes} chefs={chefs}/>}/>
           <Route exact path='/recipes' element={<Recipes recipes={recipes}/>}/>
           <Route exact path='/recipes/:id' element={<RecipeDetail deleteRecipe={deleteRecipe}/>}/>
           <Route exact path= '/chefs' element={<Chefs chefs={chefs}/>}/>
           <Route exact path='/chefs/:id' element={<ChefDetail/>}/>
           <Route exact path='/create_recipe' element={<RecipeCreate/>}/>
         
        </Routes>
      </div>
      
        
    </div>
  );
}

export default App;
