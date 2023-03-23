import React from 'react';
import NavbarAdmin from '../../components/admin/NavbarAdmin';
import Sidebar from '../../components/admin/Sidebar';
import Footer from '../../components/admin/footer/Footer';



function Dashboard() {
  return (
    <div>
        <div className="sb-nav-fixed">
        <NavbarAdmin />
        <div>
        <div className='d-flex'>
            <Sidebar />
            <div className='text-success text-center'>
                <h1>Hola Admin!</h1>
                <h3>Aquest és el teu perfil admin de La Volta</h3>
            </div>
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
