import axios from 'axios';
import { useEffect, useState } from 'react';
import {Route, Navigate, useNavigate} from 'react-router-dom';
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
            setAuthenticated(false);
      }
    }, []);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(error) {
        if(error.response.status === 401)
        {
            swal("Unauthorized",error.response.data.message,"warning");
            navigate('/');
        }
        return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
        return response;
        }, function (error) {
            if(error.response.status === 403) // Access Denied
            {
                swal("Forbedden",error.response.data.message,"warning");
                navigate('/Page403');
            }
            else if(error.response.status === 404) // Page Not Found
            {
                swal("404 Error","Url/Page Not Found","warning");
                navigate('/Page404');
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
            <Navigate to="/login" replace state={{ from: location }} />
            //navigate ("/admin/dashboard", {state: {from: location}}) 
        }

    />
  )
}

export default AdminPrivateRoute
