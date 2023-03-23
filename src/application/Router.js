import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/admin/Dashboard';
import Profile from '../pages/affiliate/Profile';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import AdminPrivateRoute from '../AdminPrivateRoute';
import AffiliateUserRoute from '../AffiliateUserRoute';


const Router = () => {


  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

          <Route path="/admin/*" element={<AdminPrivateRoute />}> 
            <Route path="dashboard" element={<Dashboard/>} />
          </Route>
          <Route path="/affiliate/*" element={<AffiliateUserRoute />} >
            <Route path="profile" element={<Profile/>} />
          </Route>

        </Routes>
        
        
    </BrowserRouter>
  )
}

export default Router
