import React, {useEffect, useState} from 'react';
import { useParams, Link} from 'react-router-dom'
import {Container, Card} from 'react-bootstrap'


function ChefDetail(){
    const chefPlaceholder = {id: 1, username:'', recipes: [{id:1,name:'',instructions:''}] }
    const [chef,setChef]=useState(chefPlaceholder)
    let chefId = useParams().id
    useEffect(() =>{
        fetch(`http://localhost:9292/chefs/${chefId}`)
        .then((res)=>res.json())
        .then((data)=>setChef(data))
    },[])

        return (
        <Container>
            <h1>{chef.username}</h1>
            <h2>Recipes:</h2>
            {chef.recipes.map((recipe)=>{
                return (
                    <Card key={recipe.id}>
                        <Link to= {`/recipes/${recipe.id}`}>
                            <h2>{recipe.name}</h2>
                        </Link>
                    </Card>
                )
            })}
        </Container>
    )
    
}

export default ChefDetail