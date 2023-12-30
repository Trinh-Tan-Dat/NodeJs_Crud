import './App.css';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./screens/Login";
import Register from "./screens/Register"
import HomeScreen from './screens/HomeScreen';
import Home from './screens/Home';
import Borrow from './screens/Borrow';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/HomeScreen" element={<HomeScreen />} index={true} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/Home" element={<Home />} />
          <Route path='/' element={<Login/>}></Route>
          <Route path='/' element={<Register/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;