import React, { useContext } from "react";
import Form from "../component/sign up component/form";
import SignUpHeader from "../component/sign up component/head";
import { Link, useNavigate } from "react-router-dom";
import { CourierContext } from "../context/courierContext";
import { app } from "../firebaseConfig";
import { doc, setDoc,} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default function CustomerSignUp(){
    const navigate = useNavigate()

    const {details, IsEmptyOrFalse} = useContext(CourierContext)
    //const {loading, setLoading} = useState(false)

    let auth = getAuth(app)
    const db= getFirestore(app)
     // handle form submission
     function Submit(event){
        event.preventDefault()
        createUserWithEmailAndPassword(auth,details.email, details.password)
        .then((response)=>{
            const userData = {
                email: details.email,
                phone: details.phone,
                city: details.city,
                terms: details.terms,
                role: "Customer"
            };
            console.log(response.user.uid, userData)
    
        return setDoc(doc(db, "Customer", response.user.uid), userData);
    
        })
        .then(() => {
            alert("Sign up successful");
            navigate("/login")
           
        })
        .catch((error)=>{
            alert(error)
        })
       }
    return(
        <div className="csu">
            <SignUpHeader />
            <form onSubmit={Submit}>
                <h1>Become a Customer</h1>
                <Form />
                <div className="csu-div">
                <button disabled={IsEmptyOrFalse}  className={`csu-btn ${IsEmptyOrFalse? 'dis': "ena"}`}>Sign Up as Customer</button>
                </div>
                <p className="lg-in">Already have an account
                 <Link style={{textDecoration: "none"}} to="/login"><span> Login <img src="images/SignIn.png" alt="" /></span>
                </Link>
                </p>
            </form>
                
        </div>
       
    )
}