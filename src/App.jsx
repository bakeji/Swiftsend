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
import User from "./component/logIn component/checkUser";
import ChangePassword from "./pages/changePassword";
import Upload from "./pages/upload";

export default function App(){

const [details, setDetails] = useState({
  email : "",
  password: "",
  phone: "",
  city: "",
  terms:false,
  role: "courier"
})

  // handle form input
  function getDetails(event){
    const {name, value, type, checked} = event.target
    setDetails(prev => {
        return {
            ...prev,
            [name]: type === "checkbox"? checked: value
        }
    })
}

// check if the input fields are empty or the checkmark is false
const IsEmptyOrFalse=
Object.values(details).some(
    (value) => !value)





  return(
    <div className="app">
      <CourierContext.Provider value={{setDetails,details, IsEmptyOrFalse, getDetails}}>
     <BrowserRouter>
     <Routes>
      <Route  path="/"  element={<LandingPage/>}/>
      <Route path="/courier" element={<CourierSignUp/>} />
      <Route path ="/customer" element={<CustomerSignUp/>} />
      <Route path="/login" element={<LogIn />} />
      <Route path ="/resetPassword" element={<ResetPassword />} />
      <Route path ="/ChangePassword" element={<ChangePassword />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/terms" element={<AcceptTerms />} />
      <Route path="/welcome" element ={<Welcome />} />
      <Route path="/verification" element ={<Verification/>} />
      <Route path="/upload" element ={<Upload />} />
     </Routes>
     </BrowserRouter>
     </CourierContext.Provider>   
    </div>
  )
}