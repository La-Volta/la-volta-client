import React from 'react';
import Navbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import Footer from '../../components/admin/footer/Footer';
import '../../styles/styles.css';
import '../../assets/admin/js/scripts';

function Profile() {
  return (
    <div className="sb-nav-fixed">
    <Navbar />
    <div id="layoutSidenav">

        <div id="layoutSidenav_nav">
            <Sidebar />
        </div>

        <div id="layoutSidenav_content">
            <main>
       
               <p>profile</p>

            </main>
            <Footer />
        </div>
    </div>
</div>
  )
}

export default Profile;
