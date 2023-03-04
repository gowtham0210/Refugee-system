import React, { useEffect, useState } from 'react'
import BankSidebar from '../ui-comps/BankSidebar';
import Navbar from '../Navbar';
import Trans from '../ui-comps/transcomp';
import { useAddress, useMetamask } from "@thirdweb-dev/react";
const ethers = require('ethers')

function Transcations(){
  const [userid, setuser] = useState("");
  const [data, setdata] = useState([]);
  //const [isloading, setloading] = useState(true);
  const [balanceInEther, setbalanceinether] = useState();
  let actuser="";
  var res;

  const getbalance = async()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.send("eth_requestAccounts", []);
        const balance = await provider.getBalance(accounts[0]);
        const balanceInEther = ethers.utils.formatEther(balance);
        setbalanceinether(balanceInEther)
  }

  useEffect(()=>{
    getbalance();
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
                          <p>{balanceInEther==""? "loading":balanceInEther} ETH</p>
                        </div>
                    </div>
                    </div>
                    <div className='overflow-auto rounded-lg shadow mx-10 mt-14 mb-10'>
                      {userid}
                      <table className="table-auto w-full">
                        <thead className='bg-gray-50 border-b-2 border-gray-200'>
                          <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Receiverid</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Receiver</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Amount</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Subsidy</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-center'>Transfertype</th>
                            <th></th>
                          </tr>
                        </thead>
                        {/* style:"tr:nth-child(even){background:#f2f2f2;}" */}
                        <tbody >
                      {data.map((eachtrans)=>{
                          return(
                            <tr key={eachtrans._id}>
                              <td className='p-3 text-sm text-blue-500 font-bold text-center'>{eachtrans.receiverid}</td>
                              <td className='p-3 text-sm text-gray-700 text-center'>{eachtrans.receiver}</td>
                              <td className='p-3 text-sm text-gray-700 text-center'>{eachtrans.amount} Eth</td>
                              <td className='p-3 text-sm text-gray-700 text-center'>{eachtrans.subsidy}</td>
                              <td className='p-3 text-sm text-gray-700 text-center'>{eachtrans.transfertype}</td>
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
