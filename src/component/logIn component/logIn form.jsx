import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LogInContext } from "../../context/loginContext";

export default function LogInForm(){
    const [showPassword, setShowPassword] = useState(false)
    const {user, getUser} = useContext(LogInContext)
// hide and show password
    function togglePassword(event){
        setShowPassword(prev => !prev)
        event.preventDefault()
    }

        // check if the input fields are empty
        const IsEmpty=
        Object.values(user).some(
            (value) => !value)
            console.log(IsEmpty)
    return (
      <div className="lgn-form">
            <div className="email">
                <label htmlFor="email">Email</label>
                <input type="email" id="email"
                 name="email"
                  value={user.email}
                  onChange={getUser}
                  required/>
            </div>

            <div className="password">
            <label htmlFor="pwd">Password</label>
            <div>
                <input 
                id="pwd" 
                name="password"
                type={showPassword ? "text" : "password"}
                value={user.password} 
                onChange={getUser}
                required/>
                <button className="pwd-btn" onClick={togglePassword}>
                <img
                    src={showPassword ? "/images/Eye.png" : "images/EyeSlash.png"}
                    alt="eyeslash"
                />
                </button>
            </div>
            </div>

            <p className="wr">Incorrect email or password. Please try again with the correct information</p>

            <div className="cnt-btn">
                <button className={`cont ${IsEmpty? "dis": "ena"} `} disabled={IsEmpty}>Continue</button>
            </div>
            <div className="fgt-pw">
                <Link to="/resetPassword">
                <button>Forgot password</button>
                </Link>
            </div>

            <p className="lg-p">Don't have an account yet ? <Link style={{textDecoration: "none"}} to="/customer"> <span>Sign up</span></Link> </p>
      </div>
    );
}