import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/refer_friend.svg"
import { Link } from "react-router-dom";

const HomeRefer = () => 
{
    return(

<div className="about-section-container">


      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} style={{ height:350,width:500,borderRadius:"40px"}} alt="" />
      </div>

      <div className="about-section-text-container">

        <h2 className="primary-heading" style={{fontWeight:'bolder'}}>
         Are you Looking to Refer Someone ?
        </h2>
        <p className="primary-text">
          <ul>
            <li>  Are you looking for an Ideal Candidate to refer at your Organisation ?</li>
            <li>Register at Lifehunt and Candidates Searching for a Job will Ping you for Referrals.</li>
            <li>Use Our Dashboard for Hassle-free refers.</li>
          </ul>
          </p>

        <div className="about-buttons-container">
          <Link to="/dashboard"><button className="secondary-button">GIVE REFERRALS</button></Link>
        </div>
      </div>
    </div>

    )
}

export default HomeRefer