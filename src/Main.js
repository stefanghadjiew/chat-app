import React from "react";
import { Switch,Route } from "react-router-dom";
import Home from "./Home" 
import Authentication from "./Authentication"

const Main = ({isUserLogged,userIsLogged}) => {
    return(
        <Switch>
        <Route exact path="/" render={props => <Home isUserLogged={isUserLogged} {...props}/>}/>
        <Route exact path="/login" render={props => <Authentication isUserLogged={isUserLogged} submitBtnText="login" userIsLogged={userIsLogged} {...props}/>}/>
        <Route exact path="/register" render={props => <Authentication register isUserLogged={isUserLogged} submitBtnText="register" userIsLogged={userIsLogged} {...props}/>}/>
    </Switch>
    )
  
}

export default Main;