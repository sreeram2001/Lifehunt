import Profileheader from "./Profileheader"
import Profilenav from "./Profilenav"
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { BsArrowRightCircleFill, BsBriefcaseFill, BsBuildingsFill, BsBullseye, BsCardChecklist, BsCursorFill, BsEnvelopeAtFill, BsFillTelephoneFill, BsGithub, BsGlobe2, BsInstagram, BsLinkedin, BsRocketTakeoff, BsTelegram } from "react-icons/bs";
import { GiMuscleUp } from "react-icons/gi";
import { deleteDoc, doc, getDoc } from "firebase/firestore"
import { db } from "./firebase.config"
import { useEffect, useState } from "react";
import { wait } from "@testing-library/user-event/dist/utils";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";



const Profile = () => 
{

     //this is to get the current user from local Storage
     const [items, setItems] = useState([]);
     useEffect(() => {
 
       const item = JSON.parse(localStorage.getItem('user'));
       if (items) {
           setItems(item);
       }
      }, []);
  
 

    const [email, setEmail] = useState("")
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


    //getting data from firebase
    const fillDetails = async() =>
        {
          if(items.email)
          {
            const docRef = doc(db, 'users', items.email);
            const docSnap = await getDoc(docRef);
            const docDet = docSnap.data();

            setEmail(docDet.email)
            setName(docDet.name)
            setLinkedin(docDet.linkedin)
            setCurrentJob(docDet.current_job)
            setCurrentJobTitle(docDet.current_jobtitle)
            setExperience(docDet.experience)
            setGithub(docDet.github)
            setResumeLink(docDet.resume_link)
            setPortfolio(docDet.portfolio)
            setSkills(docDet.skills)
            setPhone(docDet.phone)
          }

        }

      fillDetails()

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      }, []);
    
      if (isLoading) {
        return (

          <center>
            <div style={{marginTop:200}}>
              <img src="https://lifehunt.in/static/media/lifehunt_logo.74d9e8412488f63a5bce.png" style={{borderRadius:20, width:150}}></img>
              <br></br>
          <ClimbingBoxLoader color='#fe9e0d'/>
            </div>
          </center>
        );
      }

  return(
    <div>

      <Profilenav />
      <br></br>
      <Profileheader />

      <center>
      <div className="vh-100" style={{ backgroundColor: '#fff1', width:300, borderRadius:15 }}>
      <MDBContainer className="container py-3 h-100">
        <MDBRow className="justify-content-center align-items-center h-200">
          <MDBCol md="15" xl="10">
            <MDBCard style={{ borderRadius: '25px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <center>
                  <MDBCardImage src="https://as2.ftcdn.net/v2/jpg/06/30/06/57/1000_F_630065739_LT7naBhCSWH7NkbCRHUEoCpw4fVtD05b.jpg"
                    className="rounded-circle" fluid style={{ width: '120px', borderRadius:40}}  />
                    </center>
                </div>
                <h1 style={{color:'#fe9e0d', fontSize:25, fontWeight:'bold'}}>{name}</h1>
                <p>
                 {current_jobtitle} | {current_job}
                </p>

            <div className="footer-icons" style={{marginTop:30, marginBottom:35}} >
            <a href={email} target="_blank"><BsEnvelopeAtFill style={{ marginRight:"10px", display:'inline'}} /></a>
            <a href={portfolio} target="_blank"><BsGlobe2 style={{ marginRight:"10px", display:'inline'}}/></a>
            <a href={linkedin} target="_blank"><BsLinkedin style={{ marginRight:"10px", display:'inline'}} /></a>
            <a href={github} target="_blank"><BsGithub style={{ marginRight:"10px", display:'inline'}} /></a>
            <a href={phone} target="_blank"><BsFillTelephoneFill style={{ marginRight:"10px", display:'inline'}} /></a>
          </div>


                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                 
                  <div>
                    <h2 style={{color:'#fe9e0d', fontWeight:'bold'}}>EXPERIENCE <BsBullseye style={{marginBottom:5, color:'#fe9e0d', display:"inline", fontSize:18}}/> </h2>
                    <p>{experience} Years</p>
                  </div>
                  <br></br>
                  <div>
                    <h2 style={{color:'#fe9e0d', fontWeight:'bold'}}>SKILLS <GiMuscleUp style={{marginBottom:5, color:'#fe9e0d', display:"inline", fontSize:20}}/></h2>
                    <p>{skills}</p>
                  </div>

        <a href={resume_link} target="_blank"> <button className="normal-button" style={{marginTop:30}}>RESUME <BsRocketTakeoff style={{ color:'#ffffff', display:"inline", fontSize:20, marginBottom:2}}/>  </button> </a>

                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
    </center>

    </div>
  )
}

export default Profile