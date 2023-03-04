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
            <div className="ml-60 mt-40 bg-zinc-300 h-60 w-98 rounded shadow-lg">
                <div className="px-10">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                    <div className="py-10">
                    <div className="text-center">
                        <h1 className="text-xl font-bold"> Connect With Wallet</h1>
                    </div>
                    <div>
                    </div>
                    <div>
                        <p className="text-xl mr-6 ml-32 content-center mt-7">{address}</p> </div>
                    <div className="mt-7 ml-60">
                        <button className="rounded-full bg-cyan-500 text-white h-7 w-24 hover:bg-cyan-700 font-poppins font-medium mr-8"  onClick={connectWithMetamask}> Connect</button>
                        <button className="rounded-full bg-cyan-500 text-white h-7 w-24 hover:bg-cyan-700 font-poppins font-medium" onClick={mapadd}>MAP</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}