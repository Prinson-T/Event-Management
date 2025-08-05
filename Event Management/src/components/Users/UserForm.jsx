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
    setRegister({ ...first, [e.target.name]: e.target.value });
  };

  const saveData = (e) => {
    e.preventDefault(); // prevent form submission reload
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
      <div className="background-container ">
        <div className="overlay-content">
          <form className="form-container">
            <input type="text" placeholder="name" value={register.name} name="name" onChange={inputData} />
            <input type="text" placeholder="email" value={register.email} name="email" onChange={inputData} />
            <input type="text" placeholder="number" value={register.number} name="number" onChange={inputData} />
            <input type="text" placeholder="password" value={register.password} name="password" onChange={inputData} />
            <input type="text" placeholder="address" value={register.address} name="address" onChange={inputData} />
            <input type="text" placeholder="location" value={register.location} name="location" onChange={inputData} />
            <button onClick={saveData}>Submit</button>
            <Link className="login-tag">Log in</Link>
          </form>
        </div>

      </div>
      <Footer />

    </div>
  );
}

export default UserForm;
