import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/admin/footer/Footer';
import { useLocation } from 'react-router-dom';



function Profile() {
  const {state} = useLocation();
 
  return (
    <div className="sb-nav-fixed">
      
      <Navbar />
    <main>
       <p className='text-success'>profile</p>
       <div className="text-success">{state.donationForm.amount}{state.donationForm.donationType}</div>
    </main>
      <Footer />
    </div>
  )
}

export default Profile;
