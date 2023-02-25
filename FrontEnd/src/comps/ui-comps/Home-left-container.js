import React, {useState} from 'react'

function HomeLeftContainer(){
    const [errorMessages,setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const database = [
      {
        username:'user1',
        password:'pass1'
      },
      {
        username:'user2',
        password:'pass2'
      }
    ];

    const errors = {
      uname:"invalid username",
      pass: "invalid password"

    };
    const handleSubmit =(event) =>{
      event.preventDefault();
      var {uname,pass} = document.forms[0];
      const userData = database.find((user)=>user.username === uname.value)

      if(userData){
        if(userData.password !== pass.value ){
          //Invalid password
          setErrorMessages({name:"pass",message:errors.pass})
        }else{
          setIsSubmitted(true);
        }
      }else{
        //username not found
        setErrorMessages({name:"uname", message:errors.uname})
      }
    };

    const renderErrorMessage = (name)=>{
        name === errorMessages.name &&(
            <div className='error'>{errorMessages.name}</div>
        );
    }

    const renderForm = (
      <form className='h-full flex flex-col justify-evenly items-center' onSubmit={handleSubmit}>
            <div className='font-poppins text-white text-2xl tracking-wider'>Business Login</div>
            <input type="text" placeholder='username' name= 'uname'className='input-text' />
            {renderErrorMessage("uname")}
            <input type="password" placeholder='password' name='pass' className='input-text' />
            {renderErrorMessage("pass")}
            <input type="submit" placeholder="Login" className='font-poppins cursor-pointer px-5 py-1 rounded-full bg-white bg-opacity-50 hover:bg-opacity-80'/>
      </form>
    );

    return(
        <div className='container h-96 w-96 bg-white bg-opacity-10 relative z-2 rounded-2xl shadow-5xl'>
            {isSubmitted ?<div>User is successfully logged in </div>:renderForm}
        </div>
    )
}
function HomeRightContainer(){
    return(
        <div className='container h-96 w-96 bg-white bg-opacity-40 backdrop-blur-md relative z-2 rounded-2xl shadow-5xl'>
          <form className='h-full flex flex-col justify-evenly items-center'>
            <div className='font-poppins text-gray-900 text-2xl tracking-wider'>Refugee Login</div>
            <input type="text" placeholder='username' className='input-text-ryt ' />
            <input type="password" placeholder='password' className='input-text-ryt' />
            <input type="submit" placeholder="Login" className='font-poppins text-white cursor-pointer px-5 py-1 rounded-full bg-gray-900 bg-opacity-50 hover:bg-opacity-80'/>
          </form>
        </div>
    )
}

export {HomeLeftContainer,HomeRightContainer } ;





