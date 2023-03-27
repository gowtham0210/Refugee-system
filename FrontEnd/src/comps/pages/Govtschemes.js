import React,{useState, useEffect,Fragment} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar';
import { Button } from "@material-tailwind/react";

import {Card, CardHeader, CardBody, CardFooter, Typography} from "@material-tailwind/react";

function Govtschemes(){
  const [data, setdata] = useState([]);
  const [open, setOpen] = useState(null);
 
  const handleOpen = () => setOpen(!open);

  useEffect(()=>{
    fetch(`http://localhost:8080/getschemes`)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      const items = data
      const jsonitems = JSON.stringify(items)
      //console.log(jsonitems)
      setdata(items.schemes)
      //console.log(items.schemes[0].schemeid)
    })
    .catch(err=>console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps

  },[])
  return (
    <div>
      <Navbar />
      
      <div className='flex flex-wrap mx-20 mt-5 '>
          
          {data.map((eachscheme)=>{
            return(
              <div key={eachscheme._id} className="rounded-md">
          <div className='mx-5' >
            <Card className='w-96 rounded-md' >
              <CardHeader color='blue' className='relative h-56 rounded-md shadow-md'>
                <img
                src={eachscheme.schemeimgurl}
                alt='img-blur-shadow'
                className='h-full w-full rounded-md'
                />
              </CardHeader>
              <CardBody className='text-center'>
                <Typography variant="h5" className="mb-2">
                  {eachscheme.schemename}
                </Typography>
                <Typography>
                  {eachscheme.schemeshortdescription}
                </Typography>
              </CardBody>
              <CardFooter divider className="flex items-center justify-between py-3">
                <Typography> </Typography>
                <Typography className="flex gap-1">
                  <Link to={`/government-schemes/schemes/${eachscheme.schemeid}`}>
                  <Button onClick={handleOpen}>Learn More</Button>
                  </Link>
                </Typography>
              </CardFooter>
            </Card>
          </div>
          </div>
            )
          })}
      </div>
    </div>
  )
}

export default Govtschemes;
