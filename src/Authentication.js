import React , { useReducer } from "react";
import TextField from "@material-ui/core/TextField"
import { MessageRounded } from "@material-ui/icons"
import Button from "@material-ui/core/Button"

const initialState = {
    username :"",
    email:"",
    password:"",
    profileImgUrl:""
}

const reducer = (state,{field,value}) => {
    return {
        ...state,
        [field] : value
    }
}
    

const Authentication = ({register,submitBtnText}) => {
   const [state,dispatch] = useReducer(reducer,initialState)
   const handleChange = (e) => {
       dispatch({field:e.currentTarget.name,value : e.currentTarget.value})
   }
   const {username,email,password,profileImgUrl} = state 
     return (
        <div className="form-container">
            <div className="user_greeting">
                {register && (
                    <div className="user_greeting_inner">
                        <MessageRounded style={{fontSize:100,color:"#f50057"}}/>
                        <h1>Happy to have you join our family!</h1>
                    </div>
                   
                )}
            </div>
            <form className="form"/*  onSubmit={handleSubmit} */>
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
