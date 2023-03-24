import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logoheader.png';
import Swal from 'sweetalert2';
//import '../styles.css';

import CallUser from '../../services/CallUser';


function NavbarAdmin() {

    const navigate = useNavigate();
    const service=CallUser();
    const logoutSubmit = (e) => {
        e.preventDefault();
        
        service.logout().then(res => {
            if(res.data.status === 200)
            {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                
                Swal.fire({
                title: "S'ha desconnectat",
                color: 'white',
                background: '#87EA00',
                confirmButtonColor: '#8506A9',
            });
                navigate('/');
            }

            else{
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                console.log(res);
            }
        });

    }
    
    var AuthButtons = '';
    if(!localStorage.getItem('auth_token'))
    {
        AuthButtons = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </ul>
        );
    }
    else
    {
        AuthButtons = (
            <li className="nav-item">
                <button type="button" onClick={logoutSubmit} className="nav-link btn btn-danger btn-sm text-white">Logout</button>
            </li>
        );
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow sticky-top  border-bottom  border-success">
            <div className="container">
                <div className='logo-home'>
                    <Link className="navbar-brand" to="#">
                    <img src={logo} alt="Logo" width="158" height="60" class="d-inline-block align-text-top" />
                    </Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                {AuthButtons}   
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarAdmin;


{/*const NavbarAdmin = () => {

  return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-black">
        <Link className="navbar-brand ps-3" to="/admin">
            <img src={logo} alt="Logo" width="158" height="60" class="d-inline-block align-text-top" />
        </Link>

           {/*   <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" to="#!">hola<i className="fas fa-bars"></i>hvvvvv</button>
           
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
                <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                <button className="btn btn-danger" id="btnNavbarSearch" type="button">Buscar<i className="fas fa-search"></i></button>
            </div>
        </form>

        
         
          <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
            <li className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown"  role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw">Menu</i>
                </Link>
            <ul className="text-white dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#!">Settings</Link></li>
                <li><Link className="dropdown-item" to="#!">Activity Log</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#!">Logout</Link></li>
            </ul>
                </li>
            </ul>
        </nav>
    
  )
}

export default NavbarAdmin*/}