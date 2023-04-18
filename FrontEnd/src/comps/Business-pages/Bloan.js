import React, { useEffect,useState } from "react";
import Businessnavbar from "../Business Comps/Businessnavbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Bloan(){
    const [data,setdata] = useState([])
    useEffect(()=>{
        try{
            fetch(`http://localhost:8080/loanrequest`).then(function(response){
                return response.json()
            }).then(function(data){
                const item = data
                console.log(item.allLoanrequest)
                setdata(item.allLoanrequest)
            }).catch((err)=>console.log(err));

        }catch(err){
            console.log("Error : " +err);

        }
    },[])
    return (
        <div className="bg-gray-200 min-h-screen">
            <Businessnavbar />
            <div>
                <div className="container mx-auto">
                    <div className='max-w-6xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm'>
                        <div className='text-center'>
                            <h1 className="my-3 text-3xl font-semibold text-gray-700">Loan Request</h1>
                        </div>
                        <div className="w-ful">
                        <table className='divide-y divide-green-400'>
                                            <thead className='bg-gray-50'>
                                                <tr>
                                                    <th className="px-6 py-2 text-xs text-gray-500">
                                                        Username
                                                    </th>
                                                    <th className="px-6 py-2 text-xs text-gray-500">
                                                        Loan Amount
                                                    </th>
                                                    <th className="px-6 py-2 text-xs text-gray-500">
                                                        Loan Purpose
                                                    </th>
                                                    <th className="px-6 py-2 text-xs text-gray-500">
                                                        Mobile Number - 1
                                                    </th>
                                                    <th className="px-6 py-2 text-xs text-gray-500">
                                                        Mobile Number - 2
                                                    </th>
                                                    <th className="px-6 py-2 text-xs text-gray-500">
                                                        Mobile Number - 3
                                                    </th>
                                                    <th className="px-6 py-2 text-xs text-gray-500">
                                                       Approve
                                                    </th>
                                                    <th className="px-6 py-2 text-xs text-gray-500">
                                                        Reject
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className='bg-white divide-y divide-gray-300'>
                                                {data.map((eachdata)=>{
                                                    return(
                                                        <tr className="whitespace-nowrap" key={eachdata._id}>
                                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                                {eachdata.username}
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-500 text-center">
                                                                {eachdata.loanamt}
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-500 text-center">
                                                                {eachdata.loanpurpose}
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                                {eachdata.citizenmobilenumber1}
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                                {eachdata.citizenmobilenumber2}
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                                {eachdata.citizenmobilenumber3}
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-500 text-center">
                                                                <FontAwesomeIcon icon={faCircleCheck} className='text-3xl text-green-500 hover:text-green-700' />
                                                            </td>
                                                            <td className="px-6 py-4 text-sm text-gray-500 text-center">
                                                                <FontAwesomeIcon icon={faXmark} className='text-3xl text-red-500 hover:text-red-700' />
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                                </tbody>
                                                </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bloan;