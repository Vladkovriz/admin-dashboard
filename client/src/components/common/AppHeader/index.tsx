import React from "react";
import useFirebaseUser from "../../../ hooks/Firebase/firebaseUser";
import classes from "./styles.module.scss";
import {useFirebaseAuth} from "../../../ hooks/Firebase";
import {Search} from "../HeaderTrigger/Search"
import {Notification} from "../HeaderTrigger/Notification"
import {User} from "../HeaderTrigger/User";

export const AppHeader = () => {
    const {user} = useFirebaseUser()
    const {signOutFirebase} = useFirebaseAuth();

    return (
        <header className={classes.root}>
            <div className={classes.pageName}>Dashboard</div>
            <div className={classes.headerTriggers}>
                <Search/>
                <Notification/>
                <User user={user}/>
                <button onClick={signOutFirebase}>SIGN_OUT</button>
            </div>

        </header>
    )
}