import React, { useState } from "react";
import SignUpHeader from "../component/sign up component/head";
import { Link } from "react-router-dom";

export default function AcceptTerms(){

    const [agreement, setAgreement]=useState(false)

function handleAgreement(event){
    setAgreement(event.target.checked)

}
console.log(agreement)
    return(
        <div className="acpt-terms">
             <SignUpHeader />
             <div className="acpt-txt">
                <div className="acpt-flx">
                    <div><img src="images/book.png" alt="book" /></div>
                    <div className="flx-txt">
                        <h1>Accept SwiftSend's Terms & Privacy Policy</h1>
                        <p>By selecting “I Agree” below, i have reviewed and agree to the <span>Terms</span> and <span>Privacy Policy</span> at SwiftSend and acknowledged that I am at least 18 years of age.</p>
                        <div className="acpt">
                            <input
                             type="checkbox" 
                             id="terms"
                             checked={agreement}
                             onChange={handleAgreement}
                             required />
                            <label htmlFor="terms">I Agree</label>
                        </div>
                    </div>
                    
                </div>


                <div className="terms-cont">
            <Link to="/welcome"><button disabled={agreement===false} className={agreement? "enab": "disab"} >Continue</button></Link>        
                </div>
             </div>
        </div>
    )
}