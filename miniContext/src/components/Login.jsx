import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";


 function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})  
    }



    return (
        <div className="text-center">
            <h2 className="ext-3xl font-bold tracking-tight text-amber-50 sm:text-4xl">Login</h2>
            <input type="text" 
            value =  {username}
            placeholder="username"  
            onChange={(e) => setUsername(e.target.value) 
            }
            className="border bg-gray-100" 
            />
            <input type="text" name="password" placeholder="password"
            onChange={(e) => setPassword(e.target.value)} className="border bg-gray-100" />
            <button onClick={handleSubmit} className="ml-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
            > Submit</button>
        </div>
    )
 }

 export default Login;