import React, { useEffect, useState } from 'react'
import BankSidebar from '../ui-comps/BankSidebar';
import Navbar from '../Navbar';

function Transcations(){
  const [userid, setuser] = useState("");
  const [data, setdata] = useState([]);
  let actuser="";
  var res;

  const getapidata = async()=>{
    try{
      const res = await fetch(`http://localhost:8080/gettranscations?sendid=${localStorage.getItem("user")}`)
      .then((response)=>{
        //console.log(response.json())
       response.json();
      })
      .then((json)=>console.log(json))
      .catch(err=>console.log(err))
      console.log("Working GetApidata function");
      //setdata(ress);
      console.log(res)
    }
    catch(err){
       console.log(err)
    }
  }
  useEffect(()=>{
    actuser = localStorage.getItem("user");
    setuser(actuser);
    console.log("Active user is "+actuser)
    //console.log(userid);
    //getapidata()
    fetch(`http://localhost:8080/gettranscations?sendid=${localStorage.getItem("user")}`)
      .then(response=>{
        this.setdata({data:response.data})
      })
      .catch(err=>console.log(err))
      console.log(data)


  },[actuser])

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
                      <button>Click Me</button>
                      {/* {data && data.map(item=>(
                      <li key={item._id}>
                        <p>Sender:{item.sender}</p>
                        <p>Receiver:{item.receiver}</p>
                      </li>
                     ))} */}

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
