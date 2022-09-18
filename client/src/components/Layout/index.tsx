import React from "react";
import {AppHeader} from "../common/AppHeader";
import {AppNavBar} from "../common/AppNavBar";

import classes from "./styles.module.scss"

export const Layout = ({children}: any) => {
    return (
        <div className={classes.root}>
            <AppNavBar/>
            <div className={classes.container}>
                <AppHeader/>
                {children}
            </div>
        </div>
    )
}