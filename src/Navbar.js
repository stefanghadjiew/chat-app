import React from "react";
import NavbarItem from "./NavbarItem"
import { SendRounded} from "@material-ui/icons"

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <ul className="logo">
                <SendRounded/>
                <SendRounded/>
                ArrowMessage
                <SendRounded/>
            </ul>
            <ul className="navbar-nav">
                <NavbarItem btnText="Login"/>
                <NavbarItem btnText="Register"/>
            </ul>
        </nav>
    )
}

export default Navbar;