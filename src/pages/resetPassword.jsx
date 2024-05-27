import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function ResetPassword(){

    const [email, setEmail] = useState("")

    // handle form input
    function getEmail(event){
        setEmail(event.target.value)
    }
    return(
        <div className="rst-pwd">
            <div className="fgt-pwd">
                <div className="fgt-pwd-txt">
                    <h1>Forgot Password?</h1>
                    <p>All good. Enter your account’s email address and we’ll send a link to reset your password.</p>
                </div>

                <form action="" className="fgt-pwd-form">
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" 
                        id="email"
                         name="email" 
                         value={email}
                         onChange={getEmail}
                         required/>
                    </div>
                    <div className="rst-lnk">
                    <button disabled={email ===""} className={email ===""? "dis": "ena"}>Send reset link</button>
                    </div>

                    <div className="rtn-lg">
                        <Link to="/login"> <button > Return to log in</button></Link>
                    </div>

                </form>
            </div>
        </div>
    )
}