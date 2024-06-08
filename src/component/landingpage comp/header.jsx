import React from "react";
import CtaBtn from "./cta";
import { Link } from "react-router-dom";

export default function(props){
    return(
    <header className="header">
        <div className="logo">
            <img src="/images/logo.png" alt="logo" />
        </div>

        <div className="sn-btns">
            <CtaBtn 
            togglePopUp = {props.togglePopUp}
             />

            <div className={`popup ${props.popUp? "show": "hide"}`}>
                <div className="bc-cour">
                    <div>
                    <img src="/images/trk.png"alt="truck" />
                    </div>
                    <div className="bc-txt">
                        <p>Become a courier</p>
                        <p>Deliver packages and get paid daily</p>
                    </div>
                    <Link to="/courier">
                    <button className="arr-btn">
                    <img src="/images/arr-rt.png" alt="right arrow" />
                    </button>
                    </Link>
                </div>

                <div className="bc-cus">
                    <div>
                    <img src="/images/cust.png"alt="truck" />
                    </div>
                    <div className="bc-txt">
                        <p>Become a customer</p>
                        <p>As a vendor,  use our peer to peer system to get your packages delivered swiftly</p>
                    </div>
                    <Link to="/customer">
                    <button className="arr-btn"> 
                    <img src="images/arr-rt.png" alt="right arrow" />
                    </button>
                    </Link>
                </div>
            </div>
           
        </div>
    </header>
    )
}