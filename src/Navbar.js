import React,{ useState } from "react";
import NavbarItem from "./NavbarItem";
import { SendRounded,PersonAdd } from "@material-ui/icons";
import Avatar  from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Backdrop from "@material-ui/core/Backdrop";
import TextField from "@material-ui/core/TextField";

const Navbar = ({isLogged,logout,username,userId,token,addFriends}) => {
    const [open,setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
        setTextField({friend:""})
    }
    const handleToggle = () => {
        setOpen(!open)
    }

    const [textField,setTextField] = useState({
        friend: ""
    })
    const [err,setErr] = useState({
        has:false,
        msg:''
    })
    
    const handleTextField = (e) => {
        setTextField({
            friend:e.target.value
        })
    }

    const postFriend = async (e) => {
        e.preventDefault()
        try {
            const url = `http://localhost:3001/api/user/${userId}/friends`
            const res = await fetch(url,{
                method: "POST",
                headers: {
                   "Content-type": "application/json", 
                   Authorization:`Bearer ${token}` 
                },
                body:JSON.stringify(textField)
                
            })
            const newFriend = await res.json();
            addFriends(newFriend)
            
        } catch(err) {
            setErr({
                has:true,
                msg:err.message
            })
        }
        handleClose()
    }

    return (
        <nav className="navbar">
            <ul className="logo">
                <SendRounded/>
                <SendRounded/>
                ArrowMessage
                <SendRounded/>
                {(isLogged === true) &&(
                    <div className="avatar">
                        <Avatar 
                        alt={username} 
                        style={{margin:"1rem",backgroundColor:"#f50057",color:"#2d3436"}}/>
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
                        <li className="navbar-nav-item">
                         <Tooltip title="Add friend">
                            <IconButton color="secondary" onClick={handleToggle}>
                                <PersonAdd color="secondary"/>
                            </IconButton>
                        </Tooltip>
                        </li>
                        <Backdrop open={open}>
                            <form
                            onSubmit = {postFriend}
                            className="add_friend"
                            style={{
                                width:400,
                                height:200,
                                backgroundColor:"#f50057",
                                display:"flex",
                                justifyContent:"center",
                                flexDirection:"column",
                                borderRadius:"5px"
                                }}
                            >
                                <TextField
                                style={{margin:"1rem"}}
                                name="friend"
                                label="add friend..."
                                type="text"
                                required={true}
                                variant="standard"
                                value={textField.friend}
                                onChange={handleTextField}/>
                                <div style={{display:"flex",justifyContent:"flex-end",margin:"1rem"}}>
                                    <Button color="#2d3436" type="submit">Add</Button>
                                    <Button color="#2d3436" onClick={handleClose}>Cancel</Button>
                                </div>
                            </form>
                        </Backdrop>
                        <NavbarItem btnText="Logout"  logout={logout}/>
                    </div>
                )}
                
            </ul>
        </nav>
    )
}

export default Navbar;