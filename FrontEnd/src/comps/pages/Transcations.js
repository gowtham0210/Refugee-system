import React from 'react'
import BankSidebar from '../ui-comps/BankSidebar';
import { useContract, useContractWrite } from "@thirdweb-dev/react";

function Transcations(){
  const { contract } = useContract("0xBB417720eBc8b76AdeAe2FF4670bbc650C3E791f");
  const { mutateAsync: gettranscationhistory, isLoading } = useContractWrite(contract, "gettranscationhistory");
  const call = async () => {
    try {
      let _userId = "gowtham0210"
      const data = await gettranscationhistory([ _userId ]);
      console.info("contract call successs", data, data.receipt.events);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  return (
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
                      <button onClick={call}>Click Me</button>

                    </div>

                </div>

            </div>


        </div>
    </div>
    </div>
  )
}

export default Transcations;
