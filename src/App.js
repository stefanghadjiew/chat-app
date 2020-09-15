import React,{ useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Navbar"
import Main from "./Main"


function App() {
  const [isUserLogged,setIsUserLogged] = useState(false)
  return (
    <Router>
       <Navbar isUserLogged={isUserLogged}/>
       <Main isUserLogged={isUserLogged}/>
    </Router>
   );
}

export default App;
