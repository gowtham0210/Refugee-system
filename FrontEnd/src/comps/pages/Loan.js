import React, { useState } from "react";
import Navbar from '../Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Loan(){
    const [username, setusername] = useState();
    const [loanamt,  setloanamt] = useState();
    const [purpose,  setpurpose] = useState();
    const [mobilenum1, setmobilenum1] = useState();
    const [mobilenum2, setmobilenum2] = useState();
    const [mobilenum3, setmobilenum3] = useState();
    const [otp1,setotp1] = useState();
    const [otp2,setotp2] = useState();
    const [otp3,setotp3] = useState();
    const [verifycitizen1, setverifycitizen1] = useState(false);
    const [verifycitizen2, setverifycitizen2] = useState(false);
    const [verifycitizen3, setverifycitizen3] = useState(false);


    const handlesubmit = ()=>{
        console.log("username - "+username+" Loan amount - "+loanamt+" purpose -"+purpose+" mobile number - 1 "+ mobilenum1+ " mobile number - 2 "+ mobilenum2+" mobile number - 3"+mobilenum3);
        if(!username){
            toast.error('😴 Enter Username', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!loanamt){
            toast.error('😴 Enter Loan Amount', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!purpose){
            toast.error('😴 Loan purpose should not be empty', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!mobilenum1){
            toast.error('😴 Mobile Number-1 should not be empty', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!mobilenum2){
            toast.error('😴 Mobile Number-2 should not be empty', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!mobilenum3){
            toast.error('😴 Mobile Number-3 should not be empty', {
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
            try{
                fetch(`http://localhost:8080/storeloanrequest?username=${username}&loanamt=${loanamt}&loanpurpose=${purpose}&citizenmobilenumber1=${mobilenum1}&citizenmobilenumber2=${mobilenum2}&citizenmobilenumber3=${mobilenum3}`,
                {method:'POST',headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }})
                .then((response)=>{
                    if(response.status == 200){
                        console.log(response.json());
                        toast.success('Request Submitted Successfully', {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            });
                    }else{
                        console.log(response.status);
                    }
                })
                .then((data)=>{
                    console.log(data);
                })
                .catch((err)=>{
                    console.log("There is error"+err);
                })
            }catch(err){
                console.log("Error" + err);
            }
        }
    }
    const getotp1 = ()=>{
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'da94e2aa39mshe23810278be1fa9p1dac31jsnef631bd6a888',
                'X-RapidAPI-Host': 'wipple-sms-verify-otp.p.rapidapi.com'
            },
            body: `{"app_name":"exampleapp","code_length":6,"code_type":"number","expiration_second":86000,"phone_number":"+91"+${mobilenum1}}`
        };
        fetch('https://wipple-sms-verify-otp.p.rapidapi.com/send', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

    }
    const getotp2 = ()=>{
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'da94e2aa39mshe23810278be1fa9p1dac31jsnef631bd6a888',
                'X-RapidAPI-Host': 'wipple-sms-verify-otp.p.rapidapi.com'
            },
            body: `{"app_name":"exampleapp","code_length":6,"code_type":"number","expiration_second":86000,"phone_number":"+91"+${mobilenum2}}`
        };
        fetch('https://wipple-sms-verify-otp.p.rapidapi.com/send', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    const getotp3 = ()=>{
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'da94e2aa39mshe23810278be1fa9p1dac31jsnef631bd6a888',
                'X-RapidAPI-Host': 'wipple-sms-verify-otp.p.rapidapi.com'
            },
            body: `{"app_name":"exampleapp","code_length":6,"code_type":"number","expiration_second":86000,"phone_number":"+91"+${mobilenum3}}`
        };
        fetch('https://wipple-sms-verify-otp.p.rapidapi.com/send', options)
            .then(response => response.json())
            .then(response => console.log(response,response.statusCode))
            .catch(err => console.error(err));
    }

    const verifyotp1 = ()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'da94e2aa39mshe23810278be1fa9p1dac31jsnef631bd6a888',
                'X-RapidAPI-Host': 'wipple-sms-verify-otp.p.rapidapi.com'
            }
        };
        fetch(`https://wipple-sms-verify-otp.p.rapidapi.com/verify?phone_number=${mobilenum1}&verification_code=${otp1}&app_name=exampleapp`, options)
            .then(response => response.json())
            .then((response) =>{
                console.log(response)
                if(response.statusCode === 200){
                    toast.success('OTP verified Successfully', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                        setverifycitizen1(true)
                }else if(response.statusCode === 201){
                    toast.error('😴 Incorrect OTP', {
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
            )
            .catch(err => console.error(err));
    }
    const verifyotp2 = ()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'da94e2aa39mshe23810278be1fa9p1dac31jsnef631bd6a888',
                'X-RapidAPI-Host': 'wipple-sms-verify-otp.p.rapidapi.com'
            }
        };
        fetch(`https://wipple-sms-verify-otp.p.rapidapi.com/verify?phone_number=${mobilenum2}&verification_code=${otp2}&app_name=exampleapp`, options)
            .then(response => response.json())
            .then((response) =>{
                console.log(response)
                if(response.statusCode === 200){
                    toast.success('OTP verified Successfully', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                        setverifycitizen2(true)
                }else if(response.statusCode === 201){
                    toast.error('😴 Incorrect OTP', {
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
            )
            .catch(err => console.error(err));
    }
    const verifyotp3 = ()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'da94e2aa39mshe23810278be1fa9p1dac31jsnef631bd6a888',
                'X-RapidAPI-Host': 'wipple-sms-verify-otp.p.rapidapi.com'
            }
        };
        fetch(`https://wipple-sms-verify-otp.p.rapidapi.com/verify?phone_number=${mobilenum3}&verification_code=${otp3}&app_name=exampleapp`, options)
            .then(response => response.json())
            .then((response) =>{
                console.log(response)
                if(response.statusCode === 200){
                    toast.success('OTP verified Successfully', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                        setverifycitizen3(true)
                }else if(response.statusCode === 201){
                    toast.error('😴 Incorrect OTP', {
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
            )
            .catch(err => console.error(err));
    }


    return(
    <div>
        <Navbar />
        <div className="flex flex-row bg-gray-200">
            <div className="recaptcha-container"></div>
        <div className='container mx-auto'>
            <div className='max-w-5xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm'>
                <div className='text-center'>
                    <h1 className="my-3 text-3xl font-semibold text-gray-700"> Make Loan Request</h1>
                    <p className="text-gray-400">Get Loan Credit | Move Your Life To Next Stage</p>
                </div>
                <div className='mb-6 '>
                    <label  className="block mb-2 text-sm text-gray-600">Username*</label>
                    {/* onChange={(e)=>setschemeid(e.target.value)} */}
                    <input type="text" name="name" placeholder="Refugee Username" onChange={(e)=>setusername(e.target.value)}   required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                </div>
                <div className='mb-6'>
                    <label  className="block mb-2 text-sm text-gray-600">Loan Amount*</label>
                    <input type="text" name="name" placeholder="Loan Amount" onChange={(e)=>setloanamt(e.target.value)}    required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                </div>
                <div className='mb-6'>
                    <label  className="block mb-2 text-sm text-gray-600">Purpose*</label>
                    <input type="text" name="name" placeholder="Loan Purpose" onChange={(e)=>setpurpose(e.target.value)}    required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                </div>
                <div className='mb-6'>
                    <div className="flex flex-row">
                        <label  className="block mb-2 text-sm text-gray-600">Enter citizen-1 mobile number</label>
                        <label  className="block mb-2 text-sm text-gray-600 ml-80">Enter OTP</label>
                    </div>
                    <div className="flex flex-row">
                        

                        <input type="text"  name="name" placeholder="Citizen-1 Mobile Number" onChange={(e)=>setmobilenum1(e.target.value)}   required className="w-96 h-12 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                        <button  className="ml-5 h-12 px-2 py-4 text-white text-sm bg-green-500 rounded-md  focus:bg-green-600 focus:outline-none">Get OTP</button>
                        <input type="text" name="name" onChange={(e)=>setotp1(e.target.value)} placeholder="Enter OTP here"   required className=" ml-10 w-96 h-12 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                        <button onClick={verifyotp1}  className="ml-5 h-12 px-2 py-4 text-white text-sm bg-green-500 rounded-md  focus:bg-green-600 focus:outline-none">Check</button>
                    </div>
                    <span className="text-gray-400 text-sm">&nbsp;By entering your mobile number, you are authorizing the refugee</span>
                </div>
                <div className='mb-6'>
                    <div className="flex flex-row">
                        <label  className="block mb-2 text-sm text-gray-600">Enter citizen-2 mobile number</label>
                        <label  className="block mb-2 text-sm text-gray-600 ml-80">Enter OTP</label>
                    </div>
                    <div className="flex flex-row">
                        <input type="text" name="name" placeholder="Citizen-2 Mobile Number" onChange={(e)=>setmobilenum2(e.target.value)}   required className="w-96 h-12 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                        <button className="ml-5 h-12 px-2 py-4 text-white text-sm bg-green-500 rounded-md  focus:bg-green-600 focus:outline-none">Get OTP</button>
                        <input type="text" name="name" onChange={(e)=>setotp2(e.target.value)} placeholder="Enter OTP here"   required className=" ml-10 w-96 h-12 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                        <button onClick={verifyotp2} className="ml-5 h-12 px-2 py-4 text-white text-sm bg-green-500 rounded-md  focus:bg-green-600 focus:outline-none">Check</button>
                    </div>
                    <span className="text-gray-400 text-sm">&nbsp;By entering your mobile number, you are authorizing the refugee</span>
                </div>
                <div className='mb-6'>
                    <div className="flex flex-row">
                        <label  className="block mb-2 text-sm text-gray-600">Enter citizen-2 mobile number</label>
                        <label  className="block mb-2 text-sm text-gray-600 ml-80">Enter OTP</label>
                    </div>
                    <div className="flex flex-row">
                        <input type="text" name="name" placeholder="Citizen-3 Mobile Number" onChange={(e)=>setmobilenum3(e.target.value)}   required className="w-96 h-12 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                        <button className="ml-5 h-12 px-2 py-4 text-white text-sm bg-green-500 rounded-md  focus:bg-green-600 focus:outline-none">Get OTP</button>
                        <input type="text" name="name" onChange={(e)=>setotp3(e.target.value)}  placeholder="Enter OTP here"   required className=" ml-10 w-96 h-12 px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                        <button onClick={verifyotp3} className="ml-5 h-12 px-2 py-4 text-white text-sm bg-green-500 rounded-md  focus:bg-green-600 focus:outline-none">Check</button>
                    </div>
                    <span className="text-gray-400 text-sm">&nbsp;By entering your mobile number, you are authorizing the refugee</span>
                </div>
                <div className="mb-6">
                    <button type="submit" onClick={handlesubmit}  className="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none">Submit</button>
                </div>
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

export default Loan;