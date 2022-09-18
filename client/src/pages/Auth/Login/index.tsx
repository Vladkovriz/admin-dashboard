import React from "react";
import {useFirebaseAuth} from "../../../ hooks/Firebase";

export const Login = () => {
    const {signInWithGoogle} = useFirebaseAuth();
    return (
        <div>
            <h1>Login</h1>
            <button onClick={signInWithGoogle}>GOOGLE LOGIN</button>
        </div>
    )
}