import React from "react";
import NavbarItem from "./NavbarItem"
import { SendRounded } from "@material-ui/icons"
import Avatar  from "@material-ui/core/Avatar"


const Navbar = ({isLogged,logout,username}) => {
    return (
        <nav className="navbar">
            <ul className="logo">
                <SendRounded/>
                <SendRounded/>
                ArrowMessage
                <SendRounded/>
                {(isLogged === true) &&(
                    <div className="avatar">
                        <Avatar alt={username} style={{margin:"1rem",backgroundColor:"#f50057",color:"#2d3436"}}/>
                        {username}
                    </div>
                )}
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