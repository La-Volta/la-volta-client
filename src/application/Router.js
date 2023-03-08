import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import MasterLayout from '../layouts/admin/MasterLayout';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
    
            <Route path="/" element={<Home/>} />
            <Route path="/admin" element={<MasterLayout/>} />
        
        </Routes>
    </BrowserRouter>
  )
}

export default Router
