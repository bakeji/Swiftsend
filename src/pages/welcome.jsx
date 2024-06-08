import React from "react";
import SignUpHeader from "../component/sign up component/head";
import { Link } from "react-router-dom";
export default function Welcome(){
    return(
        <div className="Welcome">
            <SignUpHeader />
                <div className="wlc-txt">
                    <h1>Welcome to SWIFTSEND!</h1>
                    <div className="img">
                        <img src="images/Illustration.png" alt="illustration" />
                    </div>
                    <div className="wlc-btn">
                           <Link to="/verification"><button className="prcd">Proceed to verify Identity</button></Link>
                        </div>
                </div>
        </div>
    )
}