import React from "react";
import {useParams, Link} from "react-router-dom"

function Chef({chef}){
console.log(useParams())
    return(
        <Link 
        to={`/chefs/${chef.id}`}
        state={{chef}}
        >
            <div key={chef.id} className="box" >
                <h2>{chef.first_name}</h2>
                <p>{chef.last_name}</p>
            </div> 
        </Link>
    );
}

export default Chef;