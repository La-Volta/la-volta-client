import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const endpoint = 'http://localhost:8000/api'

const ShowAffiliate = () => {

    const [ user, setUser ] = useState( [] )
    useEffect ( ()=> {
        getFindUser()
    }, [])
    console.log(user)

    const getFindUser = async (id) => {
        const response = await axios.get(`${endpoint}/user/${id}`)
        .then(response => {
        console.log(response.data.userId)
        })
        setUser(response.data)
    }

    const deleteUser = async (id) => {
       await axios.delete(`${endpoint}/user/${id}`)
       getFindUser()
    }
  return (
    <div className='d-grid gap-2 row d-flex justify-content-center mx-auto'>
        <Link to="/admin/create" className='btn btn-danger btn-sb mt-2 mb-1  text-white'>Create new affiliate</Link>
        <table className='table table-striped'>
            <thead className='bg-black text-white'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                { user => (
                <tr className='text-success' key={user.id}>
                    <td className='text-success'> {user.id} </td>
                    <td className='text-success'> {user.name} </td>
                    <td className='text-success'> {user.lastname} </td>
                    <td className='text-success'> {user.email} </td>
                    <td>
                        <Link to={`/admin/edit/${user.id}`} className='btn btn-danger mx-2 mb-1'>Edit</Link>
                        <button onClick={ ()=>deleteUser(user.id) } className='btn btn-danger mb-1'>Delete</button>
                        <Link to={`/admin/payments/${user.id}`} className='btn btn-danger mx-2 mb-1'>Show Payments</Link>
                    </td>
                </tr>
                ) }
            </tbody>
        </table>
    </div>
  )
}

export default ShowAffiliate
