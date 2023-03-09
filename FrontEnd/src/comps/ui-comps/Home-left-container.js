import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function HomeLeftContainer(){
   const [username, setusername] = useState("");
   const [password, setpassword] = useState("");

   let navigate = useNavigate();
   const handleSubmit=()=>{
    console.log(username, password);
    try{
      fetch(`http://localhost:8080/businessLogin?username=${username}&password=${password}`).then((response)=>{
        if(response.status === 200){
          console.log(response.status);
          navigate('/addrefugee');
         }else{
            toast.error('😴 Username or password is incorrect', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
         }
        })
    }catch(error){
      console.log(error);
    }
   }
    return(
        <div className='container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl'>
            <div className='h-full flex flex-col justify-evenly items-center' onSubmit={handleSubmit}>
            <div className='font-poppins text-white text-2xl tracking-wider'>Government Login</div>
            <input type="text" placeholder='username' value = {username} onChange={(e)=>setusername(e.target.value)} className='input-text' />
            <input type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)} name='pass' className='input-text' />
            <input type="submit" placeholder="Login" onClick={handleSubmit} className='font-poppins cursor-pointer px-5 py-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80'/>
      </div>
      <ToastContainer
                position="top-center"
                autoClose={3000}
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
    )
}
function HomeRightContainer(){
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
 // const username="admin";
  //const password="admin@1234";
  let navigate = useNavigate();

  const handleSubmit = ()=>{
    console.log(username,password);
    if(!username){

      toast.error('😴 Please enter Username', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }else if(!password){
      toast.error('😴 Please enter Password ', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }else{
      try{
        fetch(`http://localhost:8080/userlogin?username=${username}&password=${password}`)
        .then((response)=>{
          if(response.status === 200){
            console.log(response.status);
            navigate('/home/myprofile',{
              state:{
                user:username
              }
            });
            localStorage.setItem("user",username)
          }else{
            toast.error('😴 Username or password is incorrect', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
          }
        })
      }
      catch(error){
        console.log(error);
      }
    }
    
  }
    return(
        <div className='container h-96 w-96 bg-white bg-opacity-40 backdrop-blur-md relative z-2 rounded-2xl shadow-5xl'>
          <div className='h-full flex flex-col justify-evenly items-center' >
            <div className='font-poppins text-gray-900 text-2xl tracking-wider'>Refugee Login</div>
            <input type="text" placeholder='username' value={username} onChange={(e)=>setusername(e.target.value)} className='input-text-ryt ' />
            <input type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}className='input-text-ryt' />
            <input type="submit" onClick={handleSubmit} placeholder="Login" className='font-poppins text-white cursor-pointer px-5 py-1 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-80'/>
          </div>
          {/* <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            /> */}
            {/* <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            /> */}

        </div>
    )
}

export {HomeLeftContainer,HomeRightContainer } ;





