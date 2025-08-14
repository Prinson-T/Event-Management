import React, { useState } from 'react';
import './UserLogin.css';
import userimg from '../../assets/userwelcome.jpg';
import Navbar from '../common/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../common/Footer';
import axios from 'axios';

function UserLogin() {
  const navigate = useNavigate();


  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const inputdata = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const usersubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/user/login", user)
      .then((result) => {
        console.log(result.data);
        navigate("/userDashboard")


      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="container-fluid gx-0">
        <div className="row gx-0">
           <div className="col-12 col-md-6 ">
            <img className="img-user" src={userimg} alt="" />
          </div>
           <div className="col-12 col-md-6 user-login-div">
            <h4 className='user-login-h2'>Login Your Account </h4>
            <form className='user-login-form '>
              <input type="text" placeholder='Enter Your UserName' className='user-login-input' value={user.username} name='username' onChange={inputdata} />
              <input type="password" placeholder='Enter Your Password' className='user-login-input' value={user.password} name='password' onChange={inputdata} />
              <button className='user-login-button' onClick={usersubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserLogin;
