import React from "react";
import {useParams, Link} from "react-router-dom"

function Chef({chef}){
console.log(chef)


    return(
        <Link 
        to={`/chefs/${chef.id}`}
        state={{chef}}
        >
            <div key={chef.id} className="box" >
                <h2>{chef.first_name}</h2>
                <h3>{chef.last_name}</h3>
                <p>insert image tag</p>
            </div> 
        </Link>
    );
}

export default Chef;