import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
const Sidebar = () => {
  return (
    <nav className="d-flex">
        <div id="sidebar-container" className="bg-black">
            <ul className='text-center list-unstyled mt-4'>
                <li>
                    <Link className='text-success  text-decoration-none'  to="/admin/dashboard">Inici</Link>
                </li>
                <li>
                    <Link className='text-success text-decoration-none' to="/admin/affiliates">Affiliates</Link>
                </li>
                <li>
                    <Link className='text-success  text-decoration-none' to="/admin/payments">Payments</Link>
                </li>
                <li>
                <Link to="/admin/create" className='btn btn-danger btn-sb mt-2 mb-1  text-white'>Create</Link>
                </li>
            </ul>
        </div>
                    {/*  <div className="sb-sidenav-menu text-danger">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <Link className="nav-link" to="/admin/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt text-danger"></i> Dashboard</div>
                               
                            </Link>
                            <Link className="nav-link" to="/admin/profile">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Profile
                            </Link>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Layouts
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className="nav-link" to="layout-static.html">Static Navigation</Link>
                                    <Link className="nav-link" to="layout-sidenav-light.html">Light Sidenav</Link>
                                </nav>
                            </div>
                            <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </Link>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Authentication
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <Link className="nav-link" to="login.html">Login</Link>
                                            <Link className="nav-link" to="register.html">Register</Link>
                                            <Link className="nav-link" to="password.html">Forgot Password</Link>
                                        </nav>
                                    </div>
                                    <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Error
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </Link>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <Link className="nav-link" to="401.html">401 Page</Link>
                                            <Link className="nav-link" to="404.html">404 Page</Link>
                                            <Link className="nav-link" to="500.html">500 Page</Link>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">Addons</div>
                            <Link className="nav-link" to="charts.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Charts
                            </Link>
                            <Link className="nav-link" to="tables.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Tables
                            </Link>
                        </div>
                    </div>*/}
                   
                </nav>
  );
}

export default Sidebar;
