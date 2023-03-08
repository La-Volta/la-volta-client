import React from 'react';

import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import Navbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import Footer from '../../components/admin/Footer';

const MasterLayout = () => {

    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">

                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>
               
                       

                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default MasterLayout;