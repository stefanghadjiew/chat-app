import React from "react";

const Message = ({text,userName}) => {
    return (
        <div className="message">
            {userName} - {text}
        </div>
    )
};

export default Message;