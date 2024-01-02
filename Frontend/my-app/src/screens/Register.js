import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Register() {
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const data = { Name: name, UserName: userName, Password: password };
    fetch('http://localhost:3033/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => { navigate('/login') })
      .catch((err) => console.log(err));
  };
  return ( 
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleRegister}>
          <h2>Register</h2>
          <div className='form-group'>
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              className='form-control'
              placeholder='Enter Email'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className='btn btn-dark'
            >Register</button>
        </form>
      </div>
    </div>
  )
}

export default Register