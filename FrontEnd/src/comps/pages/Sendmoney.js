import React from "react";
import BankSidebar from "../ui-comps/BankSidebar";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import {ethers} from "ethers";

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

    const call = () => {
        try {
            _Sname = "gowtham";
            _S_userid = "gowtham0210";
            _Rname = "Naresh";
            _R_userid = "naresh2002";
            transtype = "food";
            _amt = ethers.utils.parseEther("0.000001");
            const data = transfermoney([ _Sname, _S_userid, _Rname, _R_userid, transtype, _amt ]);
            console.info("contract call successs", data);
            storetrans();
        } catch (err) {
        console.error("contract call failure", err);
        }
    }

    const storetrans=()=>{
        try{
            let datee = new Date()
            const unixTime = datee.getTime()
            const unixtimeinsec = Math.floor(unixTime/1000);
            console.log(unixtimeinsec);
            let _datetime = unixtimeinsec;
            let _message = "";
            const transdata = storeTransactionDetails([ _S_userid, _Sname, _Rname, _R_userid, _amt, _message, _datetime ]);
            transdata.then((val)=>{
                console.log("promise then"+val);
            })
            .catch((err)=>{
                console.log("promise catch error"+err);
            });
            //console.log(transdata);
        }catch(err){
            console.log("StoreTranscation contract failed",err);
        }
    }
    return(
    <div className="flex flex-row">
        <div>
            <BankSidebar />
        </div>
        <div>
            <button onClick = {call}>Send Money</button>
        </div>
    </div>
    )
}

export default Sendmoney;