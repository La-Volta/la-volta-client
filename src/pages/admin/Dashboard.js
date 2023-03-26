import React from 'react';
import NavbarAdmin from '../../components/admin/NavbarAdmin';
import Sidebar from '../../components/admin/Sidebar';
import Footer from '../../components/admin/footer/Footer';
import ShowUsers from '../../components/admin/ShowUsers';



function Dashboard() {
  return (
    <div>
        <div className="sb-nav-fixed">
        <NavbarAdmin />
        <div>
        <div className='d-flex'>
            <Sidebar />
            <ShowUsers />
        </div>
            <div className='content'>

            </div>
        </div>
        </div>
        <Footer />
    </div>
    
         
  )
}

export default Dashboard;
