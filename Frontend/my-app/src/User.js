import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
function User() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3033/users')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    })
    const HandleDelete = (id) =>{
        fetch(`http://localhost:3033/delete/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <Link to={'/create'} ><button className='btn btn-success'>Create</button></Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{item.ID}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.mail}</td>
                                    <td>{item.Phone}</td>
                                    <td><Link to={`/update/${item.ID}`}><button className='btn btn-primary'
                                        >Update</button></Link></td>
                                    <td><button className='btn btn-danger' 
                                        onClick={()=>HandleDelete(item.ID)}
                                        >Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default User