import React from "react";
import { VpnKeyRounded,LockOpenRounded  } from "@material-ui/icons"

import IconButton from "@material-ui/core/IconButton" 


const NavbarItem = ({btnText}) => {
    if(btnText === "Login") {
        return (
            <li className="navbar-nav-item">
                <IconButton color="secondary"><VpnKeyRounded color="secondary"/></IconButton>
                {btnText}
            </li>
        )
    }
    if (btnText === "Register") {
        return (
            <li className="navbar-nav-item">
                <IconButton color="secondary"><LockOpenRounded color="secondary"/></IconButton>
                {btnText}
            </li>
        )
    }
   
}

export default NavbarItem;