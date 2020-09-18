import React from "react";

const Message = ({text,userName}) => {
    return (
        <div style={{margin:"1rem",display: "inline-block"}}>

          <span style={{backgroundColor:" #2d3436",color:"#f50057",borderRadius:"5px",padding:"0.7rem"}}>  {userName} - {text} </span>
        </div>
    )
};

export default Message;