import React, { useState } from "react";
import User from "../component/logIn component/checkUser";
import LogInForm from "../component/logIn component/logIn form";
import { LogInContext } from "../context/loginContext";
import {getDoc, doc, getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
export default function LogIn(){


    const [user, setUser] = useState({
        email: "",
        password: "",
        typeOfUser: ""
    })
    const navigate = useNavigate()
   
    // handle form input

    function getUser(event){
        const {name, value, type, checked} = event.target
        setUser(prev => {
            return {
                ...prev,
                [name]: type === "checkbox"? checked: value
            }
        })
    }
    
    const auth = getAuth();
    const db= getFirestore(app)

    // handle form submission
   async function submitForm(event){
        event.preventDefault()
        try {
            const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
            const userId = userCredential.user.uid;

            const userDoc = await getDoc(doc(db,  user.typeOfUser, userId));
            const userData = userDoc.data();

            if (userData.role === user.typeOfUser) {
                console.log("User signed in successfully");
                navigate("/terms")
            } 
            else{
                alert("wrong email or password")
            }

            
        } catch (error) {
            console.log(error.message)
        }
     
    }

    
    console.log(user.typeOfUser)



    return(
        <div className="sign-in">
            <LogInContext.Provider value={{user, getUser}}>
                <div className="sn-txt">
                    <hr /> 
                    <h2>LOGIN</h2>
                    <hr />
                </div>

            <form onSubmit={submitForm} className="log-in">
                <User />
                <LogInForm />
            </form>
            </LogInContext.Provider>
        </div>

    )
}