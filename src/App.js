import React,{ useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Navbar"


function App() {
  const [user,setUser] = useState({
    username: "",
    email: ""
  })
  return (
    <Router>
       <Navbar/>
    </Router>
   );
}

export default App;
