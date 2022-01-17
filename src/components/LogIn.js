import React, {useState} from "react"


function LogIn(){
    const [userNameInput, setUserNameInput]=useState([])
    const [password, setPassword]=useState([])
    function handleClick(e){
        e.preventDefault()
    }
    
    return(
        <div className="login">
            <h1>Login</h1>
            
            <form>
                <label>User Name:</label>
                <input type='text' onChange={(e)=>setUserNameInput(e.target.value)}></input>
                <label>Password:</label>
                <input type='text' onChange={(e)=>setPassword(e.target.value)}></input>
                <input type='submit' value='Login'></input>
            </form>
            <h3>Not a user yet, Sign Up Now</h3>
            <input type='button' value='Sign Up' onClick={handleClick}></input>
        </div>
        
    )
}

export default LogIn