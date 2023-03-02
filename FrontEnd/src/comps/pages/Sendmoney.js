import React from "react";
import BankSidebar from "../ui-comps/BankSidebar";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import {ethers} from "ethers";
import Navbar from '../Navbar';

function Sendmoney(){
    const { contract } = useContract("0xBB417720eBc8b76AdeAe2FF4670bbc650C3E791f");
    const { mutateAsync: transfermoney, isLoading } = useContractWrite(contract, "transfermoney");
    const { mutateAsync: storeTransactionDetails} = useContractWrite(contract, "storeTransactionDetails");
    let _Sname="";
    let _S_userid = "";
    let _Rname = "";
    let _R_userid = "";
    let transtype = "";
    let _amt = 0;
    let _subsidy = 45;

    const call = () => {
        try {
            _Sname = "gowtham";
            _S_userid = "gowtham0210";
            _Rname = "Naresh";
            _R_userid = "naresh2002";
            transtype = "food";
            _amt = ethers.utils.parseEther("0.00000001");
            const data = transfermoney([ _Sname, _S_userid, _Rname, _R_userid, transtype, _amt ]).then(()=>{storetranscations()});
            console.info("contract call successs", data);
        } catch (err) {
        console.error("contract call failure", err);
        }
    }

    const storetranscations=()=>{
        try{
            fetch(`http://localhost:8080/transcations?_senderid=${_S_userid}&_sender=${_Sname}&_receiverid=${_R_userid}&_receiver=${_Rname}&_amount=${_amt}&_subsidy=${_subsidy}&_transtype=${transtype}`,{method:'POST',headers: {
                "Content-type": "application/json; charset=UTF-8"
            }})
            .then((response)=>{
                if(response.status === 200){
                    console.log(response.json());
                }
            })
        }catch(err){
            console.log("The error is "+err)
        }
    }
    return(
        <div>
            <Navbar />
        <div className="flex flex-row">
            <div>
                <BankSidebar />
            </div>
            <div>
                <button onClick = {call}>Send Money</button>
            </div>
        </div>
    </div>
    )
}

export default Sendmoney;