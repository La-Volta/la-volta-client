import React from 'react'
import { useState, useEffect } from 'react';
import CallUser from '../../services/CallUser';

function ShowPayments() {

    const [payment, setPayments] = useState([]);
    const [order, setOrders] = useState([]);

    async function payments(){
      await CallUser().payments()
      .then(res => {
        setPayments(res.data)
      })
      }
      useEffect(() => {payments()},[])

      async function orders(){
        await CallUser().allOrders()
        .then(res => {
          setOrders(res.data)
        })
        }
        useEffect(() => {orders()},[])
    
    //  async function deleteActivity(id){
    //   await CallAxios().trash(id)
    //   const fiteredActivities=activity.filter(task =>task.id !== id)
    //   setActivities(fiteredActivities)
    //   }
    //   useEffect(() => {callGet()},[])



  return (
    <div>
        <div className='d-grid gap-2 row d-flex justify-content-center mx-auto'>
        <table className='table table-striped'>
            <thead className='bg-black text-white'>
                <tr>
                    <th>Id del pagament</th>
                    <th>Id del soci</th>
                    <th>Import pagat</th>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Acció</th>
                </tr>
            </thead>
            <tbody>
                { payment.map( (order) => (
                <tr className='text-success' key={order.id}>
                    <td className='text-success'> {order.payment_id} </td>
                    <td className='text-success'> {order.user_id} </td>
                    <td className='text-success'> {order.total_price} € </td>
                    <td className='text-success'> {order.created_at.substring(0, 10)} </td>
                    <td className='text-success'> {order.created_at.substring(11, 19)} </td>
                    <td>

                        {/* <button onClick={ ()=>deleteOrder(order.id) } className='btn btn-danger mb-1'>Suprimir</button>
                        <Link to={`/admin/payments/${user.id}`} className='btn btn-danger mx-2 mb-1'>Mostrar els Pagaments
</Link> */}
                    </td>
                </tr>
                )) }
            </tbody>
        </table>


        <table className='table table-striped'>
            <thead className='bg-black text-white'>
                <tr>
                    <th>Id del soci</th>
                    <th>Estat</th>
                    <th>Import</th>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Acció</th>
                </tr>
            </thead>
            <tbody>
                { order.map( (order) => (
                <tr className='text-success' key={order.id}>
                   
                    <td className='text-success'> {order.user_id} </td>
                    <td className='text-success'> {order.status} </td>
                    <td className='text-success'> {order.total_price} € </td>
                    <td className='text-success'> {order.created_at.substring(0, 10)} </td>
                    <td className='text-success'> {order.created_at.substring(11, 19)} </td>
                    <td>

                        {/* <button onClick={ ()=>deleteOrder(order.id) } className='btn btn-danger mb-1'>Suprimir</button>
                        <Link to={`/admin/payments/${user.id}`} className='btn btn-danger mx-2 mb-1'>Mostrar els Pagaments
</Link> */}
                    </td>
                </tr>
                )) }
            </tbody>
        </table>
        
    </div>
    </div>
  )
}

export default ShowPayments