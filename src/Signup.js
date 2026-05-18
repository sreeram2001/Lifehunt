import { useState } from "react"
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import { auth } from "./firebase.config"
import { Link, useNavigate } from "react-router-dom"
import { doc, updateDoc, getDocs, getDoc, collection, query, setDoc} from "firebase/firestore";
import {db} from "./firebase.config"
import { BsArrowRightCircleFill, BsBarChart, BsBarChartFill, BsBuildingFill, BsBullseye, BsClipboard, BsClipboard2CheckFill, BsClipboard2Data, BsClipboardData, BsClipboardDataFill, BsEmojiSmile, BsEmojiSmileFill, BsEnvelope, BsEnvelopeAtFill, BsFileLock2Fill, BsFileLockFill, BsFillLockFill, BsFillReplyFill, BsGithub, BsGlobe2, BsLinkedin, BsPerson, BsPersonFill, BsPersonVcard, BsPhone, BsPhoneFill, BsPhoneVibrate, BsSuitcaseLgFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import React from "react";


const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [experience, setExperience] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [phone, setPhone] = useState("")
    const [portfolio, setPortfolio] = useState("")
    const [resume_link, setResumeLink] = useState("")
    const [current_job, setCurrentJob] = useState("")
    const [current_jobtitle, setCurrentJobTitle] = useState("")
    const [github, setGithub] = useState("")
    const [skills, setSkills] = useState("")

    //we use navigate to route to different page/site/component
    const navigate = useNavigate()

    //we are using async await approach
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const userCredential =  await createUserWithEmailAndPassword(auth, email, password)
           

            //to verify email address by user
            await sendEmailVerification(userCredential.user)

            //lets store the credentials in a variable
            //we will have to create a local storage token to ensure the users browser is signed in/logged in
            const user = userCredential.user
            localStorage.setItem('token',user.accessToken)
            localStorage.setItem('user', JSON.stringify(user))  //we can't store objects in localstorage so stringify
            

            //updating users details like resume, name and etc to firebase database under users collection
            const q = query(collection(db, "users"));
            await setDoc(doc(db, "users", email), {
                name: name,
                email: email,
                experience: experience,
                current_job: current_job,
                current_jobtitle: current_jobtitle,
                resume_link: resume_link,
                skills:skills,
                portfolio: portfolio,
                linkedin: linkedin,
                phone: phone,
                github:github
              });

            alert("Thanks For Registering, Kindly Check your Spam Folder of your Email Inbox for Account Verification, And Login Using your credentials.")
            navigate("/login")

        } 
        catch (error) {
            console.log(error)
            alert(error.message)
        }
    }

    return (
      <div className="signup-container">
      <div className='text-white  flex justify-center items-center bg-cover' style={{"background": "url('./src/Assets/output-signup.png"}}>

   
        <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 ">
        <center>
        <Link to="/"><img src="https://lifehunt.in/static/media/lifehunt_logo.74d9e8412488f63a5bce.png" style={{width:120, padding:15, borderRadius:25}}></img></Link>
            <h1 className="text-4xl text-whitefond-bold text-center mb-6">REGISTER</h1>

            <form onSubmit={handleSubmit} className="jobscard-content">

             <div className="relative my-4">
                <input className="block w-72 py-2.5 px-0 text-sm text-white font-extrabold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:text-white focus:border-orange-600" type="email" required placeholder="Enter Email ID" value={email}
                onChange={ (e) => setEmail(e.target.value)}></input>
                 <BsEnvelopeAtFill className="absolute top-3 right-4" style={{color:"#fe9e0d"}}/>
            </div>
   
            <div className="relative my-4">
                <input className="block w-72 py-2.5 px-0 text-sm text-white font-extrabold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:text-white focus:border-orange-600" type="password" required placeholder="Enter Password" value={password}
                onChange={ (e)=> setPassword(e.target.value)}></input>
                <BsFillLockFill className="absolute top-3 right-4" style={{color:"#fe9e0d"}}/>
            </div> 

            <div className="relative my-4">
                <input className="block w-72 py-2.5 px-0 text-sm text-white font-extrabold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:text-white focus:border-orange-600" type="text" required placeholder="Enter Your Name" value={name}
                onChange={ (e)=> setName(e.target.value)}></input>
                <BsPersonVcard className="absolute top-3 right-4" style={{color:"#fe9e0d"}}/></div>

                <div className="relative my-4">
                <input className="block w-72 py-2.5 px-0 text-sm text-white font-extrabold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:text-white focus:border-orange-600" type="number" required placeholder="Enter Experience" value={experience}
                onChange={ (e)=> setExperience(e.target.value)}></input>
                  <BsBarChartFill className="absolute top-3 right-4" style={{color:"#fe9e0d"}}/></div>
          
                  <div className="relative my-4">
                <input className="block w-72 py-2.5 px-0 text-sm text-white font-extrabold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:text-white focus:border-orange-600" type="text" placeholder="Enter Current Company" value={current_job}
                onChange={ (e)=> setCurrentJob(e.target.value.toUpperCase())}></input>
                  <BsBuildingFill className="absolute top-3 right-4" style={{color:"#fe9e0d"}}/>
              </div>

              <div className="relative my-4">
                <input type="text" className="block w-72 py-2.5 px-0 text-sm text-white font-extrabold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:text-white focus:border-orange-600" placeholder="Enter Current Job Role" value={current_jobtitle}
                onChange={ (e)=> setCurrentJobTitle(e.target.value)}></input>
                 <BsSuitcaseLgFill className="absolute top-3 right-4" style={{color:"#fe9e0d"}}/>
                </div>

                <div className="relative my-4">
                <input type="text" className="block w-72 py-2.5 px-0 text-sm text-white font-extrabold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:text-white focus:border-orange-600" required placeholder="Enter Resume Link" value={resume_link}
                onChange={ (e)=> setResumeLink(e.target.value)}></input>
                     <BsClipboardDataFill className="absolute top-3 right-4" style={{color:"#fe9e0d"}}/>
            </div>

            <div className="relative my-4">
                <input type="text" className="block w-72 py-2.5 px-0 text-sm text-white font-extrabold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:text-white focus:border-orange-600" required placeholder="Enter Skills (separated by ,)" value={skills}
                onChange={ (e)=> setSkills(e.target.value)}></input>
                  <BsBullseye className="absolute top-3 right-4" style={{color:"#fe9e0d"}}/>
          </div>

          <div className="relative my-4">
                <input type="text" className="block w-72 py-2.5 px-0 text-sm text-white font-extrabold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:text-white focus:border-orange-600" placeholder="Enter Portfolio URL (Optional)" value={portfolio}
                onChange={ (e)=> setPortfolio(e.target.value)}></input>
                   <BsGlobe2 className="absolute top-3 right-4" style={{color:"#fe9e0d"}}/>
               </div>

               <div className="relative my-4">
                <input type="text" className="block w-72 py-2.5 px-0 text-sm text-white font-extrabold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:text-white focus:border-orange-600" placeholder="Enter LinkedIn URL (Optional)" value={linkedin}
                onChange={ (e)=> setLinkedin(e.target.value)}></input>
                   <BsLinkedin className="absolute top-3 right-4" style={{color:"#fe9e0d"}}/>
               </div>

               <div className="relative my-4">
                <input type="text" className="block w-72 py-2.5 px-0 text-sm text-white font-extrabold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:text-white focus:border-orange-600" placeholder="Enter Github URL (Optional)" value={github}
                onChange={ (e)=> setGithub(e.target.value)}></input>
                   <BsGithub className="absolute top-3 right-4" style={{color:"#fe9e0d"}}/>
               </div>
                
               <div className="relative my-4">
                <input type="number" className="block w-72 py-2.5 px-0 text-sm text-white font-extrabold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:text-white focus:border-orange-600" placeholder="Enter Phone Number (Optional)" value={phone}
                onChange={ (e)=> setPhone(e.target.value)}></input>
                  <BsPhoneVibrate className="absolute top-3 right-4" style={{color:"#fe9e0d"}}/>
                </div>

                <button type="submit" className="w-full mb-3 text-[18px] mt-3 rounded-full bg-black text-orange-400 hover:bg-orange-400 hover:text-black py-2">SIGNUP <BsArrowRightCircleFill style={{color:'#ffffff', display:"inline", fontSize:20, marginBottom:2}} /> </button> 
                <Link to="/"><button className="w-full mb-3 text-[18px] mt-3 rounded-full bg-black text-orange-400 hover:bg-orange-400 hover:text-black py-2">HOME <BsFillReplyFill style={{color:'#ffffff', display:"inline", fontSize:20, marginBottom:5}} /> </button> </Link>
            
            </form>

            <p>Already have an Account ? <Link to="/login"><b>LOGIN</b></Link></p>
            </center>

      
        </div>
      </div>
      </div>

    )
}

export default Signup