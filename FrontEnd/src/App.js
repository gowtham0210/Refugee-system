import React, {Component} from 'react';
import AddRefugee from './comps/Business-pages/AddRefugee';
import Home from './comps/pages/Home';
import Banking from './comps/pages/Banking';
import Govtschemes from './comps/pages/Govtschemes';
import Tax from './comps/pages/Tax';
import Login from './comps/pages/Login';
import Myprofile from './comps/pages/Myprofile';
import Transcations from './comps/pages/Transcations';
import {  Routes, Route } from 'react-router-dom';
import Sendmoney from './comps/pages/Sendmoney';
import Loan from './comps/pages/Loan';
import Businessbanking from './comps/Business-pages/Businessbanking';
import ConnectwithWallet from './comps/pages/ConnectwithWallet';



class App extends Component{

  render(){
  return (
    <div>
        {/* <Navbar /> */}
       
        <Routes>
          <Route path="/bbanking" element={<Businessbanking />} />
          <Route path="/addrefugee" element={<AddRefugee />} />
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/banking" element={<Banking />}/>
          <Route path="/government-schemes" element={<Govtschemes />} />
          <Route path="/tax" element={<Tax />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home/myprofile" element={<Myprofile />} />
          <Route path="/transcations" element={<Transcations />} />
          <Route path="/sendmoney" element={<Sendmoney />} />
          <Route path="/banking/loan" element={<Loan />} />
          <Route path="/connectwithwallet" element={<ConnectwithWallet />} />
        </Routes>
       
    </div>
  )
  }

}

export default App