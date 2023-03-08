import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/admin/Dashboard';
import Profile from '../pages/admin/Profile';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
    
            <Route path="/" element={<Home/>} />
            <Route path="/admin/dashboard" element={<Dashboard/>} />
            <Route path="/admin/profile" element={<Profile/>} />
        
        </Routes>
    </BrowserRouter>
  )
}

export default Router
