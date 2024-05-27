import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import CourierSignUp from "./pages/courierSignUp";
import CustomerSignUp from "./pages/custSignUp";
import LogIn from "./pages/login";
import ResetPassword from "./pages/resetPassword";
import SuccessPage from "./pages/succes";
import { CourierContext } from "./context/courierContext";
import AcceptTerms from "./pages/acceptTerms";
import Welcome from "./pages/welcome";
import Verification from "./pages/verification";

export default function App(){

const [courierDetails, setCourierDetails] = useState({
  email : "",
  password: "",
  phone: "",
  city: "",
  terms:false
})

  // handle form input
  function getCourierDetails(event){
    const {name, value, type, checked} = event.target
    setCourierDetails(prev => {
        return {
            ...prev,
            [name]: type === "checkbox"? checked: value
        }
    })
}

// check if the input fields are empty or the checkmark is false
const IsEmptyOrFalse=
Object.values(courierDetails).some(
    (value) => !value)





  return(
    <div className="app">
      <CourierContext.Provider value={{courierDetails,IsEmptyOrFalse, getCourierDetails}}>
     <BrowserRouter>
     <Routes>
      <Route  path="/"  element={<LandingPage/>}/>
      <Route path="/courier" element={<CourierSignUp/>} />
      <Route path ="/customer" element={<CustomerSignUp/>} />
      <Route path="/login" element={<LogIn />} />
      <Route path ="/resetPassword" element={<ResetPassword />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/terms" element={<AcceptTerms />} />
      <Route path="/welcome" element ={<Welcome />} />
      <Route path="/verification" element ={<Verification/>} />
     </Routes>
     </BrowserRouter>
     </CourierContext.Provider>   
    </div>
  )
}