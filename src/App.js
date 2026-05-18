import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import HomeRefer from './Components/HomeRefer';
import Postjob from './Components/Postjob';
import Services from './Components/Services';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Jobs from './Jobs';
import ReferralTable from './ReferralTable';
import Login from './Login';
import Signup from './Signup';
import ResetPassword from './ResetPassword';
import Protected from './Protected';
import Dashboard from './Components/Dashboard';
import HomeSigned from './Components/HomeSigned';
import Profile from './Profile';

function App() {
  return (

    <Router>
    <div className="App">

   <Routes>

    <Route exact path='/' element={<Home />} />

    <Route exact path='/' element={<Protected/>}>
    <Route exact path='/home' index element={<HomeSigned />} />
    </Route>

     <Route exact path='/login' element={<Login />} />
    <Route exact path='/signup' element={<Signup />} />
    <Route exact path='/reset' element={<ResetPassword />} />
    <Route exact path='/jobs' index element  = { <Jobs />} />

     <Route exact path='/' element={<Protected/>}>

    </Route>

    <Route exact path='/' element={<Protected />}>
    <Route exact path='/dashboard' index element={<Dashboard />} /> 
    </Route>

     <Route exact path='/' element={<Protected />}>
      <Route exact path='/referral' index element  = { <ReferralTable />} />
      </Route>

      <Route exact path='/' element={<Protected />}>
      <Route exact path='/profile' index element  = { <Profile />} />
      </Route>

      <Route path="*" element={<Home />}/>
    </Routes>
    </div>

    </Router>
  );
}

export default App;
