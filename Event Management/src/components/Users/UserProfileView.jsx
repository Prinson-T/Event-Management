import React, { useEffect, useState } from "react";
import "./UserProfileView.css";
import UserSideBar from "./UserSideBar";
import userimg from "../../assets/welcome.jpg";
import hostImg from "../../assets/welcome.jpg";

import Footer from "../common/Footer";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import axios from "axios";

function UserProfileView() {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    address:"",
    number: "",
    bio: ""
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  const token = localStorage.getItem("token");
  const userid = localStorage.getItem("userId");

  useEffect(() => {
    if (!token) return;

    axios
      .get(`http://localhost:8080/userDetails/users/${userid}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        setUser(result.data);
        setFormData(result.data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, [userid, token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updatedData = {
      name: formData.name,
      number: formData.number,
      address:formData.address,
      email:formData.email,
      bio: formData.bio,
    };

    axios
      .put(`http://localhost:8080/userDetails/list/${userid}`, updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser({ ...user, ...updatedData });
        setEditMode(false);
      })
      .catch((err) => console.error("Error updating profile:", err));
  };

  const handleCancel = () => {
    setFormData(user);
    setEditMode(false);
  };

  return (
    <div className="user-full-page">
      <div className="user-profile-wrapper">

        <UserSideBar />
        <div className="user-profile-content">
          <div className="user-profile-header">
            <Avatar
              alt={user?.name || "User"}
              src={hostImg}
              sx={{ width: 100, height: 100 }}
              className="user-avatar-large"
            />
            <div className="user-header-info">
              <h2>{user?.name}</h2>
              <p>{user?.username}</p>
            </div>
          </div>

             {/* Profile Details */}
          <div className="user-profile-details">
            <h3>Profile Details</h3>

            <div className="user-detail-grid">
              {editMode ? (
                <>
                  <label>
                    Full Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                  </label>

                  <label>
                    Address:
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                  </label>

                   <label>
                    Email:
                    <input type="text" name="email" value={formData.email} onChange={handleChange} />
                  </label>

                
                  <label>
                    Number:
                    <input type="number" name="number" value={formData.number} onChange={handleChange} />
                  </label>

                </>
              ) : (
                <>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Adderss:</strong> {user.address}</p>
                  <p><strong>Number:</strong> {user.number}</p>
                  {/* <p><strong>Bio:</strong> {host.bio || "No bio available"}</p> */}
                </>
              )}
            </div>

            <div className="user-button-div">
              {editMode ? (
                <>
                  <button className="user-profile-save-btn" onClick={handleSave}>Save</button>
                  <button className="user-profile-cancel-btn" onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <button className="user-profile-edit-btn" onClick={() => setEditMode(true)}>Edit Profile</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileView;
