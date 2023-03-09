import React, { useEffect, useState } from 'react'
import BankSidebar from '../ui-comps/BankSidebar';
import Navbar from '../Navbar';
//import { useAddress, useMetamask } from "@thirdweb-dev/react";
const ethers = require('ethers')

function Transcations(){
  const [userid, setuser] = useState("");
  const [data, setdata] = useState([]);
  const [balanceInEther, setbalanceinether] = useState();



  useEffect(()=>{

    console.log("Active user is "+localStorage.getItem("user"))
    fetch(`http://localhost:8080/gettranscations?sendid=${localStorage.getItem("user")}`)
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        const items = data
        const jsonitems = JSON.stringify(items)
        console.log(jsonitems)
        setdata(items.trans)
        console.log(items.trans[0].amount)
      })
      .catch(err=>console.log(err))
      console.log(data)

      const getbalance = async()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.send("eth_requestAccounts", []);
        const balance = await provider.getBalance(accounts[0]);
        const balanceInEther = ethers.utils.formatEther(balance);
        setbalanceinether(balanceInEther)
      }

      getbalance();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <Navbar />
    <div className="flex flex-row">
    <div>
      <BankSidebar />
    </div>
    <div className='bg-gray-300 w-full'>
        <div className='ml-10 mr-10 mt-16 bg-white w-5/6 h-auto'>
            <div className='flex flex-col'>
             <div className='grid grid-cols-3 gap-2'>
                    <div className='col-start-3 col-span-1 bg-gradient-to-r from-blue-200 to-cyan-200 text-white mt-4 mr-3 w-72 h-36 rounded-lg'>
                        <div className='grid'>
                        <div className='place-self-end pr-5 text-lg uppercase pt-4'>Ethereum</div>
                        </div>
                        <div className='mt-14 pl-3'>
                          <p>{balanceInEther===""? "loading":balanceInEther} ETH</p>
                        </div>
                    </div>
                    </div>
                    <div className='overflow-auto rounded-lg shadow mx-10 mt-14 mb-10'>
                      {userid}
                      <table className="table-auto w-full">
                        <thead className='bg-gray-50 border-b-2 border-gray-200'>
                          <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Id</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Name</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Amount</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Subsidy</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Transfertype</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'></th>
                            <th></th>
                          </tr>
                        </thead>
                        {/* style:"" */}
                        <tbody>
                      {data.map((eachtrans)=>{
                          return(
                            <tr key={eachtrans._id}>
                              {eachtrans.receiverid == localStorage.getItem("user") ? <td className='p-3 text-sm text-blue-500 font-bold text-center'>{eachtrans.senderid}</td> :<td className='p-3 text-sm text-blue-500 font-bold text-center'>{eachtrans.receiverid}</td>}
                              {eachtrans.receiverid == localStorage.getItem("user") ? <td className="p-3 text-sm text-blue-500 font-bold text-center">{eachtrans.sender}</td> : <td className='p-3 text-sm text-blue-500 font-bold text-center'>{eachtrans.receiver}</td> }
                             {/* <td className='p-3 text-sm text-blue-500 font-bold text-center'>{eachtrans.receiverid}</td> */}
                              {/* <td className='p-3 text-sm text-gray-700 text-center'>{eachtrans.receiver}</td> */}
                              <td className='p-3 text-sm text-gray-700 text-center'>{eachtrans.amount} Eth</td>
                              <td className='p-3 text-sm text-gray-700 text-center'>{eachtrans.subsidy}</td>
                              <td className='p-3 text-sm text-gray-700 text-center'>{eachtrans.transfertype}</td>
                              {eachtrans.receiverid == localStorage.getItem("user") ? 
                              <td className="p-3 text-sm text-white  font-bold text-center"><span className='p-1.5 text-xs font-medium uppercase tracking-wider bg-green-500 bg-opacity-50 text-green-800 rounded-full'>Received</span></td> : 
                              <td className='p-3 text-sm  font-bold text-center'><span className='p-1.5 text-xs font-medium uppercase tracking-wider bg-yellow-500 bg-opacity-50 rounded-full text-yellow-800 '>Sent</span></td> }
                            </tr>
                          );
                      })}
                      </tbody>
                      </table>
                    </div>
                    <div>
                    </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    
  )
}

export default Transcations;
