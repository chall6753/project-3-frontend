import React from 'react';
import {Container} from "react-bootstrap"
import Chef from "./Chef.js"

function Chefs({chefs}){
console.log(chefs)
    return (
        <Container>
            <h1>Chefs</h1>
            {chefs.map((chef)=>{
                return <Chef chef={chef}/>
            })}
        </Container>
    )
}

export default Chefs;