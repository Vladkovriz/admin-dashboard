import React from "react";
import {Outlet} from "react-router-dom";
import classes from "./styles.module.scss"

export const Auth = () => {
    return <div className={classes.root}>
        <div className={classes.container}>
            <Outlet/>
            <div className={classes.qwe}>HI</div>
        </div>
    </div>
}
