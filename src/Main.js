import React from "react";
import { Switch,Route } from "react-router-dom";
import Home from "./Home" 
import Authentication from "./Authentication"

const Main = ({isLogged,userIsLogged,token,userId}) => {
    return(
        <Switch>
        <Route exact path="/" render={props => <Home token={token} userId={userId} isLogged={isLogged} {...props}/>}/>
        <Route exact path="/login" render={props => <Authentication  submitBtnText="login" userIsLogged={userIsLogged} {...props}/>}/>
        <Route exact path="/register" render={props => <Authentication  register  submitBtnText="register"  userIsLogged={userIsLogged} {...props}/>}/>
    </Switch>
    )
  
}

export default Main;