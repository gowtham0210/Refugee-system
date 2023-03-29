import React, { useEffect, useState } from 'react'
import Businessnavbar from '../Business Comps/Businessnavbar';
import Gschemessidebar from '../Business Comps/Gschemessidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Deleteschemes(){
    const [data,setdata] = useState([])
    const [render, setrendered] = useState(false)
    useEffect(()=>{
        try{
            fetch(`http://localhost:8080/getschemes`).then(function(response){
                return response.json();
            })
            .then(function(data){
                const item = data
                console.log(item)
                setdata(item.schemes)
                setrendered(false)
            })
        }catch(err){
            alert("Error"+err)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[render])
    const handleclick = (schemeid)=>{
        console.log(schemeid);
        try{
            fetch(`http://localhost:8080/deleteschemes?schemeid=${schemeid}`,{method:'DELETE'}).then((response)=>{
                console.log(response.status)
                if(response.status === 200){
                    toast.success('Scheme Created Successfully', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                        setrendered(true)
                }else if(response.status === 404){
                    toast.error('😴 Scheme not deleted', {
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
            console.log(err)
        }
    }
    return (
        <div>
            <Businessnavbar />
            <div className='flex flex-row bg-gray-200'>
            <Gschemessidebar />
                <div className='container mx-auto'>
                    <div className='max-w-5xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm'>
                        {/* Table Creating */}
                        <div className='container flex justify-center mx-auto'>
                            <div className='flex flex-col'>
                                <div className='w-full'>
                                    <div className='border-b border-gray-200 shadow'>
                                        <table className='divide-y divide-green-400'>
                                            <thead className='bg-gray-50'>
                                                <tr>
                                                    <th className="px-6 py-2 text-xs text-gray-500">
                                                        Scheme ID
                                                    </th>
                                                    <th className="px-6 py-2 text-xs text-gray-500">
                                                        Scheme Name
                                                    </th>
                                                    <th className="px-6 py-2 text-xs text-gray-500">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className='bg-white divide-y divide-gray-300'>
                                                {data.map((eachscheme)=>{
                                                    return(
                                                        <tr className='whitespace-nowrap' key={eachscheme._id}>
                                                             <td className='px-6 py-4 text-sm text-gray-500'>
                                                                {eachscheme.schemeid}
                                                             </td>
                                                             <td className='px-6 py-4 text-sm text-gray-500'>
                                                                {eachscheme.schemename}
                                                             </td>
                                                             <td className='pr-6 py-4 text-sm text-gray-500 text-center pl-5'>
                                                                <button onClick={()=>handleclick(eachscheme.schemeid)}>
                                                                 <FontAwesomeIcon icon={faTrash} className='text-red-500 hover:text-red-700' />
                                                                </button>
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

export default Deleteschemes;