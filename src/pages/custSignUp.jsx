import React, { useContext } from "react";
import Form from "../component/sign up component/form";
import SignUpHeader from "../component/sign up component/head";
import { Link } from "react-router-dom";
import { CourierContext } from "../context/courierContext";
export default function CustomerSignUp(){

    const {customerDetails, IsEmptyOrFalse} = useContext(CourierContext)

     // handle form submission
   function Submit(event){
    console.log(courierDetails)
    event.preventDefault()
   }

    return(
        <div className="csu">
            <SignUpHeader />
            <form onSubmit={Submit}>
                <h1>Become a Customer</h1>
                <Form />
                <div className="csu-div">
                <button disabled={IsEmptyOrFalse}  className={`csu-btn ${IsEmptyOrFalse? 'dis': "ena"}`}>Sign Up as Customer</button>
                </div>
                <p className="lg-in">Already have an account
                 <Link style={{textDecoration: "none"}} to="/login"><span> Login <img src="images/SignIn.png" alt="" /></span>
                </Link>
                </p>
            </form>
                
        </div>
       
    )
}