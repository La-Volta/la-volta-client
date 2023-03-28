import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
        <Link to="/admin/create" className='btn btn-danger btn-sb mt-2 mb-1  text-white'>Crear nou afiliat</Link>
        <table className='table table-striped'>
            <thead className='bg-black text-white'>
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
                <tr className='text-success' key={user.id}>
                    <td className='text-success'> {user.id} </td>
                    <td className='text-success'> {user.name} </td>
                    <td className='text-success'> {user.lastname} </td>
                    <td className='text-success'> {user.email} </td>
                    <td>
                        <Link to={`/admin/edit/${user.id}`} className='btn btn-danger mx-2 mb-1'>Editar</Link>
                        <button onClick={ ()=>deleteUser(user.id) } className='btn btn-danger mb-1'>Suprimir</button>
                        <Link to={`/admin/payments/${user.id}`} className='btn btn-danger mx-2 mb-1'>Mostrar els Pagaments
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
