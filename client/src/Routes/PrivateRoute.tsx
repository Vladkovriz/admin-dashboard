import React from "react";
import useFirebaseUser from "../ hooks/Firebase/firebaseUser";
import {Navigate} from 'react-router-dom';

import {routes} from "../config/routes"

export const PrivateRoute = ({children}: any) => {

    const {firebaseIsAuth} = useFirebaseUser()
    console.log("firebaseIsAuth", firebaseIsAuth)
    if (!firebaseIsAuth) {
        return <Navigate to={routes.auth.login} replace/>
    }

    return (<>{children}</>)

}