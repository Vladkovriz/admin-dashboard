import React from "react";
import {useAuth} from "../../../ hooks/Auth";
import {SocialButons} from "../../../components/Login/SocialButons";

export const Login = () => {
    const {login} = useAuth()

    return (
        <div>
            <h1>Login</h1>
            <button onClick={login}>GOOGLE LOGIN</button>
            <SocialButons/>
        </div>
    )
}
