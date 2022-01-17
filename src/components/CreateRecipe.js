import React from "react";

function CreateRecipe({chefs}){
console.log(chefs)
    return(
        <div>
            <form>
                <label>Chef</label>
                <select name='chef'>
                    {chefs.map(chef=>{
                       return <option value={chef.first_name}>{chef.first_name}</option>
                    })}
                    <option value='chefname'>ChefName</option>
                </select>
                <label>Last Name</label>
                <input type='text'></input>
                <label>First Name</label>
                <input type='text'></input>
                <label>First Name</label>
                <input type='text'></input>
            </form>            
        </div>
    );
}

export default CreateRecipe;