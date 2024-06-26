import React from 'react';
import { useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react'
function HomeScreen() {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/');
  }
  const [userInfor, setUserInfor] = useState([])
  const userName = localStorage.getItem('mail');
  const handleMap = ()=>{
    navigate('/map');
  }
  const handleBag = ()=>{
    navigate('/mybag');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Library
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/Home">
              Home <span className="sr-only"></span>
            </a>
            <a className="nav-item nav-link" href="#" onClick={handleBag}>
              MyBag
            </a>
            <a className="nav-item nav-link" href="#">
              Login
            </a>
            <a className="nav-item nav-link ml-auto" href="#"
              onClick={handleLogout}
            >
              Log out
            </a>
            <a className="nav-item nav-link ml-auto" href="#"
              onClick={handleMap}
            >
              Map
            </a>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeScreen;