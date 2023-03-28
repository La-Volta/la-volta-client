import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/admin/footer/Footer";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import Sidebar from "../../components/admin/Sidebar";

const endpoint = 'http://localhost:8000/api/user/'

const CreateUser = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    
    
    const store = async (e) => {
       e.preventDefault()
       await axios.post(endpoint, {name: name, lastname: lastname, email: email, password: password})
       navigate('/admin/affiliates')
    }

    /*  useEffect( () =>{
        const getUserById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setLastname(response.data.lastname)
            setEmail(response.data.email) 
            setPassword(response.data.password)  
        }
        getUserById()
        //·eslint-disable-next-line-react-hooks/exhaustive-deps
    }, [] )*/

    return (
        <div>
        <NavbarAdmin />
        <div className='d-flex'>
        <Sidebar />
        <div className="mx-auto mt-3 text-success justify-content-center">
            <div>
                <h3 className="text-success text-center">Create User</h3>
            </div>
        <form className="text-success" onSubmit={store}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                    value={name}
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Lastname</label>
                <input
                    value={lastname}
                    onChange={ (e)=> setLastname(e.target.value)}
                    type='text'
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    value={email}
                    onChange={ (e)=> setEmail(e.target.value)}
                    type='text'
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    value={password}
                    onChange={ (e)=> setPassword(e.target.value)}
                    type='password'
                    className="form-control"
                />
            </div>
            <button type='submit' className="btn btn-danger">Store</button>
        </form>
        </div>
        </div>
        
        <Footer />
        </div>
        
    )

}

export default CreateUser