import React, { useContext, useState } from "react";
import { CourierContext } from "../../context/courierContext";

export default function Form(){
    const [showPassword, setShowPassword] = useState(false)
    const {details, getDetails} = useContext(CourierContext)

    // hide and show password
    function togglePassword(event){
        setShowPassword(prev => !prev)
        event.preventDefault()
        
        
    }

    return(
        <div className="form">

            <div className="name">
                <label htmlFor="firstName"> First Name</label>
                <input
                type="text"
                name="firstName"
                id="firstName"
                value={details.firstName}
                onChange={getDetails}
                required />
            </div>

            <div className="name">
                <label htmlFor="lastName"> Last Name</label>
                <input
                type="text"
                name="lastName"
                id="lasstName"
                value={details.lastName}
                onChange={getDetails}
                required />
            </div>


        <div className="email">
            <label htmlFor="email"> Email</label>
            <input
             id="email"
             type="email"
             name="email"
             value={details.email}
             onChange={getDetails} 
             required
             />
        </div>

        <div className="password">
            <label htmlFor="pwd">Password</label>
            <div >
                <input id="pwd" 
                type={showPassword? "text": "password"} 
                name="password"
                value={details.password}
                onChange={getDetails}
                pattpattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more character"
                required
                /> 
                <button
                 className="pwd-btn"
                 onClick={togglePassword}>
                    <img src={showPassword? "/images/Eye.png": "images/EyeSlash.png"} alt="eyeslash" />
                </button>
            </div>
        </div>

        <div className="phone">
            <label htmlFor="phone">Phone Number</label>
            <div>
            <p>+234</p>
            <input id="phone" type="tel"
            name="phone"
            value={details.phone}
            onChange={getDetails} 
            required
            />
            </div>
        </div>

        <div className="city">
            <label htmlFor="city">City</label>
            <input id="city"
             type="text"
             name ="city" 
             value={details.city}
             onChange={getDetails}
             required/>
        </div>

        <div className="terms">
            <input name="terms" 
            type="checkbox" 
            id="terms"
            value="terms"
            checked={details.terms}
            onChange={getDetails}
            required />
            <label htmlFor="terms">By signing up, you agree to our <span>Terms of Service</span>and <span>Privacy policy</span>, commit to comply with obligations under the Nigerian Govt and local legislation and provide only legal services and content on the Swift Send Platform.</label>
        </div>

        <p className="nb">Once you’ve become a courier, we will occasionally send you offers and promotions related to our services. You can always unsubscribe by changing your communication preferences.</p>
    </div>
    )
}