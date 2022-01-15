import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    return(<div className="sidenav">
        <NavLink to="/" exact="true">Home</NavLink>
        <NavLink to="/recipes" exact="true">Recipes</NavLink>
        <NavLink to="/chefs" exact="true">Chefs</NavLink>
           
         
    </div>
       
        
    );
}

export default NavBar;