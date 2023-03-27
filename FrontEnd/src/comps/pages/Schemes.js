import React from "react";
import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import Navbar from "../Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Schemes (){
    const {id} = useParams();
    const [datas, setdata] = useState([]);
    const [schemename, setSN] = useState();

    useEffect(()=>{
        fetch(`http://localhost:8080/getsinglescheme?schemeid=${id}`)
        .then(function(response){
            return response.json();
          })
          .then(function(data){
            const items = data
            //const jsonitems = JSON.stringify(items)
           // console.log(jsonitems)
            setdata(items.scheme)
            //console.log(items.scheme)
            //console.log(items.scheme)
            setSN(items.scheme.schemename)
          })
          .catch(err=>console.log(err))
           // eslint-disable-next-line react-hooks/exhaustive-deps
          // eslint-disable-next-line
    },[])
    const handlesubmit = ()=>{

        console.log(localStorage.getItem("user"))
        let schemename = datas.schemename
        let username = localStorage.getItem("user")
        console.log("Schemename = "+schemename+" username "+username)
        fetch(`http://localhost:8080/findresponse?schemename=${schemename}&username=${username}`).then((response)=>{
            //console.log(response.status);
            if(response.status==200){
                toast.error('😴 All Ready Registered', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            }else{
                fetch(`http://localhost:8080/postresponse?schemename=${schemename}&username=${username}`,
                {   method:'POST',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                }}).then((response)=>{
                if(response.status === 200){
                toast.success('Successfully Registered', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        })
            }
        })
    }
    return(
        <div className="w-screen h-screen bg-gray-200">
             <Navbar />
             <div className="my-10 mx-72 pt-10 text-white rounded-md shadow-md border-4 border-teal-600   bg-teal-400 flex justify-center ">
                <div>
                    <div>
                        <h1 className="font-poppins text-2xl px-80 ">{datas.schemeid} - {schemename}</h1>
                    </div>
                    <div>
                    <p className="text-justify px-10 py-5 whitespace-pre-line">{datas.schemedescription}</p>
                    </div>
                    <div className="px-80 text-xl text-red-400">
                        <p className="pl-10">Last Date: {datas.lastdate}</p>
                    </div>
                    <div className="px-96 pb-5 pt-4">
                        <button onClick={handlesubmit} className="rounded-full font-poppins px-10 h-10 bg-sky-400 hover:bg-white hover:text-sky-400">Register</button>
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

export default Schemes;
