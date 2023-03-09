import React from 'react';
import NavbarAdmin from '../../components/admin/NavbarAdmin';
import Sidebar from '../../components/admin/Sidebar';
import Footer from '../../components/admin/Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';

function Dashboard() {
  return (
    <div className="sb-nav-fixed">
            <NavbarAdmin />
            <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>
               
                       <p>dashboard</p>

                    </main>
                    <Footer />
                </div>
            </div>
        </div>
  )
}

export default Dashboard;
