import React from "react";

const Home = ({isUserLogged}) => {
    if (isUserLogged) {
        return (
            <div className="wrapper"></div>
        )
    }
}   

export default Home;