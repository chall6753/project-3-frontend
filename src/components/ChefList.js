import React from "react";
import Chef from "./Chef.js"

function ChefList({chefs}){
let x = chefs[0]


    return(
        <div className="chefList">
            asdfasdfadsf
            <h1>Meet the Chefs</h1>
            {chefs.map((chef)=>{
                return (
                    <Chef chef={chef}/>
                )
            })}
        </div>
    );
}

export default ChefList;