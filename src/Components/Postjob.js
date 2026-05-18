import { useHref } from "react-router-dom"


const Postjob = () =>
{
    return(
        <div className="contact-page-wrapper">
            <h1 className="primary-heading" style={{fontWeight:'bold',}}>To Post your Company's Job Opening. Contact Us</h1>
            <br></br>

            <a href="https://surveyheart.com/form/643a9b07a643a408517c3064" target="_blank"><button className="secondary-button">POST JOB</button></a>
            <br></br>
            <a href="https://t.me/+XstC2s8cX21mZWVl" target="_blank"><button className="secondary-button">JOIN TELEGRAM CHANNEL</button></a>

        </div>
    )
}

export default Postjob