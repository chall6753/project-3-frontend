import React from 'react';
import {Container} from "react-bootstrap"
import Chef from "./Chef.js"

function Chefs({users}){
    return (
        <Container>
            <h1>Chefs</h1>
            {users.map((user)=>{
                return <Chef user={user}/>
            })}
        </Container>
    )
}

export default Chefs;