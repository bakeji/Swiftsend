import React, { useContext, useState } from "react";
import { CourierContext } from "../../context/courierContext";

export default function Form(){
    const [showPassword, setShowPassword] = useState(false)
    const {courierDetails, getCourierDetails} = useContext(CourierContext)

    // hide and show password
    function togglePassword(event){
        setShowPassword(prev => !prev)
        event.preventDefault()
        
        
    }

    return(
        <div className="form">
        <div className="email">
            <label htmlFor="email"> Email</label>
            <input
             id="email"
             type="email"
             name="email"
             value={courierDetails.email}
             onChange={getCourierDetails} 
             required
             />
        </div>

        <div className="password">
            <label htmlFor="pwd">Password</label>
            <div >
                <input id="pwd" 
                type={showPassword? "text": "password"} 
                name="password"
                value={courierDetails.password}
                onChange={getCourierDetails}
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
            value={courierDetails.phone}
            onChange={getCourierDetails} 
            required
            />
            </div>
        </div>

        <div className="city">
            <label htmlFor="city">City</label>
            <input id="city"
             type="text"
             name ="city" 
             value={courierDetails.city}
             onChange={getCourierDetails}
             required/>
        </div>

        <div className="terms">
            <input name="terms" 
            type="checkbox" 
            id="terms"
            value="terms"
            checked={courierDetails.terms}
            onChange={getCourierDetails}
            required />
            <label htmlFor="terms">By signing up, you agree to our <span>Terms of Service</span>and <span>Privacy policy</span>, commit to comply with obligations under the Nigerian Govt and local legislation and provide only legal services and content on the Swift Send Platform.</label>
        </div>

        <p className="nb">Once you’ve become a courier, we will occasionally send you offers and promotions related to our services. You can always unsubscribe by changing your communication preferences.</p>
    </div>
    )
}