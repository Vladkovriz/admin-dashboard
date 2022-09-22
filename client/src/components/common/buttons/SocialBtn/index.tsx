import React from "react";
import classes from "./styles.module.scss"

interface ISocialBtn {
    icon: any;
    trigger: () => void;
    classes?: {
        [key: string]: string;
    }
}

export const SocialBtn = ({icon, trigger}: ISocialBtn) => {
    return (<div className={classes.root}>
        <button onClick={trigger} className={classes.btn}>
            <img src={icon} alt="" className={classes.icon}/>
        </button>
    </div>)
}