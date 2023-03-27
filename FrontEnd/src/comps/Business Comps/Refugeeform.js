import React,{useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContract, useContractWrite, useContractRead } from "@thirdweb-dev/react";

const Refugeeform = ()=>{
    //const [dateofyear, setdateofyear] = useState(0);
    let password="";
    const [_userId, setuserId] = useState("");
    const [_fName, setfirstname] = useState("");
    const [_lName, setlastname] = useState("");
    const [_mobile, setmobilenum] = useState("");
    const [_dob, setdob] = useState("");
    const [_age, setage] = useState("");
    const [_nationality, setnationality] = useState("");
    const [_gender, setgender] = useState("");
    const { contract } = useContract("0xBB417720eBc8b76AdeAe2FF4670bbc650C3E791f");
    const { mutateAsync: createUser} = useContractWrite(contract, "createUser");
    const { data:istrue, } =  useContractRead(contract, "chkexisitinguserId", _userId);

    const handleSubmit= async ()=>{
        if(!_userId){
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
        }else if(!_fName){
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
        }else if(!_lName){
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
        }else if(!_mobile){
            toast.error('😴 Mobile Number is required', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!_dob){
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
        }else if(!_age){
            toast.error('😴 Age is required', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
        }else if(!_nationality){
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
        }else if(!_gender){
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
        }
        else{
            //Generate Password
            let stryear = convert(_dob);
            setdob(_dob.toString());
            password = _fName + stryear;

            console.log(_userId,_fName,_lName,_mobile,_dob,_nationality,_gender);

            //used to check if the username is existing or not in the blockchain.
            if(chkusername()){
                toast.error('😴 OOPs username already exist', {
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
                try {
                    console.log(_userId, _fName, _lName, _mobile, _dob, _age, _nationality, _gender);
                    const data = await createUser([ _userId, _fName, _lName, _mobile, _dob, _age, _nationality, _gender ]);
                    console.info("contract call successs", data);
                    toast.success('✅ Refugee Added', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                    generateUsername();
                } catch (err) {
                    console.error("contract call failure", err);
                }
            }
        }
    }
    // used to extract year from DOB 
    const convert = (dob)=>{
        let strdate = new Date(dob);
        strdate = strdate.getFullYear();
        strdate = strdate.toString();
        return strdate;
    }
    //used to check username is  existing or not in the blockchain returns true or false;
    const chkusername = ()=>{
        return istrue;
    }

    //used to generate login credientials for users
    const generateUsername=()=>{
        try{
            fetch(`http://localhost:8080/createlogin?_username=${_userId}&_password=${password}`).then((response)=>{
                if(response.status === 200){
                    console.log(response.status);
                    toast.success('✅ Login Crediantials has been created', {
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
            })

        }catch(err){
            console.log(err);
            toast.success(err, {
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


    return(
        <div className='flex ml-10 mr-10 mt-10 justify-center items-center flex-col'>
            <div className='w-full p-6 m-auto bg-cyan-100 rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl'>
                <h1 className='text-3xl font-semibold text-red-300 text-center uppercase'>
                    Create Refugee
                </h1>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>Username:</label>
                    <input type="name" value={_userId} onChange={(e)=>setuserId(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
                </div>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>First name:</label>
                    <input type="name" value={_fName} onChange={(e)=>setfirstname(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
                </div>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>Last name:</label>
                    <input type="name" value={_lName} onChange={(e)=>setlastname(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
                </div>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>Mobile:</label>
                    <input type="name" value={_mobile} onChange={(e)=>setmobilenum(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
                </div>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>Date of Birth:</label>
                    <input type="date" value={_dob} onChange={(e)=>setdob(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
                </div>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>Age:</label>
                    <input type="name" value={_age} onChange={(e)=>setage(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
                </div>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>Nationality:</label>
                    <input type="name" value={_nationality} onChange={(e)=>setnationality(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
                </div>
                <div className='mb-2'>
                    <label className='block text-sm font-semibold text-gray-800'>Gender:</label>
                    <input type="name" value={_gender} onChange={(e)=>setgender(e.target.value)} className='block w-full mt-2 px-5 py-2 order-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'  />
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

export default Refugeeform;