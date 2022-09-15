import React from "react";

export const Layout = ({children}: any) => {
    return (
        <div>
            <header>HEADR</header>
            {children}
            <footer>FOOTER</footer>
        </div>
    )
}