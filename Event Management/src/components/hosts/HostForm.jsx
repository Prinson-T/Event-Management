import React, { useState } from 'react'
import './HostForm.css'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function HostForm() {
  const [host, setHost] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  })

    const navigate = useNavigate();

  const inputData = (e) => {
    setHost({ ...host, [e.target.name]: e.target.value });
  };

  const saveData = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/user/register', host)
      .then((result) => {
        console.log(result.data);
        navigate('/hostLogin')

      })
      .catch((error) => {
        console.log(error);

      });
  }
  return (
    <div>
      <Navbar />
      <div className="background-host ">
        <div className="overlay-content-host">
          <form className="form-container-host">
            <h4 className='own-account'>Create Your  Account</h4>
            <input type="text" className='input-host' placeholder="Name" value={host.name} name="name" onChange={inputData} />
            <input type="text" className='input-host' placeholder="UserName" value={host.username} name="username" onChange={inputData} />
            <input type="text" className='input-host' placeholder="Email" value={host.email} name="email" onChange={inputData} />
            <input type="password" className='input-host' placeholder="Password" value={host.password} name="password" onChange={inputData} />
            <button className='button-host' onClick={saveData}>Submit</button>
            <div className='host-tag'>
              <Link className='tag-link' to={'/hostLogin'}>Log in</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HostForm