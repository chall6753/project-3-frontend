import React, {useState, useEffect} from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home.js";
import NavBar from "./NavBar.js"
import Recipes from "./Recipes.js"
import RecipeDetail from "./RecipeDetail.js"
import Chefs from './Chefs.js'
import ChefDetail from './ChefDetail.js'
import RecipeCreate from './RecipeCreate.js'

function App() {
  const [users, setUsers]=useState([])
  const [recipes, setRecipes]=useState([])
  const navigate = useNavigate()

  useEffect(() =>{
    fetch("http://localhost:9292/users")
    .then(res => res.json())
    .then(data => setUsers(data))
    .then(()=>fetch("http://localhost:9292/recipes"))
    .then(res => res.json())
    .then(data=>setRecipes(data))
  },[])
  
  function deleteRecipe(recipe){
    setRecipes(recipes.filter(r => r.id !== recipe.id))
  }

  function handleCreateRecipe(recipe){
    let user = users.find(user=> user.username === recipe.user.username) 
    if (user == undefined){ // checks to see if it is a new user or not. backend already handles no duplicate usernames being inserted into database this one is just to update state before a refresh
          setUsers([...users, recipe.user])
        }
    setRecipes([...recipes, recipe])
    navigate('/recipes')
  }
  
  return (
    <div className="main">
      <div className="sidenav">
        <NavBar/>
      </div>
      
      <div className="body"> 
        <Routes>
           <Route exact path='/' element={<Home recipes={recipes} users={users}/>}/>
           <Route exact path='/recipes' element={<Recipes recipes={recipes}/>}/>
           <Route exact path='/recipes/:id' element={<RecipeDetail deleteRecipe={deleteRecipe}/>}/>
           <Route exact path= '/chefs' element={<Chefs users={users}/>}/>
           <Route exact path='/chefs/:id' element={<ChefDetail/>}/>
           <Route exact path='/create_recipe' element={<RecipeCreate handleCreateRecipe={handleCreateRecipe}/>}/>
         
        </Routes>
      </div>
      
        
    </div>
  );
}

export default App;
