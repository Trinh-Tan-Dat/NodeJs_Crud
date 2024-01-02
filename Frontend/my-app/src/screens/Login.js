import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    //send mail and username to another screen
    localStorage.setItem('mail', mail);
    e.preventDefault();
    const data = { mail, password };
    fetch('http://localhost:3033/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => res.json())
      .then((data) => console.log(data))
      .then(()=>{navigate('/home')})
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex vh-100 bg-dark  justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              className='form-control'
              placeholder='Enter Email'
              value={mail}
              onChange={(e) => setMail(e.target.value)}
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
            >Login</button>
        </form>
      </div>
    </div>

    
  )
}

export default Login