import React from 'react'
import { ToastContainer } from 'react-toastify';
import { HomeLeftContainer } from '../ui-comps/Home-left-container';
import {HomeRightContainer} from '../ui-comps/Home-left-container';
const img = "https://images.unsplash.com/photo-1560568267-b6d2c01ece7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";
const leftimg = "https://imagizer.imageshack.com/img923/5276/04LJGF.jpg";


function Login(){
  return (
    <div>
      <div className='w-2/4 float-left min-h-screen bg-cover flex flex-col justify-center items-center' style={{backgroundImage:`url(${leftimg})`}}>
        <HomeLeftContainer />
        <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
      </div>
      <div className="w-2/4 float-right min-h-screen bg-cover bg-center flex flex-col justify-center items-center" style={{backgroundImage:`url(${img})`}}>
        <HomeRightContainer />
        <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
      </div>
    </div>
  )
}

export default Login;
