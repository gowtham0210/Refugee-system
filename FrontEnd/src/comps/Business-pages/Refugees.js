import React, {useEffect, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Businessnavbar from "../Business Comps/Businessnavbar";
//const ethers = require('ethers');


function Refugees(){
    const { contract } = useContract("0xBB417720eBc8b76AdeAe2FF4670bbc650C3E791f");
    const { data:noofusers, isLoading } = useContractRead(contract, "getnoofUser");
    const [totalusers, settotalusers] = useState();
    const [username, setusername] = useState();
    const { data:istrue, } =  useContractRead(contract, "chkexisitinguserId", username);
    const { data:details, isSuccess} = useContractRead(contract, "getUser", username);
    const [clicked, setclick] = useState(false);
    const [isuserexist, setuserexist] = useState(false);
    useEffect(()=>{
        if(!isLoading){
            const value = noofusers.toString();
            console.log(value);
            settotalusers(value);
        }
        console.log(isLoading)
        // eslint-disable-next-line
    },[isLoading])

    const getinfos = ()=>{
        console.log(username);
        setclick(true)
        if(isSuccess){
            console.log(isSuccess)
        }else{
            console.log(isSuccess)
        }
        if(!username){

            toast.error('😴 OOPs Please Enter Refugee Id', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setuserexist(false)

        }else if(!chkusername()){
            toast.error('😴 OOPs Refugee does not exist', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setuserexist(false)
        }else{
            setuserexist(true)
        }
    }

    //used to check username is  existing or not in the blockchain returns true or false;
    const chkusername = ()=>{
        //console.log(istrue)
        return istrue;
    }

    return(
        <div>
            <Businessnavbar />
            {/*   */}
            <div className="flex flex-col my-10 mx-32 ">
                <div className="h-auto w-11/12 bg-red-100 rounded-lg px-80 shadow-lg flex justify-center">
                    <h1 className="text-3xl">Total Number of Refugees -  {isLoading ? "Loading....":totalusers} </h1>
                </div>
                <div className="w-11/12 h-auto bg-white rounded-lg shadow-lg  mt-7 flex flex-row justify-center pt-10 pb-10  ">
                    <div className="flex flex-col">
                        <div>
                        <input type="text" className="rounded-sm h-7 bg-gray-200 w-60" onChange={(e)=>setusername(e.target.value)} />
                        <button className="bg-violet-500 h-7 -m-1 rounded-sm text-white px-3 hover:bg-violet-700" onClick={getinfos}>Search Refugee</button>
                        </div>
                    <div>
                     {isuserexist && clicked && isSuccess ? 
                    <table className="table-auto w-full mt-7 border border-collapse" >
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th className="p-3 text-sm font-semibold tracking-wide text-center">Particulars</th>
                                <th className="p-3 text-sm font-semibold tracking-wide text-center">INFORMATIONS</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-200 text-white">
                            <tr>
                                <td className="p-3 text-sm text-gray-700 text-center">Refugee Id</td>
                                <td className="p-3 text-sm text-gray-700 text-center">{username}</td>
                            </tr>
                            <tr>
                                <td className="p-3 text-sm text-gray-700 text-center">First Name</td>
                                <td className="p-3 text-sm text-gray-700 text-center">{details[0]}</td>
                            </tr>
                            <tr>
                                <td className="p-3 text-sm text-gray-700 text-center">Last Name</td>
                                <td className="p-3 text-sm text-gray-700 text-center">{details[1]}</td>
                            </tr>
                            <tr>
                                <td className="p-3 text-sm text-gray-700 text-center">Mobile</td>
                                <td className="p-3 text-sm text-gray-700 text-center">{details[2]}</td>
                            </tr>
                            <tr>
                                <td className="p-3 text-sm text-gray-700 text-center">Date of Birth</td>
                                <td className="p-3 text-sm text-gray-700 text-center">{details[3]}</td>
                            </tr>
                            <tr>
                                <td className="p-3 text-sm text-gray-700 text-center">Age</td>
                                <td className="p-3 text-sm text-gray-700 text-center">{details[4].toNumber()}</td>
                            </tr>
                            <tr>
                                <td className="p-3 text-sm text-gray-700 text-center">Nationality</td>
                                <td className="p-3 text-sm text-gray-700 text-center">{details[5]}</td>
                            </tr>
                            <tr>
                                <td className="p-3 text-sm text-gray-700 text-center">Gender</td>
                                <td className="p-3 text-sm text-gray-700 text-center">{details[6]}</td>
                            </tr>
                        </tbody>
                        </table> : <p></p>}
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
    )

}
export default Refugees;