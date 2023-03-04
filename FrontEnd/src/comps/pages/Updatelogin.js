import React, { useState } from  "react";
import Sidebar from '../ui-comps/Sidebar';
import Navbar from '../Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function  Updatelogin(){
    const [username, setusername] = useState();
    const [password, setpassword] = useState();
    const [Cpassword, setcpassword] = useState();
    
    const Updatelogin = (e)=>{
        //e.preventDefault();
        console.log(username,password,Cpassword);
        if(!username){
            toast.error('😴 Enter username', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else{
            if(!password){
                toast.error('😴 Enter password', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }else if(!Cpassword){
                toast.error('😴 Enter Confirm password', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }else{
                if(username === localStorage.getItem("user")){
                    if(password === Cpassword){
                    fetch(`http://localhost:8080/updatelogin?username=${username}&password=${password}`,
                    {method:"PATCH",headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }}).then((response)=>{
                        if(response.status === 200){
                            toast.success('Password Updated successfully', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                });
                        }
                    })
                    .catch((err)=>{
                        toast.error('😴'+err, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            });
                    })
                    }else{
                    toast.error('😴 password and confirm password does not match', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                    }
               }else{
                toast.error('😴 Username is incorrect', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });

               }
    }


    }
}
    return(
        <div>
            <Navbar />
            <div className="flex flex-row bg-myprofilebg">
                <div>
                    <Sidebar />
                </div>
                <div className="ml-60 mt-40 bg-zinc-300 h-72 w-98 rounded shadow-lg flex flex-col">
                    <div className="mt-10">
                        <label className="text-grey ml-20 text-xl mb-7">Username</label>
                        <input type="text" placeholder="Username" onChange={(e)=>setusername(e.target.value)} className="rounded-lg h-8 px-5 input ml-40 mb-7 input-bordered w-full max-w-xs" />
                     </div>
                     <div>
                     <label className="text-grey ml-20 text-xl mb-7">Password</label>
                        <input type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} className="rounded-lg h-8 input px-5 ml-40 mb-7 input-bordered w-full max-w-xs" />
                     </div>
                     <div>
                     <label className="text-grey ml-20 text-xl mb-7">Confirm Password</label>
                     <input type="password" placeholder="Confirm password" onChange={(e)=>setcpassword(e.target.value)} className="rounded-lg h-8 input px-5 ml-24 mb-7 input-bordered w-full max-w-xs" />
                     </div>
                     <div>
                        <button className="bg-teal-500 rounded-full text-white hover:bg-teal-700 w-24 mt-5 ml-72" onClick={Updatelogin}>Update</button>
                     </div>
                 </div>

                 <ToastContainer
                position="top-right"
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
        </div>
    )

}