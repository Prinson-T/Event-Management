import React, { useState } from 'react'
import './HostForm.css'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function HostForm() {
  const [host, setHost] = useState({
    name: "",
    username: "",
    email: "",
    number:"",
    address:"",
    password: "",
    company: "",
    role:"ROLE_HOST"
  })

  const navigate = useNavigate();

  const inputData = (e) => {
    setHost({ ...host, [e.target.name]: e.target.value });
  };

  const saveData = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/userDetails/Register', host)
      .then((result) => {
        console.log(result.data);
        navigate('/hostLogin')

      })
      .catch((error) => {
        console.log(error);
        alert(error?.response?.data?.message)


      });
  }
  return (
    <div>
      <Navbar />
      <div className="background-host ">
        <div className="overlay-content-host">
          <form className="form-container-host">
            <h4 className='own-account'>Create Your  Account</h4>
            <input type="text" className='input-host' placeholder="Enter Name" value={host.name} name="name" onChange={inputData} />
            <input type="text" className='input-host' placeholder="Enter UserName" value={host.username} name="username" onChange={inputData} />
            <input type="text" className='input-host' placeholder="Enter Email" value={host.email} name="email" onChange={inputData} />
            <input type="number" className='input-host' placeholder="Enter Number" value={host.number} name="number" onChange={inputData} />
            <input type="text" className='input-host' placeholder="Enter Address" value={host.address} name="address" onChange={inputData} />
            <input type="password" className='input-host' placeholder="Enter Password" value={host.password} name="password" onChange={inputData} />
            <input type="text" className='input-host' placeholder="Enter Company Name" value={host.company} name="company" onChange={inputData} />
            <button className='button-host' onClick={saveData}>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HostForm