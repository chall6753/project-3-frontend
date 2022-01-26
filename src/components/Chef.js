import React from "react";
import {Link} from "react-router-dom"
import {Card} from "react-bootstrap"

function Chef({chef}){
    return(
        <Card key={chef.id}> 
            <Link 
            to={`/chefs/${chef.id}`}
            state={chef}
            >
                <div  className="box" >
                    <h3>{chef.first_name} {chef.last_name}</h3>
                    <p>insert image tag</p>
                </div> 
            </Link>
        </Card>
        
    );
}

export default Chef;