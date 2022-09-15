import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Layout} from "../Layout";
import classes from "./styles.module.scss"
import {AllRoutes} from "../../routes";

function App() {
    return (

        <div className={classes.root}>
            <BrowserRouter>
                <Layout>
                    <AllRoutes/>
                </Layout>
            </BrowserRouter>

        </div>
    );
}

export default App;
