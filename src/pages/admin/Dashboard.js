import React from 'react';
import Navbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import Footer from '../../components/admin/footer/Footer';
import '../../styles/styles.css';
import '../../assets/admin/js/scripts';

function Dashboard() {
  return (
    <div className="sb-nav-fixed">
            <Navbar />
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
