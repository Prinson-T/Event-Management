import React, { useEffect, useState } from "react";
import "./UserProfileUpdate.css";
import UserSideBar from "./UserSideBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function UserProfileUpdate() {
  const navigate = useNavigate()
  const { id } = useParams();
  const [profile, setUserProfile] = useState({
    name: "",
    email: "",
  })

  const upadateProfile = (e) => {
    setUserProfile({ ...profile, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    console.log(id);
    axios.get("http://localhost:8080/employee/users/" + id)
      .then((result) => {
        setUserProfile(result.data)
        console.log(result);
      })
      .catch((error) => {
        console.log(error);

      })

  }, [])


  const updatedetails = () => {
    axios.put(`http://localhost:8080/employee/list/${id}`, profile)
      .then((result) => {
        console.log(result)
        navigate('/userprofileview')
      })
      .catch((error) => {
        console.log(error);

      })
  };
  return (
    <div className="profile-container">
      <UserSideBar/>
      {/* Avatar + Name */}
      <div className="profile-card">
        <div className="avatar"></div>
        <h2></h2>
        <p className="email"></p>
      </div>

      {/* Editable Form */}
      <div className="profile-form">
        <h3>Personal Information</h3>
        <label>Full Name</label>
        <input type="text" className="input-user"  value={profile.name} name="name" onChange={upadateProfile}  />
            <input type="email" className="input-user"  value={profile.email} name="email" onChange={upadateProfile}  />
            <input type="text" className="input-user"  value={profile.number} name="number" onChange={upadateProfile} />
            <input type="password" className="input-user" value={profile.password} name="password" onChange={upadateProfile}  />
            <input type="text" className="input-user" value={profile.address} name="address" onChange={upadateProfile}  />
            <input type="text" className="input-user" value={profile.location} name="location" onChange={upadateProfile}  />

        <button onClick={updatedetails}>Save Changes</button>
      </div>
    </div>
  );
}

export default UserProfileUpdate;
