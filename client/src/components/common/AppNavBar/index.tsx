import React from "react";

import {ImUsers, ImUserTie} from "react-icons/im";
import {BsLightbulbFill} from "react-icons/bs";
import {IoTicket} from "react-icons/io5";
import {IoIosJournal, IoIosPie, IoIosSettings, IoMdMedal} from "react-icons/io";

import {routes} from "../../../config/routes";
import classes from "./styles.module.scss"
import {NavBarItem} from "./NavBarItem";

export const AppNavBar = () => {
    return (
        <nav className={classes.root}>
            <div className={classes.logoTop}>
                Admin Dashboard
            </div>
            <div className={classes.navList}>
                <ul>
                    <NavBarItem to={routes.overview} icon={IoIosPie} title={"Overview"}/>
                    <NavBarItem to={routes.tickets} icon={IoTicket} title={"Tickets"}/>
                    <NavBarItem to={routes.ideas} icon={BsLightbulbFill} title={"Ideas"}/>
                    <NavBarItem to={routes.contacts} icon={ImUsers} title={"Contacts"}/>
                    <NavBarItem to={routes.agents} icon={ImUserTie} title={"Agents"}/>
                    <NavBarItem to={routes.articles} icon={IoIosJournal} title={"Articles"}/>
                </ul>
                <div className={classes.lane}></div>
                <ul>
                    <NavBarItem to={routes.settings} icon={IoIosSettings} title={"Settings"}/>
                    <NavBarItem to={routes.subscriptions} icon={IoMdMedal} title={"Subscriptions"}/>
                </ul>
            </div>
        </nav>
    )
}