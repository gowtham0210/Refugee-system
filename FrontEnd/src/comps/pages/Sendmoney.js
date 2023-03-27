import {React, useState} from "react";
import BankSidebar from "../ui-comps/BankSidebar";
import { useContract, useContractWrite, useContractRead } from "@thirdweb-dev/react";
import {ethers} from "ethers";
import Navbar from '../Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Sendmoney(){
    const { contract } = useContract("0xBB417720eBc8b76AdeAe2FF4670bbc650C3E791f");
    const { mutateAsync: transfermoney, isLoading } = useContractWrite(contract, "transfermoney");
    //const { mutateAsync: storeTransactionDetails} = useContractWrite(contract, "storeTransactionDetails");
    const [_Sname ,setsendername ]=useState("");
    const [_S_userid, setsenderuserid ]=useState("");
    const [_Rname, setreceivername ]=useState();
    const [_R_userid, setreceiverid ]=useState();
    const [transtype, settransfertype ]=useState();
    const [_amt, setamt] = useState();
    const [stringsub, setstringsub] = useState("");
    const [ethamt, setethamt] = useState();
    const [_subsidy, setsubsidy ] = useState();
    const [sendbtnclick, setsendbtnclick] = useState(false);
    const [sendbtn,setsendbtn] = useState(false);
    let [bigamt, setbigamt] = useState([]);
    const { data:istrue, } =  useContractRead(contract, "chkexisitinguserId", _R_userid);
    const convertcurrency = ()=>{
        //bigamt = ethers.utils.parseEther(_amt)
        setbigamt(ethers.utils.parseEther(_amt))
        console.log(typeof(bigamt), bigamt);
        // const etmt = ethers.utils.formatEther(bigamt)
        // setethamt(etmt)
        // //display formated amount
        // console.log(etmt,ethamt);
    }

    const handleclick = ()=>{
        setsenderuserid(localStorage.getItem("user"))
        setsendername(localStorage.getItem("sendername"))
        console.log(_S_userid, _Sname)
        if(!_R_userid){
            toast.error('😴 Enter Receiver Id', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!_Rname){
            toast.error('😴 Enter Receiver Name', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!_amt){
            toast.error('😴 Enter Amount to be sent', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!transtype){
            toast.error('😴 Choose Transfer Type', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else{

            convertcurrency();
            console.log(_amt, typeof(_amt));
            calculatesubsidy();
            setsendbtnclick(true);
            storetranscations();

        }
    }

    const calculatesubsidy = ()=>{
        const intamt = Number(_amt);
        let subsidiesamt = 0
        if(transtype === "Food"){
            subsidiesamt = (intamt*20)/100;
            setsubsidy((intamt*20)/100);
            console.log(_subsidy)
            console.log("Food");
        }else if(transtype === "Gas"){
            subsidiesamt = (intamt*18)/100;
            setsubsidy((intamt*18)/100);
            console.log(_subsidy)
            console.log("Gas");
        }else if(transtype === "LPG"){
            subsidiesamt = (intamt*15)/100;
            setsubsidy((intamt*15)/100);
            console.log("LPG");
        }else{
            subsidiesamt = 0;
            setsubsidy(0);
            console.log("Empty");
        }
        const finalcalculatesubsidyamt = intamt - subsidiesamt;
        console.log(intamt, subsidiesamt,"Total Amount to be sent: ",finalcalculatesubsidyamt);
        //console.log(_subsidy.toString(),typeof(_subsidy.toString()))
    }

    const call = () => {
        if(_R_userid &&!chkusername()){
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
        }else if(typeof(bigamt) != 'undefined'){
            try {
                const data = transfermoney([ _Sname, _S_userid, _Rname, _R_userid, transtype, bigamt ]).then(()=>{storetranscations()});
                console.info("contract call successs", data);

            } catch (err) {
                console.error("contract call failure", err);
            }
        }else{
        console.log(bigamt,typeof(bigamt))
        }
    }
    //used to check username is  existing or not in the blockchain returns true or false;
    const chkusername = ()=>{
        console.log(istrue)
        return istrue;
    }
    const storetranscations=()=>{
        try{
            fetch(`http://localhost:8080/transcations?_senderid=${_S_userid}&_sender=${_Sname}&_receiverid=${_R_userid}&_receiver=${_Rname}&_amount=${_amt}&_subsidy=${_subsidy}&_transtype=${transtype}`,
            {method:'POST',headers: {
                "Content-type": "application/json; charset=UTF-8"
            }})
            .then((response)=>{
                if(response.status == 200){
                    console.log(response.json());
                }else{
                    console.log(response.status);
                }
            })
            .then((data)=>{
                
                    console.log(data);
                
            })
            .catch((err)=>{
                console.log("There is error"+err);
            })
        }catch(err){
            console.log("The error is "+err)
        }
    }
    return(
        <div className="">
            <Navbar />
            <div className="flex flex-row ">
                <div>
                    <BankSidebar />
                </div>
                <div className="flex flex-col">
                    <div className="ml-48 mt-20 w-98 h-99 bg-gray-200">
                        <div className="mt-20 ml-32 ">
                            <table className="w-full">
                                <thead></thead>
                                <tbody className="">
                                    <tr className="" >
                                        <td className="text-2xl text-gray px-4 mb-3">
                                            <label>Receiver ID</label>
                                        </td>
                                        <td className="px-4">
                                            <input type="text" className="rounded-full h-8 w-52 pl-4" onChange={(e)=>setreceiverid(e.target.value)}  />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-2xl text-gray px-4 mt-7 " >
                                            <label>Receiver Name</label>
                                        </td>
                                        <td className="px-4 mb-5">
                                            <input type="text" className="rounded-full h-8 w-52 mt-7 pl-4" onChange={(e)=>setreceivername(e.target.value)}  />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-2xl text-gray px-4 mt-7 ">
                                            <label>Amount</label>
                                        </td>
                                        <td className="px-4 mb-5">
                                            <input type="text" className="rounded-full h-8 w-52 mt-7 pl-4" onChange={(e)=>setamt(e.target.value)}   />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-2xl text-gray px-4 mt-7 ">
                                            <label>Transfer Type</label>
                                        </td>
                                        <td className="px-4 mb-5">
                                            <select className="rounded-full h-8 w-52 mt-7 pl-3 pr-3 " onChange={(e)=>settransfertype(e.target.value)}>
                                                <option>Choose</option>
                                                <option>Food</option>
                                                <option>Gas</option>
                                                <option>LPG</option>
                                                <option>Others</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        <button className="bg-teal-500 rounded-full ml-60 mt-14 h-10 w-24 text-2xl hover:bg-teal-700 text-white" onClick = {handleclick}>Send</button>
                        </div>
                    </div>
                    {sendbtnclick ?
                    <div className="ml-48 mt-20 w-auto h-auto mb-10 rounded-md pb-5 overflow-hidden pr-10 bg-gray-200">
                        <p className="text-2xl font-bold underline text-red-500 px-80 pb-10 pt-3">Receipt</p>
                        <div>
                            <table className="rounded-md rounded-tl-md w-full mx-5 pr-5 ">
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <td className="bg-teal-50 border-b-2 border-teal-200 mb-10  p-3 font-semibold text-gray-700 text-center">Receiver ID</td>
                                        <td className="bg-teal-100 border-b-2 border-teal-200 p-3 text-sm text-gray-700 text-center">{_R_userid}</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-teal-50 mt-3 border-b-2 border-teal-200 p-3 text-sm font-semibold tracking-wide text-center">Receiver</td>
                                        <td className=" bg-teal-100 border-b-2 border-teal-200  p-3 text-sm text-gray-700 text-center">{_Rname}</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-teal-50 border-b-2 border-teal-200 p-3 text-sm font-semibold tracking-wide text-center">Amount</td>
                                        <td className="bg-teal-100 border-b-2 border-teal-200 p-3 text-sm text-gray-700 text-center">{_amt}</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-teal-50 border-b-2 border-teal-200 p-3 text-sm font-semibold tracking-wide text-center">Subsidy</td>
                                        <td className=" bg-teal-100 border-b-2 border-teal-200 p-3 text-sm text-gray-700 text-center">{Number(_subsidy) }</td>
                                    </tr>
                                    <tr>
                                        <td className="bg-teal-50 border-b-2 border-teal-200 p-3 text-sm font-semibold tracking-wide text-center">Transfer Type</td>
                                        <td className=" bg-teal-100 border-b-2 border-teal-200 p-3 text-sm text-gray-700 text-center">{transtype}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="bg-teal-500 rounded-full ml-72 mt-10 h-10 w-52 text-md hover:bg-teal-700 text-white" onClick={call}>Send Money</button>
                        </div>
                    </div> :""}
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

export default Sendmoney;