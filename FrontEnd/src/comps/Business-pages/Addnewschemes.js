import React,{useState} from 'react'
import Businessnavbar from '../Business Comps/Businessnavbar';
import Gschemessidebar from '../Business Comps/Gschemessidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addnewschemes(){
    const [schemeid, setschemeid] = useState();
    const [schemename, setschemename] = useState();
    const [schemeshortdesc, setschemeshortdesc] = useState();
    const [schemedesc, setschemedesc] = useState();
    const [schemeurl, setschemeurl] = useState();
    const [lastdate, setlastdate] = useState();

    const handlesubmit = ()=>{
        if(!schemeid){
            toast.error('😴 Scheme ID is required', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!schemename){
            toast.error('😴 Scheme Name is required', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!schemeshortdesc){
            toast.error('😴 Scheme Short Description is required', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!schemedesc){
            toast.error('😴 Scheme Description is required', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!schemeurl){
            toast.error('😴 Scheme URL is required', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else if(!lastdate){
            toast.error('😴 Scheme Last Date is required', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else{
            console.log(schemeid)
            //checks for existing scheme
            fetch(`http://localhost:8080/getsinglescheme?schemeid=${schemeid}`).then((response)=>{
                if(response.status === 200){
                    toast.error('😴 Scheme ID already exist', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                }else{
                    //if scheme id is not there then create new scheme
                    try{
                        fetch(`http://localhost:8080/government_schemes?gschemeid=${schemeid}&gschemename=${schemename}&gschemedescription=${schemedesc}&gschemeimgurl=${schemeurl}&gschemeshortdescription=${schemeshortdesc}&lastdate=${lastdate}`,
                        {method:'POST',headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }}).then((response)=>{
                            if(response.status === 200){
                                console.log(response.json());
                                toast.success('Scheme Created Successfully', {
                                    position: "top-right",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    });
                            }else if(response.status === 404){
                                toast.error('😴 Unable to create scheme', {
                                    position: "top-right",
                                    autoClose: 3000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "colored",
                                    });
                            }
                            else{
                                console.log(response.status);
                            }
                        })
                    }catch(err){
                        toast.error('😴 '+err, {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            });
                    }
            }
        })
        }
    }
    return (
        <div>
            <Businessnavbar />
            <div className='flex flex-row bg-gray-200'>
                <Gschemessidebar />
                <div className='container mx-auto'>
                    <div className='max-w-xl p-5 mx-auto my-10 bg-white rounded-md shadow-sm'>
                        <div className='text-center'>
                            <h1 class="my-3 text-3xl font-semibold text-gray-700">Create New Scheme</h1>
                            <p class="text-gray-400">Create New schemes, Input the below asked value</p>
                        </div>
                        <div className='mb-6'>
                            <label for="name" className="block mb-2 text-sm text-gray-600">Scheme Id</label>
                            <input type="text" name="name" placeholder="S01" onChange={(e)=>setschemeid(e.target.value)} required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                        </div>
                        <div className='mb-6'>
                            <label for="name" className="block mb-2 text-sm text-gray-600">Scheme Name</label>
                            <input type="text" name="name" placeholder="Scheme Name" onChange={(e)=>setschemename(e.target.value)} required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                        </div>
                        <div className='mb-6'>
                            <label for="name" className="block mb-2 text-sm text-gray-600">Scheme Short Description</label>
                            <input type="text" name="name" placeholder="Scheme Short Description" onChange={(e)=>setschemeshortdesc(e.target.value)} required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                        </div>
                            <div className='mb-6'>
                                <label for="name" className="block mb-2 text-sm text-gray-600">Scheme Description</label>
                                <textarea rows="5" name="message" placeholder="Scheme Description" onChange={(e)=>setschemedesc(e.target.value)} class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" required></textarea>
                            </div>
                            <div className='mb-6'>
                                <label for="name" className="block mb-2 text-sm text-gray-600">Scheme Image URL</label>
                                <input type="text" name="name" placeholder="Scheme Image URL" onChange={(e)=>setschemeurl(e.target.value)} required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                            </div>
                            <div className='mb-6'>
                                <label for="name" className="block mb-2 text-sm text-gray-600">Last Date</label>
                                <input type="date" onChange={(e)=>setlastdate(e.target.value)}   required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md  focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"/>
                            </div>
                            <div className="mb-6">
                                <button type="submit" onClick={handlesubmit} className="w-full px-2 py-4 text-white bg-indigo-500 rounded-md  focus:bg-indigo-600 focus:outline-none">Create Scheme</button>
                            </div>
                    </div>

                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    )

}

export default Addnewschemes;