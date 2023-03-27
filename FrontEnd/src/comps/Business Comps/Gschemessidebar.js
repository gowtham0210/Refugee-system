import React from 'react'
const {Link} = require("react-router-dom");


const Gschemessidebar = () => {

  return (
    <div className='flex'>
        <div className='flex flex-col h-screen p-3 bg-gray-900 shadow w-60'>
            <div className='space-y-3'>
                <div className='flex items-center text-white'>
                    <h2 className='text-2xl text-bold'>Government Schemes</h2>
                </div>
                <div className='flex-1 text-white'>
                    <ul className='pt-2 pb-4 space-y-1 text-xl'>
                        <li className='rounded-sm'>
                            <Link to="/bgovernment-schemes/add-new-scheme">
                                Add new schemes
                            </Link>
                        </li>
                        <li className='rounded-sm'>
                            <Link to="/bgovernment-schemes/view-response">
                                View Response
                            </Link>
                        </li>
                        <li className='rounded-sm'>
                            <Link to="/bgovernment-schemes/delete-scheme">
                                Delete Schemes
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gschemessidebar