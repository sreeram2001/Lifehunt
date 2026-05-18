import React from "react";
import Logo from "../Assets/lifehunt_logo.png";
import { SiLinkedin } from "react-icons/si";
import { BsTelegram} from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => 
{
    return(


        <div className="footer-wrapper">
        <div className="footer-section-one">
          <div className="footer-logo-container">
          <Link to="/">  <img src={Logo} style={{borderRadius:15}} /></Link>
          </div>
          <div className="footer-icons" style={{marginTop:8}} >
            
            <a href="https://www.linkedin.com/in/lifehunt-co-628433212/"><SiLinkedin style={{ marginRight:"10px", display:'inline'}} /></a>
            <a href="https://t.me/+XstC2s8cX21mZWVl" target="_blank"><BsTelegram style={{ marginRight:"10px", display:'inline'}}/></a>
            <a href="https://www.instagram.com/lifehunt.in/"><BsInstagram style={{ marginRight:"10px", display:'inline'}} /></a>

          </div>
        </div>
        <div className="footer-section-two">
          <div className="footer-section-columns" >
            
            <span> <Link to="/jobs"> Search Jobs</Link></span>
            <span><Link to="/dashboard"> Refer Someone</Link></span>
            <span> <Link to="https://surveyheart.com/form/65a4321763228478dc634f64" target="_blank">Contact Us</Link></span>
          </div>
          <div className="footer-section-columns">
            <span>+91 9487722330</span>
            <span>contacttempjo@gmail.com</span>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>

        </div>
      </div>
    )
}

export default Footer