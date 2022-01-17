import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import NavBar from "./NavBar.js"
import Recipes from "./Recipes.js"
import Recipe from "./Recipe.js";
import ChefList from "./ChefList.js"
import Chef_Detail from "./Chef_Detail.js"
import Recipe_Detail from "./Recipe_Detail.js"
import CreateRecipe from './CreateRecipe.js'
import LogInPage from "./LogInPage.js";


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
  return (
    <div className="main">
      <div className="sidenav">
        <NavBar/>
      </div>
      
      <div className="body"> 
        <Routes>
           <Route exact path='/' element={<Home recipes={recipes} chefs={chefs}/>}/>
           <Route exact path='/recipes' element={<Recipes recipes={recipes} chefs={chefs}/>}/>
           <Route exact path='/recipes/:id' element={<Recipe_Detail/>}/>
           <Route exact path='/chefs' element={<ChefList chefs={chefs}/>}/>
           <Route exact path='/chefs/:id' element={<Chef_Detail chefs={chefs}/>}/>
           <Route exact path='/create_recipe' element={<CreateRecipe chefs={chefs}/>}/>
           <Route exact path='/login' element={<LogInPage/>}/>
        </Routes>
      </div>
      
        
    </div>
  );
}

export default App;
