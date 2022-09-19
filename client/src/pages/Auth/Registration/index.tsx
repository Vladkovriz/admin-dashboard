import React from "react";
import {useAuth} from "../../../ hooks/Auth";


export const Registration = () => {
    const {login} = useAuth()

    return (
        <div>
            <h1>Registration</h1>
            <button onClick={login}>GOOGLE LOGIN</button>
        </div>
    )
}