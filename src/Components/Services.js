import ChooseJobImg from "../Assets/Lifehunt.png";
import ReferFriendImg from "../Assets/helping-partner-concept-illustration_114360-8584.avif"
import ApplyJobImg from "../Assets/modern-talent-search-businessman-in-spotlight-vector.jpg"
import AboutBackground from "../Assets/about-background.png";
import ReactPlayer from 'react-player/youtube'
import video from "../Assets/#fe9e0d.mp4"

const Services = () => 
{
    const workInfoData = [
        {
          image: ChooseJobImg,
          title: "LIFEHUNT JOB PORTAL",
          text: "Choose the best job for you from our Job Portal",
        },
        {
            image: ReferFriendImg,
            title: "LIFEHUNT REFERRALS",
            text: "Get Referral from folks at your Dream Company",
          },
          {
            image: ApplyJobImg,
            title: "SEARCH TALENT",
            text: "Find the top talents for your company here",
          },
      ];

    return(
        <div className="work-section-wrapper">
      <div className="work-section-top">

      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>

      <h2 className="primary-heading" style={{fontWeight:'bolder'}}>What Do we Offer ?</h2>
        <p className="primary-text">
            At Lifehunt, You get the following Services
        </p>
      </div>

      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" style={{borderRadius:15, marginTop:10}}/>
            </div>
            <h2 style={{fontWeight:'bolder', color:'#fe9e0d'}}>{data.title}</h2>
            <p style={{fontWeight:'bolder'}}>{data.text}</p>
          </div>

        ))}
      </div>

<br></br>
<center>
  <br></br>
<ReactPlayer url={"https://www.youtube.com/shorts/RRJ5HfJKRzU"} controls={true} height={550} width={300}/>

</center>
    </div>
    )
}

export default Services