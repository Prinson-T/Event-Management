import React, { useState } from 'react';
import './HostLogin.css';
import hostimg from '../../assets/welcome.jpg';
import Navbar from '../common/Navbar';
import { Link,useNavigate } from 'react-router-dom';
import Footer from '../common/Footer';
import axios from 'axios';

function HostLogin() {
  const navigate = useNavigate();

  const [hoster, setHoster] = useState({
    username: "",
    password: ""
  });

  const inputdata = (e) => {
    setHoster({ ...hoster, [e.target.name]: e.target.value });
  };

  const hostsubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/userDetails/login", hoster)
      .then((result) => {
        console.log("Host Login response:", result.data);

        const { token, username, email, role,id,company } = result.data;

        // ✅ role check
        if (!role.includes("HOST")) {
          alert("You are not authorized to login from this page!");
          return;
        }

        // ✅ Save login data
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("role", role);
        localStorage.setItem("email", email);
        localStorage.setItem("userId", id)
        localStorage.setItem("company", company)



        // ✅ redirect
        navigate("/hostDashboard");
      })
      .catch((error) => {
        console.error(error);
        alert(error?.response?.data?.message || "Login failed");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container-fluid gx-0">
        <div className="row gx-0">
          <div className="col-12 col-md-6 ">
            <img className="img-host" src={hostimg} alt="welcome" />
          </div>
          <div className="col-12 col-md-6 host-login-div">
            <h4 className='host-login-h2'>Login Your Host Account</h4>
            <form className='host-login-form' onSubmit={hostsubmit}>
              <input
                type="text"
                placeholder="Enter Your UserName"
                className="host-login-input"
                value={hoster.username}
                name="username"
                onChange={inputdata}
                required
              />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="host-login-input"
                value={hoster.password}
                name="password"
                onChange={inputdata}
                required
              />
              <button type="submit" className="host-login-button">Submit</button>
            </form> 
             <div className='host-tag'>
             <strong><Link className='tag-link' to={'/HostForm'}>Register</Link></strong>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HostLogin;
