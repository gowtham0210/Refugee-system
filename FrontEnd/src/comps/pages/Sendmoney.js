import {React, useState} from "react";
import BankSidebar from "../ui-comps/BankSidebar";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import {ethers} from "ethers";
import Navbar from '../Navbar';

function Sendmoney(){
    const { contract } = useContract("0xBB417720eBc8b76AdeAe2FF4670bbc650C3E791f");
    //const { mutateAsync: transfermoney, isLoading } = useContractWrite(contract, "transfermoney");
    //const { mutateAsync: storeTransactionDetails} = useContractWrite(contract, "storeTransactionDetails");
    const [_Sname ,setsendername ]=useState();
    const [_S_userid, setsenderuserid ]=useState();
    const [_Rname, setreceivername ]=useState();
    const [_R_userid, setreceiverid ]=useState();
    const [transtype, settransfertype ]=useState();
    const [_amt, setamt ] = useState();
    const [ethamt, setethamt] = useState();
    const [_subsidy, setsubsidy ] = useState();

     const connectionwallet = async()=>{
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const accounts = await provider.send("eth_requestAccounts", []);
        const balance = await provider.getBalance(accounts[0]);
        const balanceInEther = ethers.utils.formatEther(balance);
        //const block = await provider.getBlockNumber();
        //console.log(balance, balanceInEther)
        setamt(ethers.utils.parseEther("0.00000001"));
        //setethamt(ethers.utils.formatEther(_amt))
        const amount = _amt;
        const etmt = ethers.utils.formatEther(amount)
        setethamt(etmt)
        console.log(ethamt);
        console.log(balanceInEther)


    }

    const call = () => {
        try {
            connectionwallet();
            
            
            //const data = transfermoney([ _Sname, _S_userid, _Rname, _R_userid, transtype, _amt ]).then(()=>{storetranscations()});
            //console.info("contract call successs", data);
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