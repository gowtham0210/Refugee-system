import React from 'react'
import Businessnavbar from '../Business Comps/Businessnavbar';
import Gschemessidebar from '../Business Comps/Gschemessidebar';

function Gschemes(){
    return(
        <div>

            <Businessnavbar />
            <div className='flex flex-row'>
            <Gschemessidebar />
            </div>
        </div>
    )
}

export default Gschemes;