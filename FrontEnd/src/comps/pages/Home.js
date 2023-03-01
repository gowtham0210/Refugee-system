import React,{useEffect, useState} from 'react';
import Sidebar from '../ui-comps/Sidebar';
import Myprofile from './Myprofile';
import Navbar from '../Navbar';
import {useLocation} from 'react-router-dom';

function Home(){
  //let useer;
  const [user, setuser] = useState("gowtham0210");
  const [isloading, setloading] = useState(false);
  const location = useLocation();
  const getusername = ()=>{
    console.log("Location: ",typeof(location.state.user));
     let useer = location.state.user;
     setuser(useer);
    console.log(useer);
  }
  // useEffect(()=>{
  //   if(!location.state.user){
  //     let useer = location.state.user;
  //     //setuser(useer);
  //     console.log(user);
  //     setloading(true);

  //   }
    
  // });
  return (
    <div>
      <Navbar />
      <div className='flex flex-row'>
      <Sidebar/>
      {/* {isloading ? <p>Loading</p>:<Myprofile userid = {user} />} */}
      <button onClick={getusername}>Click ME{user}</button>
      </div>
    </div>
  )
}

export default Home;
