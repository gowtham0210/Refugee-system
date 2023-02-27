import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Refugee_form = ()=>{
    const [username, setusername] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [mobilenum, setmobilenum] = useState("");
    const [dob, setdob] = useState("");
    const [age, setage] = useState("");
    const [nationality, setnationality] = useState("");
    const [gender, setgender] = useState("");

    const handleSubmit=()=>{
        console.log("Form Submitted");
        if(!username){
            toast.error('😴 Username is required', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!firstname){
            toast.error('😴 First name is required', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!lastname){
            
            toast.error('😴 Last name is required', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!dob){
           
            toast.error('😴 Date of birth is required', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!nationality){
            
            toast.error('😴 Nationality is required', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!gender){
            
            toast.error('😴 Gender is required', {
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
            toast.success('Form Submitted', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
                
            console.log(username);
            console.log(firstname);
            console.log(lastname);
            console.log(mobilenum);
            console.log(dob);
            console.log(nationality);
            console.log(gender);
        }
    }

    return(
        <div className='flex ml-10 mr-10 mt-10 justify-center items-center flex-col'>
            <div className='w-full p-6 m-auto bg-cyan-100 rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl'>
                <h1 className='text-3xl font-semibold text-red-300 text-center uppercase'>
                    Create Refugee
                </h1>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>Username:</label>
                    <input type="name" value={username} onChange={(e)=>setusername(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
                </div>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>First name:</label>
                    <input type="name" value={firstname} onChange={(e)=>setfirstname(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
                </div>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>Last name:</label>
                    <input type="name" value={lastname} onChange={(e)=>setlastname(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
                </div>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>Mobile:</label>
                    <input type="name" value={mobilenum} onChange={(e)=>setmobilenum(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
                </div>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>Date of Birth:</label>
                    <input type="name" value={dob} onChange={(e)=>setdob(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
                </div>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>Age:</label>
                    <input type="name" value={age} onChange={(e)=>setage(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
                </div>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>Nationality:</label>
                    <input type="name" value={nationality} onChange={(e)=>setnationality(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
                </div>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>Gender:</label>
                    <input type="name" value={gender} onChange={(e)=>setgender(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
                </div>
                <div className='mt-6'>
                    <button type='submit' onClick={handleSubmit} className='h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800'>Submit </button>

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
    )

}

export default Refugee_form;