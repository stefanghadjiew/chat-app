import React, { useState,useEffect } from "react";
import Message from "./Message";
import { animateScroll } from "react-scroll";
const Messages = ({token,search,id,userId}) => {
    const [messages,setMessages] = useState([]);
    /* const MongoAtlas = "http://localhost:3001/" */
    const scrollToBottom = () => {animateScroll.scrollToBottom({containerId:`${id}`})}
    
    useEffect( () => {
        const fetchMessages = async () => {
            try {
                const url = `api/all`
                const res = await fetch(url,{
                    method : "GET",
                    headers : {
                        "Content-type" : "application/json",
                        "Authorization" : `Bearer ${token}`
                    }
                    })
                const messages = await res.json()
                setMessages(messages);
            } catch(err) {
                console.log(err)
            }
        }
        fetchMessages();
        scrollToBottom();
    },[search]);

    

return (
     messages.map(m => (
        <Message
        userId={userId} 
        key={m._id}
        text={m.text}
        messageId={m.user._id}
        userName = {m.user.username}
    />
))     
        
    )
}

export default Messages;