import axios from 'axios';
import { useEffect, useState } from 'react';
import {Route, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import Dashboard from './pages/admin/Dashboard';

function AdminPrivateRoute({...rest}) {

    const navigate = useNavigate();
    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(() => {

        axios.get(`/api/checkingAuthenticated`).then( rest => {
            if(rest.status === 200)
            {
                setAuthenticated(true);
            }
            setloading(false);
        });
        return () => {
            setAuthenticated(false);
      }
    }, []);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(error) {
        if(error.response.status === 401)
        {
            Swal.fire({
                icon: 'error',
                iconColor:'white',
                title: "Error",
                color: 'white',
                background: '#87EA00',
                showConfirmButton: false,
            });
            navigate('/');
        }
        return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
        return response;
        }, function (error) {
            if(error.response.status === 403) // Access Denied
            {
                Swal.fire({
                    icon: 'error',
                    iconColor:'white',
                    title: "Error",
                    color: 'white',
                    background: '#87EA00',
                    showConfirmButton: false,
                });
                navigate('/');
            }
            else if(error.response.status === 404) // Page Not Found
            {
                Swal.fire({
                    icon: 'error',
                    iconColor:'white',
                    title: "Error",
                    color: 'white',
                    background: '#87EA00',
                    showConfirmButton: false,
                });
                navigate('/');
            }
            return Promise.reject(error);
        }
    );

    if(loading)
    {
        return <h1 className="text-danger">Loading...</h1>
    }
    
  return (
    
    <Route {...rest}
        render={ ({props, location}) =>
            Authenticated ?
            ( <Dashboard {...props}/> ) :
            navigate ("/login", {state: {from: location}}) 
        }

    />
  )
}

export default AdminPrivateRoute
