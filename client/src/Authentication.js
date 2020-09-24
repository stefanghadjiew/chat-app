import React , { useState } from "react";
import TextField from "@material-ui/core/TextField"
import { MessageRounded,PeopleAltRounded,} from "@material-ui/icons"
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert"


const initialState = {
    username :"",
    email:"",
    password:"",
    
}


const Authentication = ({register,submitBtnText,userIsLogged,history,...props}) => {
    const MongoAtlas = "http://localhost:3001/"
    const [state,setState] = useState(initialState)
    const [err,setErr] = useState({
        has:false,
        msg:""
    })
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
       
            const url = `${MongoAtlas}api/auth/${submitBtnText}`
            const res = await fetch(url,{
                method : "POST",
                headers : {
                    "Content-type" : "application/json",
                    },
                body:JSON.stringify(state)
            })
            const userInfo = await res.json()
            if(userInfo.err) {
                userIsLogged({},false)
                setErr({has:true,msg:userInfo.err.message})
            } else {
                userIsLogged(userInfo,true);
                returnToInitialState();
                history.push("/")
            }
           
        } 

    history.listen(()=> {
        setErr({has:false,msg:""})
        setState(initialState)
    })   
   
    const {username,email,password} = state 
    
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
                {err.has === true && (
                    <Alert variant="filled" severity="error" style={{margin:"0.5rem"}}>
                        {err.msg}
                    </Alert>
                )}
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
