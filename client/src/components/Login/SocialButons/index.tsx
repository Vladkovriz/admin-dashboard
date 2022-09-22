import React from "react";
import {SocialBtn} from "../../common/buttons/SocialBtn";
import vectorIcon from "../../../assets/icons/Vector.png";
import searchIcon from "../../../assets/icons/search.png";
import classes from "./styles.module.scss"

export const SocialButons = () => {
    return (
        <div className={classes.root}>
            <SocialBtn trigger={() => console.log("SOCIAL_BTN_VECTOR")} icon={vectorIcon}/>
            <SocialBtn trigger={() => console.log("SOCIAL_BTN_SEARCH")} icon={searchIcon}/>
            <SocialBtn trigger={() => console.log("SOCIAL_BTN_SEARCH")} icon={searchIcon}/>
        </div>
    )
}
