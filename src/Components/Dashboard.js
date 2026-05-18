import { useState, useEffect } from "react"
import DashboardCard from "./DashboardCard"
import {collection, query, where, getDocs, doc, getDoc} from "firebase/firestore"
import {db} from "../firebase.config"
import Dashboardnav from "./Dashboardnav"
import DashboardHeader from "./DashboardHeader"
import RiseLoader		 from "react-spinners/RiseLoader";

const Dashboard = () => 
{

    //this is to get the current user from local Storage
    const [items, setItems] = useState([]);
    useEffect(() => {
    const items = JSON.parse(localStorage.getItem('user'));
    if (items) {
        setItems(items);
    }
    }, []);

    const [dashboard, setDashboard] = useState([])
   
    // const location = useLocation()
    // const data = location.state  

    //this method is to fetch jobs with filter from firebase database
    const fetchReferralDashboard = async(referralsFilter) =>
    {
        const collDashboard = []
        //query from 
        const q = query(collection(db, `dashboard/${items.email}/${items.email}`))

        //where query is used to filter out from Firebase Database
        //to get the docs i.e. items - parameters
        const request = await getDocs(q)
        request.forEach((refer)  => {
            collDashboard.push(
                {
                    ...refer.data(),
                     id:refer.id
                }
                ) 
        }); 

        console.log(collDashboard)
        setDashboard(collDashboard) 
    } 

    fetchReferralDashboard("")

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
          setIsLoading(false);
        }, 1200);
      }, []);
    
      if (isLoading) {
        return (

          <center>
            <div style={{marginTop:200}}>
              <img src="https://lifehunt.in/static/media/Lifehunt.00a76874b187fc1e011a.png" style={{borderRadius:20, width:150}}></img>
              <br></br>
   
          <RiseLoader	 color='#fe9e0d'/>
            </div>
          </center>
        );
      }

    if(dashboard.length > 0)
    {
        return(
            <div>
                

                <Dashboardnav />
                <DashboardHeader />
                <p style={{textAlign:"center"}}>Referral Requests Recieved</p>
            
    
            {dashboard.map((refer) => (
                    <DashboardCard key={refer.id} {...refer}/>
                   ))}
            </div>  
        )
    }
    else
    {
        return(
            <div>
    
                <Dashboardnav />
                <DashboardHeader />

             
                <center>
                    <b>
                <h1>Zero Referral Requests at the Moment</h1></b>

                <br></br>
                <h2> You Need to Register for Lifehunt Referral Program to receive requests.  <a href="https://surveyheart.com/form/65a42b3694ae68797ad159f6" style={{color:"rgb(226, 143, 20)"}}> CLICK HERE TO REGISTER</a>
                </h2>
                
                

                <h2>If you have <b>already registered</b> kindly ignore and wait until someone pings you for a referral.</h2>
                </center>
               

             
            
            </div>  
        )
    }

}

export default Dashboard