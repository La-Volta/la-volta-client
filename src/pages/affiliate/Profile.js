import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/admin/footer/Footer';
import { useLocation } from 'react-router-dom';



function Profile() {
  const {state} = useLocation();

  if({state} === null) {
    <p> Vols fer una nova donació ?</p>
  }else{
<p className='text-success'>Tens un import <span>{state.donationForm.donationType}</span> pendent
de pagament de <span>{state.donationForm.amount}€.</span></p>
  }
 
  return (
    <div className="sb-nav-fixed">
      
      <Navbar />
    <main>
      <div>
      
       
      </div>
       <div className="text-success"></div>
    </main>
      <Footer />
    </div>
  )
}

export default Profile;
