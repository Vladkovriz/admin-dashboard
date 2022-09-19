import React from "react";
import useFirebaseUser from "../../../ hooks/Firebase/firebaseUser";
import classes from "./styles.module.scss";
import {useFirebaseAuth} from "../../../ hooks/Firebase";

export const AppHeader = () => {
    const {user} = useFirebaseUser()
    const {signOutFirebase} = useFirebaseAuth();

    return (
        <header className={classes.root}>
            <div className={classes.pageName}>Dashboard</div>
            <div className={classes.headerTriggers}>
                <span>Search</span>
                <span>Notification</span>
                <div className={classes.userTrigger}>
                    <span>{user && user.displayName}</span>
                    <img src={user && user.photoURL} alt=""/>
                </div>
                <button onClick={signOutFirebase}>SIGN_OUT</button>
            </div>

        </header>
    )
}