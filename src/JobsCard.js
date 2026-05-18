import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ReferralTable from "./ReferralTable"
import { height } from "@mui/system"
import { BsArrowBarRight, BsArrowDownRightCircleFill, BsArrowRight, BsArrowRightCircleFill, BsArrowRightSquareFill, BsBriefcase, BsBriefcaseFill, BsBuildingFill, BsBullseye, BsClipboard2, BsClipboard2CheckFill, BsInstagram, BsSendFill } from "react-icons/bs"


const JobsCard = (props) => 
{
    const navigate = useNavigate()

    const handleClick = () => {
        console.log(props)
        navigate('/referral',{state:props})
    }

    return(
        <div>
            <div className="jobscard-container">

                <div className="jobscard-content">
                <img src={props.logo}></img>

  
                <h1>{props.company}</h1>
                   
                 
                    <p> <BsBriefcaseFill style={{marginBottom:0, color:'#fe9e0d', display:"inline", fontSize:20}}/> {props.jobtitle}</p>
                    <p> <BsBuildingFill style={{marginBottom:0, color:'#fe9e0d', display:"inline", fontSize:20}} /> {props.location}</p>
                    <p><BsClipboard2CheckFill style={{marginBottom:0, color:'#fe9e0d', display:"inline", fontSize:20}} /> {props.skills}</p>
                    <p><BsBullseye style={{marginBottom:0, color:'#fe9e0d', display:"inline", fontSize:20}}  /> {props.experience}</p>

                    <br></br>
                    <center>
                    <a href={props.joblink} target="_blank"> <button className="normal-button">APPLY  <BsArrowRightCircleFill style={{ color:'#ffffff', display:"inline", fontSize:20, marginBottom:2, }}/>  </button> </a>
                    <button onClick={handleClick} className="normal-button">REFERRAL <BsSendFill style={{ color:'#ffffff', display:"inline", fontSize:20, marginBottom:2, }}/></button>
                    </center>
                  
                </div>

            </div>

        </div>
    )
}

export default JobsCard