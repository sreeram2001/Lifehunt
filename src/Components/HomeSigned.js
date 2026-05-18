import Navbar from "./Navbar"
import BackgroundImage from "../Assets/background-img.png"
import BannerImage from "../Assets/work-image.jpeg"
import {auth} from "../firebase.config"
import { Link, useNavigate } from "react-router-dom";
import NavbarSigned from "../NavbarSigned";
import Footer from "./Footer";
import HomeRefer from "./HomeRefer";
import Services from "./Services";
import Postjob from "./Postjob";
import { signOut } from 'firebase/auth';

const HomeSigned = () => {

    return(
        <div className="home-container">
           
           <NavbarSigned />

            <div className="home-banner-container">
                <div className="home-bannerImage-container">
                    <img src={BackgroundImage}  />
                </div>

                <div className="home-text-section">

                    <h2 className="primary-heading">
                        Are you In Search of A Job ?
                    </h2>
                    <p className="primary-text">
                    Choose the best job for you and Apply Now. Checkout FTE Offers of 20LPA+. <br></br>
                    Get A Job Referral from Employees Now
                    </p>
                    <Link to="/jobs"><button className="secondary-button">Apply Now</button></Link>
                   
                </div>

                <div className="home-image-section">
                <img src={BannerImage} style={{borderRadius:"40px"}} alt="" />
                </div>

            </div>
            <HomeRefer />
            <Services />
            <Postjob />
            <Footer />
          
        </div>
    )
}
export default HomeSigned 