import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, updatePassword } from "firebase/auth";

export default function ChangePassword(){

        const[newPassword, setNewPassword]= useState({
            password: "",
            rePassword: ""
        })
        const matchPassword =  newPassword.password === newPassword.rePassword

        function handleChange(event){
          setNewPassword(prev=>{
            return{
              ...prev,
              [event.target.name]: event.target.value
            }
          })
        }

        const auth = getAuth();

        const user = auth.currentUser;
        const navigate = useNavigate()
        
       
       
        // check if the input fields are empty or the checkmark is false
        const IsEmptyOrFalse=
        Object.values(newPassword).some(
            (value) => !value)

            // // Submit form
            function handleSubmit(event){
              event.preventDefault()

              updatePassword(user, newPassword.password)
              .then(() => {
                navigate("/success")

                // Update successful.
              }).catch((error) => {
                console.log(error)
              });
              }
            


    return(
        <div className="pwd-chng">
            <h2>Change Your Password</h2>
            <div className="chng-txt">
                <p>To create a secure password</p>
                <ul>
                    <li>Use at least 8 characters</li>
                    <li>Use a mix of letters, numbers and special characters</li>
                </ul>
                
            </div>

            <form onSubmit={handleSubmit}>
                <input
                name="password"
                value={newPassword.password} 
                type="password"
                 placeholder="Enter new Password"
                 onChange={handleChange}
                 required/>
                <input name="rePassword"
                 type="password"
                  placeholder="Re-enter new password" 
                  value={newPassword.rePassword}
                  onChange={handleChange}
                  required/>
                   {!matchPassword && !IsEmptyOrFalse && <p style={{color: "red"}}>passwords do not match</p>}
                <button disabled={IsEmptyOrFalse && !matchPassword}  className={`csu-btn ${!matchPassword || IsEmptyOrFalse? 'dis': "ena"}`}> Change your password</button>
               
            </form>
            <Link style={{textDecoration: "none"}} to="/login"><button className="rtn">Return to Login</button></Link>
        </div>
    )
}