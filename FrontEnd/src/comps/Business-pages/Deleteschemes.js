import React from 'react'
import Businessnavbar from '../Business Comps/Businessnavbar';
import Gschemessidebar from '../Business Comps/Gschemessidebar';

function Deleteschemes(){
    return (
        <div>
            <Businessnavbar />
            <div className='flex flex-row'>
            <Gschemessidebar />
            Delete Schemes
            </div>
            </div>

    )

}

export default Deleteschemes;