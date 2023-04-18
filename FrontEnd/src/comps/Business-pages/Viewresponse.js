import React,{useEffect, useState} from 'react'
import Businessnavbar from '../Business Comps/Businessnavbar';
import Gschemessidebar from '../Business Comps/Gschemessidebar';

function Viewresponse(){
    const [data, setdata] = useState([])
    useEffect(()=>{
        try{
            fetch(`http://localhost:8080/getresponse`).then(function(response){
                return response.json()
            }).then(function(data){
                const item = data
                console.log(item.allresponse)
                setdata(item.allresponse)
            }).catch((err)=>console.log(err));
        

        }catch(err){

        }
    },[])
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
                                                Username
                                            </th>
                                            <th className="px-6 py-2 text-xs text-gray-500">
                                                Scheme Name
                                            </th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg-white divide-y divide-gray-300'>
                                            {data.map((eachresponse)=>{
                                                return(
                                                    <tr className='whitespace-nowrap' key={eachresponse._id}>
                                                        <td className="px-6 py-4 text-sm text-gray-500">
                                                        {eachresponse.username}
                                                        </td>
                                                        <td className="px-6 py-4 text-sm text-gray-500">
                                                        {eachresponse.schemename}
                                                        </td>
                                                    </tr>
                                                )
                                                })
                                            }

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
            
            </div>
            </div>
    )

}

export default Viewresponse;