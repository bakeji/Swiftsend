import React, { useState } from "react";
import User from "../component/logIn component/checkUser";
import LogInForm from "../component/logIn component/logIn form";
import { LogInContext } from "../context/loginContext";
export default function LogIn(){


    const [user, setUser] = useState({
        email: "",
        password: "",
        typeOfUser: ""
    })

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
    // handle form submission
    function submitForm(event){
        event.preventDefault()
        console.log(user)
    }
    console.log(user.typeOfUser)



    return(
        <div className="sign-in">
            <LogInContext.Provider value={{user, getUser}}>
                <div className="sn-txt">
                    <hr /> 
                    <h1>LOG IN</h1>
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