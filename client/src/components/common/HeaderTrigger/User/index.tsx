import React from "react";
import classes from "../../AppHeader/styles.module.scss";

export const User = ({user}: any) => {
    return <div className={classes.userTrigger}>
        <span>{user && user.displayName}</span>
        <img src={user && user.photoURL} alt=""/>
    </div>
}