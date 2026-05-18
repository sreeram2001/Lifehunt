import Navbar from "./Navbar"
import BackgroundImage from "../Assets/background-img.png"
import BannerImage from "../Assets/work-image.jpeg"
import {auth} from "../firebase.config"
import { Link, useNavigate } from "react-router-dom";
import HomeRefer from "./HomeRefer";
import Services from "./Services";
import Postjob from "./Postjob";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";


const Home = () => {

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      }, []);
    
      if (isLoading) {
        return (

          <center>
            <div style={{marginTop:200}}>
              <img src="https://lifehunt.in/static/media/lifehunt_logo.74d9e8412488f63a5bce.png" style={{borderRadius:20, width:150}}></img>
              <br></br>
          <PropagateLoader color='#fe9e0d'/>
            </div>
          </center>
        );
      }

    return(
        <div className="home-container">
            <Navbar/>

            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BackgroundImage}/ >
                </div>

                <div className="home-text-section">

                    <h1 className="primary-heading" style={{fontWeight:'bolder'}}>
                        Hey Mate ! Are you In Search of A Job ?
                    </h1>
                    <p className="primary-text">
                    Choose the best job and Apply. <br></br>Checkout FTE Offers of 20LPA+. <br></br>
                    Get A Job Referral from Employees Now
                    </p>
                    <Link to="/jobs"><button className="secondary-button">APPLY NOW</button></Link>
                   <br></br>
                </div>

                <div className="home-image-section">
                <img src={BannerImage} style={{borderRadius:"40px", width:450}} alt="" />
                </div>

            </div>

            <HomeRefer />
            <Services />
            <Postjob />
            <Footer />
        </div>
    )
}
export default Home