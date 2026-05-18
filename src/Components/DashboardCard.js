import { deleteDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../firebase.config"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircleFill, BsBriefcaseFill, BsBuildingsFill, BsBullseye, BsCartX, BsEnvelopeAtFill, BsFileTextFill, BsFillTelephoneFill, BsGithub, BsGlobe2, BsLink, BsLink45Deg, BsLinkedin, BsMailbox, BsSendFill, BsXSquareFill } from "react-icons/bs";
import { GiMuscleUp } from "react-icons/gi";


const DashboardCard = (props) =>
{
    //this is to get the current user from local Storage
    const [items, setItems] = useState([]);
    useEffect(() => {
            const items = JSON.parse(localStorage.getItem('user'));
            if (items) {
                setItems(items);
            }
    }, []);

    const [email, setEmail] = useState("Not Mentioned")
    const [name, setName] = useState("Not Mentioned")
    const [experience, setExperience] = useState("Not Mentioned")
    const [linkedin, setLinkedin] = useState("Not Mentioned")
    const [phone, setPhone] = useState("Not Mentioned")
    const [portfolio, setPortfolio] = useState("Not Mentioned")
    const [resume_link, setResumeLink] = useState("Not Mentioned")
    const [current_job, setCurrentJob] = useState("Not Mentioned")
    const [current_jobtitle, setCurrentJobTitle] = useState("Not Mentioned")
    const [github, setGithub] = useState("Not Mentioned")
    const [skills, setSkills] = useState("Not Mentioned")

    //getting data from firebase
    // const fillDetails = async() =>
    // {
    //     const docRef = doc(db, 'users', props.email);
    //     const docSnap = await getDoc(docRef);
    //     const docDet = docSnap.data();
    //     console.log(docDet)
        

    //     setEmail(docDet.email)
    //     setName(docDet?.name)
    //     setLinkedin(docDet.linkedin)
    //     setCurrentJob(docDet.current_job)
    //     setCurrentJobTitle(docDet.current_jobtitle)
    //     setExperience(docDet.experience)
    //     setGithub(docDet.github)
    //     setResumeLink(docDet.resume_link)
    //     setPortfolio(docDet.portfolio)
    //     setSkills(docDet.skills)
    //     setPhone(docDet.phone)
    // }
    
    // fillDetails();

    const LifehuntEmail = 'contactlifehunt@gmail.com'
    const ClearMaillink = `mailto: ${LifehuntEmail}?body= Hi, The candidate ${name} with email id ${email} has been rejected for referral.`

    const handleClear = async(id) => 
    {   
        
        //this props.email here has to be replaced with users sign in email ID
        <Link to={ClearMaillink}></Link>
        const deleteItem = doc(db, `dashboard/${items.email}/${items.email}`, id)
        await deleteDoc(deleteItem)
        
    }
    
    const Maillink = `mailto: ${props.email}?body= Hi ${name}, Hope you are doing good. I have successfully referred you for the role you had applied for. Thank You for pinging me and All the Best.`
    const Maillink1 = `mailto: ${props.email}?body= Hi ${name}, Hope you are doing good. I would like to gather few details from you.`

    const handleRefer = () => 
    {
        alert("You Acknowledge that you have referred this candidate in your company's job portal. Proceed to send him a confirmation Mail.");
        <Link to={Maillink}></Link>
    }
    
 

    return(
        <div>

        <div className="jobscard-container">

        <div className="jobscard-content">
            
        <img src="https://as2.ftcdn.net/v2/jpg/04/06/43/07/1000_F_406430746_ufn7fcaKvMbw3wFXVgY6PIKzconvcVKN.jpg" style={{marginTop:10 , width:100, color:"orange"}} />

        <h1>{name}</h1>
        

        <p> < BsBuildingsFill  style={{marginBottom:0, color:'#fe9e0d', display:"inline", fontSize:20}}/> {current_job}</p>
        <p> <BsBriefcaseFill style={{marginBottom:0, color:'#fe9e0d', display:"inline", fontSize:20}}/> {current_jobtitle}</p>
        <p> <BsBullseye style={{marginBottom:0, color:'#fe9e0d', display:"inline", fontSize:20}}/> {experience} Years Of Exp</p>
        <p> <GiMuscleUp style={{marginBottom:0, color:'#fe9e0d', display:"inline", fontSize:20}}/> {skills} </p>
        <p style={{'fontWeight':800}}> <a href={resume_link} target="_blank"><BsLink45Deg style={{marginBottom:0, color:'#fe9e0d', display:"inline", fontSize:20}}/>  RESUME </a> </p>

        <p>
        <a href={Maillink1} target="_blank"><BsEnvelopeAtFill style={{marginBottom:0, color:'#fe9e0d', display:"inline", fontSize:20}}/></a>
        <a href={portfolio} target="_blank"><BsGlobe2 style={{marginBottom:0, color:'#fe9e0d', display:"inline", fontSize:20, marginLeft:5}}/></a>
        <a href={linkedin} target="_blank"><BsLinkedin style={{marginBottom:0, color:'#fe9e0d', display:"inline", fontSize:20, marginLeft:5}}/></a>
        <a href={phone} target="_blank"><BsFillTelephoneFill style={{marginBottom:0, color:'#fe9e0d', display:"inline", fontSize:20, marginLeft:5}}/></a>
        <a href={github} target="_blank"><BsGithub style={{marginBottom:0, color:'#fe9e0d', display:"inline", fontSize:20, marginLeft:5}}/></a>
        </p>


        <br></br>
         <center>
        <a href={Maillink}> <button onClick={handleRefer}  className="normal-button">REFER <BsArrowRightCircleFill style={{ color:'#ffffff', display:"inline", fontSize:20, marginBottom:2, }}/>  </button> </a>
        <button onClick={ ()=> {handleClear(props.id)}} className="normal-button">CLEAR <BsXSquareFill style={{ color:'#ffffff', display:"inline", fontSize:20, marginBottom:2, }}/></button> 
        </center>
                
        </div>
        </div>
        </div>
    )
}

export default DashboardCard