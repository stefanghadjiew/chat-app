import React, { useState,useEffect } from "react";
import Message from "./Message"
const Messages = ({token,search}) => {
    const [messages,setMessages] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
            const url = "http://localhost:3001/api/all"
            const res = await fetch(url,{
                method : "GET",
                headers : {
                    "Content-type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                }
                })
            const messages = await res.json()
            console.log(messages);
            setMessages(messages);
        }
        fetchData();
       
    },[search]);

return (
     messages.map(m => (
        <Message 
        key={m._id}
        text={m.text}
        messageId={m.id}
        userName = {m.user.username}
    />
))     
        
    )
}

export default Messages;