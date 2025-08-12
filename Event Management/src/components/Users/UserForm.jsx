import axios from "axios";
import { useState } from "react";
import './UserForm.css';
import Footer from "../common/Footer";
import Navbar from '../common/Navbar';
import { useNavigate } from "react-router-dom";

function UserForm() {
  const [register, setRegister] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    address: "",
    location: ""
  });

  const navigate = useNavigate();

  const inputData = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const saveData = (e) => {
    e.preventDefault(); 
    axios.post("http://localhost:8080/user/register", register)
      .then((result) => {
        console.log("User registered:", result.data);
        navigate("/UserLogin");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="background-user">
        <div className="overlay-content-user">
          <form className="form-container-user" onSubmit={saveData}>
            <h3 className="make-your">Make Your Account</h3>
            <input type="text" className="input-user" placeholder="Name" value={register.name} name="name" onChange={inputData} required />
            <input type="email" className="input-user" placeholder="Email" value={register.email} name="email" onChange={inputData} required />
            <input type="text" className="input-user" placeholder="Number" value={register.number} name="number" onChange={inputData} required />
            <input type="password" className="input-user" placeholder="Password" value={register.password} name="password" onChange={inputData} required />
            <input type="text" className="input-user" placeholder="Address" value={register.address} name="address" onChange={inputData} required />
            <input type="text" className="input-user" placeholder="Location" value={register.location} name="location" onChange={inputData} required />
            <button type="submit" className="input-button">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserForm;
