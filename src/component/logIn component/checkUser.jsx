import React, { useContext } from "react";
import { LogInContext } from "../../context/loginContext";
export default function User(){
    const{user, getUser} = useContext(LogInContext)

    
    return(
        <div className="user">
                    <div className="button">
                        <input type="radio"
                         id="customer" 
                         name="typeOfUser"
                          value="customer"
                          checked={user.typeOfUser === "customer"}
                            onChange={getUser}
                         required/>
                            <label className="btn btn-default" htmlFor="customer">Log in as a Customer</label>
                    </div>

                    <div className="button">
                        <input
                         type="radio" 
                         id="courier" 
                         name="typeOfUser"
                         checked={user.typeOfUser === "courier"}
                         onChange={getUser} 
                         value="courier"
                        required/>
                            <label className="btn btn-default" htmlFor="courierr">Log in as a Courier</label>
                    </div>

                </div>
    )
}