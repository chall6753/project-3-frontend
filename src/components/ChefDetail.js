import React, {useEffect, useState} from 'react';
import { useParams, Link} from 'react-router-dom'
import {Container, Card} from 'react-bootstrap'


function ChefDetail(){
    const chefPlaceholder = {id: 1, username:'', first_name: '', last_name: '', recipes: [{id:1,name:'',instructions:''}], comments: [{}] }
    const [chef,setChef]=useState(chefPlaceholder)
    let chefId = useParams().id
    console.log(chefId)
    useEffect(() =>{
        fetch(`http://localhost:9292/chefs/${chefId}`)
        .then((res)=>res.json())
        .then((data)=>setChef(data))
    },[])
    console.log(chef)
    
        return (
        <Container>
            <h1>{chef.first_name + ' ' + chef.last_name}</h1>
            {chef.recipes.map((recipe)=>{
                return (
                    <Card>
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