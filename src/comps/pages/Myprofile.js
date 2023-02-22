import React from 'react';
import Sidebar from '../ui-comps/Sidebar';

function Myprofile(){
  return (
    <div className='flex flex-row bg-myprofilebg'>
        <div>
            <Sidebar/>
        </div>
        <div className='px-3'>
            <div className='container mx-auto h-15 bg-violet-200 mt-10 mr-10 w-100 rounded-2xl '>
                <h1 className='text-5xl font-roboto text-violet-700 px-96'>MY INFORMATIONS</h1>
            </div>
            <div className='container flex flex-row mx-auto h-5/6 bg-gray-100 mt-10 mr-10 w-100 rounded-2xl'>
                <div className="pr-96 ml-52 py-36 mr-40 overflow-x-auto">
                   <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-44 py-3 text-white">
                                Particulars
                            </th>
                            <th scope="col" className="px-44 py-3 text-white">
                                Infos
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Refugee ID
                            </th>
                            <td className="px-6 py-3">
                                Gowtham0210
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                First Name
                            </th>
                            <td className="px-6 py-4">
                                Gowtham
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-900">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Last Name
                            </th>
                            <td className="px-6 py-4">
                                Subramani
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               Mobile
                            </th>
                            <td className="px-6 py-4">
                                9080980256
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-900">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               Date of Birth
                            </th>
                            <td className="px-6 py-4">
                                02-10-2002
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               Age
                            </th>
                            <td className="px-6 py-4">
                                20
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-900">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               Nationality
                            </th>
                            <td className="px-6 py-4">
                                Indian
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               Gender
                            </th>
                            <td className="px-6 py-4">
                                M
                            </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Myprofile;



