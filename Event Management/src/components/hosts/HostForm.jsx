import React, { useState } from 'react'
import './HostForm.css'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer';
import { Link } from 'react-router-dom';

function HostForm() {
  const [host, setHost] = useState({
    name: "",
    email: "",
    password: "",
    gstnumber: ""
  })

  const inputData = (e) => {
    setHost({ ...host, [e.target.name]: e.target.value });
  };

  const saveData = (e) => {
    axios.get('http://localhost:8080/employee/register', host)
      .then((result) => {
        console.log(result.data);

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
            <h4 className='own-account'>Create Your Own Account</h4>
            <input type="text" className='input-host' placeholder="name" value={host.name} name="name" onChange={inputData} />
            <input type="text" className='input-host' placeholder="email" value={host.email} name="email" onChange={inputData} />
            <input type="text" className='input-host' placeholder="password" value={host.password} name="password" onChange={inputData} />
            <input type="text" className='input-host' placeholder="gstnumber" value={host.gstnumber} name="gstnumber" onChange={inputData} />
            <button className='button-host' onClick={saveData}>Submit</button>
            <div className='host-tag'>
              <Link className='tag-link' to={'/hostRegister'}>Log in</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HostForm