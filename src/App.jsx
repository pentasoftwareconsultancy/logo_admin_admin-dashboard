import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar'
import Product from './Page/Product/Product';
import Dashboard from './Components/Dashboard/Dashbard';
import './App.css'
import Accounts from './Page/Accounts/Accounts';





function App() {


  return (
    <>
    <div className='s'>
   <BrowserRouter>
  <Sidebar/>
        {/* <Dashboard/> */}
      <Routes>
        {/* <Route path="/" element={<Sidebar />}/> */}
         
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Product/>} />
      <Route path='/account' element={<Accounts/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App
