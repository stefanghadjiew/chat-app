import React,{ useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Messages from "./Messages";


const Home = ({ isLogged,token,userId }) => {
    /* const MongoAtlas = "http://localhost:3001/" */
    const [text,setText] = useState({
        text: "",
    })

    const [search,setSearch] = useState('');
    
    const handleChange = (e) => {
        setText({
            text : e.target.value,
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = `api/user/${userId}/messages`
            const res = await fetch(url,{
                method : "POST",
                headers: {
                    "Content-type" : "application/json",
                    "Authorization" : `Bearer ${token}` 
                },
                body : JSON.stringify(search)
            })
            setText({text: ""})
            setSearch('')
        } catch(err) {
            console.log(err)
        }
    } 

    if (isLogged === false) {
        return (
            <div className="form-container">
                <div className="form_container_inner">
                    <h1>ArrowMessage Desktop</h1>
                    <h3>Welcome to the official ArrowMessage Desktop app.</h3>
                    <h3>Its fast and secure.</h3>
                    <Link to="/login">
                        <Button
                            style={{width:"50%",height:60}}
                            variant="contained"
                            color="secondary">START MESSAGING
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
    if(isLogged === true) {
        return (
            <div className="chat_friends_container">
                <div className="chat_box" id="chat_box">
                    <div className="message_display">
                        <Messages userId={userId} id="messages" search={search} token={token}/>
                    </div>
                    <div className="message_form_container">
                        <form className="message_form" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                value={text.text}
                                placeholder="Write a message..." 
                                onChange={handleChange}
                            />
                            <button 
                                style={{display:"none"}}
                                onClick={()=>setSearch(text)}>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}   

export default Home;