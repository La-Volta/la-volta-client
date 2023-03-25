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
    <div className='d-grid gap-2'>
                
                <div className='text-success text-center'>
                    <h1>Hola Admin!</h1>
                    <h3>Aquest és el teu perfil admin de La Volta</h3>
                </div>
                <table className='table table-striped'>
                    <thead className='bg-primary text-white'>
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
                                    <Link to="/register" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
                                    <Link to={`/edit/${user.id}`} className='btn btn-warning'>Edit</Link>
                                    <button onClick={ ()=>deleteUser(user.id) } className='byn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
  )
}

export default ShowUsers
