import React, { useEffect, useState } from "react";
import "./HostProfile.css";
import HostSidebar from "./HostSidebar";
import hostImg from "../../assets/welcome.jpg";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { useParams } from "react-router-dom";

function HostProfile() {
  const { id } = useParams();
  const [host, setHost] = useState({
    name: "",
    username: "",
    email: "",
    number:"",
    company: "",
    address:"",
    bio: ""
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(host);

  const token = localStorage.getItem("token");
  const userid = localStorage.getItem("userId");

  useEffect(() => {
    if (!token) return;

    axios.get(`http://localhost:8080/userDetails/users/${userid}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((result) => {
        setHost(result.data);
        setFormData(result.data);
      })
      .catch((error) => console.error("Error fetching user data:", error));
  }, [userid, token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Only send editable fields
    const updatedData = {
      name: formData.name,
      company: formData.company,
      number:formData.number,
      address:formData.address,
      bio: formData.bio
    };

    axios.put(`http://localhost:8080/userDetails/list/${userid}`, updatedData, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => {
        setHost({ ...host, ...updatedData });
        setEditMode(false);
      })
      .catch((err) => console.error("Error updating profile:", err));
  };

  const handleCancel = () => {
    setFormData(host);
    setEditMode(false);
  };

  return (
    <div className="host-full-page">
      <div className="host-profile-wrapper">
        <HostSidebar />

        <div className="host-profile-content">
          {/* Profile Header */}
          <div className="host-profile-header">
            <Avatar
              alt={host?.name || "User"}
              src={hostImg}
              sx={{ width: 100, height: 100 }}
              className="host-avatar-large"
            />
            <div className="host-header-info">
              <h2>{host?.name}</h2>
              <p>{host?.username}</p>
            </div>
          </div>

          {/* Profile Details */}
          <div className="host-profile-details">
            <h3>Profile Details</h3>

            <div className="host-detail-grid">
              {editMode ? (
                <>
                  <label>
                    Full Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                  </label>

                  <label>
                    Number :
                    <input type="number" name="number" value={formData.number} onChange={handleChange} />
                  </label>

                   <label>
                    Address :
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                  </label>

                  <label>
                    Company Name:
                    <input type="text" name="company" value={formData.company} onChange={handleChange} />
                  </label>


                </>
              ) : (
                <>
                  <p><strong>Email:</strong> {host.email}</p>
                  <p><strong>Number:</strong> {host.number}</p>
                  <p><strong>Address:</strong> {host.address}</p>
                  <p><strong>Company Name:</strong> {host.company}</p>
                  {/* <p><strong>Bio:</strong> {host.bio || "No bio available"}</p> */}
                </>
              )}
            </div>

            <div className="host-button-div">
              {editMode ? (
                <>
                  <button className="host-profile-save-btn" onClick={handleSave}>Save</button>
                  <button className="host-profile-cancel-btn" onClick={handleCancel}>Cancel</button>
                </>
              ) : (
                <button className="host-profile-edit-btn" onClick={() => setEditMode(true)}>Edit Profile</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostProfile;
