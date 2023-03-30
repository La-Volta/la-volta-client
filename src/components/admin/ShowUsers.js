import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../styles.css';


const endpoint = 'http://localhost:8000/api'

const ShowUsers = () => {

    const [ users, setUsers ] = useState( [] )
    useEffect ( ()=> {
        getAllUsers()
    }, [])



    const getAllUsers = async () => {
        const response = await axios.get(`${endpoint}/users`)
        setUsers(response.data)
    }

    const deleteUser = async (id) => {
       await axios.delete(`${endpoint}/user/${id}`)
       getAllUsers()
    }
  return (
    <div className='d-grid gap-2 row d-flex justify-content-center mx-auto'>
        <Link to="/admin/create" className='text-css fs-5 btn btn-danger mt-2 mb-1 text-white'>Crear nou afiliat</Link>
        <table className='table table-striped text-css fs-6'>
            <thead className='bg-black text-success '>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Cognom</th>
                    <th>Correu Electrònic</th>
                    <th>Acció</th>
                </tr>
            </thead>
            <tbody>
                { users.map( (user) => (
                <tr className='text-white' key={user.id}>
                    <td className='text-white'> {user.id} </td>
                    <td className='text-white'> {user.name} </td>
                    <td className='text-white'> {user.lastname} </td>
                    <td className='text-white'> {user.email} </td>
                    <td>
                        <Link to={`/admin/edit/${user.id}`} className='btn btn-danger mx-2 mb-1 text-css fs-6'>Editar</Link>
                        <button onClick={ ()=>deleteUser(user.id) } className='text-css fs-6 btn btn-danger mb-1'>Suprimir</button>
                        <Link to={`/admin/payments/${user.id}`} className='text-css fs-6 btn btn-danger mx-2 mb-1'>Mostrar els Pagaments
                        </Link>
                    </td>
                </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default ShowUsers
