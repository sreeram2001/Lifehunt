import Logo from "../Assets/My Post.png"
import { Link, useNavigate } from "react-router-dom";

import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from '@mui/icons-material/Work';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useState } from "react";
import { signOut } from 'firebase/auth';
import { auth } from "../firebase.config"

const Navbar = () => 
{
    const navigate = useNavigate()

    const [isLogin, setIsLogin] = useState(false)
    //helps us to enable open menu bar for smaller devices like mobile
    const [openMenu, setOpenMenu] = useState(false)

    const handleLogout = async () =>
    {
        await signOut(auth);    //this is a firebase method
        //we have to remove the credential entries from local storage of browser as well
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        setIsLogin(false)
        //navigate to login page - since you signed out
        navigate("/")
    }

    const handleLogin = () => 
    {
      if(!isLogin)
      {
        navigate("/login") 
      }
    }

    if(!isLogin)
    {
      const token = localStorage.getItem('token');

     

      if(token)
      {
       
        setIsLogin(true)
       
      }
    }

    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon style={{ fill: '#fe9e0d' }}/>,
            route: "/"
          },
          {
            text: "Apply for Jobs",
            icon: <WorkIcon style={{ fill: '#fe9e0d' }}/>,
            route: "/jobs"
          },
          {
            text: "Give Referrals",
            icon: <CommentRoundedIcon style={{ fill: '#fe9e0d' }}/>,
            route: "/dashboard"
          },
          {
            text: "Give Feedback",
            icon: <ContactMailIcon style={{ fill: '#fe9e0d' }}/>,
            route: "https://surveyheart.com/form/65a4321763228478dc634f64"
          },
          {
            text: "Login",
            icon: <LockOpenIcon style={{ fill: '#fe9e0d' }}/>,
            route: "/login"
          },
    ]

    return(
        <nav>
            <div className="nav-logo">
                <Link to="/"> <h1 style={{fontFamily:'sans-serif', font:'revert', color:'#fe9e0d'}}>LIFEHUNT </h1></Link>
            </div>

            <div className="navbar-links-container">
            <Link to="/" style={{color:'#fe9e0d'}}>HOME</Link>

                <Link to="/jobs" style={{color:'#fe9e0d'}}>JOBS</Link>
                <Link to="/dashboard" style={{color:'#212121'}}>GIVE REFERRALS</Link>
                <Link to="https://surveyheart.com/form/65a4321763228478dc634f64" target="_blank" style={{color:'#212121'}}>CONTACT US</Link>

               {!isLogin && <button className="primary-button" onClick={handleLogin}>Login</button> }
               {isLogin && <button onClick={handleLogout} className="primary-button">Logout</button>}

            </div>

        
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)}></HiOutlineBars3>
            </div>

            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250, color:'black'}}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (

              <ListItem key={item.text} disablePadding>
                <ListItemButton>

                <Link to={item.route} >
                  <ListItemIcon >{item.icon}  <ListItemText primary={item.text} style={{marginLeft:5, marginTop:1}}/> </ListItemIcon>
                </Link>

                </ListItemButton>
              </ListItem>

            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>


        </nav>
    )
}

export default Navbar