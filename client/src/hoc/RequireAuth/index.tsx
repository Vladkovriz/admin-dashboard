import React from "react";
import {Navigate, useLocation} from "react-router-dom";
import {routes} from "../../config/routes";
import useFirebaseUser from "../../ hooks/Firebase/firebaseUser";

export const RequireAuth = ({children}: any) => {
    const location = useLocation();
    const {firebaseIsAuth} = useFirebaseUser()

    if (!firebaseIsAuth) {
        return <Navigate to={routes.auth.login} state={{from: location.pathname}}/>
    }

    return children
}