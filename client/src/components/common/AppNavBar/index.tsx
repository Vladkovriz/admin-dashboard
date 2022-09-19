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
                    <li><Link to={routes.tickets}>< IoTicket/>Tickets</Link></li>
                    <li><Link to={routes.ideas}>< BsLightbulbFill/>Ideas</Link></li>
                    <li><Link to={routes.contacts}>< ImUsers/> Contacts</Link></li>
                    <li><Link to={routes.agents}>< ImUserTie/> Agents</Link></li>
                    <li><Link to={routes.articles}>< IoIosJournal/>Articles</Link></li>
                </ul>
                <div className={classes.lane}></div>
                <ul>
                    <li><Link to={routes.settings}>< IoIosSettings/>Settings</Link></li>
                    <li><Link to={routes.subscriptions}>< IoMdMedal/>Subscriptions</Link></li>
                </ul>
            </div>
        </nav>
    )
}