import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logoheader.png";
import Swal from "sweetalert2";
import "../styles.css";

import CallUser from "../services/CallUser";

function Navbar() {
  const navigate = useNavigate();
  const service = CallUser();
  const logoutSubmit = (e) => {
    e.preventDefault();

    service.logout().then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");

        Swal.fire({
          title: "S'ha desconnectat",
          color: "white",
          background: "#87EA00",
          confirmButtonColor: "#8506A9",
        });
        navigate("/");
      } else {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        console.log(res);
      }
    });
  };

  var AuthButtons = "";
  if (!localStorage.getItem("auth_token")) {
    AuthButtons = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Accés
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Registre
          </Link>
        </li>
      </ul>
    );
  } else {
    AuthButtons = (
      <li className="nav-item">
        <button
          type="button"
          onClick={logoutSubmit}
          className="nav-link btn btn-sm text-white"
        >
          Tanca sessió
        </button>
      </li>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow sticky-top  border-bottom  border-success">
      <div className="container">
        <div className="logo-home">
          <Link className="navbar-brand" to="#">
            <img
              src={logo}
              alt="Logo"
              width="158"
              height="60"
              class="d-inline-block align-text-top"
            />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Inici
              </Link>
            </li>
            {AuthButtons}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
