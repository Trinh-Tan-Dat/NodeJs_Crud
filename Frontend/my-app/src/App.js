import './App.css';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './User';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./screens/Login"
import Register from "./screens/Register"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<Register/>}></Route>
          <Route path='/' element={<User/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
