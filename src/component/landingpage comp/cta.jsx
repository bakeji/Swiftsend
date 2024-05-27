import React from "react";
import { Link } from "react-router-dom";
export default function CtaBtn(props){
    
    return(
        <div className="cta-btns">
             
             <Link to="/login"><button className="cta-btn1" >Log In</button></Link>
            <button className="cta-btn2" onClick={props.togglePopUp}>Sign Up</button>

        </div>
    )
}