import React, {useEffect, useState} from 'react';
import { useParams} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Recipe from './Recipe.js'

function ChefDetail(){
    const [chef,setChef]=useState('')
    let chefId = useParams().id
    console.log(chefId)
    useEffect(() =>{
        fetch(`http://localhost:9292/chefs/${chefId}`)
        .then((res)=>res.json())
        .then((data)=>setChef(data))
    },[])
    console.log(chef)
    if (chef !=''){
        return (
        <Container>
            <h1>{chef.first_name + ' ' + chef.last_name}</h1>
            {chef.recipes.map((recipe)=>{
                return <Recipe recipe={recipe} chef={chef}/>
            })}
        </Container>
    )
    }else return 'Loading...'
    
}

export default ChefDetail