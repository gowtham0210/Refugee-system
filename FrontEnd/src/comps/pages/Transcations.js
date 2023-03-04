import React, { useEffect, useState } from 'react'
import BankSidebar from '../ui-comps/BankSidebar';
import Navbar from '../Navbar';
import Trans from '../ui-comps/transcomp';

function Transcations(){
  const [userid, setuser] = useState("");
  const [data, setdata] = useState([]);
  let actuser="";
  var res;

  async function getapidata(){
    try{
      const res = await fetch(`http://localhost:8080/gettranscations?sendid=${localStorage.getItem("user")}`)
      // .then((response)=>{
      //   //console.log(response.json())
      //  response.json();
      // })
      // .then((json)=>console.log(json))
      // .catch(err=>console.log(err))
      // console.log("Working GetApidata function");
      // //setdata(ress);
      console.log(res.json())
    }
    catch(err){
       console.log(err)
    }
  }
  useEffect(()=>{
    // actuser = localStorage.getItem("user");
    // setuser(actuser);
    console.log("Active user is "+localStorage.getItem("user"))
    //console.log(userid);
    //getapidata()
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
        <div className='ml-10 mr-10 mt-16 bg-white w-5/6 h-64'>
        
            <div className='flex flex-col'>
                <div className='grid grid-cols-3 gap-2'>
                    <div className='col-start-3 col-span-1 bg-gradient-to-r from-blue-200 to-cyan-200 text-white mt-4 mr-3 w-72 h-36 rounded-lg'>
                        <div className='grid'>
                        <div className='place-self-end pr-5 text-lg uppercase pt-5'>Ethereum</div>
                        </div>
                    </div>
                    <div>
                      {userid}
                      <table className="table-auto">
                        <thead>
                          <tr>
                            <th>Receiverid</th>
                            <th>Receiver</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                      {data.map((eachtrans)=>{
                          return(
                            <tr key={eachtrans._id}>
                              <td>{eachtrans.receiver}</td>
                              <td>{eachtrans.receiverid}</td>
                              <td>{eachtrans.amount}</td>
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
    </div>
  )
}

export default Transcations;
