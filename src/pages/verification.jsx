import React, { useState } from "react"
import SignUpHeader from "../component/sign up component/head"
import { Link } from "react-router-dom"
export default function Verification(){

    const [idVerification, setIdVerification]= useState({
        region: "",
        typeOfCard: ""
    })
// handle form input
    function handleIdentification(event){
        const {name, value, type, checked} = event.target
        setIdVerification(prev=>{
            return{
                ...prev,
                [name]: type ==="checkbox"? checked: value
            }
        })

    }

    // check if the input fields are empty
    const IsEmpty=
Object.values(idVerification).some(
    (value) => !value)


    return(
        <div className="veri">
        <SignUpHeader />
        <div className="veri-txt">
            <div className="veri-txt1">
                <img src="images/card.png" alt="card" />
                <p>Identity Verification</p>
            </div>
            <p className="mr-inf">To continue, you will need to upload a Government issued means of Identification. Select one of the options listed below:</p>

            <div className="select">
                <p>Issuig coutry/region</p>
                <select className="reg" name="region"
                 id="region"
                 value={idVerification.region} 
                 onChange={handleIdentification}
                 required>
                    <option value="">---Select Country---</option>
                    <option htmlFor="region" value="nigeria">Nigeria</option>
                    <option htmlFor="region" value="south-africa">South Africa</option>
                    <option htmlFor="region" value="ghana">Ghana</option>
                </select>
            </div>

            <div className="type-of-card">
                <div className="radio-btn">
                <label htmlFor="license">Driver's license</label>
                    <input  type="radio" 
                    name="typeOfCard" 
                    id="license"
                    value= "license"  
                    checked={idVerification.typeOfCard === "license"}
                    onChange={handleIdentification}
                    required/>

                </div>

                <div className="radio-btn">
                <label htmlFor="passport">Passport</label>
                <input 
                type="radio" 
                name="typeOfCard" 
                id="passport"
                value= "passport"  
                checked={idVerification.typeOfCard === "passport"}
                onChange={handleIdentification}  
                required/>
                   
                </div>

                <div className="radio-btn">
                <label htmlFor="id-card">Identity Card</label>
                <input type="radio"
                 name="typeOfCard" 
                 id="id-card" 
                 value= "idCard"  
                 checked={idVerification.typeOfCard === "idCard"}
                 onChange={handleIdentification}
                  required/>
                   
                </div>
           
                 <div className="radio-btn">
                 <label htmlFor="voters-card">Voter's Card</label>
                <input type="radio"
                 name="typeOfCard" 
                 id="voters-card"  
                 value= "votersCard"  
                 checked={idVerification.typeOfCard === "votersCard"}
                 onChange={handleIdentification}
                 required/>
                    
                </div>
          </div>

          <div className="pol-txt">
            <img src="/images/lock.png" alt="lock" />
            <p>We take steps to help ensure this info stays private. Learn more in our <span>Privacy Policy</span></p>
          </div>
           
        </div>
        <div className="veri-btn">
                <Link to="">
                    <button disabled={IsEmpty} className={IsEmpty? "disab": "enab"}>Continue</button></Link>
            </div>
        

    </div>
    )
}