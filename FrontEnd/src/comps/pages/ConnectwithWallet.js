import React from  "react";
import { useAddress, useMetamask } from "@thirdweb-dev/react";
import Sidebar from '../ui-comps/Sidebar';
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import Navbar from '../Navbar';

export default function ConnectwithWallet(){
    const connectWithMetamask = useMetamask();

    const address = useAddress();
    const { contract } = useContract("0xBB417720eBc8b76AdeAe2FF4670bbc650C3E791f");
    const { mutateAsync: mapaddress, isLoading } = useContractWrite(contract, "mapaddress");

    const mapadd = ()=>{
        const _userId = "naresh2002";
        const _addr = address;

        try {
            const data = mapaddress([ _userId, _addr ]);
            console.info("contract call successs", data);
          } catch (err) {
            console.error("contract call failure", err);
          }

    }

    return(
        <div>
            <Navbar />
        <div className='flex flex-row bg-myprofilebg'>
            <div>
                <Sidebar />
            </div>
            <div>
                <h1> Connect With Wallet</h1>
            
            <button  onClick={connectWithMetamask}> click me
                </button>
                <div>
                <p className="text-xl">{address}</p>

                </div>
                <div>
                    Map With my account<button onClick={mapadd}>MAP</button>
                </div>
                
                </div>
        </div>
        </div>
    )
}