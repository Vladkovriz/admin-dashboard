import React from "react";
import classes from "./styles.module.scss"
import { ImUsers, ImUserTie } from "react-icons/im";
import { BsLightbulbFill } from "react-icons/bs";
import { IoTicket } from "react-icons/io5";
import { IoIosJournal, IoIosSettings, IoMdMedal, IoIosPie } from "react-icons/io";

export const AppNavBar = () => {
    return (
        <nav className={classes.root}>
            <div className={classes.logoTop}>
                Admin Dashboard
            </div>
            <div className={classes.navList}>
                <ul>
                    <li>< IoIosPie />Overview</li>
                    <li>< IoTicket />Tickets</li>
                    <li>< BsLightbulbFill />Ideas</li>
                    <li>< ImUsers /> Contacts</li>
                    <li>< ImUserTie /> Agents</li>
                    <li>< IoIosJournal />Articles</li>
                </ul>
            <div className={classes.lane} ></div>
                <ul>
                    <li>< IoIosSettings />Settings</li>
                    <li>< IoMdMedal />Subscriptions</li>
                </ul>
            </div>
        </nav>
    )
}