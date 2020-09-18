import React,{ useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Navbar"
import Main from "./Main"


function App() {
  const [isUserLogged,setIsUserLogged] = useState({
    user: {},
    isLogged : false,
   })

  const logout = () => {
    setIsUserLogged({
      user:{},
      isLogged:false,
     })
  }
  
  const userIsLogged = (dataFromAuth,boolean) => {
    setIsUserLogged({
      user:dataFromAuth,
      isLogged:boolean,
      
    })
  }
  return (
    <Router>
      <Navbar 
      isLogged={isUserLogged.isLogged} 
      username={isUserLogged.user.username} 
      logout={logout}
      userImage={isUserLogged.user.profileImgUrl}
      />
      <Main
      userId = {isUserLogged.user.id}
      token ={isUserLogged.user.token} 
      isLogged={isUserLogged.isLogged} 
      userIsLogged={userIsLogged}/>
    </Router>
   );
}

export default App;
