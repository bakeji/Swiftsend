import React, {useContext} from "react";
import Form from "../component/sign up component/form";
import SignUpHeader from "../component/sign up component/head";
import { CourierContext } from "../context/courierContext";
import { Link, useNavigate } from "react-router-dom";
import { app} from "../firebaseConfig";
import { doc, setDoc,} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default function CourierSignUp(){

    const {details, IsEmptyOrFalse} = useContext(CourierContext)

    let auth = getAuth(app)
    const db= getFirestore(app)

    const navigate = useNavigate()
  
    
    


    // handle form submission
   function Submit(event){
    event.preventDefault()
    createUserWithEmailAndPassword(auth, details.email, details.password)
    .then((response)=>{
        const userData = {
            email: details.email,
            phone: details.phone,
            city: details.city,
            terms: details.terms,
            role: "Courier"
        };

    return setDoc(doc(db, "Courier", response.user.uid), userData);

    })
    .then(() => {
        alert("Sign up successful");
        navigate("/login")
       
    })
    .catch((error)=>{
        alert(error)
    })
    console.log(details)
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
                <p className="lg-in">Already have an account 
                <Link style={{textDecoration: "none"}} to="/login"><span>Login <img src="/images/SignIn.png" alt="" /></span></Link></p>
            </form>
           
        </div>
       
    )
}