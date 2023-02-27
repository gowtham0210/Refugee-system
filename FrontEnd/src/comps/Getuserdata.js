import React, { useState }  from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Myprofile from '../comps/pages/Myprofile';

export default function Getuserdata(){
    const [userId, setuserId] = useState("gowtham0210");
    const [loading, setloading] = useState(true);
    const { contract } = useContract("0xBB417720eBc8b76AdeAe2FF4670bbc650C3E791f");
    const { data:details, isLoading } = useContractRead(contract, "getUser", userId)
    const [dates, setdates] = useState([]);

    const datas = ()=>{
        let date = [];
        try{
            //console.log(details)
            date.push({
                fname:details[0],
                lname:details[1],
                mobile:details[2],
                dob:details[3],
                age:details[4].toNumber(),
                nationality:details[5],
                gender:details[6]
            })
            setdates(date[0]);
            console.log(dates);
            setloading(false);

        }catch(error){
            console.log(error)
        }
    }
       return(
        <div>
            <button onClick={datas}>getuserdetails</button>
            {!loading ? <h1>{dates.fname}</h1>: <p>Loading...</p>}
            <Myprofile />

        </div>
       )
}