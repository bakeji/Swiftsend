import React, { useState } from "react";
import SignUpHeader from "../component/sign up component/head";


export default function CompVerification(){
        const [stopLoading, setStopLoading]= useState(false)

        setTimeout(() => {
            setStopLoading(true)

        }, 3000)


    return(
        <div className="comp-veri">
            <div className="veri-header">
                <SignUpHeader />
            </div>

            {!stopLoading && <div className="veri-ld">
                <div className="lding">
                <div className="spinner spin"></div>

                </div>
                <h3>Identity verification is almost complete!</h3>
                <p>We are manually reviewing your identification check. This typically takes us less than 24 hours. There is no additional action needed from you at this time. If you have questions, please contact us at <span>help@swiftsend.com</span></p>
            </div>}

         {  stopLoading && <div className="veri-ld">
                <div className="lding">
                    <img src="images/check1.png" alt="" />
                </div>

                <h3>Identity Verified</h3>
                <p>We have verified your Identity. Proceed to take charge of your delivery.</p>
            </div>}





         { stopLoading &&  <div className="cnt2">
                <button className="cnt">Continue</button>
            </div>}

        </div>
    )


}