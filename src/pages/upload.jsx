import React, { useState } from "react";
import SignUpHeader from "../component/sign up component/head";
import { getAuth } from "firebase/auth"
import { app} from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytes } from "firebase/storage";

export default function Upload(){
    const [cardPicture, setCardPicture ] = useState()
    const [fileName, setFileName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const[loading, setLoading] = useState(false)

    const user = getAuth()
    const uid = user.currentUser.uid
    const navigate = useNavigate()

    function handleChange(event){
        const file =event.target.files[0]
        console.log(file)
        setCardPicture(file)
        if (file) {
            setFileName(file.name);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
                console.log(reader.result)
            }
           
           console.log( reader.readAsDataURL(file));

        } else {
            setFileName('No file chosen');
            setImagePreview('');
        }

    }

        
    const handleUpload = () => {
        setLoading(true)
        const storage = getStorage();
        const storageRef = ref(storage, `ids/${uid}/${fileName}`)
        uploadBytes(storageRef, cardPicture).then(() => {
            navigate("/completeVerification")
            setLoading(false)
          });       
    };
    return(
        <div className="upload">
            <SignUpHeader />

            <div className="upload-txt">
                <div className="upload-txt1">
                    <img src="images/card.png" alt="card" />
                    <h2>Identity Verification</h2>
                </div>

                <div className="upl-txt1">
                    <h3>Upload a clear picture of your license</h3>
                    <p>Make sure the picture shows all four corners of the card clearly</p>
                </div>

               
                    <div className="upload-frm">

                        {fileName === "" &&<label  htmlFor="upload">Browse photos... <img src="images/clip.png" alt="" /></label>}
                        <input
                        onChange={handleChange}
                          id="upload" 
                          type="file" 
                          accept="image/*" 
                         placeholder="browse photos" />
                         <p>{fileName}</p>
                    </div>

                    <div className="pol-txt">
                        <img src="/images/lock-bl.png" alt="lock" />
                        <p>We take steps to help ensure this info stays private. Learn more in our <span>Privacy Policy</span></p>
                    </div>
              

                   
                   
            </div>
           <div className="cnt2">
           <button disabled={fileName ===""} onClick={handleUpload} className={`cnt ${fileName === ""? "dis2": ""}`}>
            {loading? <div className="spinner"></div>: "Continue"}</button>
           </div>

        </div>
    )


}