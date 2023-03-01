import React,{useState} from 'react';

function Businessbanking(){
    const [date, setdate] = useState();
    const getyear=()=>{
        let da = new Date(date);
        console.log(typeof(da)+" "+typeof(da.getFullYear()));
        let de = convert(date);
         console.log(de);
         //let firstname = "dianel"
         try{
           
            
         }catch(err){
            console.log(err);
         }
    }
    const convert = (dob)=>{
        let strdate = new Date(dob);
        strdate = strdate.getFullYear();
        strdate = strdate.toString();
        return strdate;
    }
    return(
        <div>
            <input type="date" onChange={(e)=>{setdate(e.target.value)}}/>
            <button onClick={getyear}>Click me</button>


            Business Banking
        </div>

    )
}

export default Businessbanking;