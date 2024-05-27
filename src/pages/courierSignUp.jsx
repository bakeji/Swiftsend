import React, {useContext} from "react";
import Form from "../component/sign up component/form";
import SignUpHeader from "../component/sign up component/head";
import { CourierContext } from "../context/courierContext";
export default function CourierSignUp(){

    const {courierDetails, IsEmptyOrFalse} = useContext(CourierContext)
   
  
    
    


    // handle form submission
   function Submit(event){
    console.log(courierDetails)
    event.preventDefault()
   }


    return(
        <div className="csu">
            
            <SignUpHeader />
            <form onSubmit={Submit}>
                <h1>Become a Courier</h1>
                <Form />
                <div className="csu-div">
                <button disabled={IsEmptyOrFalse}  className={`csu-btn ${IsEmptyOrFalse? 'dis': "ena"}`}>Sign Up as Courier</button>
                </div>
                <p className="lg-in">Already have an account <span>Login <img src="/images/SignIn.png" alt="" /></span></p>
            </form>
           
        </div>
       
    )
}