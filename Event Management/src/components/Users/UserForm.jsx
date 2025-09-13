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
    username:"",
    address:"",
    email: "",
    password: "",

  });

  const navigate = useNavigate();

  const inputData = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const saveData = (e) => {
    e.preventDefault(); 
    axios.post("http://localhost:8080/userDetails/Register", register)
      .then((result) => {
        console.log(result.data);
        navigate("/UserLogin");
      })
      .catch((error) => {
        console.error(error);
        alert(error?.response?.data?.message)
      });
  };

  return (
    <div>
      <Navbar />
      <div className="background-user">
        <div className="overlay-content-user">
          <form className="form-container-user" >
            <h3 className="make-your" >Create Your Account</h3>
            <input type="text" className="input-user" placeholder="Name" value={register.name} name="name" onChange={inputData}  />
            <input type="text" className="input-user" placeholder="UserName" value={register.username} name="username" onChange={inputData}  />
            <input type="email" className="input-user" placeholder="Email" value={register.email} name="email" onChange={inputData}  />
            <input type="text" className="input-user" placeholder="Number" value={register.number} name="number" onChange={inputData}  />
            <input type="text" className="input-user" placeholder="Address" value={register.address} name="address" onChange={inputData}  />
            <input type="password" className="input-user" placeholder="Password" value={register.password} name="password" onChange={inputData}  />
            <button type="submit" className="input-button" onClick={saveData}>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserForm;
