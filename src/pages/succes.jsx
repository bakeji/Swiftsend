import React from "react";
import { Link } from "react-router-dom";
export default function SuccessPage(){
    return(
        <div className="sucesspg">
            <div className="scs">
                <div className="scs-txt">
                    <img src="images/check.png" alt="seal check" />
                    <h1>Success!</h1>
                    <p>Your password has been updated and is secure.</p>
                    <p>You can log in again</p>
                </div>

                    <div className="scs-btn">
                        <Link to="/login"><button>Return to log in</button></Link>
                    </div>
            </div>

        </div>
    )
}