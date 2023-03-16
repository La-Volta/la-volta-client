import React from 'react';
import NavbarAdmin from '../../components/admin/NavbarAdmin';
import Sidebar from '../../components/admin/Sidebar';
import Footer from '../../components/admin/footer/Footer';



function Profile() {
  return (
    <div className="sb-nav-fixed">
    <NavbarAdmin />
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
