import React from "react";
import { useState } from "react";
import CallUser from "../../services/CallUser";
import Swal from "sweetalert2";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/admin/footer/Footer";

function Register() {
  const location = useLocation();
  const donationForm = location.state

  const navigate = useNavigate();

  const [registerInput, setRegister] = useState({
    name: "",
    firstname: "",
    email: "",
    password: "",
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    CallUser()
      .getCookies()
      .then((response) => {
        CallUser()
          .postRegister(registerInput)
          .then((res) => {
            if (res.data.status === 200) {
              localStorage.setItem("auth_token", res.data.token);
              localStorage.setItem("auth_name", res.data.username);
              Swal.fire("S'ha registrat correctament.");
              navigate("/affiliate/profile", {state: {donationForm : donationForm}});
            } else {
              setRegister({
                ...registerInput,
                error_list: res.data.validation_errors,
              });
            }
          });
      });
  };

  return (
    <div>
      <Navbar />
      <div className="text-success">{donationForm.amount}</div>
      <div className="bg-success ">
        <div className=" bg-warning border rounded rounded-3 border-5 border-success">
          <div className="text-center">
            <h6 className="pt-5 fs-3 fw-bold text-success">
              Fes-te amic de La Volta
            </h6>
            <h6 className="px-4 pt-5 fs-6 text-success">
              Per a fer efectiva la donació és necessari registrar-se i seguir
              els passos indicats
            </h6>
          </div>

          <div className="container py-5 ">
            <div className="row justify-content-center ">
              <div className="col-md-6">
                <div className="card border-0">
                  <div className="card-body bg-warning text-secondary">
                    <form onSubmit={registerSubmit}>
                      <div className="form-group mb-3">
                        <label className="text-secondary" for="name">
                          Nom
                        </label>
                        <input
                          type="text"
                          name="name"
                          onChange={handleInput}
                          value={registerInput.name}
                          className="form-control"
                        />
                        <span>{registerInput.error_list.name}</span>
                      </div>

                      <div className="form-group mb-3">
                        <label className="text-secondary" for="lastname">
                          Cognoms
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          onChange={handleInput}
                          value={registerInput.lastname}
                          className="form-control"
                        />
                        <span>{registerInput.error_list.lastname}</span>
                      </div>

                      <div className="form-group mb-3">
                        <label className="text-secondary" for="email">
                          Correu electrònic
                        </label>
                        <input
                          type="text"
                          name="email"
                          onChange={handleInput}
                          value={registerInput.email}
                          className="form-control"
                        />
                        <span>{registerInput.error_list.email}</span>
                      </div>

                      <div className="form-group mb-3">
                        <label className="text-secondary" for="password">
                          Contraseyna
                        </label>
                        <input
                          type="password"
                          name="password"
                          onChange={handleInput}
                          value={registerInput.password}
                          className="form-control"
                        />
                        <span className="">
                          {registerInput.error_list.password}
                        </span>
                      </div>
                      <div className="form-group mb-3 text-center">
                        <button type="submit" className="btn btn-danger ">
                          Registra't
                        </button>
                      </div>
                    </form>
                  </div>

                  <div className="text-center bg-warning">
                    <h6 className="px-4 pt-5 fs-6 text-success">
                      Si ja teniu un compte d'usuari, accediu al vostre perfil
                      <Link className="nav-link" to="/login">
                        aquí.
                      </Link>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
