import React from "react";
import {AppHeader} from "../common/AppHeader";
import {AppNavBar} from "../common/AppNavBar";
import {Outlet} from "react-router-dom";
import classes from "./styles.module.scss"

export const Layout = () => {
    console.log("LAYOUT")
    return (
        <div className={classes.root}>
            <AppNavBar/>
            <div className={classes.container}>
                <AppHeader/>
                <Outlet/>
            </div>
        </div>
    )
}