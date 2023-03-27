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
    <div className='d-grid gap-2 row d-flex justify-content-center'>
                
                <div className='text-success text-center'>
                    <h1>Hola Admin!</h1>
                    <h3>Aquest és el teu perfil admin de La Volta</h3>
                </div>
                <table className='table table-striped'>
                    <thead className='bg-black text-white'>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Pyments</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        { users.map( (user) => (
                            <tr className='text-success' key={user.id}>
                                 <td className='text-success'> {user.id} </td>
                                <td className='text-success'> {user.name} </td>
                                <td className='text-success'> {user.lastname} </td>
                                <td className='text-success'> {user.email} </td>
                                <td className='text-success'> {user.pyments} </td>
                                <td>
                                    <Link to="/register" className='btn btn-danger btn-sb mt-2 mb-1  text-white'>Create</Link>
                                    <Link to={`/edit/${user.id}`} className='btn btn-danger mx-2 mb-1'>Edit</Link>
                                    <button onClick={ ()=>deleteUser(user.id) } className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
  )
}

export default ShowUsers
