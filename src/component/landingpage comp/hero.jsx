import React from "react";
import { Link } from "react-router-dom";


export default function HeroSection(){
    return(
        <div className="hero">
             <div className="hero-txt">
                    <h1>Send Packages Wherever you want.</h1>
                    <p>Swift Send is a peer to peer  delivery system management app that connects you with our well
                    vetted couriers so you can deliver your packages swiftly and cost effecively.</p>

                    <div className="hero-btn">
                        <Link to="/courier">
                            <button className="hr-btn1"> Become a courier</button></Link>
                        <Link to="/customer"><button className="hr-btn2" > Become a customer</button></Link>
                    </div>
                </div>


            <div className="illustration">
                <div className="truck">
                    <img src="/images/Truck.png" alt="Truck" />
                </div>

                <div className="arrw">
                    <div className="pkg">
                        <img src="/images/Package.png" alt="package" />
                    </div>
                    <div className="arr">
                        <img src="/images/Arrow.png" alt="Arrow" />
                    </div>
                    <div className="location">
                        <img src="/images/lo.png" alt="" />
                    </div>
                </div>

            </div>

        
        </div>
    )
}