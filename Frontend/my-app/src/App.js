import './App.css';
import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "./screens/Login";
import Register from "./screens/Register"
import HomeScreen from './screens/HomeScreen';
import Home from './screens/Home';
import Borrow from './screens/Borrow';
import MyMap from './screens/Map';
import MyBag from './screens/MyBag';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/> } index = {true}></Route>
          <Route path="/HomeScreen" element={<HomeScreen />} index={true} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/Home" element={<Home />} />
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/map' element={<MyMap/>}></Route>
          <Route path='/mybag' element={<MyBag/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
