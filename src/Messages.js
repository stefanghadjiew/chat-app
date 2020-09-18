import React, { useState,useEffect } from "react";
import Message from "./Message"
import { animateScroll } from "react-scroll";
const Messages = ({token,search,id}) => {
    const [messages,setMessages] = useState([]);

    const scrollToBottom = () => {animateScroll.scrollToBottom({containerId:`${id}`})}
    
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
        scrollToBottom();
    },[search],);

    

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