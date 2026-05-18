
import { useState } from "react"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { Link, useNavigate} from "react-router-dom"
import { auth } from "./firebase.config"
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BsArrowBarRight, BsArrowRightCircleFill, BsFillHouseFill, BsFillReplyFill } from "react-icons/bs";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //we use navigate to route to different page/site/component
    const navigate = useNavigate()

    //we are using async await approach
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const userCredential =  await signInWithEmailAndPassword(auth, email, password)
            console.log(userCredential)

            //lets store the credentials in a variable
            //we will have to create a local storage token to ensure the users browser is signed in/logged in
            const user = userCredential.user
            localStorage.setItem('token',user.accessToken)
            localStorage.setItem('user', JSON.stringify(user))  //we can't store objects in localstorage so stringify
            navigate("/")

        } 
        catch (error) {
            console.log(error.message)
            alert(error.message)
        }
    }

    return (

        <div className="login-container">

            <center>
            <div className="login-card">

            <center>
                <br></br>
            <h1 className="jobscard-content">LOGIN</h1>

            <form onSubmit={handleSubmit} >

                <input type="email" required placeholder="Enter Email" value={email}
                onChange={ (e) => setEmail(e.target.value)}></input>
                <FaUser className="loginicon" style={{color:"#fe9e0d"}}/>
                <br></br>
                <input type="password" required placeholder="Enter Password" value={password}
                onChange={ (e)=> setPassword(e.target.value)}></input>
                <FaLock className="loginicon" style={{color:'#fe9e0d'}}/>


         <br></br>
                <button type="submit" className="normal-button">LOGIN <BsArrowRightCircleFill style={{color:'#ffffff', display:"inline", fontSize:20}} /> </button> 
               <br></br> 
               <Link to="/"><button className="normal-button" style={{marginTop:0}}>HOME <BsFillReplyFill style={{color:'#ffffff', display:"inline", fontSize:20}} /> </button> </Link>
            </form>

            <div className="register-link">
            <p>Don't have an Account ? <Link to="/signup"> <br></br> <b>CREATE ACCOUNT</b></Link></p>
            </div>


            <div className="register-link">
            <p>Forgot Password / Reset Password ? <Link to="/reset"><br></br><b>RESET PASSWORD</b></Link></p>
            <br></br>
            </div>
            </center>
            
        </div>
        </center>
        </div>
    )
}

export default Login
