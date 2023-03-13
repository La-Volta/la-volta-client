import React from 'react'
import { useState } from 'react';
import CallUser from '../../services/CallUser';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';





function Register() {

  const navigate = useNavigate();

  const [registerInput, setRegister] = useState({
    name: '',
    firstname:'',
    email: '',
    password: '',
    error_list: [],
});

const handleInput = (e) => {
  e.persist();
  setRegister({...registerInput, [e.target.name]: e.target.value });
}

const registerSubmit = (e) => {
  e.preventDefault();

  CallUser().getCookies().then(response => {
    CallUser().postRegister(registerInput).then(res => {
      if(res.data.status === 200)
        {
            localStorage.setItem('auth_token', res.data.token);
            localStorage.setItem('auth_name', res.data.username);
            Swal.fire("S'ha registrat correctament.");
            navigate("/");
        }
        else
        {
            setRegister({...registerInput, error_list: res.data.validation_errors});
        }
    })
  })
}

return (
                
    <div>
      
      <Navbar />
      <div className="text-center">
        <h6 class='pt-5 fs-3 fw-bold'>Fes-te amic de La Volta</h6>
        <h6 class='pt-5 fs-6'>Per a fer efectiva la donació és necessari registrar-se i seguir els passos indicats</h6>
      </div>
      

      <div className="container py-5">
        <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                              
                                <h4 class="text-center">Registre</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={registerSubmit}>
                                    <div className="form-group mb-3">
                                        <label for='name'>Nom</label>
                                        <input type="text" name="name" onChange={handleInput} value={registerInput.name} className="form-control"  />
                                        <span>{registerInput.error_list.name}</span>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label for='lastname'>Cognoms</label>
                                        <input type="text" name="lastname" onChange={handleInput} value={registerInput.lastname} className="form-control"  />
                                        <span>{registerInput.error_list.lastname}</span>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Correu electrònic</label>
                                        <input type="text" name="email" onChange={handleInput} value={registerInput.email} className="form-control"  />
                                        <span>{registerInput.error_list.email}</span>
                                    </div>

                                    <div className="form-group mb-3">
                                        <label>Contraseyna</label>
                                        <input type="text" name="password" onChange={handleInput} value={registerInput.password} className="form-control"  />
                                        <span>{registerInput.error_list.password}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Register;