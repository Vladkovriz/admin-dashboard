import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./styles.module.scss";
import {IconType} from "react-icons/lib";

interface INavBarItemProps {
    to: string;
    icon: IconType;
    title: string;
}

export const NavBarItem = ({to, icon: Icon, title}: INavBarItemProps) => {
    return (
        <li className={classes.root}>
            <NavLink
                className={({isActive}) => `${isActive ? `${classes.isActive}` : ""} ${classes.link}`}
                to={to}
            >
                < Icon/>
                {title}
            </NavLink>
        </li>
    )
}