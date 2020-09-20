import React from "react";
import Avatar from "@material-ui/core/Avatar"

const Friend = ({name}) => {
    return (
        <div style={{display:"flex",alignItems: "center",textAlign: "center"}}>
            <Avatar alt={name} style={{margin:"1rem",backgroundColor:"#2d3436",color:"#f50057"}}/>
            {name}
        </div>
    )
}

export default Friend;