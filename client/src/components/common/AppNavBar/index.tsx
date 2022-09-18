import React from "react";
import classes from "./styles.module.scss"

export const AppNavBar = () => {
    return (
        <nav className={classes.root}>
            <div className={classes.logoTop}>
                Admin Dashboard
            </div>
            <div className={classes.navList}>
                <ul>
                    <li>Overview</li>
                    <li>Tickets</li>
                    <li>Ideas</li>
                    <li>Contacts</li>
                    <li>Agents</li>
                    <li>Articles</li>
                </ul>
            <div className={classes.lane} ></div>
                <ul>
                    <li>Settings</li>
                    <li>Subscriptions</li>
                </ul>
            </div>
        </nav>
    )
}