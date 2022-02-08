import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'


function Chef({user}){ 
    return(
        <Card key={user.id}>
            <Link to = {`/chefs/${user.id}`}>
                <h2>{user.username}</h2>
            </Link>
            
        </Card>
    )
}

export default Chef