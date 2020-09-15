import React,{ useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Navbar"
import Main from "./Main"


function App() {
  const [isUserLogged,setIsUserLogged] = useState({
    user: {},
    isLogged : false,
    err : {}
  })

  const logout = () => {
    setIsUserLogged({
      user:{},
      isLogged:false,
      err:{}
    })
  }
  
  const userIsLogged = (dataFromAuth,errFromAuth) => {
    setIsUserLogged({
      user:dataFromAuth,
      isLogged:true,
      err: {errFromAuth}
    })
  }
  return (
    <Router>
       <Navbar isLogged={isUserLogged.isLogged} logout={logout}/>
       <Main isLogged={isUserLogged.isLogged} userIsLogged={userIsLogged}/>
    </Router>
   );
}

export default App;
