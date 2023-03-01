import React, { useState , useEffect} from 'react';
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Sidebar from '../ui-comps/Sidebar';
import {useLocation} from 'react-router-dom';
import Navbar from '../Navbar';

function Myprofile(props){
    const [userId, setuserId] = useState("");
    const [loading, setloading] = useState(true);
    let val = {};
    const [userinfo, setuserinfo] = useState({});
    const { contract } = useContract("0xBB417720eBc8b76AdeAe2FF4670bbc650C3E791f");
    const { data:details, isLoading } = useContractRead(contract, "getUser", userId);
    const location = useLocation();
    useEffect(()=>{
        console.log(isLoading);
        // if(location.state.user){
        //     console.log(location.state.user);
        // }
            try{
                console.log(details);
                val = {
                    firstname:details[0],
                    lastname:details[1],
                    mobile:details[2],
                    dob:details[3],
                    age:details[4].toNumber(),
                    nationality:details[5],
                    gender:details[6]
                }
                console.log(val);
                setloading(false);
            }catch(error){
                console.log(error)
            }
            //console.log(userinfo);
    },[userId])
    const handleclick=()=>{
        const actuser = localStorage.getItem("user")
       setuserId(actuser);
        console.log(userId);
        setvalues();
    }
    const setvalues = ()=>{
          setuserinfo(userinfo=>({
                    ...userinfo,
                    ...val
        }));
    console.log(userinfo);

    }
  return (
    <div>
        <Navbar />
    <div className='flex flex-row bg-myprofilebg'>
        <div>
            <Sidebar/>
        </div>
        <div>
            <button onClick={handleclick}>Get My Infos</button>
        </div>
        <div className='px-3'>
            <div className='container mx-auto h-15 bg-violet-200 mt-10 mr-10 w-100 rounded-2xl '>
                <h1 className='text-5xl font-roboto text-violet-700 px-96'>MY INFORMATIONS</h1>
            </div>
            <div className='container flex flex-row mx-auto h-5/6 bg-gray-100 mt-10 mr-10 w-100 rounded-2xl'>
                <div className="pr-96 ml-52 py-36 mr-40 overflow-x-auto">
                   <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-44 py-3 text-white">
                                Particulars
                            </th>
                            <th scope="col" className="px-44 py-3 text-white">
                                Infos
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Refugee ID
                            </th>
                            <td className="px-6 py-3">
                                {userId}
                                
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                First Name
                            </th>
                            <td className="px-6 py-4">
                            {/* {details[0]} */}
                            {isLoading? <p>Loading...</p>: details[0]}
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-900">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Last Name
                            </th>
                            <td className="px-6 py-4">
                            {isLoading ? <p>Loading...</p>:details[1]}
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               Mobile
                            </th>
                            <td className="px-6 py-4">
                            {isLoading ? <p>Loading...</p>:details[2]}
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-900">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               Date of Birth
                            </th>
                            <td className="px-6 py-4">
                            {isLoading ? <p>Loading...</p>:details[3]}
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               Age
                            </th>
                            <td className="px-6 py-4">
                            {isLoading ? <p>Loading...</p>:details[4].toNumber()}
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-900">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               Nationality
                            </th>
                            <td className="px-6 py-4">
                            {isLoading ? <p>Loading...</p>:details[5]}
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               Gender
                            </th>
                            <td className="px-6 py-4">
                            {isLoading ? <p>Loading...</p>:details[6]}
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Myprofile;



