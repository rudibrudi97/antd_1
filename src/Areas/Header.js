import logo from "./movisens.png";
import React from "react";
import dd from "./drop-down_new.png"

function Header() {
    return(
        <div>
        <header className="navbar">
            <img src={dd} alt="Drop_down" height="65px" width="65px" className="dd"/>
            <img src={logo} alt="Movisens-Logo" height ="95px" width="165px" className="logo"/>
            DataAnalyzer
        </header>
        </div>);
}

export default Header