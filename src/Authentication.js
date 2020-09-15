import React , { useState } from "react";
import TextField from "@material-ui/core/TextField"
import { MessageRounded,PeopleAltRounded } from "@material-ui/icons"
import Button from "@material-ui/core/Button"


const initialState = {
    username :"",
    email:"",
    password:"",
    profileImgUrl:""
}

const Authentication = ({register,submitBtnText,userIsLogged,...props}) => {
    const [state,setState] = useState(initialState)
    
    const handleChange = (e) => {
        setState({
            ...state,
            [e.currentTarget.name] : e.currentTarget.value
        })
    }

    const returnToInitialState = () => {
        setState(initialState)
    }
   
    const handleSubmit = async (e) => {
       e.preventDefault()
       const url = `http://localhost:3001/api/auth/${submitBtnText}`
       const res = await fetch(url,{
           method : "POST",
           headers : {
               "Content-type" : "application/json"
           },
           body:JSON.stringify(state)
       })
       const userInfo = await res.json()
       userIsLogged(userInfo);
       returnToInitialState();
       props.history.push("/")
    } 
   
    const {username,email,password,profileImgUrl} = state 
     
    return (
        <div className="form-container">
            <div className="user_greeting">
                {register && (
                    <div className="user_greeting_register">
                        <MessageRounded style={{fontSize:100,color:"#f50057"}}/>
                        <h1>Happy to have you join our family!</h1>
                    </div>
                   
                )}
                {!register && (
                    <div className="user_greeting_register">
                        <PeopleAltRounded style={{fontSize:100,color:"#f50057"}}/>
                        <h1>Lets start chatting</h1>
                    </div>
                )}
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <TextField
                    name="email"
                    type="email"
                    required={true}
                    label="email" 
                    variant="outlined" 
                    value={email} 
                    onChange={handleChange}
                />
                <TextField
                    name="password"
                    type="password"
                    required={true}
                    label="password" 
                    variant="outlined" 
                    value={password} 
                    onChange={handleChange}
                />
                {register && (
                    <div className="register">
                        <TextField
                            name="username"
                            type="text"
                            required={true}
                            label="username" 
                            variant="outlined" 
                            value={username} 
                            onChange={handleChange}
                        />
                        <TextField
                            name="profileImgUrl"
                            type="text"
                            label="avatar" 
                            variant="outlined" 
                            value={profileImgUrl} 
                            onChange={handleChange} 
                        />
                    </div>
                )}
                <Button
                style={{marginTop:"0.5rem",height:"60px"}} 
                variant="contained" 
                color="secondary" 
                type="submit"
                >
                    <span className="submit">{submitBtnText}</span>
                </Button>
            </form>
        </div>
    )
}

export default Authentication;