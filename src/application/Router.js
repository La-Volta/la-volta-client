import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/admin/Dashboard';
import Profile from '../pages/admin/Profile';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';


const Router = () => {


  return (
    <BrowserRouter>
        <Routes>
    
            <Route path="/" element={<Home/>} />
            <Route path="/admin/dashboard" element={<Dashboard/>} />
            <Route path="/admin/profile" element={<Profile/>} />
        
            <Route path="/login" element={<Login/>}/>

            <Route path="/register" element={<Register/>}/>
             
        
        </Routes>
    </BrowserRouter>
  )
}

export default Router
