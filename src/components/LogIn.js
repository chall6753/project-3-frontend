import React, {useState} from "react"


function LogIn(){
    const [userNameInput, setUserNameInput]=useState('')
    const [password, setPassword]=useState('')
    function handleSignUp(e){
        e.preventDefault()
        fetch("http://localhost:9292/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: userNameInput,
                password: password,
            }),
        })
        .then((r)=>r.json())
        .then((res) => window.alert(res));
    }
    function handleLogIn(e){
        e.preventDefault()
        fetch("http://localhost:9292/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: userNameInput,
                password: password,
            }),
        })
        .then((r)=>r.json())
        .then((res) => console.log(res));
    }
    return(
        <div className="login">
            <h1>Login</h1>
            
            <form>
                <label>User Name:</label>
                <input type='text' onChange={(e)=>setUserNameInput(e.target.value)}></input>
                <label>Password:</label>
                <input type='text' onChange={(e)=>setPassword(e.target.value)}></input>
                <input type='submit' value='Login' onClick={handleLogIn}></input>
            </form>
            <h3>Not a user yet, Sign Up Now</h3>
            <input type='button' value='Sign Up' onClick={handleSignUp}></input>
        </div>
        
    )
}

export default LogIn