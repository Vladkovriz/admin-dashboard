import React from "react";

import {Link} from "react-router-dom";

import {ImUsers, ImUserTie} from "react-icons/im";
import {BsLightbulbFill} from "react-icons/bs";
import {IoTicket} from "react-icons/io5";
import {IoIosJournal, IoIosPie, IoIosSettings, IoMdMedal} from "react-icons/io";

import {routes} from "../../../config/routes";
import classes from "./styles.module.scss"

export const AppNavBar = () => {
    return (
        <nav className={classes.root}>
            <div className={classes.logoTop}>
                Admin Dashboard
            </div>
            <div className={classes.navList}>
                <ul>
                    <li><Link to={routes.overview}>< IoIosPie/>Overview</Link></li>
                    <li>< IoTicket/>Tickets</li>
                    <li>< BsLightbulbFill/>Ideas</li>
                    <li>< ImUsers/> Contacts</li>
                    <li>< ImUserTie/> Agents</li>
                    <li>< IoIosJournal/>Articles</li>
                </ul>
                <div className={classes.lane}></div>
                <ul>
                    <li>< IoIosSettings/>Settings</li>
                    <li>< IoMdMedal/>Subscriptions</li>
                </ul>
            </div>
        </nav>
    )
}