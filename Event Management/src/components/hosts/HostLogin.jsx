import React, { useState } from 'react';
import './HostLogin.css';
import hostimg from '../../assets/welcome.jpg';
import Navbar from '../common/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from '../common/Footer';

function HostLogin() {
    const navigate = useNavigate();

  const [hoster, setHoster] = useState({
    email: "",
    password: ""  
  });

  const inputdata = (e) => {
    setHoster({ ...hoster, [e.target.name]: e.target.value });
  };

  const hostsubmit = (e) => {
    axios.post("http://localhost:8080/employee/login", hoster)
      .then((result) => {
        console.log(result.data);
        navigate("/hostDashboard")

      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar/>
      <div className="container-fluid gx-0">
        <div className="row gx-0">
          <div className="col-12 col-md-6 ">
            <img className="img-host" src={hostimg} alt="" />

          </div>
          <div className="col-12 col-md-6 host-login-div">
            <h4 className='host-login-h2'>Login Your Account </h4>
            <form className='host-login-form '>
              <input type="text" placeholder='Enter Your Email' className='host-login-input' value={hoster.email} name='email'onChange={inputdata}/>
              <input type="password" placeholder='Enter Your Password' className='host-login-input' value={hoster.password} name='password' onChange={inputdata}/>
              <button className='host-login-button' onClick={hostsubmit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HostLogin;
