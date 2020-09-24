import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar"
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const Friend = ({name}) => {
    const [focused,setFocused] = useState(false)
    const [hovered,setHovered] = useState(false)
    const toggleHovered = () => {
        setHovered(!hovered)
    }
    const handleClick = () => {
        setFocused(!focused)
    }

    
    

    if( hovered === false && focused === false) {
        const style = {
            display:"flex",
            alignItems: "center",
            textAlign:"center",
            cursor:"pointer",
        }
        return (
            
            <div 
            style={style} 
            onMouseEnter={toggleHovered} 
            onMouseLeave={toggleHovered}
            onClick={handleClick}
            >
                <Avatar alt={name} style={{margin:"1rem",backgroundColor:"#2d3436",color:"#f50057"}}/>
                {name}
            </div>
            
        )
    }
    
    if(hovered === true && focused === false) {
        const style = {
            display:"flex",
            alignItems: "center",
            textAlign:"center",
            cursor:"pointer",
            backgroundColor: "#2d3436",
            opacity: 0.85,
            color:"#fff"
        }
        return (
          
                <div 
                style={style} 
                onMouseEnter={toggleHovered} 
                onMouseLeave={toggleHovered}
                onClick={handleClick}
                >
                    <Avatar alt={name} style={{margin:"1rem",backgroundColor:"#2d3436",color:"#f50057"}}/>
                    {name}
                </div>
            
        )
    }
    if(hovered === false && focused === true) {
        const style = {
            display:"flex",
            alignItems: "center",
            textAlign:"center",
            cursor:"pointer",
            backgroundColor: "#2d3436",
            opacity: 0.85,
            color:"#fff"
        }
        return (
            <ClickAwayListener onClickAway={() => {setFocused(false)}}>
                <div 
                style={style} 
                onMouseEnter={toggleHovered} 
                onMouseLeave={toggleHovered}
                onClick={handleClick}
                >
                    <Avatar alt={name} style={{margin:"1rem",backgroundColor:"#2d3436",color:"#f50057"}}/>
                    {name}
                </div>
                </ClickAwayListener>
        )
    }
    if(hovered === true && focused === true) {
        const style = {
            display:"flex",
            alignItems: "center",
            textAlign:"center",
            cursor:"pointer",
            backgroundColor: "#2d3436",
            opacity: 0.85,
            color:"#fff"
        }
        return (
            <ClickAwayListener onClickAway={() => {setFocused(false)}}>
                <div 
                style={style} 
                onMouseEnter={toggleHovered} 
                onMouseLeave={toggleHovered}
                onClick={handleClick}
                >
                    <Avatar alt={name} style={{margin:"1rem",backgroundColor:"#2d3436",color:"#f50057"}}/>
                    {name}
                </div>
            </ClickAwayListener>
        )
    }
       
    }
   
    
   
       

    
    

export default Friend;