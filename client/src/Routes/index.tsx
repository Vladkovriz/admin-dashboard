import {Route, Routes} from "react-router-dom"

import {Dashboard} from "../pages/Dashboard"
import {routes} from "../config/routes"
import {NotFoundPage} from "../pages/NotFoundPage";
import React from "react";
import {Layout} from "../components/Layout";
import {RequireAuth} from "../hoc/RequireAuth";
import {Login} from "../pages/Auth/Login";
import {Auth} from "../pages/Auth";
import {Registration} from "../pages/Auth/Registration";

export const Router = () => {
    return <Routes>
        <Route path={routes.dashboard} element={<RequireAuth><Layout/></RequireAuth>}>
            <Route index element={<Dashboard/>}/>
        </Route>
        <Route path={routes.auth.root} element={<Auth/>}>
            <Route path={routes.auth.login} element={<Login/>}/>
            <Route path={routes.auth.registration} element={<Registration/>}/>

        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
}