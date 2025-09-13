import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLogin.css';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

function AdminLogin() {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    username: "",
    password: ""
  });

  const inputdata = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const adminsubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/userDetails/admin", admin)
      .then((result) => {
        console.log("Admin Login Response:", result.data);

        const { token, username, email, role } = result.data;

        if (!role || !role.includes("ADMIN")) {
          alert("You are not authorized to login from this page!");
          return;
        }

        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("role", role);

        navigate("/adminDashboard");
      })
      .catch((error) => {
        console.error(error);
        alert(error?.response?.data?.message || "Login failed");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="login-admin">
        <div className="admin-login-div col-12 col-md-6">
          <div className="admin-box">
            <h3 className='admin-head'>Welcome back! Admin</h3>
            <p>Enter your Credentials to access your account</p>
            <form className='admin-form' onSubmit={adminsubmit}>
              <input
                className='admin-input'
                type="text"
                placeholder="Enter Username "
                value={admin.username}
                name="username"
                onChange={inputdata}
                required
              />
              <input
                className='admin-input'
                type="password"
                placeholder="Enter Admin Password"
                value={admin.password}
                name="password"
                onChange={inputdata}
                required
              />
              <button type="submit" className='admin-button'>Login</button>
              <a className='forgot' href="#">Forgot password?</a>
            </form>
          </div>
        </div>
        <div className="admin-image col-12 col-md-6" aria-label="Background image"></div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminLogin;
