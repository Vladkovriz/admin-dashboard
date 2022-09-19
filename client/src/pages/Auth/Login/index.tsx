import React from "react";
import {useAuth} from "../../../ hooks/Auth";


export const Login = () => {
    const {login} = useAuth()
    
    return (
        <div>
            <h1>Login</h1>
            <button onClick={login}>GOOGLE LOGIN</button>
        </div>
    )
}