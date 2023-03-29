import React, {Component} from 'react';
import AddRefugee from './comps/Business-pages/AddRefugee';
import Home from './comps/pages/Home';
// import Banking from './comps/pages/Banking';
import Govtschemes from './comps/pages/Govtschemes';
import Tax from './comps/pages/Tax';
import Login from './comps/pages/Login';
import Myprofile from './comps/pages/Myprofile';
import Transcations from './comps/pages/Transcations';
import {  Routes, Route } from 'react-router-dom';
import Sendmoney from './comps/pages/Sendmoney';
import Loan from './comps/pages/Loan';
import Refugees from './comps/Business-pages/Refugees';
import ConnectwithWallet from './comps/pages/ConnectwithWallet';
import Updatelogin from './comps/pages/Updatelogin';
import Schemes from './comps/pages/Schemes';
import Gschemes from './comps/Business-pages/Gschemes';
import Addnewschemes from './comps/Business-pages/Addnewschemes';
import Viewresponse from './comps/Business-pages/Viewresponse';
import Deleteschemes from './comps/Business-pages/Deleteschemes';



class App extends Component{

  render(){
  return (
    <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/refugees" element={<Refugees />} />
          <Route path="/addrefugee" element={<AddRefugee />} />
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/banking/transcations" element={<Transcations />}/>
          <Route path="/government-schemes" element={<Govtschemes />} />
          <Route path="/Loan" element={<Loan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home/myprofile" element={<Myprofile />} />
          <Route path="/home/updatelogin" element={<Updatelogin />} />
          {/* <Route path="/transcations" element={<Transcations />} /> */}
          <Route path="/banking/sendmoney" element={<Sendmoney />} />
          <Route path="/banking/tax" element={<Tax />} />
          <Route path="/home/connectwithwallet" element={<ConnectwithWallet />} />
          <Route path="/government-schemes/schemes/:id" element={<Schemes />} />
          <Route path="/bgovernment-schemes" element={<Gschemes />} />
          <Route path="/bgovernment-schemes/add-new-scheme" element={<Addnewschemes />} />
          <Route path="/bgovernment-schemes/view-response" element={<Viewresponse />} />
          <Route path="/bgovernment-schemes/delete-scheme" element={<Deleteschemes />} />
        </Routes>
    </div>
  )
  }

}

export default App