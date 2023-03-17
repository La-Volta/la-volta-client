import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/admin/footer/Footer';



function Profile() {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
    <main>
       <p className='text-success'>profile</p>
    </main>
      <Footer />
    </div>
  )
}

export default Profile;
