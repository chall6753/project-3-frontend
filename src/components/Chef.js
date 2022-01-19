import React from "react";
import {Link} from "react-router-dom"
import {Card} from "react-bootstrap"

function Chef({chef}){
console.log(chef)


    return(
        <Card>
            <Link 
            to={`/chefs/${chef.id}`}
            state={chef}
            >
                <div key={chef.id} className="box" >
                    <h3>{chef.first_name} {chef.last_name}</h3>
                    <p>insert image tag</p>
                </div> 
            </Link>
        </Card>
        
    );
}

export default Chef;