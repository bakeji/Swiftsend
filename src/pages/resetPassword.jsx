import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth"
export default function ResetPassword(){

    const [email, setEmail] = useState("")
    const [disabled, setDisabled] = useState(false)

    // handle form input
    function getEmail(event){
        setEmail(event.target.value)
    }

    function resetPasswordLink(event){
        event.preventDefault()
        const auth = getAuth();
sendPasswordResetEmail(auth, email)
  .then(() => {
    setDisabled(true)
  })
  .catch((error) => {
   console.log(error.message)
    // ..
  });


    }

    return(
        <div className="rst-pwd">
            <div className="fgt-pwd">
                <div className="fgt-pwd-txt">
                    <h1>Forgot Password?</h1>
                    <p>All good. Enter your account’s email address and we’ll send a link to reset your password.</p>
                </div>

                <form onSubmit={resetPasswordLink} className="fgt-pwd-form">
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
                    <button disabled={email ==="" || disabled} className={email ==="" || disabled? "dis": "ena"}>{disabled? "Sent": "Send reset link"}</button>
                    </div>

                    <div className="rtn-lg">
                        <Link to="/login"> <button > Return to log in</button></Link>
                    </div>

                </form>
            </div>
        </div>
    )
}