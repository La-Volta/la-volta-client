import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/admin/footer/Footer';
import { useLocation } from 'react-router-dom';



function Profile() {
  const {state} = useLocation();
  console.log(state)

  let divDonation = ''
  
  if(state === null) {
    divDonation = (<p className='text-success d-flex justify-content-center'> Vols fer una nova donació ?</p>) 
   } 
  else if( state.donationForm ) {
    divDonation = (<p className='text-success d-flex justify-content-center'>Tens un import <span>{state.donationForm.donationType}</span> pendent
de pagament de <span>{state.donationForm.amount}€.</span></p>)
  } else {
        divDonation = (<p className='text-success d-flex justify-content-center'>Tens un import <span>{state.donationType}</span> pendent
    de pagament de <span>{state.amount}€.</span></p>) 
    }
 
  return (
    <div className="sb-nav-fixed">
      
      <Navbar />
    <main>
      <div>
        {divDonation}
       
      </div>
       <div className="text-success"></div>
    </main>
      <Footer />
    </div>
  )
}

export default Profile;
