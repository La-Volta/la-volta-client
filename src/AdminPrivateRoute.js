import axios from 'axios';
import { useEffect, useState } from 'react';
import {Route, useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
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
            setAuthenticated(true);
      }
    }, []);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
        if(err.response.status === 401)
        {
            swal("Unauthorized",err.response.data.message,"warning");
            navigate('/');
        }
        return Promise.reject(err);
    });

    if(loading)
    {
        return <h1 className="text-danger">Loading...</h1>
    }
    
  return (
    
    <Route {...rest}
        render={ ({props, location}) =>
            Authenticated ?
            ( <Dashboard {...props}/> ) :
            navigate ("/admin/dashboard", {state: {from: location}}) 
        }

    />
  )
}

export default AdminPrivateRoute
