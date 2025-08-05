import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Correct import
import axios from 'axios';
import './UserLogin.css';

function UserLogin() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    name: "",
    password: ""  // Fixed typo here
  });

  const inputdata = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/employee/login", admin)
      .then((result) => {
        console.log(result.data);

        // navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div>
      <div className="login-user">
        <div className="split right-side">
          <div className="user-box">
            <h1 className='user-box-head'>Welcome back!</h1>
            <p className='user-box-para'>Enter your Credentials to access your account</p>
            {/* Optional: wrap inputs in form */}
            <form>
              <input
                className='user-input'
                type="text"
                placeholder="Name"
                value={admin.name}
                name="name"
                onChange={inputdata}
              />
              <input
                className='user-input'
                type="password"
                placeholder="Password"
                value={admin.password}
                name="password"
                onChange={inputdata}
              />
              <button type="button" className='user-button' onClick={login}>Login</button>
              <a className='forgot' href="#">Forgot password?</a>
            </form>
          </div>
        </div>
        <div className="split left-side" aria-label="Background image"></div>
      </div>
    </div>
  );
}

export default UserLogin;
