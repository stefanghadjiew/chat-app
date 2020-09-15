import React from "react";
import { VpnKeyRounded,LockOpenRounded  } from "@material-ui/icons"
import IconButton from "@material-ui/core/IconButton"
import Tooltip from "@material-ui/core/Tooltip"
import { Link } from "react-router-dom"; 


const NavbarItem = ({btnText}) => {
    if(btnText === "Login") {
        return (
            <li className="navbar-nav-item">
                <Link to="/login">
                    <Tooltip title={btnText}>
                        <IconButton color="secondary">
                            <VpnKeyRounded color="secondary"/>
                        </IconButton>
                    </Tooltip>
                </Link>
            </li>
        )
    }
    if (btnText === "Register") {
        return (
            <li className="navbar-nav-item">
                <Link to="/register">
                    <Tooltip title={btnText}>
                        <IconButton color="secondary">
                            <LockOpenRounded color="secondary"/>
                        </IconButton>
                    </Tooltip>
                </Link>
            </li>
        )
    }
   
}

export default NavbarItem;