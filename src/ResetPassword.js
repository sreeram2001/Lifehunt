import { sendPasswordResetEmail } from "firebase/auth"
import { useState } from "react"
import app, { auth } from "./firebase.config"
import { Link, useNavigate } from "react-router-dom"

const ResetPassword = () => 
{   
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const handleReset = async(e) => {
        e.preventDefault()

        sendPasswordResetEmail(auth,email).then( () => {
                        
                alert("Check Your Email Inbox for Reset Password Mail from Firebase")
                navigate("/")
        }).catch( err => {
            alert(err.message)
        })
    }

    return(
        <div>
            <center>
            <h1 className="jobscard-content">Reset Password</h1>

            <form onSubmit={handleReset} className="jobscard-content">
              <input type="email" required placeholder="Enter Your Email ID" value={email}
              onChange={ (e) => {setEmail(e.target.value)}} className="jobscard-content"></input>
            <button type="submit" className="normal-button">RESET</button>

            </form>
            </center>
        </div>
    )
}

export default ResetPassword