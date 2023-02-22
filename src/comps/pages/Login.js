import React from 'react'
import { HomeLeftContainer } from '../ui-comps/Home-left-container';
import {HomeRightContainer} from '../ui-comps/Home-left-container';
const img = "https://images.pexels.com/photos/9993426/pexels-photo-9993426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";


function Login(){
  return (
    <div>
      <div className='w-2/4 float-left min-h-screen bg-gray-900 flex flex-col justify-center items-center'>
        <HomeLeftContainer />
      </div>
      <div className="w-2/4 float-right min-h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{backgroundImage:`url(${img})`}}>
        <HomeRightContainer />
      </div>
    </div>
  )
}

export default Login;
