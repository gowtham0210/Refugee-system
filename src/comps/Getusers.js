import React, { useState } from 'react'
import { useContract, useContractRead, Web3Button } from "@thirdweb-dev/react";
import {ethers} from "ethers";
export default function Getusers(){

  const { contract } = useContract("0xBB417720eBc8b76AdeAe2FF4670bbc650C3E791f");
  const { data:num, isLoading } = useContractRead(contract, "getnoofUser");
  const [noofusers, setnoofusers] = useState(0);

  const value = ()=> {
    console.log(num.toNumber());
    //console.log(num)
    setnoofusers(num.toNumber());
  }


  return (

    <div>
       <button onClick={value}>GetUsers</button>
       <h1>Total Number of users are {noofusers}</h1>
    </div>
  )
}
