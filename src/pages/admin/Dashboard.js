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
          <div className='fixed-float-right'>
            <Sidebar />
          </div>
          <div className='mx-auto mt-3 text-success text-center d-flex justify-content-center'>
            <div>
              <h1>Hola Admin!</h1>
              <h3>Aquest és el teu perfil Admin de La Volta</h3>
              <h4 className='mt-5'>Com admin pots crear, veure, editar, suprimir usuaris. A més a més, pots veure tots els pagaments.
</h4>
            </div>
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
