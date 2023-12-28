import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function CreateUser() {
  const [Name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [Phone, setPhone] = useState('');
  const [ID, setID] = useState('');
  const navigate = useNavigate()
  const submitHandler = (e) => {
      e.preventDefault();
      const data = { Name, mail, Phone, ID };
      fetch('http://localhost:3033/add', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(()=>{
          navigate('/')})
        .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={submitHandler}>
          <h2>Create User</h2>
          <div className='form-group'>
            <label>ID</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter ID'
              value={ID}
              onChange={(e) => setID(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Name'
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            <label>Address</label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Address'
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button className='btn btn-primary'>Create</button>

          
        </form>
      </div>
    </div>
  );
}

export default CreateUser;