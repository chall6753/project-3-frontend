import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'


function Chef({chef}){
console.log(chef)
    return(
        <Card>
            <Link to = {`/chefs/${chef.id}`}>
                <h2>{chef.first_name + " " +chef.last_name}</h2>
            </Link>
            
        </Card>
    )
}

export default Chef