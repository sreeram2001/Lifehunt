import { useState } from "react"

const JobsSearchBar = (props) => 
{
    const [jobsFilter, setJobFilter] = useState(
        {
            jobtitle:"",
            location:""
        }
    )

    const handleSelect = (e) => 
    {
        e.preventDefault()
        setJobFilter( (prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSearch = async() => {
        //passing from child component to parent component
        await props.fetchJobsFilter(jobsFilter)

        setJobFilter( () => ({jobtitle:"",location:""}))
    }

    return(
        <div className="select-menu">

            <center>
            <select onChange={handleSelect} name="jobtitle" value={jobsFilter.jobtitle} className="select-menu-container"  style={{marginRight:"10px"}}>
                <option value="" disabled hidden selected>Job Role</option>
                <option value="Software Developer 1">Software Developer 1</option>
                <option value="Intern">Intern</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Analyst">Analyst</option>
                <option value="SDE">SDE</option>
                <option value="SDE-1">SDE-1</option>
                <option value="SDE-2">SDE-2</option>
                <option value="Software Development Engineer">Software Development Engineer</option>
                <option value="Software Engineer 1">Software Engineer 1</option>
                <option value="Software Engineer 2">Software Engineer 2</option>
                <option value="Associate Developer">Associate Developer</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="FullStack Developer">FullStack Developer</option>
                <option value="Software Architect">Software Architect</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Staff Software Engineer">Staff Software Engineer</option>
            </select>

            <select onChange={handleSelect}  name="location" value={jobsFilter.location} className="select-menu-container"  style={{marginRight:"10px"}}> 
                <option value="" disabled hidden selected >Job Location</option>
                <option value="Remote">Remote</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Noida">Noida</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Kochi">Kochi</option>
            </select>

            <button onClick={handleSearch} className="select-menu-container"  style={{marginRight:"10px"}}>Search</button>
            </center>

        </div>
    )
}

export default JobsSearchBar