import React from 'react'
const {Link} = require("react-router-dom");


const Sidebar = () => {
   
  return (
    <div className='flex'>
        <div className='flex flex-col h-screen p-3 bg-gray-900 shadow w-60'>
            <div className='space-y-3'>
                <div className='flex items-center text-white'>
                    <h2 className='text-2xl text-bold'>Home</h2>
                </div>
                <div className='flex-1 text-white'>
                    <ul className='pt-2 pb-4 space-y-1 text-sm'>
                        <li className='rounded-sm'>
                            <Link to="/home/myprofile">
                                My Profile
                            </Link>
                        </li>
                        <li className='rounded-sm'>
                            <Link to="/home/connectwithwallet">
                                Connect with wallet
                            </Link>
                        </li>
                        <li className='rounded-sm'>
                            <Link to="/home/updatelogin">
                                Update Login Credatinals
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar