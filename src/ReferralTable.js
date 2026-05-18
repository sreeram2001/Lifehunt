
import { Link } from "react-router-dom"
import JobsNav from "./JobsNav"
import ReferralHeader from "./ReferralHeader"
import ReferralCard from "./ReferralCard"
import { useState } from "react"
import { useLocation } from "react-router-dom"

import {collection, query, where, getDocs} from "firebase/firestore"
import {db} from "./firebase.config"
import ReferralsNav from "./ReferralsNav"
import { BsArrowLeftCircle } from "react-icons/bs"

const ReferralTable = (props) =>
{   
        const [referrals, setReferrals] = useState([])
        const location = useLocation()
        const data = location.state
      
        //this method is to fetch jobs with filter from firebase database
        const fetchReferralsFilter = async(referralsFilter) =>
        {
            const collReferrals = []
            //query from 
            const referralsRefDb = query(collection(db, "referrals"))
            //where query is used to filter out from Firebase Database
            const q = query(referralsRefDb, where("company", "==", referralsFilter.company))
            //to get the docs i.e. items - parameters
            const request = await getDocs(q)
            request.forEach((refer)  => {
                collReferrals.push(
                    {
                        ...refer.data(),
                         id:refer.id
                    }
                ) 
            }); 
    
            setReferrals(collReferrals) 
        } 

        fetchReferralsFilter(data)

    return(
        <div className="Referrals">
              
               <ReferralsNav />
               <ReferralHeader />
               <Link to="/jobs"> <button className="normal-button"> <BsArrowLeftCircle style={{  display:"inline", fontSize:20, marginBottom:2, }}/> GO BACK</button> </Link>

               {referrals.map((refer) => (
                <ReferralCard key={refer.id} {...refer}/>
               ))}

      </div>
    ) 
}

export default ReferralTable