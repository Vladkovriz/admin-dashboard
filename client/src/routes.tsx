import {Route, Routes} from "react-router-dom"

import {Dashboard} from "./pages/Dashboard"
import {routes} from "./config/routes"

export const PrivateRoutes = () => {
    return <Routes>
        <Route path={routes.dashboard} element={<Dashboard/>}/>
    </Routes>
}