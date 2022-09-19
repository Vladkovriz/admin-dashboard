import React from "react";
import classes from "./styles.module.scss"

interface ISocialBtn {
    icon: any;
    onClick: () => void;
    classes: {
        [key: string]: string;
    }
}

export const SocialBtn = ({}: any) => {
    return (<div className={classes.root}>
        <button>SocialBtn</button>
    </div>)
}