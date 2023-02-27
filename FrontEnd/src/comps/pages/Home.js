import React from 'react'
import Sidebar from '../ui-comps/Sidebar';
import Myprofile from './Myprofile';
import Navbar from '../Navbar';

function Home(){
  return (
    <div>
      <Navbar />
      <Sidebar/>
      <Myprofile />
    </div>
  )
}

export default Home;
