import React, {useState} from 'react';

import { useNavigate, Link, useLocation} from 'react-router-dom';

import Swal from 'sweetalert2';
import CallUser from '../../services/CallUser';
import Navbar from '../../components/Navbar';
import '../../styles.css';



function Login() {
    const {state} = useLocation();
  console.log(state)

    const navigate = useNavigate();
    
    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({...loginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        CallUser().getCookies().then(response => {
            CallUser().postLogin(loginInput).then(res => {
                if(res.data.status === 200)
                {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    localStorage.setItem('auth_Id', res.data.userId);
                    Swal.fire({
                        title: "La sessió s'ha iniciat correctament",
                        color: 'white',
                        background: '#87EA00',
                        confirmButtonColor: '#8506A9',
                        
                    });
                
                    if(res.data.role === 'admin')
                    {
                        navigate('/admin/Dashboard');
                    }
                    else
                    {

                        navigate('/affiliate/profile', {state: {state}});

                    }
                }
                else if(res.data.status === 401)
                {
                    Swal.fire({
                        icon: 'error',
                        iconColor:'white',
                        title: "Error",
                        color: 'white',
                        background: '#87EA00',
                        showConfirmButton: false,
                    });
                    
                }
                else
                {
                    setLogin({...loginInput, error_list: res.data.validation_errors });
                }
            });
        });

    }

    return (
        <div>
            <Navbar />
            <div className='bg-success'>
            <div className='bg-warning border rounded rounded-3 border-5 border-success'>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card border-0">
                            {/* <div className="card-header text-center">
                                <h4>Login</h4>
                            </div> */}
                            <div className="card-body bg-warning">
                                <form onSubmit={loginSubmit}>
                                    <div className="form-group mb-3">
                                        <label className="text-secondary">Correu electrònic</label>
                                        <input type="email" name="email" onChange={handleInput} value={loginInput.email} className="form-control" />
                                        <span>{loginInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="text-secondary">Contrassenya</label>
                                        <input type="password" name="password" onChange={handleInput} value={loginInput.password} className="form-control" />
                                        <span>{loginInput.error_list.password}</span>
                                    </div>
                                    <div className="form-group mb-3 text-center">
                                        <button type="submit" className="btn btn-danger
                                        ">Accés</button>
                                    </div>
                                </form>

                                <div className="text-center bg-warning">
                                    <h6 className='px-4 pt-5 fs-6 text-success'>Si no teniu compte d'usuari, accediu al registre<span> <Link className="text-success" to="/register" state={state}>
                        aquí.
                      </Link>
                      </span>
                                    </h6>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Login;