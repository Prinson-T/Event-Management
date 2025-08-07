import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './AdminLogin.css';
import Navbar from '../common/Navbar'
import Footer from '../common/Footer';

function AdminLogin() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    email: "",
    password: ""  
  });

  const inputdata = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const adminsubmit = (e) => {
    axios.post("http://localhost:8080/employee/login", admin)
      .then((result) => {
        console.log(result.data);

      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar/>
      <div className="login-admin">
        <div className="admin-login-div col-12 col-md-6">
          <div className="admin-box" >
            <h3 className='admin-head'>Welcome back! Admin</h3>
            <p>Enter your Credentials to access your account</p>
            <form className='admin-form'>
              <input
              className='admin-input'
                type="text"
                placeholder="Enter Admin Email Id"
                value={admin.email}
                name="email"
                onChange={inputdata}
              />
              <input
              className='admin-input'
                type="password"
                placeholder="Enter Admin Password"
                value={admin.password}
                name="password"
                onChange={inputdata}
              />
              <button type="button" className='admin-button' onClick={adminsubmit}>Login</button>
              <a className='forgot' href="#">Forgot password?</a>
            </form>
          </div>
        </div>
        <div className="admin-image col-12 col-md-6" aria-label="Background image"></div>
      </div>
      <Footer/>
    </div>
  );
}

export default AdminLogin;
