import React from "react";
import NavbarItem from "./NavbarItem"
import { SendRounded } from "@material-ui/icons"


const Navbar = ({isLogged,logout}) => {
    return (
        <nav className="navbar">
            <ul className="logo">
                <SendRounded/>
                <SendRounded/>
                ArrowMessage
                <SendRounded/>
            </ul>
            <ul className="navbar-nav">
                <NavbarItem btnText="Home"/>
                {(isLogged === false) && (
                <div style={{display:"flex"}}>
                    <NavbarItem btnText="Login"/>
                    <NavbarItem btnText="Register"/>
                </div>
                )}
                {(isLogged === true) && (
                    <div style={{display: "flex"}}>
                        <NavbarItem btnText="Logout"  logout={logout}/>
                    </div>
                )}
                
            </ul>
        </nav>
    )
}

export default Navbar;