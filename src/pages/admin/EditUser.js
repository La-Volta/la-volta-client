import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/admin/footer/Footer";
import NavbarAdmin from "../../components/admin/NavbarAdmin";
import Sidebar from "../../components/admin/Sidebar";

const endpoint = 'http://localhost:8000/api/user/'

const EditUser = () => {
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('auth_token')
    const navigate = useNavigate()
    const {id} = useParams()
    
    const update = async (e) => {
       e.preventDefault()
       await axios.put(`${endpoint}${id}`, {
            name: name,
            lastname: lastname,
            email: email,
            password: password,
       })
       navigate('/admin/affiliates')
    }

    useEffect( () =>{
        const getUserById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setLastname(response.data.lastname)
            setEmail(response.data.email) 
            setPassword(response.data.password)  
        }
        getUserById()
        //·eslint-disable-next-line-react-hooks/exhaustive-deps
    }, [] )

    return (
        <div>
        <NavbarAdmin />
        <div className='d-flex'>
        <Sidebar />
        <div className="mx-auto mt-3 text-success justify-content-center">
            <div>
                <h3 className="text-success my-4 text-center">Edita el teu perfil</h3>
            </div>
        <form className="text-success" onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Nom</label>
                <input
                    value={name}
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Cognom</label>
                <input
                    value={lastname}
                    onChange={ (e)=> setLastname(e.target.value)}
                    type='text'
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Correu Electrònic</label>
                <input
                    value={email}
                    onChange={ (e)=> setEmail(e.target.value)}
                    type='text'
                    className="form-control"
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Contrasenya</label>
                <input
                    value={password}
                    onChange={ (e)=> setPassword(e.target.value)}
                    type='password'
                    className="form-control"
                />
            </div>
            <button type='submit' className="btn btn-danger">Desa</button>
        </form>
        </div>
        </div>
        <Footer />
        </div>
        
    )

}

export default EditUser