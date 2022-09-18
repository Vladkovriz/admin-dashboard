import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "../Layout";
import {PrivateRoutes} from "../../routes";

import {FirebaseProvider} from "../../context/Firebase/Auth"
import {PrivateRoute} from "../../Routes/PrivateRoute";
import {routes} from "../../config/routes";
import {Login} from "../../pages/Auth/Login";

function App() {
    return (
        <FirebaseProvider>
            <BrowserRouter>
                <PrivateRoute>
                    <Layout>
                        <PrivateRoutes/>
                    </Layout>

                </PrivateRoute>
                <Routes>
                    <Route path={routes.auth.login} element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </FirebaseProvider>
    );
}

export default App;
