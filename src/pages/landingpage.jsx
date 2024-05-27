import React, { useState } from "react";
import Header from "../component/landingpage comp/header";
import HeroSection from "../component/landingpage comp/hero";
export default function LandingPage(){
    const [popUp, setPopup]= useState(false)

    function togglePopUp(){
        setPopup(prev => !prev)
    }
    return(
        <div className="ldn-pg">
            <Header 
            togglePopUp = {togglePopUp}
            popUp = {popUp} 
            />
            <HeroSection
            
            />
        </div>
    )
}