import React from "react";

const Message = ({text,userName,messageId,userId}) => {
    return (
        <div style={{margin:"1rem",display: "flex",width:"fit-content"}}>
            {(messageId === userId) && (
                 <span style={{backgroundColor:"#f50057",color:" #2d3436",borderRadius:"5px",padding:"0.7rem"}}>  
                 {userName} - {text} 
           </span>
            )}
            {(messageId !== userId) && (
                 <span style={{backgroundColor:" #2d3436",color:"#f50057",borderRadius:"5px",padding:"0.7rem"}}>  
                 {userName} - {text} 
           </span>
            )} 
         
        </div>
    )
};

export default Message;