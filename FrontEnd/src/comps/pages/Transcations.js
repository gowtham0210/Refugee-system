import React, { useEffect, useState } from 'react'
import BankSidebar from '../ui-comps/BankSidebar';
import Navbar from '../Navbar';

function Transcations(){
  const [userid, setuser] = useState("");
  useEffect(()=>{
    const actuser = localStorage.getItem("user");
    setuser(actuser);
    try{
      fetch(``)

    }catch(err){
      console.log("The catch error is "+err);
    }

  },[])

  return (
    <div>
      <Navbar />
    <div className="flex flex-row">
    <div>
      <BankSidebar />
    </div>
    <div className='bg-gray-300 w-full'>
        <div className='ml-10 mr-10 mt-16 bg-white w-5/6 h-64'>
            <div className='flex flex-col'>
                <div className='grid grid-cols-3 gap-2'>
                    <div className='col-start-3 col-span-1 bg-gradient-to-r from-blue-200 to-cyan-200 text-white mt-4 mr-3 w-72 h-36 rounded-lg'>
                        <div className='grid'>
                        <div className='place-self-end pr-5 text-lg uppercase pt-5'>Ethereum</div>
                        </div>
                    </div>
                    <div>
                      <button>Click Me</button>

                    </div>
                    <div>
                      {userid}
                    </div>

                </div>

            </div>


        </div>
    </div>
    </div>
    </div>
  )
}

export default Transcations;
