import { doc, updateDoc, getDocs, getDoc, collection, query, addDoc} from "firebase/firestore";
import {db} from "./firebase.config"
import { useState, useEffect } from 'react';
import { Bs0Circle, BsBriefcaseFill, BsChatLeftText, BsChatLeftTextFill, BsFillPersonPlusFill } from "react-icons/bs";
import { orange } from "@mui/material/colors";

const ReferralCard = (props) => 
{
        //this is to get the current user from local Storage
    const [items, setItems] = useState([]);
    useEffect(() => {
    const items = JSON.parse(localStorage.getItem('user'));
    if (items) {
        setItems(items);
    }
    }, []);

    const handlePing = async() => {
        
        //this email has to be replaced with users Sign In Email ID
        const emailID = items.email
        const userID = emailID.split('@')[0]
        
        const q = (collection(db, `dashboard/${props.email}/${props.email}`))
        
        //update or ADD the emailID and userID to referrers dashboard database
        addDoc(q, {email:emailID, userID:userID})

        alert(`${props.name} has been Successfully Pinged for Referral`)

    }

    return(
        <div>

        <center>
            
            <h1>Employees Working At : {props.company}</h1>
       
        </center>
        <div className="jobscard-container">

        <div className="jobscard-content">
            <img src="https://as2.ftcdn.net/v2/jpg/05/22/82/21/1000_F_522822118_Kogbuf8Q1x5kdmllGBO09W1ktAdlWPB5.jpg" style={{marginTop:10 , width:100}} />
        <h1>{props.name}</h1>
        <p><BsBriefcaseFill style={{marginBottom:0, color:'#fe9e0d', display:"inline", fontSize:20}}/> {props.company}</p>

     

        <div className="jobscard-content">
        <button onClick={handlePing} className="normal-button" style={{marginTop:1, marginLeft:10}}>PING ME <BsChatLeftTextFill style={{ color:'#ffffff', display:"inline", fontSize:20, marginBottom:2, }} /> </button>
        </div>
        </div>
        </div>
               
        </div>
    )
}

export default ReferralCard