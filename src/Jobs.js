import JobsCard from "./JobsCard"
import JobsHeader from "./JobsHeader"
import JobsNav from "./JobsNav"
import JobsSearchBar from "./JobsSearchBar"
import { useEffect, useState } from "react"
import {collection, query, where, getDocs} from "firebase/firestore"
import {db} from "./firebase.config"
import JobsNewCard from "./JobsNewCard"
import GridLoader		 from "react-spinners/GridLoader";

const Jobs = () => 
{
    const [jobs, setJobs] = useState([])
    const [customSearch, setCustomSearch] = useState(false)

    const fetchJobs = async() =>
    {   
        setCustomSearch(false)
        const collJobs = []
        //query from 
        const q = query(collection(db, "jobs"))
        //to get the docs i.e. items - parameters
        const request = await getDocs(q)
        request.forEach((job)  => {
            collJobs.push(
                {
                    ...job.data(),
                     id:job.id
                }
            ) 
        }); 

        setJobs(collJobs) 
    } 

    //this method is to fetch jobs with filter from firebase database
    const fetchJobsFilter = async(jobsFilter) =>
    {
        setCustomSearch(true)
        const collJobs = []
        //query from 
        const jobsRefDb = query(collection(db, "jobs"))

        //where query is used to filter out from Firebase Database
        if(jobsFilter.jobtitle == "" && jobsFilter.location != "")
        {
            const q = query(jobsRefDb,where("location", "==", jobsFilter.location))
                    //to get the docs i.e. items - parameters
        const request = await getDocs(q)
        request.forEach((job)  => {
            collJobs.push(
                {
                    ...job.data(),
                     id:job.id
                }
            ) 
        }); 
        setJobs(collJobs) 
       
        }
        else if(jobsFilter.jobtitle != "" && jobsFilter.location == "")
        {
            const q = query(jobsRefDb,where("jobtitle", "==", jobsFilter.jobtitle))
                    //to get the docs i.e. items - parameters
        const request = await getDocs(q)
        request.forEach((job)  => {
            collJobs.push(
                {
                    ...job.data(),
                     id:job.id
                }
            ) 
        }); 
        setJobs(collJobs) 
        
        }
        else if(jobsFilter.jobtitle != "" && jobsFilter.location != "")
        {
            const q = query(jobsRefDb, where("jobtitle", "==", jobsFilter.jobtitle),where("location", "==", jobsFilter.location))
                //to get the docs i.e. items - parameters
                const request = await getDocs(q)
                request.forEach((job)  => {
                    collJobs.push(
                        {
                            ...job.data(),
                             id:job.id
                        }
                    ) 
                }); 
                setJobs(collJobs) 
                
        }

    } 

    //calling fetch job everytime page is loaded
    useEffect( () => 
    {
        fetchJobs() 
    }, []) 


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
          <GridLoader color='#fe9e0d'/>
            </div>
          </center>
        );
      }

        return(

            
            <div className="Jobs">
               <JobsNav></JobsNav>
            
               <JobsHeader></JobsHeader>

               <JobsSearchBar fetchJobsFilter={fetchJobsFilter}></JobsSearchBar>

               {customSearch && 
               <button onClick={fetchJobs} className="normal-button">Clear Filters</button>
               }
        

               {jobs.map((job) => (
                <JobsCard key={job.id} {...job}/>
               ))}

  
            </div>



        )
}

export default Jobs