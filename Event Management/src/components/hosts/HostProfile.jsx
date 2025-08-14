import React from "react";
import "./HostProfile.css";
import HostSidebar from "./HostSidebar";
import hostImg from "../../assets/welcome.jpg";

function HostProfile() {
  return (
    <div className="host-full-page">
      <div className="host-profile-wrapper">
        <HostSidebar />

        <div className="host-profile-content">
          {/* Profile Header */}
          <div className="host-profile-header">
            <div className="host-avatar-large">
              <img src={hostImg} alt="Host" />
            </div>
            <div className="host-header-info">
              <h2>John Doe</h2>
              <p>host@example.com</p>
              <p>Event Organizer </p>
            </div>
          </div>

          {/* Profile Form */}
          <div className="host-profile-form">
            <h3>Profile Details</h3>

            <div className="host-form-row">
              <div className="host-form-group">
                <label className="host-form-group-label">Full Name</label>
                <input type="text" className="host-form-group-input" />
              </div>
              <div className="host-form-group">
                <label className="host-form-group-label">Email</label>
                <input type="email" className="host-form-group-input"/>
              </div>
            </div>

            <div className="host-form-row">
              <div className="host-form-group">
                <label className="host-form-group-label">Phone</label>
                <input type="text"  className="host-form-group-input"/>
              </div>
              <div className="host-form-group">
                <label className="host-form-group-label">Address</label>
                <input type="text" className="host-form-group-input"/>
              </div>
            </div>

            <div className="host-form-row">
              <div className="host-form-group">
                <label className="host-form-group-label">Location</label>
                <input type="text" className="host-form-group-input"/>
              </div>
              <div className="host-form-group">
                <label className="host-form-group-label">hello</label>
                <input type="text" value=""  className="host-form-group-input"/>
              </div>
            </div>

            <div className="host-button-div">
              <button className="host-profile-save-btn">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostProfile;
