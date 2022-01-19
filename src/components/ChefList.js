import React from "react";
import Chef from "./Chef.js"

function ChefList({chefs}){



    return(
        <div className="chefList">
            asdfasdfadsf
            <h1>Meet the Chefs</h1>
            {chefs.map((chef)=>{
                console.log(chef)
                return (
                    <Chef chef={chef}/>
                )
            })}
        </div>
    );
}

export default ChefList;