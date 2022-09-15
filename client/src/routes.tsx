import {Route, Routes} from "react-router-dom"

import {Dashboard} from "./pages/Dashboard"
import {routes} from "./config/routes"
import {Login} from "./pages/Auth/Login";

export const AllRoutes = () => {
    return <Routes>
        <Route path={routes.dashboard} element={<Dashboard/>}/>
        <Route>
            <Route path={routes.auth.login} element={<Login/>}/>
        </Route>
    </Routes>
}