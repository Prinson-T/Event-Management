import axios from "axios";
import { useState } from "react";
import './UserForm.css';
import Footer from "../common/Footer";
import Navbar from '../common/Navbar';
import { Link } from "react-router-dom";




function UserForm() {
  const [register, setRegister] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    address: "",
    location: ""    
  });

  const inputData = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const saveData = (e) => {
    axios.post("http://localhost:8080/employee/register", register)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="background-user ">
        <div className="overlay-content-user">
          <form className="form-container-user">
            <h3 className="make-your">Make Your Account</h3>
            <input type="text" className="input-user" placeholder="name" value={register.name} name="name" onChange={inputData} />
            <input type="text" className="input-user" placeholder="email" value={register.email} name="email" onChange={inputData} />
            <input type="text" className="input-user" placeholder="number" value={register.number} name="number" onChange={inputData} />
            <input type="text" className="input-user" placeholder="password" value={register.password} name="password" onChange={inputData} />
            <input type="text" className="input-user" placeholder="address" value={register.address} name="address" onChange={inputData} />
            <input type="text" className="input-user" placeholder="location" value={register.location} name="location" onChange={inputData} />
            <button className="input-button" onClick={saveData}>Submit</button>
          </form>
        </div>

      </div>
      <Footer />

    </div>
  );
}

export default UserForm;
