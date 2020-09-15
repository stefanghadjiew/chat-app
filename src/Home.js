import React from "react";
import Button from "@material-ui/core/Button"
import { Link } from "react-router-dom"

const Home = ({isLogged}) => {
    if (!isLogged) {
        return (
            <div className="form-container">
                <div className="form_container_inner">
                    <h1>ArrowMessage Desktop</h1>
                    <h3>Welcome to the official ArrowMessage Desktop app.</h3>
                    <h3>Its fast and secure.</h3>
                    <Link to="/login">
                        <Button
                            style={{width:"50%",height:60}}
                            variant="contained"
                            color="secondary">START MESSAGING
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}   

export default Home;